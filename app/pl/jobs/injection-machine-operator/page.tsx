import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  MapPin,
  Wallet,
  Check,
} from "lucide-react";

import JobImageCarousel from "@/components/JobImageCarousel";

export const metadata: Metadata = {
  title: "Operator wtryskarki – praca w Polsce | H&M Synergy",

  description:
    "Oferta pracy dla operatora wtryskarki w Polsce. 25 zł netto za godzinę, 12 godzin dziennie, 5–6 dni w tygodniu. Aplikuj do H&M Synergy.",

  keywords: [
    "operator wtryskarki praca",
    "praca operator wtryskarki",
    "operator wtryskarki Polska",
    "praca produkcja Polska",
    "praca na produkcji",
    "praca w fabryce Polska",
    "praca operator maszyn",
    "operator maszyn praca",
    "praca produkcyjna Polska",
    "praca dla studentów Polska",
    "praca dla absolwentów Polska",
    "praca bez doświadczenia Polska",
    "oferty pracy Polska",
    "praca w Polsce",
    "H&M Synergy praca",
  ],

  alternates: {
    canonical: "/pl/jobs/injection-machine-operator",
    languages: {
      en: "/en/jobs/injection-machine-operator",
      pl: "/pl/jobs/injection-machine-operator",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/jobs/injection-machine-operator",
    siteName: "H&M Synergy",
    title: "Operator wtryskarki – praca w Polsce | H&M Synergy",
    description:
      "Oferta pracy dla operatora wtryskarki w Polsce. 25 zł netto za godzinę, 12 godzin dziennie, 5–6 dni w tygodniu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Operator wtryskarki, praca w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Operator wtryskarki – praca w Polsce | H&M Synergy",
    description:
      "Praca na produkcji jako operator wtryskarki. 25 zł netto/godz., 12 godzin dziennie, 5–6 dni w tygodniu.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const primaryButton =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-colors hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function PolishInjectionMachineOperatorPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="border-b border-[#DCE4EB] bg-[#F5F8FA]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#159A86]" />

                <p className={sectionLabel}>Aktualna oferta pracy</p>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.3rem]">
                Operator wtryskarki
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                Dołącz do zespołu produkcyjnego w Polsce jako operator
                wtryskarki. Poszukujemy osób odpowiedzialnych i zainteresowanych
                stabilną pracą na produkcji.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#394656]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#159A86]" />
                  Polska
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-[#159A86]" />
                  Produkcja
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#apply" className={primaryButton}>
                  Aplikuj teraz
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link href="/pl/jobs" className={secondaryButton}>
                  Wszystkie oferty
                </Link>
              </div>
            </div>

            {/* Salary card */}
            <div className="border border-[#DCE4EB] bg-white p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#159A86]">
                Wynagrodzenie
              </p>

              <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0E2942] sm:text-5xl">
                25 zł
              </p>

              <p className="mt-1 text-sm font-medium text-[#5B6878]">
                netto / godz.
              </p>

              <div className="mt-7 border-t border-[#DCE4EB] pt-6">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#5B6878]">Czas pracy</span>

                  <span className="text-sm font-semibold text-[#0E2942]">
                    12 godzin / dzień
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#5B6878]">Dni pracy</span>

                  <span className="text-sm font-semibold text-[#0E2942]">
                    5–6 dni / tydzień
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMAGE CAROUSEL
      ========================================================= */}

      <section className="bg-[#0E2942]">
        <div className="mx-auto max-w-[1280px] px-6 py-8 sm:px-10 lg:px-8 lg:py-12">
          <JobImageCarousel />
        </div>
      </section>

      {/* =========================================================
          QUICK FACTS
      ========================================================= */}

      <section className="border-b border-[#DCE4EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-8">
          <div className="grid divide-y divide-[#DCE4EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            <div className="flex gap-4 py-7 sm:px-7 sm:first:pl-0 lg:px-8">
              <Wallet className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Wynagrodzenie
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">
                  25 zł netto/godz.
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Grafik
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">12 godzin/dzień</p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Tydzień pracy
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">5–6 dni/tydzień</p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8 lg:last:pr-0">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Lokalizacja
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">Polska</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOB DESCRIPTION
      ========================================================= */}

      <section className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
        <div>
          <p className={sectionLabel}>Stanowisko</p>

          <h2 className={`mt-5 ${sectionTitle}`}>Operator wtryskarki</h2>
        </div>

        <div>
          <div className="space-y-5">
            <p className={bodyText}>
              Poszukujemy osób zainteresowanych pracą w środowisku produkcyjnym
              na stanowisku operatora wtryskarki.
            </p>

            <p className={bodyText}>
              Praca obejmuje obsługę procesu produkcyjnego, obsługę maszyn do
              wtrysku tworzyw sztucznych oraz wykonywanie pracy zgodnie z
              procedurami obowiązującymi na stanowisku.
            </p>

            <p className={bodyText}>
              Jest to stanowisko produkcyjne odpowiednie dla osób
              odpowiedzialnych, rzetelnych i gotowych do pracy zmianowej w
              środowisku produkcyjnym.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSIBILITIES / REQUIREMENTS
      ========================================================= */}

      <section className="border-y border-[#DCE4EB] bg-[#F5F8FA]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Responsibilities */}
            <div>
              <p className={sectionLabel}>Obowiązki</p>

              <h2 className={`mt-5 ${sectionTitle}`}>Zakres pracy</h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Obsługa wtryskarek zgodnie z procedurami obowiązującymi na stanowisku.",
                  "Monitorowanie procesu produkcyjnego i zgłaszanie nieprawidłowości.",
                  "Wykonywanie podstawowej kontroli jakości produkowanych wyrobów.",
                  "Utrzymywanie stanowiska pracy w czystości i porządku.",
                  "Przestrzeganie zasad bezpieczeństwa pracy oraz instrukcji produkcyjnych.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-[#DCE4EB] py-5"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#159A86]" />

                    <span className="text-base leading-7 text-[#5B6878]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <p className={sectionLabel}>Wymagania</p>

              <h2 className={`mt-5 ${sectionTitle}`}>Kogo szukamy</h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Rzetelność i odpowiedzialność.",
                  "Gotowość do pracy w środowisku produkcyjnym.",
                  "Gotowość do pracy na 12-godzinnych zmianach.",
                  "Gotowość do pracy 5–6 dni w tygodniu.",
                  "Umiejętność przestrzegania instrukcji i zasad bezpieczeństwa pracy.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-[#DCE4EB] py-5"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#159A86]" />

                    <span className="text-base leading-7 text-[#5B6878]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION
      ========================================================= */}

      <section id="apply" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>Jak aplikować</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Zainteresowała Cię ta oferta?
              </h2>

              <p className={`mt-6 max-w-md ${bodyText}`}>
                Skontaktuj się z H&amp;M Synergy i poinformuj nas, że interesuje
                Cię stanowisko operatora wtryskarki.
              </p>
            </div>

            <div className="border-t border-[#DCE4EB] pt-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                    E-mail
                  </p>

                  <a
                    href="mailto:h.m.synergypl@gmail.com"
                    className="mt-2 block text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
                  >
                    h.m.synergypl@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                    Telefon
                  </p>

                  <a
                    href="tel:+48739686095"
                    className="mt-2 block text-sm font-semibold text-[#123B63] hover:text-[#159A86]"
                  >
                    +48 739 686 095
                  </a>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/pl/contact" className={primaryButton}>
                  Aplikuj na to stanowisko
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href="/pl/jobs" className={secondaryButton}>
                  Zobacz wszystkie oferty
                </Link>
              </div>
            </div>
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
              Twoja kolejna możliwość zawodowa może być bliżej, niż myślisz.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Skontaktuj się z naszym zespołem rekrutacyjnym, aby porozmawiać o
              tym stanowisku i procesie aplikacji.
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
