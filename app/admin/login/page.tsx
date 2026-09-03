"use client";

import { FormEvent, useState } from "react";
import {
  LockKeyhole,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const supabase =
        createSupabaseBrowserClient();

      /*
       * Clear any stale browser session first.
       *
       * This is useful during development when the
       * Supabase project/session configuration has
       * changed.
       */
      await supabase.auth.signOut();

      const {
        data,
        error: loginError,
      } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (loginError) {
        console.error(
          "[admin-login] Login error:",
          loginError,
        );

        setLoading(false);
        setError(
          "Invalid email or password.",
        );

        return;
      }

      if (!data.session || !data.user) {
        console.error(
          "[admin-login] Login succeeded but no session was returned.",
        );

        setLoading(false);
        setError(
          "Login succeeded, but no authenticated session was created. Please try again.",
        );

        return;
      }

      console.log(
        "[admin-login] Authenticated:",
        data.user.email,
      );

      /*
       * Give the browser a moment to persist the
       * Supabase SSR session cookie before navigating.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 150),
      );

      window.location.assign("/admin");
    } catch (error) {
      console.error(
        "[admin-login] Unexpected login error:",
        error,
      );

      setLoading(false);

      setError(
        "Unable to sign in. Please try again.",
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F8FA] text-[#182230]">
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center justify-center px-6 py-16 sm:px-10">
        <section
          aria-labelledby="admin-login-title"
          className="w-full max-w-md border border-[#DCE4EB] bg-white"
        >
          <div className="border-b border-[#DCE4EB] px-7 py-8 sm:px-9">
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center bg-[#123B63]"
                aria-hidden="true"
              >
                <LockKeyhole
                  className="h-5 w-5 text-white"
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  H&M Synergy
                </p>

                <p className="mt-1 text-xs text-[#8A96A3]">
                  Administration
                </p>
              </div>
            </div>

            <h1
              id="admin-login-title"
              className="mt-8 text-3xl font-bold tracking-[-0.035em] text-[#0E2942]"
            >
              Admin Login
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#5B6878]">
              Sign in to manage employer vacancy
              submissions.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-7 py-8 sm:px-9"
          >
            {error && (
              <div
                role="alert"
                className="mb-6 flex gap-3 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                <AlertCircle
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />

                <span>{error}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="admin-email"
                className="text-sm font-semibold text-[#0E2942]"
              >
                Email address
              </label>

              <input
                id="admin-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                className="mt-2 w-full border border-[#C9D4DE] bg-white px-4 py-3 text-sm text-[#182230] outline-none transition focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/20"
                placeholder="admin@example.com"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="admin-password"
                className="text-sm font-semibold text-[#0E2942]"
              >
                Password
              </label>

              <input
                id="admin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                className="mt-2 w-full border border-[#C9D4DE] bg-white px-4 py-3 text-sm text-[#182230] outline-none transition focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/20"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0E2942] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
            >
              {loading
                ? "Signing in..."
                : "Sign In"}

              {!loading && (
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              )}
            </button>
          </form>

          <div className="border-t border-[#DCE4EB] px-7 py-5 sm:px-9">
            <p className="text-xs leading-5 text-[#8A96A3]">
              This area is restricted to authorized
              H&M Synergy administrators.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}