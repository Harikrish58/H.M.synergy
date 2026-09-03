import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { homeContent } from "@/app/content/home";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const content = homeContent.pl;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,

  alternates: {
    canonical: "/pl",
    languages: {
      en: "/en",
      pl: "/pl",
      uk: "/ua",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl",
    siteName: "H&M Synergy",
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Praca i rekrutacja w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "group inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const textLink =
  "group inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

type DatabaseJob = {
  id: string;
  slug: string;
  title_pl: string;
  category: string;
  location_pl: string;
  employment_type: string;
  shifts: string | null;
};

type HomeJob = {
  id: string;
  title: string;
  meta: string;
  details: string;
  href: string;
};

const permanentJob: HomeJob = {
  id: "permanent-injection-machine-operator",
  title: "Operator wtryskarki",
  meta: "Produkcja · Wrocław, Polska",
  details: "Pełny etat · Praca zmianowa",
  href: "/pl/jobs/injection-machine-operator",
};

async function getHomeJobs(): Promise<HomeJob[]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("jobs")
    .select(
      `
        id,
        slug,
        title_pl,
        category,
        location_pl,
        employment_type,
        shifts
      `,
    )
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(2);

  if (error) {
    console.error("[home-pl] Failed to load jobs:", error);

    return [permanentJob];
  }

  const databaseJobs = ((data ?? []) as DatabaseJob[]).map((job) => ({
    id: job.id,
    title: job.title_pl,
    meta: `${job.category} · ${job.location_pl}`,
    details: [job.employment_type, job.shifts].filter(Boolean).join(" · "),
    href: `/pl/jobs/${job.slug}`,
  }));

  return [permanentJob, ...databaseJobs];
}

export default async function HomePage() {
  const homeJobs = await getHomeJobs();

  return (
    <main className="overflow-x-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        aria-labelledby="hero-title"
        className="w-full border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col lg:grid lg:min-h-[calc(100dvh-90px)] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-8 lg:py-12 xl:pr-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 shrink-0 bg-[#159A86]"
                  aria-hidden="true"
                />

                <p className={sectionLabel}>{content.hero.eyebrow}</p>
              </div>

              <h1
                id="hero-title"
                className="mt-5 text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[3.5rem] xl:text-[4.2rem]"
              >
                {content.hero.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                {content.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/pl/employers" className={primaryLink}>
                  {content.hero.employerCta}

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/pl/employees" className={secondaryLink}>
                  {content.hero.employeeCta}

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DCE4EB] pt-6">
                {content.hero.areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 shrink-0 bg-[#159A86]"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5B6878]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full border-t border-[#DCE4EB] sm:h-[500px] lg:h-auto lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/manufacturing-workforce-hero.png"
              alt="Pracownicy w profesjonalnym środowisku produkcyjnym"
              fill
              priority
              sizes="(min-width: 1024px) 49vw, 100vw"
              className="object-cover object-center"
            />

            <div
              className="absolute inset-0 bg-gradient-to-r from-[#0E2942]/15 via-transparent to-[#0E2942]/5"
              aria-hidden="true"
            />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="max-w-sm border border-white/20 bg-[#0E2942]/90 p-5 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8FD8CA]">
                  {content.hero.imageLabel}
                </p>

                <p className="mt-2 text-base font-semibold leading-6 text-white">
                  {content.hero.imageDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPANY
      ========================================================= */}
      <section
        aria-labelledby="company-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>{content.company.eyebrow}</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 id="company-title" className={sectionTitle}>
              {content.company.title}
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              {content.company.description}
            </p>

            <Link href="/pl/about" className={`${textLink} mt-8`}>
              {content.company.cta}

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        aria-labelledby="services-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB] px-6 py-20 sm:px-10 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className={sectionLabel}>{content.services.eyebrow}</p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h2 id="services-title" className={sectionTitle}>
                {content.services.title}
              </h2>

              <p className={`mt-5 max-w-2xl ${bodyText}`}>
                {content.services.description}
              </p>
            </div>

            <Link href="/pl/services" className={`${textLink} shrink-0`}>
              {content.services.cta}

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-14 grid border-t border-[#DCE4EB] md:grid-cols-3">
            {content.services.items.map((service, index) => (
              <article
                key={service.title}
                className="border-b border-[#DCE4EB] py-9 md:border-b-0 md:px-8 md:first:pl-0 md:[&:not(:last-child)]:border-r md:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight
                    className="h-4 w-4 text-[#A3AFBB]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#0E2942]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-[#5B6878]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          MANUFACTURING
      ========================================================= */}
      <section
        aria-labelledby="manufacturing-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>{content.manufacturing.eyebrow}</p>

            <div className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Produkcja i przemysł są ważnymi obszarami naszej działalności
              rekrutacyjnej.
            </div>
          </div>

          <div>
            <h2 id="manufacturing-title" className={sectionTitle}>
              {content.manufacturing.title}
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              {content.manufacturing.description}
            </p>

            <ul className="mt-10 border-y border-[#DCE4EB]">
              {content.manufacturing.positions.map((position, index) => (
                <li
                  key={position}
                  className="flex items-center justify-between gap-6 border-b border-[#DCE4EB] py-5 last:border-b-0"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                      {position}
                    </span>
                  </div>

                  <Check
                    className="h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>

            <Link href="/pl/jobs" className={`${textLink} mt-8`}>
              {content.manufacturing.cta}

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYERS
      ========================================================= */}
      <section
        aria-labelledby="employers-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB] px-6 py-20 sm:px-10 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <p className={sectionLabel}>{content.employers.eyebrow}</p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <h2 id="employers-title" className={sectionTitle}>
                {content.employers.title}
              </h2>

              <p className={`mt-6 max-w-xl ${bodyText}`}>
                {content.employers.description}
              </p>

              <Link href="/pl/employers" className={`${primaryLink} mt-8`}>
                {content.employers.cta}

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <ol className="border-t border-[#DCE4EB]">
              {content.employers.steps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#DCE4EB] py-6"
                >
                  <span className="text-sm font-bold text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg font-semibold leading-7 text-[#182230]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYEES
      ========================================================= */}
      <section
        aria-labelledby="employees-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>{content.employees.eyebrow}</p>

            <div className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Możliwości dla osób na różnych etapach kariery zawodowej.
            </div>
          </div>

          <div>
            <h2 id="employees-title" className={sectionTitle}>
              {content.employees.title}
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              {content.employees.description}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.employees.audience.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border border-[#E2E8EF] bg-[#F7F9FB] p-4"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-semibold leading-6 text-[#182230]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pl/jobs" className={primaryLink}>
                {content.employees.jobsCta}

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link href="/pl/contact" className={secondaryLink}>
                {content.employees.contactCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT JOBS — DYNAMIC
      ========================================================= */}
      <section
        aria-labelledby="jobs-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB] px-6 py-20 sm:px-10 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className={sectionLabel}>{content.jobs.eyebrow}</p>

              <h2 id="jobs-title" className={`mt-5 ${sectionTitle}`}>
                {content.jobs.title}
              </h2>

              <p className={`mt-5 max-w-2xl ${bodyText}`}>
                {content.jobs.description}
              </p>
            </div>

            <Link href="/pl/jobs" className={`${textLink} shrink-0`}>
              Zobacz wszystkie oferty
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-12 border-t border-[#DCE4EB]">
            {homeJobs.map((job) => (
              <article
                key={job.id}
                className="grid gap-5 border-b border-[#DCE4EB] py-7 md:grid-cols-[1.15fr_0.7fr_0.8fr_auto] md:items-center md:gap-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#0E2942]">
                    {job.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#8A96A3] md:hidden">
                    {job.meta}
                  </p>
                </div>

                <p className="hidden text-sm text-[#5B6878] md:block">
                  {job.meta}
                </p>

                <p className="text-sm text-[#5B6878]">{job.details}</p>

                <Link
                  href={job.href}
                  className={`${textLink} justify-self-start md:justify-self-end`}
                >
                  Zobacz stanowisko
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY H&M SYNERGY
      ========================================================= */}
      <section
        aria-labelledby="why-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <p className={sectionLabel}>{content.why.eyebrow}</p>

          <h2 id="why-title" className={`mt-5 max-w-2xl ${sectionTitle}`}>
            {content.why.title}
          </h2>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {content.why.items.map((item, index) => (
              <article
                key={item.title}
                className="border-b border-[#DCE4EB] py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:last:pr-0"
              >
                <span className="text-sm font-bold text-[#159A86]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#0E2942]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6878]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        aria-labelledby="final-cta-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA] px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>H&M Synergy</p>

            <h2
              id="final-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              {content.finalCta.title}
            </h2>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              {content.finalCta.description}
            </p>
          </div>

          <Link href="/pl/contact" className={`${primaryLink} shrink-0`}>
            {content.finalCta.cta}

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
