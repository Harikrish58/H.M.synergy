import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const staffingSolutions = [
  {
    title: "Rozwiązania kadrowe",
    description:
      "Pomagamy firmom znaleźć odpowiednich pracowników do produkcji, przemysłu, magazynów, logistyki i innych środowisk operacyjnych.",
  },
  {
    title: "Rekrutacja",
    description:
      "Pozyskujemy i wybieramy odpowiednich kandydatów zgodnie z wymaganiami stanowiska, miejsca pracy oraz pracodawcy.",
  },
  {
    title: "Koordynacja pracowników",
    description:
      "Wspieramy komunikację i koordynację podczas procesu rekrutacji i zatrudnienia, aby współpraca przebiegała sprawnie.",
  },
];

const positions = [
  "Pracownicy produkcji",
  "Operatorzy wtryskarek",
  "Operatorzy maszyn",
  "Pracownicy montażu",
  "Pracownicy magazynowi",
  "Pracownicy logistyki",
];

const steps = [
  {
    title: "Przedstaw nam swoje wymagania",
    description:
      "Przekaż nam informacje o stanowiskach, liczbie potrzebnych pracowników, wymaganych umiejętnościach, doświadczeniu oraz systemie pracy.",
  },
  {
    title: "Znajdujemy odpowiednich kandydatów",
    description:
      "Pozyskujemy kandydatów, których umiejętności, doświadczenie i dostępność odpowiadają wymaganiom Twojej firmy.",
  },
  {
    title: "Koordynujemy proces",
    description:
      "Nasz zespół wspiera komunikację i koordynację na kolejnych etapach rekrutacji i procesu zatrudnienia.",
  },
  {
    title: "Twój zespół jest gotowy",
    description:
      "Po zakończeniu uzgodnionego procesu odpowiedni pracownicy mogą rozpocząć pracę zgodnie z ustalonymi warunkami.",
  },
];

const benefits = [
  {
    title: "Doświadczenie operacyjne",
    description:
      "Rozumiemy praktyczne potrzeby kadrowe firm produkcyjnych, przemysłowych oraz innych wymagających środowisk pracy.",
  },
  {
    title: "Skuteczna rekrutacja",
    description:
      "Kandydaci są pozyskiwani zgodnie z wymaganiami stanowiska, miejsca pracy, grafiku oraz pracodawcy.",
  },
  {
    title: "Elastyczne wsparcie",
    description:
      "Nasze rozwiązania rekrutacyjne i kadrowe możemy dopasować do różnych potrzeb oraz warunków działania firmy.",
  },
  {
    title: "Jasna komunikacja",
    description:
      "Przejrzysta komunikacja pomaga pracodawcom i pracownikom być na bieżąco podczas całego procesu rekrutacji.",
  },
];

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function PolishEmployersPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="employers-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className={sectionLabel}>Dla pracodawców</p>
            </div>

            <h1
              id="employers-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              Zbuduj niezawodny zespół bez spowalniania swojej działalności.
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>
              H&M Synergy pomaga pracodawcom w Polsce rekrutować i zatrudniać
              pracowników do produkcji, przemysłu, magazynów, logistyki oraz
              innych stanowisk operacyjnych.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585] sm:text-base">
              Od pojedynczych stanowisk po stałe zapotrzebowanie na pracowników
              — pomagamy firmom znaleźć odpowiednich kandydatów i koordynować
              proces rekrutacji.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={primaryLink}>
                Znajdź pracowników
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/pl/contact" className={secondaryLink}>
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STAFFING SOLUTIONS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="staffing-solutions-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>Rozwiązania kadrowe</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Praktyczne wsparcie w rekrutacji i pozyskiwaniu pracowników,
                dopasowane do potrzeb Twojej firmy.
              </p>
            </div>

            <div>
              <h2 id="staffing-solutions-title" className="sr-only">
                Rozwiązania kadrowe i rekrutacyjne dla pracodawców
              </h2>

              <div className="border-t border-[#DCE4EB]">
                {staffingSolutions.map((solution, index) => (
                  <article
                    key={solution.title}
                    className="grid gap-6 border-b border-[#DCE4EB] py-9 sm:grid-cols-[56px_1fr] sm:gap-8 sm:py-11"
                  >
                    <span className="text-sm font-bold text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#0E2942] sm:text-3xl">
                        {solution.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                        {solution.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFORCE AREAS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="workforce-areas-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Obszary zatrudnienia</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Wspieramy pracodawców w różnych środowiskach operacyjnych i przy
              różnorodnych potrzebach kadrowych.
            </p>
          </div>

          <div>
            <h2 id="workforce-areas-title" className={sectionTitle}>
              Znajdź odpowiednich ludzi do swojej działalności.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Nasze usługi rekrutacyjne i kadrowe obejmują różne działy,
              stanowiska i środowiska pracy. Produkcja i przemysł są kluczowymi
              obszarami naszej działalności rekrutacyjnej, a dodatkowo
              wspieramy firmy w zakresie magazynowania, logistyki i innych
              stanowisk operacyjnych.
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

            <a href="#contact" className={`${primaryLink} mt-8`}>
              Powiedz nam, czego potrzebujesz
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="recruitment-process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>Jak to działa</p>

              <h2
                id="recruitment-process-title"
                className={`mt-5 ${sectionTitle}`}
              >
                Prosty i przejrzysty proces rekrutacji.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
                Od określenia potrzeb kadrowych po koordynację kandydatów —
                dbamy o to, aby cały proces był jasny i uporządkowany.
              </p>
            </div>

            <ol className="border-t border-[#DCE4EB]">
              {steps.map((step, index) => (
                <li
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
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY H&M SYNERGY — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="why-hm-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <p className={sectionLabel}>Dlaczego H&M Synergy</p>

          <h2 id="why-hm-title" className={`mt-5 max-w-2xl ${sectionTitle}`}>
            Partner kadrowy skoncentrowany na potrzebach Twojej firmy.
          </h2>

          <p className={`mt-6 max-w-2xl ${bodyText}`}>
            Chcemy ułatwiać planowanie zatrudnienia i rekrutację poprzez
            praktyczne rozwiązania kadrowe, odpowiednich kandydatów oraz jasną
            komunikację na każdym etapie współpracy.
          </p>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="border-b border-[#DCE4EB] py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:last:pr-0"
              >
                <span className="text-sm font-bold text-[#159A86]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#0E2942]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6878]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA — WHITE
      ========================================================= */}
      <section
        id="contact"
        aria-labelledby="employer-contact-title"
        className="border-y border-[#E2E8EF] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>Potrzebujesz pracowników?</p>

            <h2
              id="employer-contact-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Porozmawiajmy o potrzebach kadrowych Twojej firmy.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Powiedz nam, na jakie stanowiska potrzebujesz pracowników, ilu
              osób szukasz i kiedy ich potrzebujesz. Nasz zespół omówi z Tobą
              odpowiednie rozwiązanie rekrutacyjne i kadrowe.
            </p>
          </div>

          <Link
            href="/pl/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Skontaktuj się z H&M Synergy
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