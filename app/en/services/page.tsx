import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { servicesContent } from "@/app/content/services";

export const metadata: Metadata = {
  title: servicesContent.seo.title,
  description: servicesContent.seo.description,
  keywords: [...servicesContent.seo.keywords],

  alternates: {
    canonical: "/en/services",
    languages: {
      en: "/en/services",
      pl: "/pl/services",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/services",
    siteName: "H&M Synergy",
    title: servicesContent.seo.ogTitle,
    description: servicesContent.seo.ogDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Employment and Business Services in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: servicesContent.seo.ogTitle,
    description: servicesContent.seo.ogDescription,
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const textLink =
  "group inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText =
  "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function ServicesPage() {
  const { hero, services, cta } = servicesContent;

  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="services-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className={sectionLabel}>{hero.eyebrow}</p>
            </div>

            <h1
              id="services-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
            >
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES — WHITE
      ========================================================= */}
      <section
        aria-labelledby="service-areas-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            {/* Introduction */}
            <div>
              <p className={sectionLabel}>What we provide</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Employment, workforce and business solutions designed around
                the practical needs of companies operating in Poland.
              </p>
            </div>

            {/* Service list */}
            <div>
              <h2 id="service-areas-title" className="sr-only">
                Our service areas
              </h2>

              <div className="border-t border-[#DCE4EB]">
                {services.map((service, index) => (
                  <article
                    key={service.title}
                    className="grid gap-6 border-b border-[#DCE4EB] py-9 sm:grid-cols-[56px_1fr_auto] sm:items-start sm:gap-8 sm:py-11"
                  >
                    <span
                      className="text-sm font-bold text-[#159A86]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#0E2942] sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      className={`${textLink} sm:mt-1`}
                      aria-label={`View ${service.title} service`}
                    >
                      View service

                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="approach-title"
        className="border-b border-[#DCE4EB] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Our approach</p>

            <h2 id="approach-title" className={`mt-5 ${sectionTitle}`}>
              Workforce support that works around your business.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              Every business has different workforce requirements. We focus on
              understanding your operation, identifying the people you need and
              supporting the process from recruitment through ongoing
              coordination.
            </p>

            <div className="mt-10 border-t border-[#DCE4EB]">
              <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#159A86]"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-semibold text-[#0E2942]">
                    Understand your requirements
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                    We learn about the positions, skills, schedules and
                    workforce requirements of your operation.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#159A86]"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-semibold text-[#0E2942]">
                    Find suitable candidates
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                    We source candidates according to the requirements of each
                    position, workplace and employer.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-6">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[#159A86]"
                  aria-hidden="true"
                />

                <div>
                  <h3 className="font-semibold text-[#0E2942]">
                    Support the employment process
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                    We remain available to support communication and workforce
                    coordination throughout the cooperation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA — WHITE
      ========================================================= */}
      <section
        aria-labelledby="services-cta-title"
        className="border-b border-[#DCE4EB] bg-white"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 px-6 py-20 sm:px-10 lg:flex-row lg:items-end lg:px-8 lg:py-24">
          <div>
            <p className={sectionLabel}>{cta.eyebrow}</p>

            <h2
              id="services-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              {cta.title}
            </h2>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              {cta.description}
            </p>
          </div>

          <Link href={cta.href} className={`${primaryLink} shrink-0`}>
            {cta.label}

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