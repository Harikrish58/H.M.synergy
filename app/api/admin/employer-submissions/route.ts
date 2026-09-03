import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

type AdminUser = {
  user_id: string;
  role: string;
};

type SubmissionStatus =
  | "pending"
  | "approved"
  | "rejected";

function getEnvironmentVariables() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabasePublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  const supabaseServiceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (
    !supabaseUrl ||
    !supabasePublishableKey ||
    !supabaseServiceRoleKey
  ) {
    throw new Error(
      "Supabase server environment variables are missing.",
    );
  }

  return {
    supabaseUrl,
    supabasePublishableKey,
    supabaseServiceRoleKey,
  };
}

/* =========================================================
   SUPABASE ADMIN CLIENT
   ========================================================= */

function getAdminClient() {
  const {
    supabaseUrl,
    supabaseServiceRoleKey,
  } = getEnvironmentVariables();

  return createClient(
    supabaseUrl,
    supabaseServiceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

/* =========================================================
   AUTHENTICATE ADMIN
   ========================================================= */

async function getAuthenticatedAdmin(
  request: Request,
) {
  try {
    const {
      supabaseUrl,
      supabasePublishableKey,
    } = getEnvironmentVariables();

    const authorization =
      request.headers.get("authorization");

    /*
     * The admin dashboard sends:
     *
     * Authorization: Bearer <access_token>
     */
    if (
      !authorization ||
      !authorization.startsWith("Bearer ")
    ) {
      return {
        user: null,
        error: "Unauthorized.",
        status: 401,
      };
    }

    const accessToken = authorization
      .slice("Bearer ".length)
      .trim();

    if (!accessToken) {
      return {
        user: null,
        error: "Unauthorized.",
        status: 401,
      };
    }

    /*
     * Public Supabase client is used to verify the
     * authenticated user's access token.
     */
    const supabaseAuth = createClient(
      supabaseUrl,
      supabasePublishableKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      },
    );

    const {
      data: { user },
      error: userError,
    } =
      await supabaseAuth.auth.getUser(
        accessToken,
      );

    if (userError || !user) {
      console.error(
        "Admin authentication error:",
        userError?.message,
      );

      return {
        user: null,
        error:
          "Your admin session is invalid or has expired.",
        status: 401,
      };
    }

    /*
     * Now use the service-role client to check whether
     * the authenticated user is registered as an admin.
     */
    const supabaseAdmin = getAdminClient();

    const {
      data: adminUser,
      error: adminError,
    } = await supabaseAdmin
      .from("admin_users")
      .select("user_id, role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle<AdminUser>();

    if (adminError) {
      console.error(
        "Admin user lookup error:",
        adminError,
      );

      return {
        user: null,
        error:
          "Unable to verify administrator access.",
        status: 500,
      };
    }

    if (!adminUser) {
      return {
        user: null,
        error:
          "Forbidden. You do not have administrator access.",
        status: 403,
      };
    }

    return {
      user,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error(
      "Admin authentication exception:",
      error,
    );

    return {
      user: null,
      error:
        error instanceof Error
          ? error.message
          : "Unable to authenticate administrator.",
      status: 500,
    };
  }
}

/* =========================================================
   GET
   Load employer submissions
   ========================================================= */

export async function GET(request: Request) {
  try {
    /*
     * 1. Authenticate admin using Bearer token.
     */
    const authentication =
      await getAuthenticatedAdmin(request);

    if (authentication.error) {
      return NextResponse.json(
        {
          error: authentication.error,
        },
        {
          status: authentication.status,
        },
      );
    }

    /*
     * 2. Read optional status filter.
     */
    const { searchParams } =
      new URL(request.url);

    const status =
      searchParams.get("status");

    /*
     * 3. Use service-role client on server.
     */
    const supabaseAdmin =
      getAdminClient();

    let query = supabaseAdmin
      .from("employer_job_submissions")
      .select("*", {
        count: "exact",
      })
      .order("created_at", {
        ascending: false,
      });

    /*
     * Optional filtering:
     *
     * /api/admin/employer-submissions?status=pending
     */
    if (
      status === "pending" ||
      status === "approved" ||
      status === "rejected"
    ) {
      query = query.eq(
        "status",
        status,
      );
    }

    const {
      data: submissions,
      error: submissionsError,
      count,
    } = await query;

    if (submissionsError) {
      console.error(
        "Employer submissions query error:",
        submissionsError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to load employer submissions.",
          details:
            submissionsError.message,
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      submissions:
        submissions ?? [],
      total: count ?? 0,
    });
  } catch (error) {
    console.error(
      "GET employer submissions API error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================================================
   PATCH
   Approve / Reject employer submission
   ========================================================= */

export async function PATCH(
  request: Request,
) {
  try {
    /*
     * 1. Authenticate admin.
     */
    const authentication =
      await getAuthenticatedAdmin(request);

    if (authentication.error) {
      return NextResponse.json(
        {
          error: authentication.error,
        },
        {
          status: authentication.status,
        },
      );
    }

    /*
     * 2. Read JSON body.
     */
    let body: {
      id?: unknown;
      status?: unknown;
      adminNotes?: unknown;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error:
            "Invalid JSON request.",
        },
        {
          status: 400,
        },
      );
    }

    const id =
      typeof body.id === "string"
        ? body.id.trim()
        : "";

    const status =
      body.status;

    const adminNotes =
      typeof body.adminNotes ===
      "string"
        ? body.adminNotes.trim()
        : null;

    /*
     * 3. Validate submission ID.
     */
    if (!id) {
      return NextResponse.json(
        {
          error:
            "Submission ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * 4. Validate status.
     */
    if (
      status !== "approved" &&
      status !== "rejected"
    ) {
      return NextResponse.json(
        {
          error:
            'Invalid status. Status must be either "approved" or "rejected".',
        },
        {
          status: 400,
        },
      );
    }

    /*
     * 5. Service-role client.
     */
    const supabaseAdmin =
      getAdminClient();

    /*
     * 6. Verify submission exists.
     */
    const {
      data: existingSubmission,
      error: findError,
    } = await supabaseAdmin
      .from("employer_job_submissions")
      .select("id, status")
      .eq("id", id)
      .maybeSingle();

    if (findError) {
      console.error(
        "Find submission error:",
        findError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to find the employer submission.",
          details:
            findError.message,
        },
        {
          status: 500,
        },
      );
    }

    if (!existingSubmission) {
      return NextResponse.json(
        {
          error:
            "Employer submission not found.",
        },
        {
          status: 404,
        },
      );
    }

    /*
     * 7. Prevent unnecessary updates.
     */
    if (
      existingSubmission.status ===
        status
    ) {
      return NextResponse.json(
        {
          error:
            `This submission is already ${status}.`,
        },
        {
          status: 400,
        },
      );
    }

    /*
     * 8. Update submission.
     */
    const reviewedAt =
      new Date().toISOString();

    const reviewedBy =
      authentication.user?.email ??
      authentication.user?.id ??
      "admin";

    const {
      data: updatedSubmission,
      error: updateError,
    } =
      await supabaseAdmin
        .from("employer_job_submissions")
        .update({
          status:
            status as SubmissionStatus,

          admin_notes:
            adminNotes || null,

          reviewed_at:
            reviewedAt,

          reviewed_by:
            reviewedBy,

          updated_at:
            reviewedAt,
        })
        .eq("id", id)
        .select("*")
        .single();

    if (updateError) {
      console.error(
        "Update submission error:",
        updateError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to update the submission.",
          details:
            updateError.message,
        },
        {
          status: 500,
        },
      );
    }

    /*
     * 9. Return updated submission.
     */
    return NextResponse.json({
      success: true,

      message:
        status === "approved"
          ? "Submission approved successfully."
          : "Submission rejected successfully.",

      submission:
        updatedSubmission,
    });
  } catch (error) {
    console.error(
      "PATCH employer submissions API error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Internal server error.",
      },
      {
        status: 500,
      },
    );
  }
}