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
  title: "Usługi IT i tworzenie stron internetowych w Polsce | H&M Synergy",

  description:
    "H&M Synergy tworzy profesjonalne strony internetowe, aplikacje webowe, panele, integracje API i rozwiązania cyfrowe dla firm działających w Polsce.",

  keywords: [
    "usługi IT Polska",
    "usługi informatyczne Polska",
    "tworzenie stron internetowych Polska",
    "strony internetowe dla firm",
    "projektowanie stron internetowych",
    "tworzenie aplikacji webowych",
    "aplikacje internetowe dla firm",
    "dedykowane aplikacje webowe",
    "portale internetowe dla firm",
    "panele administracyjne",
    "dashboardy biznesowe",
    "integracje API",
    "integracje systemów",
    "React Polska",
    "Next.js Polska",
    "TypeScript Polska",
    "rozwiązania cyfrowe dla firm",
    "digitalizacja firm",
  ],

  alternates: {
    canonical: "/pl/services/it",
    languages: {
      en: "/en/services/it",
      pl: "/pl/services/it",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/services/it",
    siteName: "H&M Synergy",
    title: "Usługi IT i tworzenie stron internetowych w Polsce | H&M Synergy",
    description:
      "Profesjonalne strony internetowe, aplikacje webowe i praktyczne rozwiązania cyfrowe dla firm działających w Polsce.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Usługi IT i tworzenie stron internetowych w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Usługi IT i tworzenie stron internetowych w Polsce | H&M Synergy",
    description:
      "Profesjonalne strony internetowe, aplikacje webowe i rozwiązania cyfrowe dla firm w Polsce.",
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
    title: "Strony internetowe dla firm",
    description:
      "Profesjonalne i responsywne strony internetowe, które jasno prezentują firmę, jej usługi oraz ofertę klientom i partnerom biznesowym.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Aplikacje internetowe",
    description:
      "Dedykowane aplikacje webowe tworzone zgodnie z konkretnymi procesami biznesowymi, sposobem pracy i wymaganiami operacyjnymi firmy.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Nowoczesne interfejsy webowe",
    description:
      "Przejrzyste i responsywne interfejsy zapewniające prostą, spójną i wygodną obsługę na różnych urządzeniach.",
  },
  {
    number: "04",
    icon: Server,
    title: "Integracje biznesowe",
    description:
      "Praktyczne integracje pomiędzy stronami internetowymi, aplikacjami, API i innymi systemami cyfrowymi wykorzystywanymi w firmie.",
  },
];

const capabilities = [
  "Strony firmowe",
  "Responsywne aplikacje webowe",
  "Portale biznesowe",
  "Dedykowane panele i dashboardy",
  "Integracje API",
  "Wewnętrzne narzędzia biznesowe",
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
    category: "Baza danych",
  },
  {
    name: "AWS",
    category: "Chmura",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "Chmura",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Poznajemy potrzeby",
    description:
      "Najpierw poznajemy Twoją firmę, użytkowników, cele oraz problem, który rozwiązanie cyfrowe ma pomóc rozwiązać.",
  },
  {
    number: "02",
    title: "Planujemy",
    description:
      "Przed rozpoczęciem prac określamy strukturę, funkcjonalność oraz odpowiedni kierunek technologiczny projektu.",
  },
  {
    number: "03",
    title: "Tworzymy",
    description:
      "Tworzymy rozwiązanie z uwzględnieniem wydajności, użyteczności, responsywności i możliwości dalszego rozwoju.",
  },
  {
    number: "04",
    title: "Rozwijamy",
    description:
      "Po uruchomieniu rozwiązanie może być rozwijane i rozbudowywane wraz ze zmianą potrzeb oraz rozwojem firmy.",
  },
];

const benefits = [
  "Profesjonalna obecność w internecie",
  "Responsywność na różnych urządzeniach",
  "Rozwiązania dopasowane do potrzeb firmy",
  "Przejrzyste i intuicyjne interfejsy",
  "Nowoczesne i łatwe w utrzymaniu technologie",
  "Możliwość dalszego rozwoju rozwiązania",
];

export default function ITPagePL() {
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

                <p className={sectionLabel}>
                  IT i tworzenie stron internetowych
                </p>
              </div>

              <h1
                id="it-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
              >
                Rozwiązania cyfrowe dopasowane do Twojej firmy.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy tworzy profesjonalne strony internetowe, aplikacje
                webowe i rozwiązania cyfrowe, które pomagają firmom budować
                silniejszą obecność w internecie i usprawniać codzienną pracę.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/pl/contact" className={primaryLink}>
                  Omów swój projekt
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/pl/services" className={secondaryLink}>
                  Zobacz wszystkie usługi
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
            <p className={sectionLabel}>Rozwiązania cyfrowe</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Praktyczne technologie tworzone z myślą o rzeczywistych potrzebach
              biznesowych.
            </p>
          </div>

          <div>
            <h2 id="digital-solutions-title" className={sectionTitle}>
              Technologia powinna usprawniać działanie Twojej firmy.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Niezależnie od tego, czy potrzebujesz profesjonalnej strony
              firmowej, dedykowanej aplikacji internetowej czy wewnętrznego
              narzędzia biznesowego, koncentrujemy się na tworzeniu rozwiązań
              cyfrowych, które są przejrzyste, niezawodne i praktyczne.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              Zaczynamy od poznania potrzeb Twojej firmy, a następnie dobieramy
              odpowiednie rozwiązanie technologiczne, zamiast dodawać
              niepotrzebną złożoność.
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
            <p className={sectionLabel}>Co oferujemy</p>

            <h2 id="digital-services-title" className={`mt-5 ${sectionTitle}`}>
              Strony internetowe i rozwiązania cyfrowe dla nowoczesnych firm.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Od stron firmowych po dedykowane aplikacje — tworzymy rozwiązania
              zgodnie z konkretnymi wymaganiami Twojej firmy.
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
            <p className={sectionLabel}>Zakres naszych usług</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Rozwiązania możemy dopasować do wielkości, struktury i celów
              Twojej firmy.
            </p>
          </div>

          <div>
            <h2 id="capabilities-title" className={sectionTitle}>
              Tworzymy rozwiązania zgodne z Twoimi potrzebami.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Każdy projekt jest inny. Zaczynamy od zrozumienia rzeczywistych
              potrzeb firmy, a dopiero później dobieramy odpowiednie podejście i
              technologie.
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
            <p className={sectionLabel}>Technologie</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Nowoczesne technologie dobierane zgodnie z potrzebami każdego
              projektu.
            </p>
          </div>

          <div>
            <h2 id="technology-title" className={sectionTitle}>
              Nowoczesne narzędzia. Praktyczne rezultaty.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Korzystamy z nowoczesnych technologii webowych, aby tworzyć
              responsywne i łatwe w utrzymaniu rozwiązania cyfrowe.
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
                        {technology.category === "Chmura"
                          ? "Chmura i wdrożenia"
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
            <p className={sectionLabel}>Jak pracujemy</p>

            <h2
              id="development-process-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Przejrzysty proces od pomysłu do gotowego rozwiązania.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Dbamy o prosty proces tworzenia rozwiązania, skoncentrowany na
              dostarczeniu czegoś naprawdę użytecznego dla Twojej firmy.
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
            <p className={sectionLabel}>Nasze podejście</p>

            <h2 id="it-benefits-title" className={`mt-5 ${sectionTitle}`}>
              Rozwiązania cyfrowe bez niepotrzebnej złożoności.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              Skupiamy się na tworzeniu produktów cyfrowych, które są użyteczne,
              zrozumiałe i zgodne z celami biznesowymi Twojej firmy.
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
            <p className={sectionLabel}>Masz projekt?</p>

            <h2
              id="it-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Porozmawiajmy o potrzebach cyfrowych Twojej firmy.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Opowiedz nam, co chcesz stworzyć, ulepszyć lub zautomatyzować, a
              wspólnie omówimy praktyczne rozwiązanie cyfrowe dla Twojej firmy.
            </p>
          </div>

          <Link
            href="/pl/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Skontaktuj się z nami
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
