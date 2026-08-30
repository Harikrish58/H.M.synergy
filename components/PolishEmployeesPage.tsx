import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const offerItems = [
  {
    title: "Oferty pracy",
    description:
      "Aktualne oferty pracy w produkcji, przemyśle, magazynach, logistyce i innych sektorach operacyjnych w Polsce.",
  },
  {
    title: "Wsparcie rekrutacyjne",
    description:
      "Wsparcie na każdym etapie aplikacji i rekrutacji — od pierwszego zgłoszenia aż do rozpoczęcia nowej pracy.",
  },
  {
    title: "Wsparcie w zatrudnieniu",
    description:
      "Jasna komunikacja i praktyczne wsparcie podczas współpracy z H&M Synergy.",
  },
];

const positions = [
  "Operatorzy wtryskarek",
  "Pracownicy produkcji",
  "Operatorzy maszyn",
  "Pracownicy montażu",
  "Pracownicy magazynowi",
  "Pracownicy logistyki",
];

const steps = [
  "Znajdź odpowiednią ofertę",
  "Wyślij swoje zgłoszenie",
  "Nasz zespół rekrutacyjny skontaktuje się z Tobą",
  "Rozpocznij nową pracę",
];

const candidateGroups = [
  "Studenci",
  "Absolwenci",
  "Doświadczeni pracownicy",
  "Osoby poszukujące pracy",
];

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

export default function PolishEmployeesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="employees-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className={sectionLabel}>Dla osób poszukujących pracy</p>
            </div>

            <h1
              id="employees-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              Znajdź odpowiednią pracę.
              <br />
              Zbuduj swoją przyszłość w Polsce.
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>
              H&M Synergy łączy osoby poszukujące pracy z ofertami zatrudnienia
              w produkcji, przemyśle, magazynach, logistyce i innych sektorach
              operacyjnych w Polsce.
            </p>

            <div className="mt-7 max-w-2xl border-l-2 border-[#159A86] pl-5">
              <p className="text-base font-semibold leading-7 text-[#0E2942] sm:text-lg">
                Studenci i absolwenci są mile widziani.
              </p>

              <p className="mt-1 text-sm leading-6 text-[#5B6878] sm:text-base">
                Zapraszamy studentów, absolwentów, doświadczonych pracowników
                oraz inne osoby poszukujące odpowiednich możliwości zatrudnienia
                w Polsce.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/pl/jobs" className={primaryLink}>
                Zobacz oferty pracy

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link href="/pl/contact" className={secondaryLink}>
                Skontaktuj się z rekrutacją
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DCE4EB] pt-6">
              {["Produkcja", "Przemysł", "Magazyny", "Logistyka"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 bg-[#159A86]"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5B6878]">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE OFFER — WHITE
      ========================================================= */}
      <section
        aria-labelledby="offer-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>Co oferujemy</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Pomagamy łączyć ludzi z odpowiednimi możliwościami zatrudnienia
                i zapewniamy wsparcie podczas całego procesu rekrutacji.
              </p>
            </div>

            <div>
              <h2 id="offer-title" className="sr-only">
                Oferty pracy i wsparcie dla osób poszukujących zatrudnienia
              </h2>

              <div className="grid border-t border-[#DCE4EB] md:grid-cols-3">
                {offerItems.map((item, index) => (
                  <article
                    key={item.title}
                    className="border-b border-[#DCE4EB] py-8 md:border-b-0 md:px-7 md:first:pl-0 md:[&:not(:last-child)]:border-r md:last:pr-0"
                  >
                    <span className="text-sm font-bold text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-6 text-xl font-bold text-[#0E2942]">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#5B6878]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN APPLY — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="candidate-groups-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Kto może aplikować</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Współpracujemy z kandydatami na różnych etapach kariery i
              zapraszamy osoby poszukujące kolejnej możliwości zawodowej w
              Polsce.
            </p>
          </div>

          <div>
            <h2 id="candidate-groups-title" className={sectionTitle}>
              Oferty dla studentów, absolwentów i osób poszukujących pracy.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Niezależnie od tego, czy rozpoczynasz karierę, szukasz pierwszej
              pracy w Polsce, czy masz już doświadczenie zawodowe, wśród naszych
              aktualnych ofert mogą znaleźć się stanowiska odpowiadające Twoim
              umiejętnościom i dostępności.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {candidateGroups.map((group, index) => (
                <div
                  key={group}
                  className="flex items-center gap-5 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                    {group}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AVAILABLE TYPES OF WORK — WHITE
      ========================================================= */}
      <section
        aria-labelledby="positions-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Rodzaje ofert pracy</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Dostępne stanowiska zależą od wymagań pracodawców i aktualnego
              zapotrzebowania na pracowników.
            </p>
          </div>

          <div>
            <h2 id="positions-title" className={sectionTitle}>
              Znajdź pracę odpowiadającą Twoim umiejętnościom i doświadczeniu.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Współpracujemy z pracodawcami z różnych sektorów operacyjnych i
              rekrutujemy na różne stanowiska w zależności od aktualnie
              dostępnych ofert.
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

            <Link href="/pl/jobs" className={`${primaryLink} mt-8`}>
              Przeglądaj oferty pracy

              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="process-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>Jak to działa</p>

            <h2 id="process-title" className={`mt-5 ${sectionTitle}`}>
              Prosta droga do nowej pracy.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Dbamy o to, aby proces aplikacji był jasny i zapewniamy wsparcie
              na kolejnych etapach rekrutacji.
            </p>
          </div>

          <ol className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="border-b border-[#DCE4EB] py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:last:pr-0"
              >
                <span className="text-sm font-bold text-[#159A86]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-lg font-bold leading-7 text-[#0E2942]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =========================================================
          JOB CTA — WHITE
      ========================================================= */}
      <section
        aria-labelledby="jobs-cta-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-end md:justify-between lg:px-8 lg:py-20">
          <div>
            <p className={sectionLabel}>Szukasz pracy?</p>

            <h2
              id="jobs-cta-title"
              className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl"
            >
              Zobacz nasze aktualne oferty pracy.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B6878]">
              Przeglądaj dostępne stanowiska i znajdź ofertę odpowiadającą
              Twoim umiejętnościom, doświadczeniu oraz dostępności.
            </p>
          </div>

          <Link href="/pl/jobs" className={`${primaryLink} shrink-0`}>
            Zobacz dostępne oferty

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="contact-cta-title"
        className="border-y border-[#DCE4EB] bg-[#F5F8FA] px-6 py-16 sm:px-10 lg:px-8 lg:py-20"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={sectionLabel}>Masz pytania?</p>

            <h2
              id="contact-cta-title"
              className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl"
            >
              Nasz zespół rekrutacyjny jest gotowy Ci pomóc.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Jeśli masz pytania dotyczące oferty pracy, procesu aplikacji lub
              możliwości zatrudnienia dla studentów, absolwentów i
              doświadczonych pracowników, skontaktuj się z naszym zespołem.
            </p>
          </div>

          <Link
            href="/pl/contact"
            className={`${primaryLink} shrink-0`}
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