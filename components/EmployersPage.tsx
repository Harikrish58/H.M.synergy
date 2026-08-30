import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const staffingSolutions = [
  {
    title: "Workforce Solutions",
    description:
      "Reliable workers for manufacturing, production, warehousing, logistics and other operational environments.",
  },
  {
    title: "Recruitment",
    description:
      "We source and identify suitable candidates according to the requirements of each position, workplace and employer.",
  },
  {
    title: "Workforce Coordination",
    description:
      "We support communication and coordination throughout the recruitment and employment process to keep cooperation organized.",
  },
];

const positions = [
  "Production workers",
  "Injection machine operators",
  "Machine operators",
  "Assembly workers",
  "Warehouse workers",
  "Logistics workers",
];

const steps = [
  {
    title: "Tell us your requirements",
    description:
      "Share the positions, number of workers, skills, experience and schedule required for your operation.",
  },
  {
    title: "We identify suitable candidates",
    description:
      "We source candidates whose skills, experience and availability match your workforce requirements.",
  },
  {
    title: "We coordinate the process",
    description:
      "Our team supports communication and coordination throughout recruitment and the employment process.",
  },
  {
    title: "Your workforce is ready",
    description:
      "Once the agreed process is completed, suitable workers can begin their roles according to the agreed arrangements.",
  },
];

const benefits = [
  {
    title: "Operational Experience",
    description:
      "We understand the practical workforce requirements of manufacturing, production and other demanding operational environments.",
  },
  {
    title: "Reliable Recruitment",
    description:
      "Candidates are sourced according to the requirements of the position, workplace, schedule and employer.",
  },
  {
    title: "Flexible Support",
    description:
      "Our recruitment and staffing solutions can be adapted to different workforce requirements and operating conditions.",
  },
  {
    title: "Clear Communication",
    description:
      "Straightforward coordination helps employers and workers stay informed throughout the recruitment process.",
  },
];

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function EmployersPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="employers-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className={sectionLabel}>For Employers</p>
            </div>

            <h1
              id="employers-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              Build a reliable workforce without slowing your business.
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>
              H&M Synergy helps employers in Poland recruit and staff workers
              for manufacturing, production, warehousing, logistics and other
              operational positions.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585] sm:text-base">
              From individual positions to ongoing workforce requirements, we
              help businesses find suitable candidates and coordinate the
              recruitment process.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={primaryLink}>
                Find Workers
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/en/contact" className={secondaryLink}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAFFING SOLUTIONS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="staffing-solutions-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>Staffing Solutions</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Practical recruitment and workforce support designed around the
                requirements of your business.
              </p>
            </div>

            <div>
              <h2 id="staffing-solutions-title" className="sr-only">
                Staffing and recruitment solutions for employers
              </h2>

              <div className="border-t border-[#DCE4EB]">
                {staffingSolutions.map((solution, index) => (
                  <article
                    key={solution.title}
                    className="grid gap-6 border-b border-[#DCE4EB] py-9 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-11"
                  >
                    <span className="text-sm font-bold text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#0E2942] sm:text-3xl">
                        {solution.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                        {solution.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFORCE AREAS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="workforce-areas-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Workforce Areas</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              We support employers across a range of operational environments
              and workforce requirements.
            </p>
          </div>

          <div>
            <h2 id="workforce-areas-title" className={sectionTitle}>
              Find the right people for your operation.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Our recruitment and staffing services support different
              departments, positions and operating environments. Manufacturing
              and production are key areas of our recruitment activity, with
              additional support for warehousing, logistics and other
              operational roles.
            </p>

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

            <a href="#contact" className={`${primaryLink} mt-8`}>
              Tell Us What You Need
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="recruitment-process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>How It Works</p>

              <h2
                id="recruitment-process-title"
                className={`mt-5 ${sectionTitle}`}
              >
                A straightforward recruitment process.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
                From your initial workforce requirements to candidate
                coordination, we keep the process clear and organized.
              </p>
            </div>

            <ol className="border-t border-[#DCE4EB]">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[48px_1fr] gap-5 border-b border-[#DCE4EB] py-7"
                >
                  <span className="text-sm font-bold text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-[#0E2942]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY H&M SYNERGY — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="why-hm-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <p className={sectionLabel}>Why H&M Synergy</p>

          <h2 id="why-hm-title" className={`mt-5 max-w-2xl ${sectionTitle}`}>
            A workforce partner focused on your requirements.
          </h2>

          <p className={`mt-6 max-w-2xl ${bodyText}`}>
            We aim to make workforce planning and recruitment easier through
            practical staffing solutions, suitable candidates and clear
            communication throughout the cooperation.
          </p>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="border-b border-[#DCE4EB] py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:last:pr-0"
              >
                <span className="text-sm font-bold text-[#159A86]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#0E2942]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6878]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA — LIGHT GRAY
      ========================================================= */}
      <section
        id="contact"
        aria-labelledby="employer-contact-title"
        className="border-y border-[#E2E8EF] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>Need Workers?</p>

            <h2
              id="employer-contact-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Let&apos;s discuss your workforce requirements.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Tell us what positions you need, how many workers you are looking
              for and when you need them. Our team will discuss the most
              suitable recruitment and staffing solution for your business.
            </p>
          </div>

          <Link
            href="/en/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Contact H&M Synergy
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
