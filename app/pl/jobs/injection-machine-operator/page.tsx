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
  title: "Operator wtryskarki | Wrocław, Polska | H&M Synergy",
  description:
    "Praca na stanowisku Operatora wtryskarki we Wrocławiu, na Dolnym Śląsku. 25 PLN netto/godz., 12 godzin pracy dziennie i 5–6 dni pracy w tygodniu. Zapraszamy studentów i absolwentów do aplikowania.",
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

export default function InjectionMachineOperatorPage() {
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
                Operator
                <br className="hidden sm:block" />
                wtryskarki
              </h1>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#394656]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#159A86]" />
                  Wrocław, Dolny Śląsk
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-[#159A86]" />
                  Produkcja
                </span>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A96A3]">
                Kod oferty: HMS-260801
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#apply" className={primaryButton}>
                  Aplikuj teraz
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link href="/pl/jobs" className={secondaryButton}>
                  Wszystkie oferty
                </Link>
              </div>
            </div>

            {/* Salary / working conditions */}
            <div className="border border-[#DCE4EB] bg-white p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#159A86]">
                Wynagrodzenie
              </p>

              <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0E2942] sm:text-5xl">
                25 PLN
              </p>

              <p className="mt-1 text-sm font-medium text-[#5B6878]">
                netto / godz.
              </p>

              {/* Student highlight */}
              <div className="mt-5 border-l-2 border-[#159A86] bg-[#F5F8FA] px-4 py-3">
                <p className="text-sm font-bold text-[#0E2942]">
                  Zapraszamy studentów i absolwentów
                </p>

                <p className="mt-1 text-sm leading-6 text-[#5B6878]">
                  Studenci spełniający odpowiednie warunki mogą korzystać z
                  preferencji podatkowych, dzięki czemu pełna stawka godzinowa
                  może być otrzymywana jako wynagrodzenie netto.
                </p>
              </div>

              <div className="mt-7 border-t border-[#DCE4EB] pt-6">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#5B6878]">Godziny pracy</span>

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
                  25 PLN netto/godz.
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Godziny pracy
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">12 godzin/dzień</p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Dni pracy
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

                <p className="mt-2 font-bold text-[#0E2942]">
                  Wrocław, Dolny Śląsk
                </p>
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
          <p className={sectionLabel}>Opis stanowiska</p>

          <h2 className={`mt-5 ${sectionTitle}`}>Operator wtryskarki</h2>
        </div>

        <div className="space-y-5">
          <p className={bodyText}>
            Poszukujemy osób rzetelnych i odpowiedzialnych do pracy na
            stanowisku Operatora wtryskarki w środowisku produkcyjnym we
            Wrocławiu, na Dolnym Śląsku.
          </p>

          <p className={bodyText}>
            Praca polega na obsłudze wtryskarek oraz wspieraniu procesu
            produkcji elementów z tworzyw sztucznych. Operator odpowiada za
            kontrolowanie procesu produkcyjnego, odbiór gotowych produktów oraz
            wykonywanie podstawowej kontroli wizualnej.
          </p>

          <p className={bodyText}>
            Jest to stanowisko produkcyjne dla osób, które są gotowe do pracy
            zmianowej oraz przestrzegania obowiązujących procedur i zasad
            bezpieczeństwa.
          </p>

          <div className="border-l-2 border-[#159A86] pl-5">
            <p className="font-bold text-[#0E2942]">
              Zapraszamy studentów i absolwentów do aplikowania.
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

              <h2 className={`mt-5 ${sectionTitle}`}>Zakres obowiązków</h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Obsługa wtryskarek zgodnie z obowiązującymi procedurami.",
                  "Odbiór gotowych produktów z procesu produkcyjnego.",
                  "Wykonywanie wizualnej kontroli jakości wyprodukowanych elementów.",
                  "Monitorowanie procesu produkcyjnego i zgłaszanie nieprawidłowości.",
                  "Pakowanie gotowych produktów zgodnie z instrukcjami stanowiskowymi.",
                  "Utrzymywanie porządku i czystości na stanowisku pracy.",
                  "Przestrzeganie zasad produkcji, organizacji pracy i bezpieczeństwa.",
                  "Zgłaszanie problemów związanych z produkcją przełożonemu.",
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

              <h2 className={`mt-5 ${sectionTitle}`}>Czego oczekujemy</h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Rzetelność i odpowiedzialność.",
                  "Gotowość do pracy w środowisku produkcyjnym.",
                  "Gotowość do pracy w systemie 12-godzinnym.",
                  "Gotowość do pracy 5–6 dni w tygodniu.",
                  "Umiejętność przestrzegania instrukcji oraz zasad bezpieczeństwa pracy.",
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
              <p className={sectionLabel}>Aplikuj</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Zainteresowany tym stanowiskiem?
              </h2>

              <p className={`mt-6 max-w-md ${bodyText}`}>
                Skontaktuj się z H&amp;M Synergy i poinformuj nas, że jesteś
                zainteresowany/a stanowiskiem Operatora wtryskarki we Wrocławiu.
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
                    <br />
                    +48 573 415 010
                  </a>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pl/jobs/injection-machine-operator/apply"
                  className={primaryButton}
                >
                  Aplikuj na to stanowisko
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href="/pl/jobs" className={secondaryButton}>
                  Wszystkie oferty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="border-t border-[#DCE4EB] bg-[#F5F8FA] px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              H&amp;M Synergy
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]">
              Twoja kolejna możliwość może być bliżej, niż myślisz.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Skontaktuj się z naszym zespołem rekrutacyjnym, aby aplikować na
              to stanowisko.
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
