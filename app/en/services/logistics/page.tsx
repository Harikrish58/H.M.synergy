import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Truck,
  CalendarDays,
  Phone,
  BarChart3,
  FileCheck2,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics Services in Poland | Transport Coordination",
  description:
    "H&M Synergy provides logistics coordination, transport sourcing, delivery planning and communication support for businesses operating in Poland.",

  keywords: [
    "logistics services Poland",
    "logistics coordination Poland",
    "transport coordination Poland",
    "transport sourcing Poland",
    "delivery coordination Poland",
    "logistics support for businesses",
    "transport management Poland",
    "logistics company Poland",
    "business logistics Poland",
    "H&M Synergy logistics",
  ],

  alternates: {
    canonical: "/en/services/logistics",
    languages: {
      en: "/en/services/logistics",
      pl: "/pl/services/logistics",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/services/logistics",
    siteName: "H&M Synergy",
    title: "Logistics Services in Poland | H&M Synergy",
    description:
      "Logistics coordination, transport sourcing and delivery management support for businesses operating in Poland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Logistics Services in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Logistics Services in Poland | H&M Synergy",
    description:
      "Logistics coordination, transport sourcing and delivery support for businesses in Poland.",
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

const services = [
  {
    icon: Search,
    title: "Transport Planning",
    description:
      "We review shipment requirements, delivery locations, schedules and other operational needs to help organize an efficient transport process.",
  },
  {
    icon: Truck,
    title: "Transport Sourcing",
    description:
      "We help identify suitable independent transport providers and coordinate arrangements according to the requirements of each shipment.",
  },
  {
    icon: CalendarDays,
    title: "Delivery Coordination",
    description:
      "We coordinate delivery schedules between clients, transport providers and other relevant parties to help keep shipments organized.",
  },
  {
    icon: Phone,
    title: "Active Communication",
    description:
      "We maintain clear communication between the parties involved and help address coordination issues during the delivery process.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    description:
      "We support the coordination of confirmations, delivery information and other documentation required during the transport process.",
  },
  {
    icon: BarChart3,
    title: "Performance Review",
    description:
      "Where required, we review logistics performance and identify opportunities to improve efficiency and reduce unnecessary transport costs.",
  },
];

const process = [
  {
    title: "Understand the requirement",
    description:
      "We review the shipment, delivery location, timing, quantity and other requirements.",
  },
  {
    title: "Coordinate transport",
    description:
      "We identify suitable transport options and coordinate arrangements with the relevant transport provider.",
  },
  {
    title: "Manage the delivery",
    description:
      "We maintain communication and follow the delivery process through to completion.",
  },
  {
    title: "Review performance",
    description:
      "Where required, we review the process and identify possible improvements for future deliveries.",
  },
];

const supportAreas = [
  "Transport provider coordination",
  "Delivery planning and communication",
  "Shipment and schedule coordination",
  "Delivery management support",
  "Documentation coordination",
  "Logistics performance review",
];

export default function LogisticsPageEN() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="logistics-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 bg-[#159A86]"
                  aria-hidden="true"
                />

                <p className={sectionLabel}>Logistics Services</p>
              </div>

              <h1
                id="logistics-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
              >
                Logistics coordination that keeps deliveries moving.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy provides practical logistics coordination,
                transport sourcing and delivery management support for
                businesses operating in Poland.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585]">
                We coordinate the process between businesses, independent
                transport providers and other relevant parties.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/en/contact" className={primaryLink}>
                  Discuss Your Requirements

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/en/services" className={secondaryLink}>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION — WHITE
      ========================================================= */}
      <section
        aria-labelledby="logistics-intro-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Logistics Support</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Organized coordination for businesses that need reliable
              transport and delivery processes.
            </p>
          </div>

          <div>
            <h2 id="logistics-intro-title" className={sectionTitle}>
              More control over your delivery process.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Logistics often involves multiple companies, schedules,
              locations and operational requirements. We help coordinate these
              elements so that communication and delivery planning remain
              clear.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              H&M Synergy acts as a logistics coordinator. We do not operate
              our own transport fleet; instead, we coordinate with independent
              transport providers according to the requirements of the client
              and shipment.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="logistics-services-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className={sectionLabel}>What We Support</p>

            <h2
              id="logistics-services-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Practical logistics services for your operation.
            </h2>

            <p className={`mt-6 max-w-xl ${bodyText}`}>
              Our support covers the coordination activities needed to
              organize and manage business deliveries efficiently.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#DCE4EB] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group border-b border-[#DCE4EB] py-9 md:px-8 md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:not(:nth-child(3n))]:border-r"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#DCE4EB] bg-white text-[#123B63] transition-colors duration-200 group-hover:border-[#159A86] group-hover:text-[#159A86]">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-bold tracking-[0.1em] text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#0E2942]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-[#5B6878]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="logistics-process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Our Process</p>

            <h2
              id="logistics-process-title"
              className={`mt-5 ${sectionTitle}`}
            >
              A clear approach to logistics coordination.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
              We coordinate each stage while keeping the relevant parties
              informed throughout the process.
            </p>
          </div>

          <div className="border-t border-[#DCE4EB]">
            {process.map((step, index) => (
              <article
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT AREAS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="logistics-support-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Our Role</p>

            <h2
              id="logistics-support-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Independent logistics coordination.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
              Flexible coordination support without operating our own
              transport fleet.
            </p>
          </div>

          <div>
            <p className={bodyText}>
              H&M Synergy coordinates logistics activities between businesses
              and independent transport providers. The exact scope of support
              can be adapted to the requirements of each client, shipment and
              delivery process.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {supportAreas.map((area) => (
                <div
                  key={area}
                  className="flex gap-4 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-6 text-[#5B6878]">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    CTA — WHITE
========================================================= */}
<section
  aria-labelledby="logistics-cta-title"
  className="border-y border-[#DCE4EB] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
>
  <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
        Let&apos;s Work Together
      </p>

      <h2
        id="logistics-cta-title"
        className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
      >
        Need support with your logistics process?
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
        Tell us about your transport, shipment or delivery requirements
        and we&apos;ll discuss how H&M Synergy can support your business
        in Poland.
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