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
  title: "Usługi pracy i rekrutacji w Polsce | H&M Synergy",

  description:
    "H&M Synergy oferuje rekrutację, pozyskiwanie pracowników i rozwiązania kadrowe dla firm w Polsce. Pomagamy znaleźć pracowników do produkcji, przemysłu, magazynów, logistyki i innych stanowisk operacyjnych.",

  keywords: [
    "agencja pracy Polska",
    "agencja pracy w Polsce",
    "agencja rekrutacyjna Polska",
    "rekrutacja pracowników Polska",
    "usługi rekrutacyjne Polska",
    "usługi zatrudnienia Polska",
    "pracownicy dla firm Polska",
    "pozyskiwanie pracowników Polska",
    "rozwiązania kadrowe Polska",
    "pracownicy produkcji Polska",
    "rekrutacja pracowników produkcji",
    "praca produkcja Polska",
    "operator maszyn praca",
    "operator wtryskarki praca",
    "pracownicy magazynowi Polska",
    "praca magazyn Polska",
    "pracownicy logistyka Polska",
    "praca w logistyce Polska",
    "pracownicy z Ukrainy Polska",
    "praca dla studentów Polska",
    "praca dla absolwentów Polska",
  ],

  alternates: {
    canonical: "/pl/services/employment",
    languages: {
      en: "/en/services/employment",
      pl: "/pl/services/employment",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/services/employment",
    siteName: "H&M Synergy",
    title: "Usługi pracy i rekrutacji w Polsce | H&M Synergy",
    description:
      "Rekrutacja, pozyskiwanie pracowników i rozwiązania kadrowe dla firm w Polsce — produkcja, przemysł, magazyny, logistyka i inne stanowiska operacyjne.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Usługi pracy i rekrutacji w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Usługi pracy i rekrutacji w Polsce | H&M Synergy",
    description:
      "Rekrutacja, pozyskiwanie pracowników i rozwiązania kadrowe dla firm działających w Polsce.",
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
    title: "Rozwiązania kadrowe",
    description:
      "Pomagamy firmom znaleźć odpowiednich pracowników do produkcji, przemysłu, magazynów, logistyki i innych stanowisk operacyjnych.",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Rekrutacja",
    description:
      "Pozyskujemy kandydatów zgodnie z wymaganiami stanowiska, miejsca pracy, harmonogramu oraz potrzeb pracodawcy.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Koordynacja pracowników",
    description:
      "Wspieramy komunikację i koordynację na kolejnych etapach procesu rekrutacji i zatrudnienia.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Stałe wsparcie",
    description:
      "Pozostajemy dostępni podczas współpracy, pomagając utrzymać sprawną komunikację pomiędzy pracodawcami, pracownikami i naszym zespołem.",
  },
];

const environments = [
  "Produkcja przemysłowa",
  "Produkcja",
  "Magazyny",
  "Logistyka",
  "Przetwórstwo spożywcze",
  "Montaż",
];

const positions = [
  "Operatorzy wtryskarek",
  "Pracownicy produkcji",
  "Operatorzy maszyn",
  "Pracownicy montażu",
  "Pracownicy magazynowi",
  "Pracownicy logistyki",
];

const processSteps = [
  {
    number: "01",
    title: "Powiedz nam, czego potrzebujesz",
    description:
      "Przedstaw stanowiska, liczbę potrzebnych pracowników, wymagane umiejętności, harmonogram pracy i inne wymagania.",
  },
  {
    number: "02",
    title: "Znajdziemy odpowiednich kandydatów",
    description:
      "Szukamy kandydatów, których doświadczenie, umiejętności i dyspozycyjność odpowiadają Twoim wymaganiom.",
  },
  {
    number: "03",
    title: "Kandydaci zostają wybrani",
    description:
      "Koordynujemy kolejne etapy i przedstawiamy odpowiednich kandydatów do rozpatrzenia.",
  },
  {
    number: "04",
    title: "Rozpoczyna się proces zatrudnienia",
    description:
      "Po zakończeniu uzgodnionego procesu pracownicy mogą rozpocząć pracę, a my nadal wspieramy współpracę.",
  },
];

const benefits = [
  "Dostęp do odpowiednich kandydatów",
  "Wsparcie w procesie rekrutacji",
  "Elastyczne rozwiązania kadrowe",
  "Jasna komunikacja",
  "Koordynacja pracowników",
  "Wsparcie podczas współpracy",
];

export default function PolishWorkforceSolutionsPage() {
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

                <p className={sectionLabel}>
                  Zatrudnienie i rekrutacja
                </p>
              </div>

              <h1
                id="employment-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
              >
                Pracownicy, których potrzebuje Twoja firma.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy pomaga firmom w Polsce w rekrutacji, pozyskiwaniu
                pracowników i rozwiązaniach kadrowych. Pozyskujemy kandydatów
                do produkcji, przemysłu, magazynów, logistyki, przetwórstwa
                spożywczego i innych środowisk operacyjnych.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/pl/employers" className={primaryLink}>
                  Znajdź pracowników

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/pl/contact" className={secondaryLink}>
                  Skontaktuj się z nami
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
            <p className={sectionLabel}>Wsparcie kadrowe</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 id="workforce-support-title" className={sectionTitle}>
              Rekrutacja i rozwiązania kadrowe dopasowane do Twojej działalności.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Znalezienie i utrzymanie odpowiedniej kadry może wymagać czasu i
              zasobów. H&M Synergy współpracuje z pracodawcami, aby poznać ich
              potrzeby i połączyć ich z odpowiednimi kandydatami.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              Niezależnie od tego, czy potrzebujesz dodatkowych pracowników
              ze względu na rozwój firmy, stałego wsparcia rekrutacyjnego czy
              kandydatów na konkretne stanowiska, możemy pomóc stworzyć
              rozwiązanie kadrowe dopasowane do Twoich potrzeb.
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
            <p className={sectionLabel}>Co oferujemy</p>

            <h2 id="solutions-title" className={`mt-5 ${sectionTitle}`}>
              Praktyczne rozwiązania kadrowe dla pracodawców.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Nasze usługi mają ułatwiać firmom proces rekrutacji oraz
              koordynację pracowników.
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
            <p className={sectionLabel}>Środowiska pracy</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Wspieramy firmy działające w różnych środowiskach operacyjnych i
              mające różnorodne potrzeby kadrowe.
            </p>
          </div>

          <div>
            <h2 id="environments-title" className={sectionTitle}>
              Rekrutacja dla kluczowych sektorów operacyjnych.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Nasze podejście rekrutacyjne możemy dopasować do różnych miejsc
              pracy, harmonogramów oraz wymagań operacyjnych.
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
            <p className={sectionLabel}>Stanowiska</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Przykłady stanowisk, na które możemy prowadzić rekrutację w
              zależności od aktualnych potrzeb pracodawców i dostępnych ofert.
            </p>
          </div>

          <div>
            <h2 id="positions-title" className={sectionTitle}>
              Znajdź pracowników, których potrzebujesz.
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

            <Link href="/pl/contact" className={`${primaryLink} mt-8`}>
              Potrzebuję pracowników

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
            <p className={sectionLabel}>Jak to działa</p>

            <h2 id="process-title" className={`mt-5 ${sectionTitle}`}>
              Prosty proces pozyskiwania pracowników.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Dbamy o to, aby proces był przejrzysty i skoncentrowany na
              rzeczywistych potrzebach kadrowych Twojej firmy.
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
            <p className={sectionLabel}>Dlaczego warto z nami współpracować</p>

            <h2 id="benefits-title" className={`mt-5 ${sectionTitle}`}>
              Partner kadrowy skoncentrowany na Twoich potrzebach.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              Chcemy ułatwiać firmom koordynację pracowników poprzez wsparcie
              rekrutacyjne, jasną komunikację i praktyczne rozwiązania
              dopasowane do potrzeb każdego pracodawcy.
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
        aria-labelledby="employment-cta-title"
        className="border-y border-[#DCE4EB] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>Potrzebujesz pracowników?</p>

            <h2
              id="employment-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Zbudujmy odpowiedni zespół dla Twojej firmy.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Opowiedz nam o swoich potrzebach kadrowych, a nasz zespół
              omówi z Tobą proces rekrutacji i kolejne kroki.
            </p>
          </div>

          <Link
            href="/pl/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Potrzebuję pracowników

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