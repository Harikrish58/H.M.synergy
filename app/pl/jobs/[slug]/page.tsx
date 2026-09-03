import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JobDetailPage, {
  type JobDetail,
} from "@/components/JobDetailPage";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function stringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is string => typeof item === "string",
  );
}

async function getPublishedJob(
  slug: string,
): Promise<JobDetail | null> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("jobs")
    .select(`
      id,
      code,
      slug,
      status,
      title_en,
      title_pl,
      title_ua,
      category,
      location_en,
      location_pl,
      location_ua,
      workers_needed,
      employment_type,
      salary,
      start_date,
      description_en,
      description_pl,
      description_ua,
      responsibilities_en,
      responsibilities_pl,
      responsibilities_ua,
      requirements_en,
      requirements_pl,
      requirements_ua,
      benefits_en,
      benefits_pl,
      benefits_ua,
      working_hours,
      shifts,
      overtime,
      weekend_work,
      accommodation,
      transportation,
      experience,
      education,
      language_requirements,
      other_requirements,
      company_name,
      published_at
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error(
      "[public-job] Failed to load published job:",
      error,
    );

    return null;
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    code: data.code,
    slug: data.slug,
    status: data.status,

    title_en: data.title_en,
    title_pl: data.title_pl,
    title_ua: data.title_ua,

    category: data.category,

    location_en: data.location_en,
    location_pl: data.location_pl,
    location_ua: data.location_ua,

    workers_needed: data.workers_needed,
    employment_type: data.employment_type,
    salary: data.salary,
    start_date: data.start_date,

    description_en: data.description_en,
    description_pl: data.description_pl,
    description_ua: data.description_ua,

    responsibilities_en: stringArray(
      data.responsibilities_en,
    ),
    responsibilities_pl: stringArray(
      data.responsibilities_pl,
    ),
    responsibilities_ua: stringArray(
      data.responsibilities_ua,
    ),

    requirements_en: stringArray(
      data.requirements_en,
    ),
    requirements_pl: stringArray(
      data.requirements_pl,
    ),
    requirements_ua: stringArray(
      data.requirements_ua,
    ),

    benefits_en: stringArray(data.benefits_en),
    benefits_pl: stringArray(data.benefits_pl),
    benefits_ua: stringArray(data.benefits_ua),

    working_hours: data.working_hours,
    shifts: data.shifts,
    overtime: data.overtime,
    weekend_work: data.weekend_work,

    accommodation: data.accommodation,
    transportation: data.transportation,

    experience: data.experience,
    education: data.education,
    language_requirements:
      data.language_requirements,
    other_requirements:
      data.other_requirements,

    company_name: data.company_name,
    published_at: data.published_at,
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const job = await getPublishedJob(slug);

  if (!job) {
    return {
      title: "Oferta pracy nie znaleziona | H&M Synergy",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${job.title_pl} | ${job.location_pl} | H&M Synergy`,

    description:
      `Aplikuj na stanowisko ${job.title_pl} w ${job.location_pl}. ` +
      "Sprawdź szczegóły oferty pracy, wymagania, obowiązki, " +
      "wynagrodzenie oraz informacje dotyczące aplikowania.",

    alternates: {
      languages: {
        en: `/en/jobs/${job.slug}`,
        pl: `/pl/jobs/${job.slug}`,
        uk: `/ua/jobs/${job.slug}`,
      },
    },
  };
}

export default async function PolishJobDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const job = await getPublishedJob(slug);

  if (!job) {
    notFound();
  }

  return (
    <JobDetailPage
      job={job}
      locale="pl"
    />
  );
}