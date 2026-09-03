import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import JobApplicationForm from "@/components/JobApplicationForm";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type JobRow = {
  id: string;
  slug: string;
  code: string;
  status: "draft" | "published" | "closed";

  title_en: string;
  title_pl: string;
  title_ua: string;

  category: string;

  location_en: string;
  location_pl: string;
  location_ua: string;

  workers_needed: number;
  employment_type: string | null;
  salary: string | null;
  start_date: string | null;

  description_en: string;
  description_pl: string;
  description_ua: string;

  responsibilities_en: string[];
  responsibilities_pl: string[];
  responsibilities_ua: string[];

  requirements_en: string[];
  requirements_pl: string[];
  requirements_ua: string[];

  benefits_en: string[];
  benefits_pl: string[];
  benefits_ua: string[];

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

  company_name: string | null;
  published_at: string | null;
};

async function getPublishedJob(slug: string): Promise<JobRow | null> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("jobs")
    .select(
      `
        id,
        slug,
        code,
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
      `,
    )
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Failed to load published job:", error);
    return null;
  }

  return data as JobRow | null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getPublishedJob(slug);

  if (!job) {
    return {
      title: "Aplikacja na stanowisko | H&M Synergy",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `Aplikuj na stanowisko ${job.title_pl} | H&M Synergy`,
    description: `Aplikuj na stanowisko ${job.title_pl} w ${job.location_pl}. Prześlij swoje dane i CV do H&M Synergy.`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PolishJobApplicationPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const job = await getPublishedJob(slug);

  if (!job) {
    return (
      <main className="min-h-[70vh] bg-white px-6 py-20 sm:px-10 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
            Aplikacja na stanowisko
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#0E2942]">
            Nie znaleziono stanowiska
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#5B6878]">
            Stanowisko, na które próbujesz aplikować, nie jest już dostępne
            lub nie istnieje.
          </p>

          <Link
            href="/pl/jobs"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
          >
            <ArrowLeft className="h-4 w-4" />
            Zobacz wszystkie oferty pracy
          </Link>
        </div>
      </main>
    );
  }

  /*
   * The Polish application route uses the Polish
   * title, location and category.
   */
  const localizedJob = {
    slug: job.slug,
    code: job.code,
    title: job.title_pl,
    location: job.location_pl,
    category: job.category,
  };

  /*
   * JobApplicationForm currently expects the old Job shape
   * from lib/jobs.ts.
   *
   * We provide the same compatible shape here while
   * keeping the actual vacancy data in Supabase.
   */
  const applicationJob = {
    slug: job.slug,
    code: job.code,
    title: {
      en: job.title_en,
      pl: job.title_pl,
      ua: job.title_ua,
    },
    location: {
      en: job.location_en,
      pl: job.location_pl,
      ua: job.location_ua,
    },
    category: {
      en: job.category,
      pl: job.category,
      ua: job.category,
    },
  };

  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-[#F5F8FA]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10 lg:px-8 lg:py-20">
          <Link
            href={`/pl/jobs/${job.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            <ArrowLeft className="h-4 w-4" />
            Powrót do oferty
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                Aplikacja na stanowisko
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]">
              Aplikuj na
              <br className="hidden sm:block" /> {localizedJob.title}
            </h1>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#394656]">
              <span>{localizedJob.location}</span>
              <span>{localizedJob.category}</span>
              <span>Kod oferty: {job.code}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              Twoja aplikacja
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
              Opowiedz nam o sobie.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Wypełnij formularz i prześlij swoje CV. Twoja aplikacja
              zostanie bezpośrednio przekazana do naszego zespołu
              rekrutacyjnego dla tego stanowiska.
            </p>

            <div className="mt-8 border-l-2 border-[#159A86] bg-[#F5F8FA] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                Aplikujesz na
              </p>

              <p className="mt-2 font-bold text-[#0E2942]">
                {localizedJob.title}
              </p>

              <p className="mt-1 text-sm text-[#5B6878]">
                {localizedJob.location} · {job.code}
              </p>
            </div>
          </div>

          <JobApplicationForm
            job={applicationJob}
            locale="pl"
          />
        </div>
      </section>
    </main>
  );
}