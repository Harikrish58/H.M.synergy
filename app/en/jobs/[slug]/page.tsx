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

async function getPublishedJob(slug: string): Promise<JobDetail | null> {
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
    console.error("Failed to load published job:", error);
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

    responsibilities_en: Array.isArray(data.responsibilities_en)
      ? data.responsibilities_en
      : [],
    responsibilities_pl: Array.isArray(data.responsibilities_pl)
      ? data.responsibilities_pl
      : [],
    responsibilities_ua: Array.isArray(data.responsibilities_ua)
      ? data.responsibilities_ua
      : [],

    requirements_en: Array.isArray(data.requirements_en)
      ? data.requirements_en
      : [],
    requirements_pl: Array.isArray(data.requirements_pl)
      ? data.requirements_pl
      : [],
    requirements_ua: Array.isArray(data.requirements_ua)
      ? data.requirements_ua
      : [],

    benefits_en: Array.isArray(data.benefits_en)
      ? data.benefits_en
      : [],
    benefits_pl: Array.isArray(data.benefits_pl)
      ? data.benefits_pl
      : [],
    benefits_ua: Array.isArray(data.benefits_ua)
      ? data.benefits_ua
      : [],

    working_hours: data.working_hours,
    shifts: data.shifts,
    overtime: data.overtime,
    weekend_work: data.weekend_work,

    accommodation: data.accommodation,
    transportation: data.transportation,

    experience: data.experience,
    education: data.education,
    language_requirements: data.language_requirements,
    other_requirements: data.other_requirements,

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
      title: "Job Not Found | H&M Synergy",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${job.title_en} | ${job.location_en} | H&M Synergy`,
    description: `Apply for ${job.title_en} in ${job.location_en}. View job details, requirements, responsibilities, salary and application information.`,
    alternates: {
      languages: {
        en: `/en/jobs/${job.slug}`,
        pl: `/pl/jobs/${job.slug}`,
        uk: `/ua/jobs/${job.slug}`,
      },
    },
  };
}

export default async function EnglishJobDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const job = await getPublishedJob(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailPage job={job} locale="en" />;
}