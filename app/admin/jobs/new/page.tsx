"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Loader2,
  Plus,
  Save,
  Sparkles,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type Locale = "en" | "pl" | "ua";

type Submission = {
  id: string;
  status: "pending" | "approved" | "rejected";

  locale: Locale;

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
};

type SubmissionApiResponse = {
  submissions?: Submission[];
  error?: string;
};

type FormState = {
  code: string;
  slug: string;

  titleEn: string;
  titlePl: string;
  titleUa: string;

  category: string;

  locationEn: string;
  locationPl: string;
  locationUa: string;

  workersNeeded: string;
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

type Translation = {
  title: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

type TranslationApiResponse = {
  success?: boolean;
  sourceLanguage?: Locale;
  translations?: Partial<Record<Locale, Translation>>;
  error?: string;
};

const emptyForm: FormState = {
  code: "",
  slug: "",

  titleEn: "",
  titlePl: "",
  titleUa: "",

  category: "",

  locationEn: "",
  locationPl: "",
  locationUa: "",

  workersNeeded: "1",
  employmentType: "",
  salary: "",
  startDate: "",

  descriptionEn: "",
  descriptionPl: "",
  descriptionUa: "",

  responsibilitiesEn: [],
  responsibilitiesPl: [],
  responsibilitiesUa: [],

  requirementsEn: [],
  requirementsPl: [],
  requirementsUa: [],

  benefitsEn: [],
  benefitsPl: [],
  benefitsUa: [],

  workingHours: "",
  shifts: "",
  overtime: "",
  weekendWork: "",
  accommodation: "",
  transportation: "",

  experience: "",
  education: "",
  languageRequirements: "",
  otherRequirements: "",

  companyName: "",
};

const languageNames: Record<Locale, string> = {
  en: "English",
  pl: "Polish",
  ua: "Ukrainian",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createJobCode() {
  const random = Math.floor(1000 + Math.random() * 9000);

  return `JOB-${new Date().getFullYear()}-${random}`;
}

type ArrayField =
  | "responsibilitiesEn"
  | "responsibilitiesPl"
  | "responsibilitiesUa"
  | "requirementsEn"
  | "requirementsPl"
  | "requirementsUa"
  | "benefitsEn"
  | "benefitsPl"
  | "benefitsUa";

function addArrayItem(form: FormState, field: ArrayField): FormState {
  return {
    ...form,
    [field]: [...form[field], ""],
  };
}

function updateArrayItem(
  form: FormState,
  field: ArrayField,
  index: number,
  value: string,
): FormState {
  const updated = [...form[field]];

  updated[index] = value;

  return {
    ...form,
    [field]: updated,
  };
}

function removeArrayItem(
  form: FormState,
  field: ArrayField,
  index: number,
): FormState {
  return {
    ...form,
    [field]: form[field].filter((_, itemIndex) => itemIndex !== index),
  };
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#34485B]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-[#CDD8E1] bg-white px-4 py-3 text-sm text-[#243447] outline-none transition placeholder:text-[#9AA6B2] focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/10"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 6,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#34485B]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full resize-y rounded-lg border border-[#CDD8E1] bg-white px-4 py-3 text-sm leading-6 text-[#243447] outline-none transition placeholder:text-[#9AA6B2] focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/10"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#34485B]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          className="w-full appearance-none rounded-lg border border-[#CDD8E1] bg-white px-4 py-3 pr-10 text-sm text-[#243447] outline-none transition focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/10"
        >
          <option value="">Select...</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7B8996]" />
      </div>
    </div>
  );
}

function ArrayEditor({
  title,
  items,
  onAdd,
  onChange,
  onRemove,
  placeholder,
}: {
  title: string;
  items: string[];
  onAdd: () => void;
  onChange: (index: number, value: string) => void;
  onRemove: (index: number) => void;
  placeholder: string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <label className="text-sm font-semibold text-[#34485B]">{title}</label>

        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#159A86] hover:underline"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      <div className="space-y-3">
        {items.length === 0 && (
          <div className="rounded-lg border border-dashed border-[#CDD8E1] bg-[#F8FAFB] px-4 py-4 text-sm text-[#8996A3]">
            No items added yet.
          </div>
        )}

        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(event) => onChange(index, event.target.value)}
              placeholder={placeholder}
              className="min-w-0 flex-1 rounded-lg border border-[#CDD8E1] bg-white px-4 py-3 text-sm text-[#243447] outline-none transition placeholder:text-[#9AA6B2] focus:border-[#159A86] focus:ring-2 focus:ring-[#159A86]/10"
            />

            <button
              type="button"
              onClick={() => onRemove(index)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-red-200 bg-white text-red-500 transition hover:bg-red-50"
              aria-label={`Remove ${title} item`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LanguageSection({
  locale,
  form,
  setForm,
}: {
  locale: Locale;
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  const prefix = locale === "en" ? "En" : locale === "pl" ? "Pl" : "Ua";

  const titleField = `title${prefix}` as "titleEn" | "titlePl" | "titleUa";

  const locationField = `location${prefix}` as
    | "locationEn"
    | "locationPl"
    | "locationUa";

  const descriptionField = `description${prefix}` as
    | "descriptionEn"
    | "descriptionPl"
    | "descriptionUa";

  const responsibilitiesField = `responsibilities${prefix}` as
    | "responsibilitiesEn"
    | "responsibilitiesPl"
    | "responsibilitiesUa";

  const requirementsField = `requirements${prefix}` as
    | "requirementsEn"
    | "requirementsPl"
    | "requirementsUa";

  const benefitsField = `benefits${prefix}` as
    | "benefitsEn"
    | "benefitsPl"
    | "benefitsUa";

  return (
    <section className="rounded-2xl border border-[#DCE4EB] bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#123B63] text-sm font-bold text-white">
          {locale.toUpperCase()}
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#123B63]">
            {languageNames[locale]}
          </h3>

          <p className="text-sm text-[#7A8794]">Public vacancy content</p>
        </div>
      </div>

      <div className="space-y-6">
        <Input
          label="Job title"
          value={form[titleField]}
          onChange={(value) =>
            setForm((current) => ({
              ...current,
              [titleField]: value,
            }))
          }
          placeholder={`Job title in ${languageNames[locale]}`}
          required
        />

        <Input
          label="Location"
          value={form[locationField]}
          onChange={(value) =>
            setForm((current) => ({
              ...current,
              [locationField]: value,
            }))
          }
          placeholder={`Location in ${languageNames[locale]}`}
          required
        />

        <Textarea
          label="Description"
          value={form[descriptionField]}
          onChange={(value) =>
            setForm((current) => ({
              ...current,
              [descriptionField]: value,
            }))
          }
          placeholder={`Full job description in ${languageNames[locale]}`}
          required
          rows={8}
        />

        <ArrayEditor
          title="Responsibilities"
          items={form[responsibilitiesField]}
          onAdd={() =>
            setForm((current) => addArrayItem(current, responsibilitiesField))
          }
          onChange={(index, value) =>
            setForm((current) =>
              updateArrayItem(current, responsibilitiesField, index, value),
            )
          }
          onRemove={(index) =>
            setForm((current) =>
              removeArrayItem(current, responsibilitiesField, index),
            )
          }
          placeholder={`Responsibility in ${languageNames[locale]}`}
        />

        <ArrayEditor
          title="Requirements"
          items={form[requirementsField]}
          onAdd={() =>
            setForm((current) => addArrayItem(current, requirementsField))
          }
          onChange={(index, value) =>
            setForm((current) =>
              updateArrayItem(current, requirementsField, index, value),
            )
          }
          onRemove={(index) =>
            setForm((current) =>
              removeArrayItem(current, requirementsField, index),
            )
          }
          placeholder={`Requirement in ${languageNames[locale]}`}
        />

        <ArrayEditor
          title="Benefits"
          items={form[benefitsField]}
          onAdd={() =>
            setForm((current) => addArrayItem(current, benefitsField))
          }
          onChange={(index, value) =>
            setForm((current) =>
              updateArrayItem(current, benefitsField, index, value),
            )
          }
          onRemove={(index) =>
            setForm((current) => removeArrayItem(current, benefitsField, index))
          }
          placeholder={`Benefit in ${languageNames[locale]}`}
        />
      </div>
    </section>
  );
}

function NewAdminJobPageContent()  {
  const searchParams = useSearchParams();

  const supabase = createSupabaseBrowserClient();

  const submissionId = searchParams.get("submission");

  const [submission, setSubmission] = useState<Submission | null>(null);

  const [form, setForm] = useState<FormState>(emptyForm);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [translating, setTranslating] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [translationError, setTranslationError] = useState("");

  const [translationSuccess, setTranslationSuccess] = useState("");

  const [activeLanguage, setActiveLanguage] = useState<Locale>("en");

  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  /*
   * =====================================================
   * GET ACCESS TOKEN
   * =====================================================
   *
   * First try the current session.
   *
   * If the session is missing, attempt to refresh it.
   *
   * This prevents the admin API from receiving an empty
   * or expired Bearer token.
   */
  async function getAccessToken() {
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (!sessionError && session?.access_token) {
      return session.access_token;
    }

    /*
     * Try refreshing the session.
     */
    const {
      data: { session: refreshedSession },
      error: refreshError,
    } = await supabase.auth.refreshSession();

    if (refreshError || !refreshedSession?.access_token) {
      console.error("Unable to refresh admin session:", refreshError?.message);

      return null;
    }

    return refreshedSession.access_token;
  }

  /*
   * =====================================================
   * AUTHENTICATED API REQUEST
   * =====================================================
   *
   * Sends the current Supabase access token.
   *
   * If the server returns 401, refresh the session once
   * and retry the request.
   */
  async function authenticatedFetch(url: string, options: RequestInit = {}) {
    let accessToken = await getAccessToken();

    if (!accessToken) {
      throw new Error("Your admin session has expired. Please log in again.");
    }

    const makeRequest = (token: string) =>
      fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

    let response = await makeRequest(accessToken);

    /*
     * If the token expired between getSession()
     * and the API request, refresh and retry once.
     */
    if (response.status === 401) {
      const {
        data: { session },
        error: refreshError,
      } = await supabase.auth.refreshSession();

      if (refreshError || !session?.access_token) {
        throw new Error("Your admin session has expired. Please log in again.");
      }

      accessToken = session.access_token;

      response = await makeRequest(accessToken);
    }

    return response;
  }

  /*
   * =====================================================
   * LOAD SUBMISSION
   * =====================================================
   */

  useEffect(() => {
    let cancelled = false;

    async function loadSubmission() {
      if (!submissionId) {
        setError("No submission ID was provided.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await authenticatedFetch(
          "/api/admin/employer-submissions",
          {
            method: "GET",
          },
        );

        const data: SubmissionApiResponse = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load submission.");
        }

        const found = data.submissions?.find(
          (item) => item.id === submissionId,
        );

        if (!found) {
          throw new Error("The requested employer submission was not found.");
        }

        if (found.status !== "approved") {
          throw new Error(
            "Only approved submissions can be converted into public jobs.",
          );
        }

        if (cancelled) {
          return;
        }

        setSubmission(found);

        const originalTitle = found.job_title;

        setForm({
          code: createJobCode(),

          slug: slugify(originalTitle),

          titleEn: found.locale === "en" ? found.job_title : "",

          titlePl: found.locale === "pl" ? found.job_title : "",

          titleUa: found.locale === "ua" ? found.job_title : "",

          category: found.category,

          locationEn: found.locale === "en" ? found.location : "",

          locationPl: found.locale === "pl" ? found.location : "",

          locationUa: found.locale === "ua" ? found.location : "",

          workersNeeded: String(found.workers_needed),

          employmentType: found.employment_type,

          salary: found.salary || "",

          startDate: found.start_date || "",

          descriptionEn: found.locale === "en" ? found.description : "",

          descriptionPl: found.locale === "pl" ? found.description : "",

          descriptionUa: found.locale === "ua" ? found.description : "",

          responsibilitiesEn:
            found.locale === "en" ? found.responsibilities || [] : [],

          responsibilitiesPl:
            found.locale === "pl" ? found.responsibilities || [] : [],

          responsibilitiesUa:
            found.locale === "ua" ? found.responsibilities || [] : [],

          requirementsEn: found.locale === "en" ? found.requirements || [] : [],

          requirementsPl: found.locale === "pl" ? found.requirements || [] : [],

          requirementsUa: found.locale === "ua" ? found.requirements || [] : [],

          benefitsEn: found.locale === "en" ? found.benefits || [] : [],

          benefitsPl: found.locale === "pl" ? found.benefits || [] : [],

          benefitsUa: found.locale === "ua" ? found.benefits || [] : [],

          workingHours: found.working_hours || "",

          shifts: found.shifts || "",

          overtime: found.overtime || "",

          weekendWork: found.weekend_work || "",

          accommodation: found.accommodation || "",

          transportation: found.transportation || "",

          experience: found.experience || "",

          education: found.education || "",

          languageRequirements: found.language_requirements || "",

          otherRequirements: found.other_requirements || "",

          companyName: found.company_name || "",
        });

        setActiveLanguage(found.locale);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Unable to load submission.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSubmission();

    return () => {
      cancelled = true;
    };
  }, [submissionId]);

  /*
   * =====================================================
   * AUTO SLUG
   * =====================================================
   */

  useEffect(() => {
    if (!slugManuallyEdited && submission) {
      const originalTitle =
        submission.locale === "en"
          ? form.titleEn
          : submission.locale === "pl"
            ? form.titlePl
            : form.titleUa;

      setForm((current) => ({
        ...current,
        slug: slugify(originalTitle),
      }));
    }
  }, [
    form.titleEn,
    form.titlePl,
    form.titleUa,
    slugManuallyEdited,
    submission,
  ]);

  /*
   * =====================================================
   * LANGUAGE COMPLETION
   * =====================================================
   */

  const languageCompletion = useMemo(() => {
    return {
      en:
        Boolean(form.titleEn.trim()) &&
        Boolean(form.locationEn.trim()) &&
        Boolean(form.descriptionEn.trim()),

      pl:
        Boolean(form.titlePl.trim()) &&
        Boolean(form.locationPl.trim()) &&
        Boolean(form.descriptionPl.trim()),

      ua:
        Boolean(form.titleUa.trim()) &&
        Boolean(form.locationUa.trim()) &&
        Boolean(form.descriptionUa.trim()),
    };
  }, [
    form.titleEn,
    form.locationEn,
    form.descriptionEn,
    form.titlePl,
    form.locationPl,
    form.descriptionPl,
    form.titleUa,
    form.locationUa,
    form.descriptionUa,
  ]);

  /*
   * =====================================================
   * SOURCE CONTENT
   * =====================================================
   */

  function getSourceContent(locale: Locale) {
    if (locale === "en") {
      return {
        title: form.titleEn,
        location: form.locationEn,
        description: form.descriptionEn,
        responsibilities: form.responsibilitiesEn,
        requirements: form.requirementsEn,
        benefits: form.benefitsEn,
      };
    }

    if (locale === "pl") {
      return {
        title: form.titlePl,
        location: form.locationPl,
        description: form.descriptionPl,
        responsibilities: form.responsibilitiesPl,
        requirements: form.requirementsPl,
        benefits: form.benefitsPl,
      };
    }

    return {
      title: form.titleUa,
      location: form.locationUa,
      description: form.descriptionUa,
      responsibilities: form.responsibilitiesUa,
      requirements: form.requirementsUa,
      benefits: form.benefitsUa,
    };
  }

  function getMissingTargetLanguages(sourceLanguage: Locale) {
    const languages: Locale[] = ["en", "pl", "ua"];

    return languages.filter((locale) => {
      if (locale === sourceLanguage) {
        return false;
      }

      return !languageCompletion[locale];
    });
  }

  /*
   * =====================================================
   * AI TRANSLATION
   * =====================================================
   */

  async function handleAITranslation() {
    if (!submission) {
      setTranslationError("Source submission is missing.");
      return;
    }

    const sourceLanguage = submission.locale;

    const sourceContent = getSourceContent(sourceLanguage);

    if (
      !sourceContent.title.trim() ||
      !sourceContent.location.trim() ||
      !sourceContent.description.trim()
    ) {
      setTranslationError(
        `The original ${languageNames[sourceLanguage]} content must include a title, location, and description before translation.`,
      );

      setTranslationSuccess("");
      return;
    }

    const targetLanguages = getMissingTargetLanguages(sourceLanguage);

    if (targetLanguages.length === 0) {
      setTranslationError("");

      setTranslationSuccess(
        "All three language versions are already complete. You can review or edit them manually.",
      );

      return;
    }

    try {
      setTranslating(true);
      setTranslationError("");
      setTranslationSuccess("");
      setError("");

      const response = await authenticatedFetch("/api/admin/translate-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceLanguage,

          title: sourceContent.title.trim(),

          location: sourceContent.location.trim(),

          description: sourceContent.description.trim(),

          responsibilities: sourceContent.responsibilities
            .map((item) => item.trim())
            .filter(Boolean),

          requirements: sourceContent.requirements
            .map((item) => item.trim())
            .filter(Boolean),

          benefits: sourceContent.benefits
            .map((item) => item.trim())
            .filter(Boolean),

          targetLanguages,
        }),
      });

      const data: TranslationApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to translate the job.");
      }

      if (!data.translations) {
        throw new Error("The translation service returned no translations.");
      }

      setForm((current) => {
        const updated = {
          ...current,
        };

        for (const locale of targetLanguages) {
          const translation = data.translations?.[locale];

          if (!translation) {
            continue;
          }

          if (locale === "en") {
            updated.titleEn = translation.title || "";

            updated.locationEn = translation.location || "";

            updated.descriptionEn = translation.description || "";

            updated.responsibilitiesEn = translation.responsibilities || [];

            updated.requirementsEn = translation.requirements || [];

            updated.benefitsEn = translation.benefits || [];
          }

          if (locale === "pl") {
            updated.titlePl = translation.title || "";

            updated.locationPl = translation.location || "";

            updated.descriptionPl = translation.description || "";

            updated.responsibilitiesPl = translation.responsibilities || [];

            updated.requirementsPl = translation.requirements || [];

            updated.benefitsPl = translation.benefits || [];
          }

          if (locale === "ua") {
            updated.titleUa = translation.title || "";

            updated.locationUa = translation.location || "";

            updated.descriptionUa = translation.description || "";

            updated.responsibilitiesUa = translation.responsibilities || [];

            updated.requirementsUa = translation.requirements || [];

            updated.benefitsUa = translation.benefits || [];
          }
        }

        return updated;
      });

      setTranslationSuccess(
        `AI translation completed. ${targetLanguages
          .map((locale) => languageNames[locale])
          .join(
            " and ",
          )} content has been generated. Please review it before publishing.`,
      );
    } catch (err) {
      console.error("AI translation error:", err);

      setTranslationError(
        err instanceof Error ? err.message : "Unable to translate the job.",
      );
    } finally {
      setTranslating(false);
    }
  }

  /*
   * =====================================================
   * VALIDATION
   * =====================================================
   */

  function validateForm() {
    if (!form.code.trim()) {
      return "Job code is required.";
    }

    if (!form.slug.trim()) {
      return "URL slug is required.";
    }

    if (!form.category.trim()) {
      return "Job category is required.";
    }

    if (!form.titleEn.trim()) {
      return "English job title is required.";
    }

    if (!form.titlePl.trim()) {
      return "Polish job title is required.";
    }

    if (!form.titleUa.trim()) {
      return "Ukrainian job title is required.";
    }

    if (!form.locationEn.trim()) {
      return "English location is required.";
    }

    if (!form.locationPl.trim()) {
      return "Polish location is required.";
    }

    if (!form.locationUa.trim()) {
      return "Ukrainian location is required.";
    }

    if (!form.descriptionEn.trim()) {
      return "English description is required.";
    }

    if (!form.descriptionPl.trim()) {
      return "Polish description is required.";
    }

    if (!form.descriptionUa.trim()) {
      return "Ukrainian description is required.";
    }

    const workers = Number(form.workersNeeded);

    if (!Number.isInteger(workers) || workers < 1) {
      return "Workers needed must be at least 1.";
    }

    if (!form.employmentType.trim()) {
      return "Employment type is required.";
    }

    return "";
  }

  /*
   * =====================================================
   * SAVE / PUBLISH
   * =====================================================
   */

  async function saveJob(status: "draft" | "published") {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    if (!submission) {
      setError("Source submission is missing.");
      return;
    }

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const response = await authenticatedFetch("/api/admin/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sourceSubmissionId: submission.id,

          code: form.code.trim(),

          slug: form.slug.trim(),

          status,

          titleEn: form.titleEn.trim(),

          titlePl: form.titlePl.trim(),

          titleUa: form.titleUa.trim(),

          category: form.category.trim(),

          locationEn: form.locationEn.trim(),

          locationPl: form.locationPl.trim(),

          locationUa: form.locationUa.trim(),

          workersNeeded: Number(form.workersNeeded),

          employmentType: form.employmentType.trim(),

          salary: form.salary.trim(),

          startDate: form.startDate,

          descriptionEn: form.descriptionEn.trim(),

          descriptionPl: form.descriptionPl.trim(),

          descriptionUa: form.descriptionUa.trim(),

          responsibilitiesEn: form.responsibilitiesEn
            .map((item) => item.trim())
            .filter(Boolean),

          responsibilitiesPl: form.responsibilitiesPl
            .map((item) => item.trim())
            .filter(Boolean),

          responsibilitiesUa: form.responsibilitiesUa
            .map((item) => item.trim())
            .filter(Boolean),

          requirementsEn: form.requirementsEn
            .map((item) => item.trim())
            .filter(Boolean),

          requirementsPl: form.requirementsPl
            .map((item) => item.trim())
            .filter(Boolean),

          requirementsUa: form.requirementsUa
            .map((item) => item.trim())
            .filter(Boolean),

          benefitsEn: form.benefitsEn
            .map((item) => item.trim())
            .filter(Boolean),

          benefitsPl: form.benefitsPl
            .map((item) => item.trim())
            .filter(Boolean),

          benefitsUa: form.benefitsUa
            .map((item) => item.trim())
            .filter(Boolean),

          workingHours: form.workingHours.trim(),

          shifts: form.shifts.trim(),

          overtime: form.overtime.trim(),

          weekendWork: form.weekendWork.trim(),

          accommodation: form.accommodation.trim(),

          transportation: form.transportation.trim(),

          experience: form.experience.trim(),

          education: form.education.trim(),

          languageRequirements: form.languageRequirements.trim(),

          otherRequirements: form.otherRequirements.trim(),

          companyName: form.companyName.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to save the job.");
      }

      setSuccess(
        status === "published"
          ? "Job published successfully."
          : "Job saved as draft successfully.",
      );

      /*
       * After publishing, keep the page visible so
       * the administrator can see the success message.
       *
       * The source submission cannot be published again
       * because the API prevents duplicate conversion.
       */
    } catch (err) {
      console.error("Save job error:", err);

      setError(err instanceof Error ? err.message : "Unable to save the job.");
    } finally {
      setSaving(false);
    }
  }

  /*
   * =====================================================
   * LOADING STATE
   * =====================================================
   */

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F8FA]">
        <div className="flex items-center gap-3 text-sm font-medium text-[#526273]">
          <Loader2 className="h-5 w-5 animate-spin text-[#159A86]" />
          Loading submission...
        </div>
      </main>
    );
  }

  /*
   * =====================================================
   * LOAD ERROR
   * =====================================================
   */

  if (error && !submission) {
    return (
      <main className="min-h-screen bg-[#F5F8FA]">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 lg:px-8">
          <Link
            href="/admin"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h1 className="text-xl font-bold text-red-700">
              Unable to load submission
            </h1>

            <p className="mt-2 text-sm leading-6 text-red-600">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  /*
   * =====================================================
   * PAGE
   * =====================================================
   */

  return (
    <main className="min-h-screen bg-[#F5F8FA]">
      {/* Header */}
      <header className="border-b border-[#DCE4EB] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link
                href="/admin"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#687787] hover:text-[#159A86]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to submissions
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123B63] text-lg font-bold text-white">
                  H&M
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#159A86]">
                    H&M Synergy
                  </p>

                  <h1 className="text-xl font-bold text-[#123B63]">
                    Publish Job
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => saveJob("draft")}
                disabled={saving || translating}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4DEE7] bg-white px-5 py-3 text-sm font-semibold text-[#123B63] transition hover:bg-[#F7F9FB] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Save Draft
              </button>

              <button
                type="button"
                onClick={() => saveJob("published")}
                disabled={saving || translating}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159A86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#118572] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Check className="h-4 w-4" />
                )}
                Publish Job
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        {/* Messages */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <strong>Unable to save:</strong> {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            <strong>{success}</strong>
          </div>
        )}

        {/* Source submission */}
        {submission && (
          <section className="mb-8 rounded-2xl border border-[#DCE4EB] bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#159A86]">
                  Approved source submission
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#123B63]">
                  {submission.job_title}
                </h2>

                <p className="mt-1 text-sm text-[#687787]">
                  {submission.company_name} · {submission.location}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  APPROVED
                </span>

                <span className="rounded-full bg-[#F1F5F8] px-3 py-1.5 text-xs font-semibold text-[#647383]">
                  Original: {languageNames[submission.locale]}
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Input
                label="Job code"
                value={form.code}
                onChange={(value) =>
                  setForm((current) => ({
                    ...current,
                    code: value.toUpperCase(),
                  }))
                }
                required
              />

              <Input
                label="URL slug"
                value={form.slug}
                onChange={(value) => {
                  setSlugManuallyEdited(true);

                  setForm((current) => ({
                    ...current,
                    slug: slugify(value),
                  }));
                }}
                required
              />

              <Input
                label="Category"
                value={form.category}
                onChange={(value) =>
                  setForm((current) => ({
                    ...current,
                    category: value,
                  }))
                }
                required
              />

              <Input
                label="Company"
                value={form.companyName}
                onChange={(value) =>
                  setForm((current) => ({
                    ...current,
                    companyName: value,
                  }))
                }
              />
            </div>
          </section>
        )}

        {/* AI Translation */}
        {submission && (
          <section className="mb-8 rounded-2xl border border-[#DCE4EB] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F6F3]">
                    <Sparkles className="h-5 w-5 text-[#159A86]" />
                  </div>

                  <h2 className="text-lg font-bold text-[#123B63]">
                    AI Translation
                  </h2>
                </div>

                <p className="mt-2 text-sm leading-6 text-[#687787]">
                  Original language:{" "}
                  <span className="font-semibold text-[#123B63]">
                    {languageNames[submission.locale]}
                  </span>
                </p>

                <p className="mt-1 text-sm leading-6 text-[#687787]">
                  Automatically generate the missing language versions. You can
                  review and edit every translation before publishing.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAITranslation}
                disabled={
                  translating ||
                  saving ||
                  getMissingTargetLanguages(submission.locale).length === 0
                }
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#159A86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#118572] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {translating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Translating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Translate Missing Languages
                  </>
                )}
              </button>
            </div>

            {translationSuccess && (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700">
                <strong>Translation complete:</strong> {translationSuccess}
              </div>
            )}

            {translationError && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                <strong>Translation failed:</strong> {translationError}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {(["en", "pl", "ua"] as Locale[]).map((locale) => {
                const isOriginal = locale === submission.locale;

                const complete = languageCompletion[locale];

                return (
                  <div
                    key={locale}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                      isOriginal
                        ? "bg-[#E8EEF4] text-[#123B63]"
                        : complete
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {isOriginal ? (
                      <>
                        <span>{languageNames[locale]}</span>

                        <span>Original</span>
                      </>
                    ) : complete ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        {languageNames[locale]}
                      </>
                    ) : (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

                        {languageNames[locale]}

                        <span>Missing</span>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* General Job Information */}
        <section className="mb-8 rounded-2xl border border-[#DCE4EB] bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#123B63]">
              General Job Information
            </h2>

            <p className="mt-1 text-sm text-[#7A8794]">
              These details are shared across all public languages.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Input
              label="Workers needed"
              value={form.workersNeeded}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  workersNeeded: value,
                }))
              }
              type="number"
              required
            />

            <Select
              label="Employment type"
              value={form.employmentType}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  employmentType: value,
                }))
              }
              options={[
                "Full-time",
                "Part-time",
                "Temporary",
                "Contract",
                "Seasonal",
              ]}
              required
            />

            <Input
              label="Salary"
              value={form.salary}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  salary: value,
                }))
              }
              placeholder="e.g. 30–35 PLN/hour"
            />

            <Input
              label="Start date"
              value={form.startDate}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  startDate: value,
                }))
              }
              type="date"
            />
          </div>
        </section>

        {/* Language navigation */}
        <section className="mb-6">
          <div className="rounded-xl border border-[#DCE4EB] bg-white p-2 shadow-sm">
            <div className="grid grid-cols-3 gap-2">
              {(["en", "pl", "ua"] as Locale[]).map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => setActiveLanguage(locale)}
                  className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    activeLanguage === locale
                      ? "bg-[#123B63] text-white"
                      : "text-[#5B6878] hover:bg-[#F5F8FA]"
                  }`}
                >
                  <span>{locale.toUpperCase()}</span>

                  {languageCompletion[locale] && <Check className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Language editor */}
        <div className="mb-8">
          <LanguageSection
            locale={activeLanguage}
            form={form}
            setForm={setForm}
          />
        </div>

        {/* Working conditions */}
        <section className="mb-8 rounded-2xl border border-[#DCE4EB] bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#123B63]">
              Working Conditions
            </h2>

            <p className="mt-1 text-sm text-[#7A8794]">
              These values are shared across all languages.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Working hours"
              value={form.workingHours}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  workingHours: value,
                }))
              }
              placeholder="e.g. 8 hours/day"
            />

            <Input
              label="Shifts"
              value={form.shifts}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  shifts: value,
                }))
              }
              placeholder="e.g. 2 shifts"
            />

            <Input
              label="Overtime"
              value={form.overtime}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  overtime: value,
                }))
              }
            />

            <Input
              label="Weekend work"
              value={form.weekendWork}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  weekendWork: value,
                }))
              }
            />

            <Input
              label="Accommodation"
              value={form.accommodation}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  accommodation: value,
                }))
              }
            />

            <Input
              label="Transportation"
              value={form.transportation}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  transportation: value,
                }))
              }
            />
          </div>
        </section>

        {/* Candidate requirements */}
        <section className="mb-8 rounded-2xl border border-[#DCE4EB] bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#123B63]">
              Candidate Requirements
            </h2>

            <p className="mt-1 text-sm text-[#7A8794]">
              These values are shared across all languages.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Experience"
              value={form.experience}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  experience: value,
                }))
              }
            />

            <Input
              label="Education"
              value={form.education}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  education: value,
                }))
              }
            />

            <Input
              label="Language requirements"
              value={form.languageRequirements}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  languageRequirements: value,
                }))
              }
            />

            <Input
              label="Other requirements"
              value={form.otherRequirements}
              onChange={(value) =>
                setForm((current) => ({
                  ...current,
                  otherRequirements: value,
                }))
              }
            />
          </div>
        </section>

        {/* Bottom actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-[#DCE4EB] pt-6 sm:flex-row sm:justify-end">
          <Link
            href="/admin"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4DEE7] bg-white px-6 py-3 text-sm font-semibold text-[#526273] transition hover:bg-[#F7F9FB]"
          >
            Cancel
          </Link>

          <button
            type="button"
            onClick={() => saveJob("draft")}
            disabled={saving || translating}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D4DEE7] bg-white px-6 py-3 text-sm font-semibold text-[#123B63] transition hover:bg-[#F7F9FB] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Draft
          </button>

          <button
            type="button"
            onClick={() => saveJob("published")}
            disabled={saving || translating}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159A86] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#118572] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            Publish Job
          </button>
        </div>
      </div>
    </main>
  );
}

export default function NewAdminJobPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#F5F8FA]">
          <div className="text-sm font-medium text-[#526273]">
            Loading...
          </div>
        </main>
      }
    >
      <NewAdminJobPageContent />
    </Suspense>
  );
}