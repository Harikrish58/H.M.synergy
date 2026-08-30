import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

import ContactForm from "@/components/ContactForm";

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const textLink =
  "group inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText =
  "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export const metadata = {
  title: "Contact | H&M Synergy",
  description:
    "Contact H&M Synergy for workforce, recruitment, logistics and IT services in Poland.",
};

export default function EnglishContactPage() {
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

              <p className={sectionLabel}>Contact</p>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              Let&apos;s talk.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Whether you are looking for reliable workers, searching for your
              next job or need business support, our team is ready to help.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className={primaryLink}>
                Get in Touch
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/en/jobs" className={secondaryLink}>
                View Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section
        id="contact-form"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          {/* Introduction */}
          <div>
            <p className={sectionLabel}>Get in touch</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <h2 className={`mt-8 ${sectionTitle}`}>
              Tell us how we can help.
            </h2>

            <p className={`mt-6 max-w-md ${bodyText}`}>
              Whether you are an employer looking for workers, a job seeker
              looking for an opportunity, or interested in our business
              services, send us a message.
            </p>
          </div>

          {/* Single contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYERS / JOB SEEKERS
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Employers */}
            <article className="border-t border-[#DCE4EB] pt-7">
              <p className={sectionLabel}>For employers</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Looking for reliable workers?
              </h2>

              <p className={`mt-5 max-w-xl ${bodyText}`}>
                Tell us about your workforce requirements and we can discuss
                how H&amp;M Synergy can support your business.
              </p>

              <ul className="mt-8 border-y border-[#DCE4EB]">
                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    01
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Positions you need
                  </span>
                </li>

                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    02
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Number of workers
                  </span>
                </li>

                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    03
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Location and schedule
                  </span>
                </li>

                <li className="flex items-center gap-4 py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    04
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Expected start date
                  </span>
                </li>
              </ul>

              <Link href="/en/employers" className={`${textLink} mt-8`}>
                For Employers

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Job seekers */}
            <article className="border-t border-[#DCE4EB] pt-7">
              <p className={sectionLabel}>For job seekers</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Looking for your next opportunity?
              </h2>

              <p className={`mt-5 max-w-xl ${bodyText}`}>
                Browse our current vacancies or contact our recruitment team
                and tell us what type of work you are looking for.
              </p>

              <div className="mt-8 border-t border-[#DCE4EB]">
                <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                  <span className="text-sm font-bold text-[#159A86]">
                    01
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Browse current jobs
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Explore currently available employment opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                  <span className="text-sm font-bold text-[#159A86]">
                    02
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Submit your details
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Tell us about your experience and the type of work you
                      are interested in.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 py-6">
                  <span className="text-sm font-bold text-[#159A86]">
                    03
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Hear from our team
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Our recruitment team will contact you when there is a
                      suitable opportunity.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/en/jobs" className={`${textLink} mt-8`}>
                View Available Jobs

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
          CONTACT DETAILS
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>H&amp;M Synergy</p>

            <h2 className={`mt-5 ${sectionTitle}`}>
              We&apos;re here to help.
            </h2>

            <p className={`mt-6 max-w-md ${bodyText}`}>
              Contact us directly or send a message using the contact form
              above.
            </p>
          </div>

          <div>
            <dl className="border-t border-[#DCE4EB]">
              {/* Email */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Mail
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Email
                </dt>

                <dd>
                  <a
                    href="mailto:h.m.synergypl@gmail.com"
                    className="text-sm text-[#5B6878] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                  >
                    h.m.synergypl@gmail.com
                  </a>
                </dd>
              </div>

              {/* Phone */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Phone
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Phone
                </dt>

                <dd>
                  <a
                    href="tel:+48739686095"
                    className="text-sm leading-6 text-[#5B6878] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                  >
                    +48 739 686 095
                    <br />
                    +48 573 415 010
                  </a>
                </dd>
              </div>

              {/* Location */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <MapPin
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Location
                </dt>

                <dd className="text-sm text-[#5B6878]">
                  Wrocław, Poland
                </dd>
              </div>

              {/* Office hours */}
              <div className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Clock
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Office hours
                </dt>

                <dd className="text-sm leading-6 text-[#5B6878]">
                  Monday – Friday
                  <br />
                  08:00 – 18:00
                </dd>
              </div>
            </dl>
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
        H&amp;M Synergy
      </p>

      <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]">
        Have a question? Let&apos;s talk.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
        Whether you are an employer or a job seeker, our team is ready
        to discuss your needs.
      </p>
    </div>

    <a
      href="#contact-form"
      className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
    >
      Contact Us

      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  </div>
</section>
    </main>
  );
}