"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Users,
  X,
  XCircle,
} from "lucide-react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type SubmissionStatus = "pending" | "approved" | "rejected";

type Submission = {
  id: string;
  status: SubmissionStatus;
  locale: "en" | "pl" | "ua";

  job_title: string;
  category: string;
  location: string;
  workers_needed: number;
  employment_type: string;
  salary: string | null;
  start_date: string | null;

  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];

  working_hours: string | null;
  shifts: string | null;
  overtime: string | null;
  weekend_work: string | null;
  accommodation: string | null;
  transportation: string | null;

  experience: string | null;
  education: string | null;
  language_requirements: string | null;
  other_requirements: string | null;

  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  website: string | null;
  nip_krs: string | null;

  additional_notes: string | null;

  privacy_consent: boolean;
  contact_consent: boolean;

  admin_notes: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;

  created_at: string;
  updated_at: string;
};

type ApiResponse = {
  submissions?: Submission[];
  total?: number;
  error?: string;
  message?: string;
};

function formatDate(date: string | null) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function formatShortDate(date: string | null) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

const statusLabels: Record<SubmissionStatus, string> = {
  pending: "Pending",
  approved: "Approved",
  rejected: "Rejected",
};

function StatusBadge({ status }: { status: SubmissionStatus }) {
  const config = {
    pending: {
      icon: Clock3,
      className: "bg-amber-50 text-amber-700 border-amber-200",
    },
    approved: {
      icon: CheckCircle2,
      className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    rejected: {
      icon: XCircle,
      className: "bg-red-50 text-red-700 border-red-200",
    },
  };

  const item = config[status];
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${item.className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      {statusLabels[status]}
    </span>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  return (
    <div className="border-b border-[#E7EDF2] py-3 last:border-b-0">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#7A8794]">
        {label}
      </div>

      <div className="text-sm leading-6 text-[#243447]">
        {value || "—"}
      </div>
    </div>
  );
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <h4 className="mb-3 text-sm font-bold text-[#123B63]">
        {title}
      </h4>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-2 text-sm leading-6 text-[#4F5F70]"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#159A86]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubmissionCard({
  submission,
  expanded,
  onToggle,
  onUpdate,
  updatingId,
}: {
  submission: Submission;
  expanded: boolean;
  onToggle: () => void;
  onUpdate: (
    id: string,
    status: "approved" | "rejected",
    notes: string,
  ) => Promise<void>;
  updatingId: string | null;
}) {
  const [showRejectBox, setShowRejectBox] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");

  const isUpdating = updatingId === submission.id;

  async function handleApprove() {
    const confirmed = window.confirm(
      "Are you sure you want to approve this job submission?",
    );

    if (!confirmed) return;

    await onUpdate(
      submission.id,
      "approved",
      adminNotes,
    );
  }

  async function handleReject() {
    await onUpdate(
      submission.id,
      "rejected",
      adminNotes,
    );

    setShowRejectBox(false);
    setAdminNotes("");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#DCE4EB] bg-white shadow-sm transition hover:shadow-md">
      {/* Submission header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <StatusBadge status={submission.status} />

                <span className="rounded-full bg-[#F1F5F8] px-3 py-1 text-xs font-semibold text-[#647383]">
                  {submission.locale.toUpperCase()}
                </span>

                <span className="text-xs text-[#8996A3]">
                  #{submission.id.slice(0, 8)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#123B63] sm:text-xl">
                {submission.job_title}
              </h3>

              <div className="mt-3 flex flex-col gap-2 text-sm text-[#687787] sm:flex-row sm:flex-wrap sm:gap-x-5">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" />
                  {submission.company_name}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {submission.location}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  {submission.workers_needed}{" "}
                  {submission.workers_needed === 1
                    ? "worker"
                    : "workers"}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {formatShortDate(submission.created_at)}
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between gap-4 lg:justify-end">
              <div className="text-left lg:text-right">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#8A96A3]">
                  Submitted
                </div>

                <div className="mt-1 text-sm font-medium text-[#34485B]">
                  {formatDate(submission.created_at)}
                </div>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DCE4EB] bg-[#F8FAFB]">
                <ChevronDown
                  className={`h-5 w-5 text-[#123B63] transition-transform ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-[#DCE4EB] bg-[#F8FAFB]">
          {/* Details */}
          <div className="grid gap-6 p-5 sm:p-6 xl:grid-cols-3">
            {/* Job information */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <h3 className="mb-4 text-base font-bold text-[#123B63]">
                Job Information
              </h3>

              <DetailRow
                label="Job title"
                value={submission.job_title}
              />

              <DetailRow
                label="Category"
                value={submission.category}
              />

              <DetailRow
                label="Location"
                value={submission.location}
              />

              <DetailRow
                label="Workers needed"
                value={submission.workers_needed}
              />

              <DetailRow
                label="Employment type"
                value={submission.employment_type}
              />

              <DetailRow
                label="Salary"
                value={submission.salary}
              />

              <DetailRow
                label="Expected start date"
                value={formatShortDate(submission.start_date)}
              />
            </section>

            {/* Company information */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <h3 className="mb-4 text-base font-bold text-[#123B63]">
                Company Information
              </h3>

              <DetailRow
                label="Company"
                value={submission.company_name}
              />

              <DetailRow
                label="Contact person"
                value={submission.contact_person}
              />

              <div className="border-b border-[#E7EDF2] py-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#7A8794]">
                  Email
                </div>

                <a
                  href={`mailto:${submission.email}`}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#159A86] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {submission.email}
                </a>
              </div>

              <div className="border-b border-[#E7EDF2] py-3">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#7A8794]">
                  Phone
                </div>

                <a
                  href={`tel:${submission.phone}`}
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#159A86] hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {submission.phone}
                </a>
              </div>

              <DetailRow
                label="Website"
                value={submission.website}
              />

              <DetailRow
                label="NIP / KRS"
                value={submission.nip_krs}
              />
            </section>

            {/* Working conditions */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <h3 className="mb-4 text-base font-bold text-[#123B63]">
                Working Conditions
              </h3>

              <DetailRow
                label="Working hours"
                value={submission.working_hours}
              />

              <DetailRow
                label="Shifts"
                value={submission.shifts}
              />

              <DetailRow
                label="Overtime"
                value={submission.overtime}
              />

              <DetailRow
                label="Weekend work"
                value={submission.weekend_work}
              />

              <DetailRow
                label="Accommodation"
                value={submission.accommodation}
              />

              <DetailRow
                label="Transportation"
                value={submission.transportation}
              />
            </section>
          </div>

          <div className="grid gap-6 px-5 pb-5 sm:px-6 sm:pb-6 xl:grid-cols-2">
            {/* Job description */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <h3 className="mb-3 text-base font-bold text-[#123B63]">
                Job Description
              </h3>

              <p className="whitespace-pre-wrap text-sm leading-7 text-[#4F5F70]">
                {submission.description}
              </p>
            </section>

            {/* Candidate requirements */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <h3 className="mb-4 text-base font-bold text-[#123B63]">
                Candidate Requirements
              </h3>

              <DetailRow
                label="Experience"
                value={submission.experience}
              />

              <DetailRow
                label="Education"
                value={submission.education}
              />

              <DetailRow
                label="Language requirements"
                value={submission.language_requirements}
              />

              <DetailRow
                label="Other requirements"
                value={submission.other_requirements}
              />
            </section>

            {/* Responsibilities */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <DetailList
                title="Responsibilities"
                items={submission.responsibilities || []}
              />
            </section>

            {/* Requirements */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5">
              <DetailList
                title="Requirements"
                items={submission.requirements || []}
              />
            </section>

            {/* Benefits */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5 xl:col-span-2">
              <DetailList
                title="Benefits"
                items={submission.benefits || []}
              />
            </section>

            {/* Additional notes */}
            {submission.additional_notes && (
              <section className="rounded-xl border border-[#DCE4EB] bg-white p-5 xl:col-span-2">
                <h3 className="mb-3 text-base font-bold text-[#123B63]">
                  Additional Notes
                </h3>

                <p className="whitespace-pre-wrap text-sm leading-7 text-[#4F5F70]">
                  {submission.additional_notes}
                </p>
              </section>
            )}

            {/* Previous admin notes */}
            {submission.admin_notes && (
              <section className="rounded-xl border border-[#DCE4EB] bg-white p-5 xl:col-span-2">
                <h3 className="mb-3 text-base font-bold text-[#123B63]">
                  Admin Notes
                </h3>

                <p className="whitespace-pre-wrap text-sm leading-7 text-[#4F5F70]">
                  {submission.admin_notes}
                </p>

                {submission.reviewed_at && (
                  <p className="mt-3 text-xs text-[#8996A3]">
                    Reviewed {formatDate(submission.reviewed_at)}
                    {submission.reviewed_by
                      ? ` by ${submission.reviewed_by}`
                      : ""}
                  </p>
                )}
              </section>
            )}

            {/* Submission information */}
            <section className="rounded-xl border border-[#DCE4EB] bg-white p-5 xl:col-span-2">
              <h3 className="mb-4 text-base font-bold text-[#123B63]">
                Submission Information
              </h3>

              <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
                <DetailRow
                  label="Status"
                  value={statusLabels[submission.status]}
                />

                <DetailRow
                  label="Submitted"
                  value={formatDate(submission.created_at)}
                />

                <DetailRow
                  label="Last updated"
                  value={formatDate(submission.updated_at)}
                />

                <DetailRow
                  label="Reviewed"
                  value={formatDate(submission.reviewed_at)}
                />
              </div>
            </section>

            {/* Publish approved job */}
            {submission.status === "approved" && (
              <div className="border-t border-[#DCE4EB] bg-white p-5 sm:p-6 xl:col-span-2">
                <div className="flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#123B63]">
                      Ready to publish
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#687787]">
                      This submission has been approved and can now
                      be prepared as a public multilingual job
                      vacancy.
                    </p>
                  </div>

                  <Link
                    href={`/admin/jobs/new?submission=${submission.id}`}
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#159A86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#118572]"
                  >
                    Publish Job
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Admin actions */}
          {submission.status === "pending" && (
            <div className="border-t border-[#DCE4EB] bg-white p-5 sm:p-6">
              <div className="rounded-xl border border-[#DCE4EB] bg-[#F8FAFB] p-5">
                <div className="mb-4">
                  <h3 className="text-base font-bold text-[#123B63]">
                    Review Submission
                  </h3>

                  <p className="mt-1 text-sm text-[#687787]">
                    Approve this vacancy to make it eligible for
                    publishing, or reject it if the information is
                    not suitable.
                  </p>
                </div>

                {showRejectBox && (
                  <div className="mb-5">
                    <label
                      htmlFor={`admin-notes-${submission.id}`}
                      className="mb-2 block text-sm font-semibold text-[#34485B]"
                    >
                      Admin notes
                    </label>

                    <textarea
                      id={`admin-notes-${submission.id}`}
                      value={adminNotes}
                      onChange={(event) =>
                        setAdminNotes(event.target.value)
                      }
                      rows={4}
                      placeholder="Optional reason or internal note..."
                      className="w-full resize-y rounded-lg border border-[#CDD8E1] bg-white px-4 py-3 text-sm text-[#243447] outline-none transition placeholder:text-[#9AA6B2] focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/10"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={handleApprove}
                    disabled={isUpdating}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159A86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#118572] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isUpdating ? (
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    ) : (
                      <Check className="h-4 w-4" />
                    )}

                    {isUpdating
                      ? "Updating..."
                      : "Approve"}
                  </button>

                  {!showRejectBox ? (
                    <button
                      type="button"
                      onClick={() =>
                        setShowRejectBox(true)
                      }
                      disabled={isUpdating}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <X className="h-4 w-4" />
                      Reject
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={handleReject}
                        disabled={isUpdating}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isUpdating ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : (
                          <X className="h-4 w-4" />
                        )}

                        {isUpdating
                          ? "Updating..."
                          : "Confirm Rejection"}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowRejectBox(false);
                          setAdminNotes("");
                        }}
                        disabled={isUpdating}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4DEE7] bg-white px-5 py-3 text-sm font-semibold text-[#526273] transition hover:bg-[#F5F8FA] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminDashboardPage() {
  /*
   * Browser Supabase client.
   *
   * This client maintains the authenticated session created
   * by the Admin Login page.
   */
  const supabase = createSupabaseBrowserClient();

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [statusFilter, setStatusFilter] = useState<
    "all" | SubmissionStatus
  >("all");

  const [expandedId, setExpandedId] = useState<string | null>(
    null,
  );

  /*
   * Get the current authenticated session and return
   * the access token required by the admin API.
   */
  async function getAccessToken() {
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      console.error(
        "Unable to read Supabase session:",
        sessionError,
      );

      throw new Error(
        "Unable to read your admin session.",
      );
    }

    if (!session?.access_token) {
      throw new Error(
        "Your admin session has expired. Please log in again.",
      );
    }

    return session.access_token;
  }

  /*
   * Load employer submissions.
   */
  async function loadSubmissions(
    showRefreshState = false,
  ) {
    try {
      if (showRefreshState) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const accessToken = await getAccessToken();

      const response = await fetch(
        "/api/admin/employer-submissions",
        {
          method: "GET",
          cache: "no-store",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const data: ApiResponse =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to load submissions.",
        );
      }

      setSubmissions(data.submissions || []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load employer submissions.",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  /*
   * Approve / reject an employer submission.
   */
  async function updateSubmission(
    id: string,
    status: "approved" | "rejected",
    adminNotes: string,
  ) {
    try {
      setUpdatingId(id);
      setError("");
      setSuccess("");

      const accessToken = await getAccessToken();

      const response = await fetch(
        "/api/admin/employer-submissions",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            id,
            status,
            adminNotes,
          }),
        },
      );

      const data: ApiResponse =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to update submission.",
        );
      }

      setSuccess(
        status === "approved"
          ? "Job submission approved successfully."
          : "Job submission rejected successfully.",
      );

      await loadSubmissions(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to update submission.",
      );
    } finally {
      setUpdatingId(null);
    }
  }

  /*
   * Initial load.
   */
  useEffect(() => {
    loadSubmissions();
  }, []);

  const filteredSubmissions = useMemo(() => {
    if (statusFilter === "all") {
      return submissions;
    }

    return submissions.filter(
      (submission) =>
        submission.status === statusFilter,
    );
  }, [submissions, statusFilter]);

  const counts = useMemo(() => {
    return {
      all: submissions.length,

      pending: submissions.filter(
        (submission) =>
          submission.status === "pending",
      ).length,

      approved: submissions.filter(
        (submission) =>
          submission.status === "approved",
      ).length,

      rejected: submissions.filter(
        (submission) =>
          submission.status === "rejected",
      ).length,
    };
  }, [submissions]);

  return (
    <main className="min-h-screen bg-[#F5F8FA]">
      {/* Header */}
      <header className="border-b border-[#DCE4EB] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123B63] text-lg font-bold text-white">
                H&M
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#159A86]">
                  H&M Synergy
                </p>

                <h1 className="text-xl font-bold text-[#123B63]">
                  Employer Submissions
                </h1>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                loadSubmissions(true)
              }
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4DEE7] bg-white px-4 py-2.5 text-sm font-semibold text-[#123B63] transition hover:bg-[#F7F9FB] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              Refresh
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-7">
          <p className="mb-2 text-sm font-semibold text-[#159A86]">
            Administration
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-[#123B63] sm:text-3xl">
            Employer job requests
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#687787]">
            Review job vacancies submitted by employers
            through the H&M Synergy website.
          </p>
        </div>

        {/* Success message */}
        {success && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

            <div>
              <p className="font-semibold">
                {success}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSuccess("")}
              className="ml-auto text-emerald-600 hover:text-emerald-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

            <div>
              <p className="font-semibold">
                Unable to process request
              </p>

              <p className="mt-1">
                {error}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setError("")}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <button
            type="button"
            onClick={() =>
              setStatusFilter("all")
            }
            className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
              statusFilter === "all"
                ? "border-[#123B63] ring-2 ring-[#123B63]/10"
                : "border-[#DCE4EB] hover:border-[#B8C7D4]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#687787]">
                  All submissions
                </p>

                <p className="mt-2 text-3xl font-bold text-[#123B63]">
                  {counts.all}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF4F8]">
                <Building2 className="h-5 w-5 text-[#123B63]" />
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() =>
              setStatusFilter("pending")
            }
            className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
              statusFilter === "pending"
                ? "border-amber-400 ring-2 ring-amber-400/10"
                : "border-[#DCE4EB] hover:border-[#B8C7D4]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#687787]">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-[#123B63]">
                  {counts.pending}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                <Clock3 className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() =>
              setStatusFilter("approved")
            }
            className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
              statusFilter === "approved"
                ? "border-emerald-400 ring-2 ring-emerald-400/10"
                : "border-[#DCE4EB] hover:border-[#B8C7D4]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#687787]">
                  Approved
                </p>

                <p className="mt-2 text-3xl font-bold text-[#123B63]">
                  {counts.approved}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() =>
              setStatusFilter("rejected")
            }
            className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition ${
              statusFilter === "rejected"
                ? "border-red-400 ring-2 ring-red-400/10"
                : "border-[#DCE4EB] hover:border-[#B8C7D4]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#687787]">
                  Rejected
                </p>

                <p className="mt-2 text-3xl font-bold text-[#123B63]">
                  {counts.rejected}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </button>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-32 animate-pulse rounded-2xl border border-[#DCE4EB] bg-white"
              />
            ))}
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="rounded-2xl border border-[#DCE4EB] bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4F8]">
              <Building2 className="h-6 w-6 text-[#123B63]" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-[#123B63]">
              No submissions found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#718091]">
              {statusFilter === "all"
                ? "There are currently no employer job submissions."
                : `There are no ${statusFilter} employer submissions.`}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#687787]">
                Showing{" "}
                <span className="font-semibold text-[#123B63]">
                  {filteredSubmissions.length}
                </span>{" "}
                {filteredSubmissions.length === 1
                  ? "submission"
                  : "submissions"}
              </p>

              {statusFilter !== "all" && (
                <button
                  type="button"
                  onClick={() =>
                    setStatusFilter("all")
                  }
                  className="text-sm font-semibold text-[#159A86] hover:underline"
                >
                  Show all
                </button>
              )}
            </div>

            {filteredSubmissions.map(
              (submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  expanded={
                    expandedId ===
                    submission.id
                  }
                  onToggle={() =>
                    setExpandedId(
                      (current) =>
                        current ===
                        submission.id
                          ? null
                          : submission.id,
                    )
                  }
                  onUpdate={
                    updateSubmission
                  }
                  updatingId={updatingId}
                />
              ),
            )}
          </div>
        )}
      </div>
    </main>
  );
}