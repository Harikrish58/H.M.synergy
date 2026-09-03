import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type JobStatus = "draft" | "published" | "closed";

type CreateJobPayload = {
  sourceSubmissionId: string;

  code: string;
  slug: string;
  status: JobStatus;

  titleEn: string;
  titlePl: string;
  titleUa: string;

  category: string;

  locationEn: string;
  locationPl: string;
  locationUa: string;

  workersNeeded: number;
  employmentType: string;
  salary: string;
  startDate: string;

  descriptionEn: string;
  descriptionPl: string;
  descriptionUa: string;

  responsibilitiesEn: string[];
  responsibilitiesPl: string[];
  responsibilitiesUa: string[];

  requirementsEn: string[];
  requirementsPl: string[];
  requirementsUa: string[];

  benefitsEn: string[];
  benefitsPl: string[];
  benefitsUa: string[];

  workingHours: string;
  shifts: string;
  overtime: string;
  weekendWork: string;
  accommodation: string;
  transportation: string;

  experience: string;
  education: string;
  languageRequirements: string;
  otherRequirements: string;

  companyName: string;
};

/* =========================================================
   ADMIN CLIENT
   ========================================================= */

function getAdminClient() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Supabase server environment variables are missing.",
    );
  }

  return createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}

/* =========================================================
   VERIFY ADMIN
   ========================================================= */

async function verifyAdmin() {
  /*
   * First get the authenticated user from the
   * current Supabase browser/server session.
   */
  const supabaseServer =
    await createSupabaseServerClient();

  const {
    data: { user },
    error: userError,
  } = await supabaseServer.auth.getUser();

  if (userError || !user) {
    console.error(
      "[admin/jobs] Authentication failed:",
      userError,
    );

    return {
      user: null,
      error: NextResponse.json(
        {
          error:
            "Unauthorized. Please log in.",
        },
        { status: 401 },
      ),
    };
  }

  /*
   * Verify the user through the service-role
   * client so RLS on admin_users cannot interfere
   * with the authorization check.
   */
  const supabaseAdmin = getAdminClient();

  const {
    data: admin,
    error: adminError,
  } = await supabaseAdmin
    .from("admin_users")
    .select("user_id, role")
    .eq("user_id", user.id)
    .eq("role", "admin")
    .maybeSingle();

  if (adminError) {
    console.error(
      "[admin/jobs] Admin verification error:",
      adminError,
    );

    return {
      user: null,
      error: NextResponse.json(
        {
          error:
            "Unable to verify admin permissions.",
          details: adminError.message,
        },
        { status: 500 },
      ),
    };
  }

  if (!admin) {
    console.error(
      "[admin/jobs] Authenticated user is not registered as admin:",
      user.id,
    );

    return {
      user: null,
      error: NextResponse.json(
        {
          error:
            "Forbidden. You do not have administrator access.",
        },
        { status: 403 },
      ),
    };
  }

  return {
    user,
    error: null,
  };
}

/* =========================================================
   HELPERS
   ========================================================= */

function cleanArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is string =>
        typeof item === "string",
    )
    .map((item) => item.trim())
    .filter(Boolean);
}

function cleanString(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function isValidStatus(
  value: unknown,
): value is JobStatus {
  return (
    value === "draft" ||
    value === "published" ||
    value === "closed"
  );
}

/* =========================================================
   POST
   Create job
   ========================================================= */

export async function POST(request: Request) {
  try {
    // --------------------------------------------------
    // 1. Verify admin
    // --------------------------------------------------

    const { user, error } =
      await verifyAdmin();

    if (error) {
      return error;
    }

    // --------------------------------------------------
    // 2. Read request
    // --------------------------------------------------

    let body: CreateJobPayload;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error:
            "Invalid JSON request.",
        },
        { status: 400 },
      );
    }

    // --------------------------------------------------
    // 3. Clean values
    // --------------------------------------------------

    const sourceSubmissionId =
      cleanString(
        body.sourceSubmissionId,
      );

    const code =
      cleanString(body.code);

    const slug =
      cleanString(body.slug);

    const status =
      body.status;

    const titleEn =
      cleanString(body.titleEn);

    const titlePl =
      cleanString(body.titlePl);

    const titleUa =
      cleanString(body.titleUa);

    const category =
      cleanString(body.category);

    const locationEn =
      cleanString(body.locationEn);

    const locationPl =
      cleanString(body.locationPl);

    const locationUa =
      cleanString(body.locationUa);

    const workersNeeded =
      Number(body.workersNeeded);

    const employmentType =
      cleanString(
        body.employmentType,
      );

    const salary =
      cleanString(body.salary);

    const startDate =
      cleanString(body.startDate);

    const descriptionEn =
      cleanString(
        body.descriptionEn,
      );

    const descriptionPl =
      cleanString(
        body.descriptionPl,
      );

    const descriptionUa =
      cleanString(
        body.descriptionUa,
      );

    const responsibilitiesEn =
      cleanArray(
        body.responsibilitiesEn,
      );

    const responsibilitiesPl =
      cleanArray(
        body.responsibilitiesPl,
      );

    const responsibilitiesUa =
      cleanArray(
        body.responsibilitiesUa,
      );

    const requirementsEn =
      cleanArray(
        body.requirementsEn,
      );

    const requirementsPl =
      cleanArray(
        body.requirementsPl,
      );

    const requirementsUa =
      cleanArray(
        body.requirementsUa,
      );

    const benefitsEn =
      cleanArray(
        body.benefitsEn,
      );

    const benefitsPl =
      cleanArray(
        body.benefitsPl,
      );

    const benefitsUa =
      cleanArray(
        body.benefitsUa,
      );

    const workingHours =
      cleanString(
        body.workingHours,
      );

    const shifts =
      cleanString(body.shifts);

    const overtime =
      cleanString(body.overtime);

    const weekendWork =
      cleanString(
        body.weekendWork,
      );

    const accommodation =
      cleanString(
        body.accommodation,
      );

    const transportation =
      cleanString(
        body.transportation,
      );

    const experience =
      cleanString(body.experience);

    const education =
      cleanString(body.education);

    const languageRequirements =
      cleanString(
        body.languageRequirements,
      );

    const otherRequirements =
      cleanString(
        body.otherRequirements,
      );

    const companyName =
      cleanString(body.companyName);

    // --------------------------------------------------
    // 4. Validate
    // --------------------------------------------------

    if (!sourceSubmissionId) {
      return NextResponse.json(
        {
          error:
            "Source submission ID is required.",
        },
        { status: 400 },
      );
    }

    if (!code) {
      return NextResponse.json(
        {
          error:
            "Job code is required.",
        },
        { status: 400 },
      );
    }

    if (!slug) {
      return NextResponse.json(
        {
          error:
            "Job slug is required.",
        },
        { status: 400 },
      );
    }

    if (!isValidStatus(status)) {
      return NextResponse.json(
        {
          error:
            'Invalid job status. Use "draft", "published", or "closed".',
        },
        { status: 400 },
      );
    }

    if (
      !titleEn ||
      !titlePl ||
      !titleUa
    ) {
      return NextResponse.json(
        {
          error:
            "English, Polish and Ukrainian job titles are required.",
        },
        { status: 400 },
      );
    }

    if (!category) {
      return NextResponse.json(
        {
          error:
            "Job category is required.",
        },
        { status: 400 },
      );
    }

    if (
      !locationEn ||
      !locationPl ||
      !locationUa
    ) {
      return NextResponse.json(
        {
          error:
            "English, Polish and Ukrainian locations are required.",
        },
        { status: 400 },
      );
    }

    if (
      !Number.isInteger(
        workersNeeded,
      ) ||
      workersNeeded < 1
    ) {
      return NextResponse.json(
        {
          error:
            "Workers needed must be at least 1.",
        },
        { status: 400 },
      );
    }

    if (!employmentType) {
      return NextResponse.json(
        {
          error:
            "Employment type is required.",
        },
        { status: 400 },
      );
    }

    if (
      !descriptionEn ||
      !descriptionPl ||
      !descriptionUa
    ) {
      return NextResponse.json(
        {
          error:
            "English, Polish and Ukrainian descriptions are required.",
        },
        { status: 400 },
      );
    }

    // --------------------------------------------------
    // 5. Supabase admin client
    // --------------------------------------------------

    const supabaseAdmin =
      getAdminClient();

    // --------------------------------------------------
    // 6. Verify source submission
    // --------------------------------------------------

    const {
      data: sourceSubmission,
      error: sourceError,
    } =
      await supabaseAdmin
        .from(
          "employer_job_submissions",
        )
        .select("id, status")
        .eq(
          "id",
          sourceSubmissionId,
        )
        .maybeSingle();

    if (sourceError) {
      console.error(
        "[admin/jobs] Source submission lookup error:",
        sourceError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to verify the source submission.",
          details:
            sourceError.message,
        },
        { status: 500 },
      );
    }

    if (!sourceSubmission) {
      return NextResponse.json(
        {
          error:
            "Source employer submission was not found.",
        },
        { status: 404 },
      );
    }

    // --------------------------------------------------
    // 7. Only approved submissions
    // --------------------------------------------------

    if (
      sourceSubmission.status !==
      "approved"
    ) {
      return NextResponse.json(
        {
          error:
            "Only approved employer submissions can be converted into public jobs.",
        },
        { status: 400 },
      );
    }

    // --------------------------------------------------
    // 8. Prevent duplicate conversion
    // --------------------------------------------------

    const {
      data: existingJob,
      error: existingJobError,
    } =
      await supabaseAdmin
        .from("jobs")
        .select(
          "id, code, slug, status",
        )
        .eq(
          "source_submission_id",
          sourceSubmissionId,
        )
        .maybeSingle();

    if (existingJobError) {
      console.error(
        "[admin/jobs] Existing job lookup error:",
        existingJobError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to check whether this submission is already published.",
          details:
            existingJobError.message,
        },
        { status: 500 },
      );
    }

    if (existingJob) {
      return NextResponse.json(
        {
          error:
            "This employer submission has already been converted into a job.",
          job: existingJob,
        },
        { status: 409 },
      );
    }

    // --------------------------------------------------
    // 9. Prevent duplicate slug
    // --------------------------------------------------

    const {
      data: existingSlug,
      error: slugError,
    } =
      await supabaseAdmin
        .from("jobs")
        .select("id")
        .eq("slug", slug)
        .maybeSingle();

    if (slugError) {
      console.error(
        "[admin/jobs] Slug lookup error:",
        slugError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to check the job slug.",
          details:
            slugError.message,
        },
        { status: 500 },
      );
    }

    if (existingSlug) {
      return NextResponse.json(
        {
          error:
            "This URL slug is already in use.",
        },
        { status: 409 },
      );
    }

    // --------------------------------------------------
    // 10. Prevent duplicate code
    // --------------------------------------------------

    const {
      data: existingCode,
      error: codeError,
    } =
      await supabaseAdmin
        .from("jobs")
        .select("id")
        .eq("code", code)
        .maybeSingle();

    if (codeError) {
      console.error(
        "[admin/jobs] Code lookup error:",
        codeError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to check the job code.",
          details:
            codeError.message,
        },
        { status: 500 },
      );
    }

    if (existingCode) {
      return NextResponse.json(
        {
          error:
            "This job code is already in use.",
        },
        { status: 409 },
      );
    }

    // --------------------------------------------------
    // 11. Create job
    // --------------------------------------------------

    const publishedAt =
      status === "published"
        ? new Date().toISOString()
        : null;

    const {
      data: job,
      error: insertError,
    } =
      await supabaseAdmin
        .from("jobs")
        .insert({
          code,
          slug,
          status,

          title_en: titleEn,
          title_pl: titlePl,
          title_ua: titleUa,

          category,

          location_en: locationEn,
          location_pl: locationPl,
          location_ua: locationUa,

          workers_needed:
            workersNeeded,

          employment_type:
            employmentType,

          salary:
            salary || null,

          start_date:
            startDate || null,

          description_en:
            descriptionEn,

          description_pl:
            descriptionPl,

          description_ua:
            descriptionUa,

          responsibilities_en:
            responsibilitiesEn,

          responsibilities_pl:
            responsibilitiesPl,

          responsibilities_ua:
            responsibilitiesUa,

          requirements_en:
            requirementsEn,

          requirements_pl:
            requirementsPl,

          requirements_ua:
            requirementsUa,

          benefits_en:
            benefitsEn,

          benefits_pl:
            benefitsPl,

          benefits_ua:
            benefitsUa,

          working_hours:
            workingHours || null,

          shifts:
            shifts || null,

          overtime:
            overtime || null,

          weekend_work:
            weekendWork || null,

          accommodation:
            accommodation || null,

          transportation:
            transportation || null,

          experience:
            experience || null,

          education:
            education || null,

          language_requirements:
            languageRequirements ||
            null,

          other_requirements:
            otherRequirements ||
            null,

          company_name:
            companyName || null,

          source_submission_id:
            sourceSubmissionId,

          published_at:
            publishedAt,

          updated_at:
            new Date().toISOString(),
        })
        .select("*")
        .single();

    if (insertError) {
      console.error(
        "[admin/jobs] Job creation error:",
        insertError,
      );

      return NextResponse.json(
        {
          error:
            "Unable to create the job.",
          details:
            insertError.message,
        },
        { status: 500 },
      );
    }

    // --------------------------------------------------
    // 12. Response
    // --------------------------------------------------

    return NextResponse.json(
      {
        success: true,

        message:
          status === "published"
            ? "Job published successfully."
            : "Job saved as draft successfully.",

        job,

        createdBy:
          user?.email ??
          user?.id ??
          "admin",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "[admin/jobs] POST error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected server error occurred.",
      },
      { status: 500 },
    );
  }
}