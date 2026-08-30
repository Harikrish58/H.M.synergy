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
  title: "Usługi logistyczne w Polsce | Koordynacja transportu | H&M Synergy",

  description:
    "H&M Synergy oferuje koordynację logistyki, organizację transportu, planowanie dostaw i wsparcie komunikacyjne dla firm działających w Polsce.",

  keywords: [
    "usługi logistyczne Polska",
    "logistyka Polska",
    "koordynacja logistyki Polska",
    "koordynacja transportu Polska",
    "organizacja transportu Polska",
    "planowanie dostaw Polska",
    "koordynacja dostaw",
    "wsparcie logistyczne dla firm",
    "zarządzanie transportem Polska",
    "firma logistyczna Polska",
    "logistyka dla firm Polska",
    "koordynacja przewoźników",
    "transport dla firm",
    "H&M Synergy logistyka",
  ],

  alternates: {
    canonical: "/pl/services/logistics",
    languages: {
      en: "/en/services/logistics",
      pl: "/pl/services/logistics",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/services/logistics",
    siteName: "H&M Synergy",
    title: "Usługi logistyczne w Polsce | Koordynacja transportu | H&M Synergy",
    description:
      "Koordynacja logistyki, organizacja transportu i wsparcie w zarządzaniu dostawami dla firm działających w Polsce.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Usługi logistyczne w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Usługi logistyczne w Polsce | H&M Synergy",
    description:
      "Koordynacja logistyki, transportu i dostaw dla firm działających w Polsce.",
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
    title: "Planowanie transportu",
    description:
      "Analizujemy wymagania dotyczące przesyłki, miejsca dostawy, terminów i innych potrzeb operacyjnych, aby pomóc w organizacji sprawnego procesu transportowego.",
  },
  {
    icon: Truck,
    title: "Organizacja transportu",
    description:
      "Pomagamy znaleźć odpowiednich niezależnych przewoźników i koordynujemy ustalenia zgodnie z wymaganiami konkretnej przesyłki.",
  },
  {
    icon: CalendarDays,
    title: "Koordynacja dostaw",
    description:
      "Koordynujemy terminy dostaw pomiędzy klientami, przewoźnikami i innymi zaangażowanymi stronami, aby proces dostawy przebiegał sprawnie.",
  },
  {
    icon: Phone,
    title: "Bieżąca komunikacja",
    description:
      "Zapewniamy jasną komunikację pomiędzy wszystkimi zaangażowanymi stronami i pomagamy rozwiązywać problemy organizacyjne podczas realizacji dostawy.",
  },
  {
    icon: FileCheck2,
    title: "Wsparcie dokumentacji",
    description:
      "Wspieramy koordynację potwierdzeń, informacji dotyczących dostaw oraz innych dokumentów wymaganych podczas procesu transportowego.",
  },
  {
    icon: BarChart3,
    title: "Analiza realizacji",
    description:
      "W razie potrzeby analizujemy realizację procesów logistycznych i wskazujemy możliwości poprawy efektywności oraz ograniczenia niepotrzebnych kosztów transportu.",
  },
];

const process = [
  {
    title: "Poznajemy wymagania",
    description:
      "Analizujemy przesyłkę, miejsce dostawy, termin, ilość oraz pozostałe wymagania.",
  },
  {
    title: "Koordynujemy transport",
    description:
      "Szukamy odpowiednich możliwości transportowych i uzgadniamy szczegóły z właściwym przewoźnikiem.",
  },
  {
    title: "Koordynujemy dostawę",
    description:
      "Utrzymujemy komunikację i monitorujemy przebieg dostawy aż do jej zakończenia.",
  },
  {
    title: "Analizujemy realizację",
    description:
      "W razie potrzeby analizujemy proces i wskazujemy możliwe usprawnienia przy kolejnych dostawach.",
  },
];

const supportAreas = [
  "Koordynacja współpracy z przewoźnikami",
  "Planowanie dostaw i komunikacja",
  "Koordynacja przesyłek i harmonogramów",
  "Wsparcie w zarządzaniu dostawami",
  "Koordynacja dokumentacji",
  "Analiza realizacji procesów logistycznych",
];

export default function LogisticsPagePL() {
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

                <p className={sectionLabel}>Usługi logistyczne</p>
              </div>

              <h1
                id="logistics-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
              >
                Koordynacja logistyki, która pomaga sprawnie realizować dostawy.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy oferuje praktyczną koordynację logistyki,
                organizację transportu i wsparcie w zarządzaniu dostawami dla
                firm działających w Polsce.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585]">
                Koordynujemy proces pomiędzy firmami, niezależnymi
                przewoźnikami i innymi zaangażowanymi stronami.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/pl/contact" className={primaryLink}>
                  Omów swoje potrzeby

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
        aria-labelledby="logistics-intro-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Wsparcie logistyczne</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Sprawna koordynacja dla firm, które potrzebują uporządkowanego
              procesu transportu i dostaw.
            </p>
          </div>

          <div>
            <h2 id="logistics-intro-title" className={sectionTitle}>
              Większa kontrola nad procesem dostawy.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Logistyka często obejmuje wiele firm, terminów, lokalizacji i
              wymagań operacyjnych. Pomagamy koordynować te elementy, aby
              komunikacja i planowanie dostaw były przejrzyste.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              H&M Synergy działa jako koordynator logistyki. Nie posiadamy
              własnej floty transportowej — zamiast tego współpracujemy z
              niezależnymi przewoźnikami zgodnie z wymaganiami klienta i
              konkretnej przesyłki.
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
            <p className={sectionLabel}>Zakres wsparcia</p>

            <h2
              id="logistics-services-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Praktyczne usługi logistyczne dla Twojej firmy.
            </h2>

            <p className={`mt-6 max-w-xl ${bodyText}`}>
              Nasze wsparcie obejmuje działania koordynacyjne potrzebne do
              sprawnej organizacji i realizacji dostaw biznesowych.
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
            <p className={sectionLabel}>Nasz proces</p>

            <h2
              id="logistics-process-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Przejrzyste podejście do koordynacji logistyki.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
              Koordynujemy każdy etap, dbając o bieżące informowanie
              wszystkich zaangażowanych stron.
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
            <p className={sectionLabel}>Nasza rola</p>

            <h2
              id="logistics-support-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Niezależna koordynacja procesów logistycznych.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
              Elastyczne wsparcie koordynacyjne bez posiadania własnej floty
              transportowej.
            </p>
          </div>

          <div>
            <p className={bodyText}>
              H&M Synergy koordynuje działania logistyczne pomiędzy firmami a
              niezależnymi przewoźnikami. Dokładny zakres wsparcia może zostać
              dopasowany do wymagań każdego klienta, przesyłki i procesu
              dostawy.
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
            <p className={sectionLabel}>Współpracujmy</p>

            <h2
              id="logistics-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Potrzebujesz wsparcia w procesie logistycznym?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Opowiedz nam o swoich potrzebach dotyczących transportu,
              przesyłek lub dostaw, a omówimy, jak H&M Synergy może wesprzeć
              Twoją firmę w Polsce.
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