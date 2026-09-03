export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

import { createSupabaseServerClient } from "@/lib/supabase/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ApplicationSchema = z.object({
  locale: z.enum(["en", "pl", "ua"]).default("en"),

  jobSlug: z.string().min(1).max(200),

  name: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(3).max(60),

  currentLocation: z.string().min(2).max(120),
  citizenship: z.string().min(2).max(100),

  workEligibility: z.enum([
    "yes",
    "no",
    "need-assistance",
  ]),

  studentStatus: z.enum(["yes", "no"]),

  polishUniversityGraduate: z.enum(["yes", "no"]),

  experience: z.string().min(3).max(5000),

  availability: z.string().min(2).max(200),

  languages: z.string().max(300).optional().or(z.literal("")),

  message: z.string().max(5000).optional().or(z.literal("")),

  consent: z.literal("on"),

  website: z.string().optional().or(z.literal("")),
});

type ApplicationJob = {
  id: string;
  code: string;
  slug: string;

  title_en: string;
  title_pl: string;
  title_ua: string;

  category: string;

  location_en: string;
  location_pl: string;
  location_ua: string;
};

/*
|--------------------------------------------------------------------------
| Permanent company vacancies
|--------------------------------------------------------------------------
|
| These jobs do NOT need to exist in Supabase.
|
*/

const permanentJobs: Record<string, ApplicationJob> = {
  "injection-machine-operator": {
    id: "permanent-injection-machine-operator",
    code: "HMS-260801",
    slug: "injection-machine-operator",

    title_en: "Injection Machine Operator",
    title_pl: "Operator wtryskarki",
    title_ua: "Оператор термопластавтомата",

    category: "Manufacturing",

    location_en: "Wrocław, Lower Silesia",
    location_pl: "Wrocław, Dolny Śląsk",
    location_ua: "Вроцлав, Нижньосілезьке воєводство",
  },
};

/*
|--------------------------------------------------------------------------
| Find job
|--------------------------------------------------------------------------
|
| First check permanent static jobs.
| If not found, check published Supabase jobs.
|
*/

async function getJob(
  slug: string,
): Promise<ApplicationJob | null> {
  // Permanent static job
  const permanentJob = permanentJobs[slug];

  if (permanentJob) {
    return permanentJob;
  }

  // Supabase published job
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("jobs")
    .select(`
      id,
      code,
      slug,
      title_en,
      title_pl,
      title_ua,
      category,
      location_en,
      location_pl,
      location_ua
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error(
      "[job-application] Failed to load job:",
      error,
    );

    return null;
  }

  return data;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const rawData = {
      locale: String(formData.get("locale") || "en"),

      jobSlug: String(formData.get("jobSlug") || ""),

      name: String(formData.get("name") || ""),

      email: String(formData.get("email") || ""),

      phone: String(formData.get("phone") || ""),

      currentLocation: String(
        formData.get("currentLocation") || "",
      ),

      citizenship: String(
        formData.get("citizenship") || "",
      ),

      workEligibility: String(
        formData.get("workEligibility") || "",
      ),

      studentStatus: String(
        formData.get("studentStatus") || "",
      ),

      polishUniversityGraduate: String(
        formData.get("polishUniversityGraduate") || "",
      ),

      experience: String(
        formData.get("experience") || "",
      ),

      availability: String(
        formData.get("availability") || "",
      ),

      languages: String(
        formData.get("languages") || "",
      ),

      message: String(
        formData.get("message") || "",
      ),

      consent: String(
        formData.get("consent") || "",
      ),

      website: String(
        formData.get("website") || "",
      ),
    };

    const parsed = ApplicationSchema.safeParse(rawData);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            "Please complete all required fields correctly.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // ---------------------------------------------------------
    // Honeypot
    // ---------------------------------------------------------

    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // ---------------------------------------------------------
    // JOB LOOKUP
    // ---------------------------------------------------------

    const job = await getJob(data.jobSlug);

    if (!job) {
      return NextResponse.json(
        {
          error:
            "The selected job position could not be found or is no longer available.",
        },
        { status: 404 },
      );
    }

    const jobTitle =
      data.locale === "pl"
        ? job.title_pl
        : data.locale === "ua"
          ? job.title_ua
          : job.title_en;

    const jobLocation =
      data.locale === "pl"
        ? job.location_pl
        : data.locale === "ua"
          ? job.location_ua
          : job.location_en;

    const jobCategory = job.category;

    // ---------------------------------------------------------
    // CV
    // ---------------------------------------------------------

    const cv = formData.get("cv");

    if (!(cv instanceof File)) {
      return NextResponse.json(
        {
          error:
            data.locale === "pl"
              ? "Dodaj swoje CV."
              : data.locale === "ua"
                ? "Будь ласка, додайте своє CV."
                : "Please upload your CV.",
        },
        { status: 400 },
      );
    }

    if (cv.size <= 0) {
      return NextResponse.json(
        {
          error:
            data.locale === "pl"
              ? "Przesłany plik CV jest pusty."
              : data.locale === "ua"
                ? "Завантажений файл CV порожній."
                : "The uploaded CV is empty.",
        },
        { status: 400 },
      );
    }

    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          error:
            data.locale === "pl"
              ? "Rozmiar CV nie może przekraczać 5 MB."
              : data.locale === "ua"
                ? "Розмір CV не може перевищувати 5 МБ."
                : "Your CV must be smaller than 5 MB.",
        },
        { status: 400 },
      );
    }

    if (!allowedMimeTypes.has(cv.type)) {
      return NextResponse.json(
        {
          error:
            data.locale === "pl"
              ? "CV musi być w formacie PDF, DOC lub DOCX."
              : data.locale === "ua"
                ? "CV має бути у форматі PDF, DOC або DOCX."
                : "CV must be uploaded as PDF, DOC or DOCX.",
        },
        { status: 400 },
      );
    }

    // ---------------------------------------------------------
    // ENVIRONMENT
    // ---------------------------------------------------------

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO = SMTP_USER,
      CONTACT_FROM = SMTP_USER,
      NODE_ENV,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO
    ) {
      if (NODE_ENV !== "production") {
        console.warn(
          "[job-application] Missing SMTP environment variables.",
        );

        return NextResponse.json({
          ok: true,
          dev: true,
        });
      }

      return NextResponse.json(
        {
          error: "Server email is not configured.",
        },
        { status: 500 },
      );
    }

    // ---------------------------------------------------------
    // SMTP
    // ---------------------------------------------------------

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // ---------------------------------------------------------
    // EMAIL SUBJECT
    // ---------------------------------------------------------

    const subject =
      data.locale === "pl"
        ? `Nowa aplikacja — ${jobTitle} — ${data.name}`
        : data.locale === "ua"
          ? `Нова заявка — ${jobTitle} — ${data.name}`
          : `New job application — ${jobTitle} — ${data.name}`;

    // ---------------------------------------------------------
    // ADMIN TEXT
    // ---------------------------------------------------------

    const adminText = [
      "NEW JOB APPLICATION",
      "",

      `Job: ${jobTitle}`,
      `Job Code: ${job.code}`,
      `Location: ${jobLocation}`,
      `Category: ${jobCategory}`,
      `Job Slug: ${job.slug}`,
      `Application language: ${data.locale}`,

      "",

      "CANDIDATE INFORMATION",
      "",

      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Current location: ${data.currentLocation}`,
      `Citizenship: ${data.citizenship}`,
      `Work eligibility in Poland: ${data.workEligibility}`,
      `Currently a student: ${data.studentStatus}`,
      `Graduate of a Polish university: ${data.polishUniversityGraduate}`,
      `Availability: ${data.availability}`,
      `Languages: ${data.languages || "-"}`,

      "",

      "WORK EXPERIENCE",
      data.experience,

      "",

      "ADDITIONAL MESSAGE",
      data.message || "-",

      "",

      `CV: ${cv.name}`,
    ].join("\n");

    // ---------------------------------------------------------
    // ADMIN HTML
    // ---------------------------------------------------------

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#182230;">

        <h2 style="color:#0E2942;">
          New Job Application
        </h2>

        <h3 style="color:#123B63;">
          Position
        </h3>

        <p>
          <strong>Job:</strong><br />
          ${escapeHtml(jobTitle)}
        </p>

        <p>
          <strong>Job Code:</strong><br />
          ${escapeHtml(job.code)}
        </p>

        <p>
          <strong>Location:</strong><br />
          ${escapeHtml(jobLocation)}
        </p>

        <p>
          <strong>Category:</strong><br />
          ${escapeHtml(jobCategory)}
        </p>

        <p>
          <strong>Application language:</strong><br />
          ${escapeHtml(data.locale)}
        </p>

        <hr />

        <h3 style="color:#123B63;">
          Candidate Information
        </h3>

        <p>
          <strong>Name:</strong><br />
          ${escapeHtml(data.name)}
        </p>

        <p>
          <strong>Email:</strong><br />
          ${escapeHtml(data.email)}
        </p>

        <p>
          <strong>Phone:</strong><br />
          ${escapeHtml(data.phone)}
        </p>

        <p>
          <strong>Current location:</strong><br />
          ${escapeHtml(data.currentLocation)}
        </p>

        <p>
          <strong>Citizenship:</strong><br />
          ${escapeHtml(data.citizenship)}
        </p>

        <p>
          <strong>Work eligibility in Poland:</strong><br />
          ${escapeHtml(data.workEligibility)}
        </p>

        <p>
          <strong>Currently a student:</strong><br />
          ${escapeHtml(data.studentStatus)}
        </p>

        <p>
          <strong>Graduate of a Polish university:</strong><br />
          ${escapeHtml(data.polishUniversityGraduate)}
        </p>

        <p>
          <strong>Availability:</strong><br />
          ${escapeHtml(data.availability)}
        </p>

        <p>
          <strong>Languages:</strong><br />
          ${escapeHtml(data.languages || "-")}
        </p>

        <hr />

        <h3 style="color:#123B63;">
          Work Experience
        </h3>

        <p style="white-space:pre-wrap;">
          ${escapeHtml(data.experience)}
        </p>

        <h3 style="color:#123B63;">
          Additional Message
        </h3>

        <p style="white-space:pre-wrap;">
          ${escapeHtml(data.message || "-")}
        </p>

        <hr />

        <p>
          <strong>CV:</strong>
          ${escapeHtml(cv.name)}
        </p>

      </div>
    `;

    // ---------------------------------------------------------
    // SEND TO H&M SYNERGY
    // ---------------------------------------------------------

    await transporter.sendMail({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      replyTo: data.email,
      subject,
      text: adminText,
      html: adminHtml,

      attachments: [
        {
          filename: cv.name,
          content: Buffer.from(await cv.arrayBuffer()),
          contentType: cv.type,
        },
      ],
    });

    console.log(
      "[job-application] Company notification sent successfully.",
    );

    // ---------------------------------------------------------
    // AUTO-REPLY
    // ---------------------------------------------------------

    try {
      const autoSubject =
        data.locale === "pl"
          ? `Otrzymaliśmy Twoją aplikację — ${jobTitle} | H&M Synergy`
          : data.locale === "ua"
            ? `Ми отримали вашу заявку — ${jobTitle} | H&M Synergy`
            : `Application received — ${jobTitle} | H&M Synergy`;

      const autoText =
        data.locale === "pl"
          ? [
              "Dziękujemy za aplikowanie do H&M Synergy.",
              "",
              "Otrzymaliśmy Twoją aplikację na następujące stanowisko:",
              "",
              `Stanowisko: ${jobTitle}`,
              `Kod oferty: ${job.code}`,
              `Lokalizacja: ${jobLocation}`,
              "",
              "Nasz zespół rekrutacyjny przeanalizuje Twoją aplikację i skontaktuje się z Tobą, jeśli Twój profil będzie odpowiadał stanowisku.",
              "",
              "H&M Synergy Sp. z o.o.",
            ].join("\n")
          : data.locale === "ua"
            ? [
                "Дякуємо, що подали заявку до H&M Synergy.",
                "",
                "Ми отримали вашу заявку на таку вакансію:",
                "",
                `Посада: ${jobTitle}`,
                `Код вакансії: ${job.code}`,
                `Місце роботи: ${jobLocation}`,
                "",
                "Наша рекрутингова команда розгляне вашу заявку та зв'яжеться з вами, якщо ваш профіль відповідатиме вимогам вакансії.",
                "",
                "H&M Synergy Sp. z o.o.",
              ].join("\n")
            : [
                "Thank you for applying to H&M Synergy.",
                "",
                "We have received your application for the following position:",
                "",
                `Position: ${jobTitle}`,
                `Job Code: ${job.code}`,
                `Location: ${jobLocation}`,
                "",
                "Our recruitment team will review your application and contact you if your profile matches the position.",
                "",
                "H&M Synergy Sp. z o.o.",
              ].join("\n");

      await transporter.sendMail({
        to: data.email,
        from: CONTACT_FROM,
        replyTo: CONTACT_TO,
        subject: autoSubject,
        text: autoText,
      });

      console.log(
        "[job-application] Candidate auto-reply sent successfully.",
      );
    } catch (error) {
      console.error(
        "[job-application] Candidate auto-reply failed:",
        error,
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Application submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "[job-application] Unexpected error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while processing your application.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}