import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(
            ({ name, value, options }) => {
              response.cookies.set(
                name,
                value,
                options,
              );
            },
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  /*
   * Admin login is public.
   */
  if (pathname === "/admin/login") {
    return response;
  }

  /*
   * Protect the admin dashboard.
   */
  if (pathname.startsWith("/admin")) {
    if (!user) {
      const loginUrl = request.nextUrl.clone();

      loginUrl.pathname = "/admin/login";
      loginUrl.searchParams.set(
        "redirect",
        pathname,
      );

      return NextResponse.redirect(loginUrl);
    }

    const { data: admin, error } =
      await supabase
        .from("admin_users")
        .select("user_id, role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

    if (error) {
      console.error(
        "[proxy] Admin verification error:",
        error,
      );
    }

    if (!admin) {
      await supabase.auth.signOut();

      const loginUrl = request.nextUrl.clone();

      loginUrl.pathname = "/admin/login";
      loginUrl.searchParams.set(
        "error",
        "unauthorized",
      );

      return NextResponse.redirect(loginUrl);
    }
  }

  /*
   * Protect admin API routes.
   *
   * The proxy has already verified the Supabase
   * session and admin_users record.
   */
  if (pathname.startsWith("/api/admin")) {
    if (!user) {
      return NextResponse.json(
        {
          error:
            "Unauthorized. Please log in.",
        },
        { status: 401 },
      );
    }

    const { data: admin, error } =
      await supabase
        .from("admin_users")
        .select("user_id, role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

    if (error) {
      console.error(
        "[proxy] Admin API verification error:",
        error,
      );

      return NextResponse.json(
        {
          error:
            "Unable to verify admin permissions.",
        },
        { status: 500 },
      );
    }

    if (!admin) {
      return NextResponse.json(
        {
          error:
            "Forbidden. You do not have administrator access.",
        },
        { status: 403 },
      );
    }

    /*
     * Pass the verified user ID into the request.
     *
     * The API route can use this to perform its
     * service-role admin verification.
     */
    const requestHeaders = new Headers(
      request.headers,
    );

    requestHeaders.set(
      "x-admin-user-id",
      user.id,
    );

    response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
};