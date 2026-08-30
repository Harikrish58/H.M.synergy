import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  UserPlus,
  ClipboardCheck,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Employment & Recruitment Services in Poland | H&M Synergy",
  description:
    "H&M Synergy provides recruitment, staffing and workforce solutions in Poland for manufacturing, production, warehousing, logistics and other operational roles.",

  keywords: [
    "employment agency Poland",
    "recruitment agency Poland",
    "employment services Poland",
    "recruitment services Poland",
    "staffing Poland",
    "workforce solutions Poland",
    "manufacturing recruitment Poland",
    "production workers Poland",
    "production jobs Poland",
    "warehouse workers Poland",
    "logistics workers Poland",
    "Ukrainian workers Poland",
    "student jobs Poland",
    "graduate jobs Poland",
  ],

  alternates: {
    canonical: "/en/services/employment",
    languages: {
      en: "/en/services/employment",
      pl: "/pl/services/employment",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/services/employment",
    siteName: "H&M Synergy",
    title: "Employment & Recruitment Services in Poland | H&M Synergy",
    description:
      "Recruitment, staffing and workforce solutions for businesses in Poland across manufacturing, production, warehousing, logistics and other operational sectors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Employment and Recruitment Services in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Employment & Recruitment Services in Poland | H&M Synergy",
    description:
      "Recruitment, staffing and workforce solutions for businesses operating in Poland.",
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

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText =
  "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

const solutions = [
  {
    icon: Users,
    number: "01",
    title: "Staffing Solutions",
    description:
      "We help businesses identify suitable workers for production, manufacturing, warehousing, logistics and other operational positions.",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Recruitment",
    description:
      "We source candidates according to the requirements of the position, workplace, schedule and employer.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Workforce Coordination",
    description:
      "We support communication and coordination throughout the recruitment and employment process.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Ongoing Support",
    description:
      "We remain available during cooperation to help maintain clear communication between employers, workers and our team.",
  },
];

const environments = [
  "Manufacturing",
  "Production",
  "Warehousing",
  "Logistics",
  "Food & processing",
  "Assembly",
];

const positions = [
  "Injection machine operators",
  "Production workers",
  "Machine operators",
  "Assembly workers",
  "Warehouse workers",
  "Logistics workers",
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share the positions, number of workers, skills, schedule and other requirements of your operation.",
  },
  {
    number: "02",
    title: "We source suitable candidates",
    description:
      "We look for candidates whose experience, skills and availability match your requirements.",
  },
  {
    number: "03",
    title: "Candidates are selected",
    description:
      "We coordinate the next steps and provide suitable candidates for your consideration.",
  },
  {
    number: "04",
    title: "The employment process begins",
    description:
      "Once the agreed process is completed, workers can begin their roles and we continue to support the cooperation.",
  },
];

const benefits = [
  "Access to suitable candidates",
  "Recruitment support",
  "Flexible workforce solutions",
  "Clear communication",
  "Workforce coordination",
  "Support throughout cooperation",
];

export default function WorkforceSolutionsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="employment-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 shrink-0 bg-[#159A86]"
                  aria-hidden="true"
                />

                <p className={sectionLabel}>Employment & Recruitment</p>
              </div>

              <h1
                id="employment-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
              >
                The people your business needs to keep moving.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy helps companies in Poland with recruitment,
                staffing and workforce solutions. We source candidates for
                manufacturing, production, warehousing, logistics, food
                processing and other operational environments.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/en/employers" className={primaryLink}>
                  Find Workers

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/en/contact" className={secondaryLink}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO — WHITE
      ========================================================= */}
      <section
        aria-labelledby="workforce-support-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Workforce support</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 id="workforce-support-title" className={sectionTitle}>
              Recruitment and staffing built around your operation.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Finding and maintaining a dependable workforce can take time and
              resources. H&M Synergy works with employers to understand their
              requirements and connect them with suitable candidates.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              Whether you need additional workers for a growing operation,
              ongoing recruitment support or candidates for specific
              positions, we can help develop a workforce solution around your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="solutions-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>What we provide</p>

            <h2 id="solutions-title" className={`mt-5 ${sectionTitle}`}>
              Practical workforce solutions for employers.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Our services are designed to make recruitment and workforce
              coordination more straightforward for businesses.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="border-b border-[#DCE4EB] px-0 py-8 sm:px-7 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:first:pl-0 lg:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#159A86]">
                      {solution.number}
                    </span>

                    <Icon
                      className="h-5 w-5 text-[#8A96A3]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#0E2942]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#5B6878]">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK ENVIRONMENTS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="environments-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Work environments</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              We support businesses across different operational environments
              and workforce requirements.
            </p>
          </div>

          <div>
            <h2 id="environments-title" className={sectionTitle}>
              Recruitment across key operational sectors.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Our recruitment approach can be adapted to different workplaces,
              schedules and operational requirements.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {environments.map((environment, index) => (
                <div
                  key={environment}
                  className="flex items-center gap-5 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                    {environment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="positions-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Positions</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Examples of positions we may recruit for depending on current
              employer requirements and available vacancies.
            </p>
          </div>

          <div>
            <h2 id="positions-title" className={sectionTitle}>
              Find the people you need.
            </h2>

            <ul className="mt-10 border-y border-[#DCE4EB]">
              {positions.map((position, index) => (
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

            <Link href="/en/contact" className={`${primaryLink} mt-8`}>
              Request Workers

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>How it works</p>

            <h2 id="process-title" className={`mt-5 ${sectionTitle}`}>
              A straightforward workforce process.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              We keep the process clear and focused on your actual workforce
              requirements.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-b border-[#DCE4EB] py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:last:pr-0"
              >
                <span className="text-sm font-bold text-[#159A86]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#0E2942]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6878]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="benefits-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Why work with us</p>

            <h2 id="benefits-title" className={`mt-5 ${sectionTitle}`}>
              A workforce partner focused on your requirements.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              We aim to make workforce coordination easier through recruitment
              support, clear communication and practical solutions adapted to
              each employer.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-semibold text-[#182230]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    FINAL CTA — LIGHT GRAY
========================================================= */}
<section
  aria-labelledby="employment-cta-title"
  className="border-y border-[#DCE4EB] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
>
  <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
        Need workers?
      </p>

      <h2
        id="employment-cta-title"
        className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
      >
        Let&apos;s build the right workforce for your business.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
        Tell us about your workforce requirements and our team will
        discuss the recruitment process and next steps with you.
      </p>
    </div>

    <Link
      href="/en/contact"
      className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
    >
      Request Workers

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