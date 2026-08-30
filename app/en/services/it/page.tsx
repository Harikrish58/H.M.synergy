import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Code2, Globe, Monitor, Server } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "IT & Web Development Services in Poland | H&M Synergy",
  description:
    "H&M Synergy provides business websites, web applications, dashboards, APIs and digital solutions for companies operating in Poland.",

  keywords: [
    "IT services Poland",
    "web development Poland",
    "web development services Poland",
    "website development Poland",
    "business websites Poland",
    "web applications Poland",
    "custom web applications Poland",
    "business portals Poland",
    "web dashboards Poland",
    "API integration Poland",
    "React development Poland",
    "Next.js development Poland",
    "TypeScript development Poland",
    "digital solutions Poland",
  ],

  alternates: {
    canonical: "/en/services/it",
    languages: {
      en: "/en/services/it",
      pl: "/pl/services/it",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/services/it",
    siteName: "H&M Synergy",
    title: "IT & Web Development Services in Poland | H&M Synergy",
    description:
      "Business websites, web applications and practical digital solutions for companies operating in Poland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — IT and Web Development Services in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IT & Web Development Services in Poland | H&M Synergy",
    description:
      "Professional websites, web applications and digital solutions for businesses in Poland.",
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

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

const solutions = [
  {
    number: "01",
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, responsive websites that clearly present your company, services and value to customers and business partners.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Web Applications",
    description:
      "Custom web applications designed around specific business processes, workflows and operational requirements.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Modern Web Interfaces",
    description:
      "Clean and responsive interfaces designed to provide a simple, consistent and accessible experience across devices.",
  },
  {
    number: "04",
    icon: Server,
    title: "Business Integrations",
    description:
      "Practical integrations between websites, applications, APIs and other digital systems used by your business.",
  },
];

const capabilities = [
  "Corporate websites",
  "Responsive web applications",
  "Business portals",
  "Custom dashboards",
  "API integrations",
  "Internal business tools",
];

const technologies = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
  },
  {
    name: "AWS",
    category: "Cloud",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "Cloud",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand your business, users, objectives and the problem the solution needs to address.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the structure, functionality and technical direction before development begins.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The solution is developed with attention to performance, usability, responsiveness and maintainability.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "After launch, the solution can be improved and expanded as your business and requirements develop.",
  },
];

const benefits = [
  "Professional online presence",
  "Responsive across devices",
  "Built around business requirements",
  "Clear and user-friendly interfaces",
  "Modern and maintainable technology",
  "Flexible for future development",
];

export default function ITPageEN() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="it-hero-title"
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

                <p className={sectionLabel}>IT & Web Development</p>
              </div>

              <h1
                id="it-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
              >
                Digital solutions built around your business.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy provides professional websites, web applications and
                digital solutions designed to help businesses establish a
                stronger online presence and improve the way they work.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/en/contact" className={primaryLink}>
                  Discuss Your Project
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
        aria-labelledby="digital-solutions-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Digital solutions</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Practical technology designed to support real business
              requirements.
            </p>
          </div>

          <div>
            <h2 id="digital-solutions-title" className={sectionTitle}>
              Technology should make your business work better.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Whether you need a professional company website, a custom web
              application or an internal business tool, we focus on creating
              digital solutions that are clear, reliable and practical.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              We start with your business requirements and then select an
              appropriate technical approach rather than adding unnecessary
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="digital-services-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>What we provide</p>

            <h2 id="digital-services-title" className={`mt-5 ${sectionTitle}`}>
              Web and digital solutions for modern businesses.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              From company websites to custom applications, we can develop
              solutions according to your specific requirements.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="border-b border-[#DCE4EB] py-9 sm:px-7 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:first:pl-0 lg:last:pr-0"
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
          CAPABILITIES — WHITE
      ========================================================= */}
      <section
        aria-labelledby="capabilities-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Areas we cover</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Solutions can be adapted to the size, structure and objectives of
              your business.
            </p>
          </div>

          <div>
            <h2 id="capabilities-title" className={sectionTitle}>
              Built around your requirements.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Every project is different. We focus on understanding what your
              business actually needs before selecting the right approach and
              technology.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center gap-5 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="technology-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Technology</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Modern technologies selected according to the needs of each
              project.
            </p>
          </div>

          <div>
            <h2 id="technology-title" className={sectionTitle}>
              Modern tools. Practical results.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              We use modern web technologies to create responsive and
              maintainable digital solutions.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="group flex items-center gap-4 border border-[#DCE4EB] bg-white px-5 py-4 transition-all duration-200 hover:border-[#159A86]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DCE4EB] bg-[#F7F9FB] text-[#123B63] transition-colors group-hover:border-[#159A86] group-hover:text-[#159A86]">
                      {technology.name === "AWS" ? (
                        <Image
                          src="/icons/aws.svg"
                          alt="AWS"
                          width={22}
                          height={22}
                          className="h-5 w-5 object-contain"
                        />
                      ) : Icon ? (
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      ) : null}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#182230]">
                        {technology.name}
                      </p>

                      <p className="mt-0.5 text-xs text-[#8A96A3]">
                        {technology.category === "Cloud"
                          ? "Cloud & Deployment"
                          : technology.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="development-process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>How we work</p>

            <h2
              id="development-process-title"
              className={`mt-5 ${sectionTitle}`}
            >
              A clear process from idea to solution.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              We keep the development process straightforward and focused on
              delivering something useful for your business.
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
          WHY US — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="it-benefits-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Our approach</p>

            <h2 id="it-benefits-title" className={`mt-5 ${sectionTitle}`}>
              Digital solutions without unnecessary complexity.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              We focus on creating digital products that are useful,
              understandable and aligned with your business objectives.
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
    FINAL CTA — WHITE
========================================================= */}
      <section
        aria-labelledby="it-cta-title"
        className="border-y border-[#DCE4EB] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              Have a project?
            </p>

            <h2
              id="it-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Let&apos;s discuss your digital requirements.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Tell us what you want to build, improve or automate and we can
              discuss a practical digital solution for your business.
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
