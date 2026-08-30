import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const focusAreas = [
  "Production & manufacturing",
  "Warehousing",
  "Logistics",
  "Other operational positions",
];

const approach = [
  {
    title: "Understand",
    description:
      "We first understand the requirements of the employer and the expectations of the candidate.",
  },
  {
    title: "Connect",
    description:
      "We work to match suitable people with suitable employment opportunities.",
  },
  {
    title: "Support",
    description:
      "We maintain clear communication and support throughout the recruitment and cooperation process.",
  },
];

const businessServices = [
  {
    title: "Logistics",
    description:
      "Logistics coordination and delivery support for businesses operating in Poland.",
    href: "/en/services/logistics",
  },
  {
    title: "IT & Web Applications",
    description:
      "Websites, applications and digital solutions designed to support modern businesses.",
    href: "/en/services/it",
  },
];

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const textLink =
  "group inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-[#F5F8FA]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#159A86]" />

              <p className={sectionLabel}>About H&M Synergy</p>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              People. Businesses. Better opportunities.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              H&M Synergy connects people looking for work with companies
              looking for reliable employees. We provide workforce and business
              support solutions for companies operating in Poland.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/en/contact" className={primaryLink}>
                Contact Us
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link href="/en/services" className={textLink}>
                Explore Our Services
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Who we are</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              A practical partner for workforce and business support in Poland.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              A workforce partner focused on people and business.
            </h2>

            <div className={`mt-6 max-w-2xl space-y-5 ${bodyText}`}>
              <p>
                H&M Synergy is a workforce solutions company operating in
                Poland. We connect employers with people who can support their
                day-to-day operations.
              </p>

              <p>
                Our recruitment activity has a strong focus on production and
                manufacturing environments, while our workforce solutions also
                support warehousing, logistics and other operational positions.
              </p>

              <p>
                We work with employers that need dependable people and
                candidates looking for stable employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AREAS OF EXPERIENCE
      ========================================================= */}
      <section className="border-y border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Areas of experience</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Workforce support across a range of operational environments.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              People for the work your business needs to get done.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              We focus on understanding the practical requirements of each
              workplace and connecting employers with suitable candidates.
            </p>

            <ul className="mt-10 border-y border-[#DCE4EB]">
              {focusAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex items-center justify-between gap-6 border-b border-[#DCE4EB] py-5 last:border-b-0"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                      {area}
                    </span>
                  </div>

                  <Check
                    className="h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOR EMPLOYERS / EMPLOYEES
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Employers */}
            <article className="border-t border-[#E2E8EF] pt-7">
              <p className={sectionLabel}>For employers</p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
                Reliable workforce support.
              </h2>

              <p className={`mt-5 max-w-md ${bodyText}`}>
                We help companies identify and recruit workers according to
                their operational requirements, while supporting communication
                and workforce coordination.
              </p>

              <Link href="/en/employers" className={`${textLink} mt-8`}>
                For Employers
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Employees */}
            <article className="border-t border-[#E2E8EF] pt-7">
              <p className={sectionLabel}>For job seekers</p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
                Opportunities for people.
              </h2>

              <p className={`mt-5 max-w-md ${bodyText}`}>
                We connect candidates with employment opportunities and support
                them throughout the recruitment process.
              </p>

              <Link href="/en/employees" className={`${textLink} mt-8`}>
                For Job Seekers
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <p className={sectionLabel}>Our approach</p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <h2 className={sectionTitle}>
                Professional.
                <br />
                Straightforward.
                <br />
                People-focused.
              </h2>
            </div>

            <div>
              <p className={bodyText}>
                We believe good workforce solutions start with understanding. By
                keeping communication clear and the process straightforward, we
                aim to create reliable cooperation between employers and
                candidates.
              </p>

              <ol className="mt-10 grid border-t border-[#DCE4EB] md:grid-cols-3">
                {approach.map((item, index) => (
                  <li
                    key={item.title}
                    className="border-b border-[#DCE4EB] py-8 md:border-b-0 md:px-8 md:first:pl-0 md:[&:not(:last-child)]:border-r md:last:pr-0"
                  >
                    <p className="text-sm font-bold text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-6 text-xl font-bold text-[#0E2942]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#5B6878]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEYOND WORKFORCE
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Our services</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Additional business support beyond recruitment and staffing.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>More than workforce solutions.</h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              H&M Synergy also provides selected business support services for
              companies operating in Poland.
            </p>

            <div className="mt-10 border-t border-[#DCE4EB]">
              {businessServices.map((service, index) => (
                <article
                  key={service.title}
                  className="grid gap-5 border-b border-[#DCE4EB] py-7 sm:grid-cols-[48px_1fr_auto] sm:items-start sm:gap-8"
                >
                  <span className="text-sm font-bold text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-[#0E2942]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-[#5B6878]">
                      {service.description}
                    </p>
                  </div>

                  <Link href={service.href} className={`${textLink} sm:mt-1`}>
                    View Service
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <Link href="/en/services" className={`${textLink} mt-8`}>
              Explore All Services
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-y border-[#DCE4EB] bg-[#F5F8FA] px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              Let&apos;s work together
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]">
              Whether you need reliable workers or business support, we&apos;d
              be happy to hear from you.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Tell us what you need and let&apos;s discuss how H&M Synergy can
              support your business or employment goals.
            </p>
          </div>

          <Link
            href="/en/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Contact Us
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
