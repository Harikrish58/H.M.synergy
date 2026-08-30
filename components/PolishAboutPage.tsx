import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const focusAreas = [
  "Produkcja i przemysł",
  "Magazynowanie",
  "Logistyka",
  "Inne stanowiska operacyjne",
];

const approach = [
  {
    title: "Poznajemy potrzeby",
    description:
      "Najpierw poznajemy wymagania pracodawcy oraz oczekiwania kandydata.",
  },
  {
    title: "Łączymy",
    description:
      "Pomagamy dopasować odpowiednich pracowników do odpowiednich możliwości zatrudnienia.",
  },
  {
    title: "Wspieramy",
    description:
      "Zapewniamy jasną komunikację i wsparcie podczas procesu rekrutacji oraz współpracy.",
  },
];

const businessServices = [
  {
    title: "Logistyka",
    description:
      "Koordynacja logistyki i wsparcie dostaw dla firm działających w Polsce.",
    href: "/pl/services/logistics",
  },
  {
    title: "IT i aplikacje internetowe",
    description:
      "Strony internetowe, aplikacje i rozwiązania cyfrowe wspierające nowoczesne przedsiębiorstwa.",
    href: "/pl/services/it",
  },
];

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const textLink =
  "group inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function PolishAboutPage() {
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

              <p className={sectionLabel}>O H&M Synergy</p>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              Ludzie. Firmy. Lepsze możliwości.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              H&M Synergy łączy osoby poszukujące pracy z firmami poszukującymi
              rzetelnych pracowników. Zapewniamy rozwiązania z zakresu
              zatrudnienia oraz wsparcie biznesowe dla firm działających w
              Polsce.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/pl/contact" className={primaryLink}>
                Skontaktuj się z nami
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link href="/pl/services" className={textLink}>
                Poznaj nasze usługi
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          KIM JESTEŚMY
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Kim jesteśmy</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Praktyczny partner w zakresie zatrudnienia i wsparcia biznesowego
              w Polsce.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              Partner w zakresie zatrudnienia, który koncentruje się na
              ludziach i biznesie.
            </h2>

            <div className={`mt-6 max-w-2xl space-y-5 ${bodyText}`}>
              <p>
                H&M Synergy to firma oferująca rozwiązania z zakresu
                zatrudnienia, działająca w Polsce. Łączymy pracodawców z
                osobami, które mogą wspierać ich codzienną działalność.
              </p>

              <p>
                Nasza działalność rekrutacyjna koncentruje się przede wszystkim
                na środowisku produkcyjnym i przemysłowym. Oferujemy również
                rozwiązania kadrowe dla magazynów, logistyki oraz innych
                stanowisk operacyjnych.
              </p>

              <p>
                Współpracujemy z pracodawcami, którzy potrzebują
                odpowiedzialnych pracowników, oraz z kandydatami poszukującymi
                stabilnych możliwości zatrudnienia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OBSZARY DOŚWIADCZENIA
      ========================================================= */}
      <section className="border-y border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Obszary doświadczenia</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Wsparcie kadrowe dla różnych środowisk operacyjnych.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              Ludzie do pracy, której potrzebuje Twoja firma.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Koncentrujemy się na poznaniu praktycznych wymagań każdego
              miejsca pracy i łączeniu pracodawców z odpowiednimi kandydatami.
            </p>

            <ul className="mt-10 border-y border-[#DCE4EB]">
              {focusAreas.map((area, index) => (
                <li
                  key={area}
                  className="flex items-center justify-between gap-6 border-b border-[#DCE4EB] py-5 last:border-b-0"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                      {area}
                    </span>
                  </div>

                  <Check
                    className="h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
          DLA PRACODAWCÓW / DLA PRACOWNIKÓW
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Pracodawcy */}
            <article className="border-t border-[#E2E8EF] pt-7">
              <p className={sectionLabel}>Dla pracodawców</p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
                Niezawodne wsparcie kadrowe.
              </h2>

              <p className={`mt-5 max-w-md ${bodyText}`}>
                Pomagamy firmom znaleźć i rekrutować pracowników zgodnie z ich
                potrzebami operacyjnymi, zapewniając jednocześnie wsparcie w
                komunikacji i koordynacji zatrudnienia.
              </p>

              <Link href="/pl/employers" className={`${textLink} mt-8`}>
                Dla pracodawców
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Pracownicy */}
            <article className="border-t border-[#E2E8EF] pt-7">
              <p className={sectionLabel}>Dla osób poszukujących pracy</p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
                Możliwości dla pracowników.
              </h2>

              <p className={`mt-5 max-w-md ${bodyText}`}>
                Łączymy kandydatów z ofertami pracy i zapewniamy im wsparcie na
                każdym etapie procesu rekrutacyjnego.
              </p>

              <Link href="/pl/employees" className={`${textLink} mt-8`}>
                Dla osób poszukujących pracy
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
          NASZE PODEJŚCIE
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <p className={sectionLabel}>Nasze podejście</p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <h2 className={sectionTitle}>
                Profesjonalnie.
                <br />
                Przejrzyście.
                <br />
                Z myślą o ludziach.
              </h2>
            </div>

            <div>
              <p className={bodyText}>
                Wierzymy, że dobre rozwiązania kadrowe zaczynają się od
                zrozumienia potrzeb. Dzięki jasnej komunikacji i przejrzystemu
                procesowi dążymy do tworzenia niezawodnej współpracy pomiędzy
                pracodawcami a kandydatami.
              </p>

              <ol className="mt-10 grid border-t border-[#DCE4EB] md:grid-cols-3">
                {approach.map((item, index) => (
                  <li
                    key={item.title}
                    className="border-b border-[#DCE4EB] py-8 md:border-b-0 md:px-8 md:first:pl-0 md:[&:not(:last-child)]:border-r md:last:pr-0"
                  >
                    <p className="text-sm font-bold text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-6 text-xl font-bold text-[#0E2942]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#5B6878]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WIĘCEJ NIŻ ROZWIĄZANIA KADROWE
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Nasze usługi</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Dodatkowe wsparcie biznesowe wykraczające poza rekrutację i
              zatrudnienie.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              Więcej niż rozwiązania kadrowe.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              H&M Synergy oferuje również wybrane usługi wsparcia biznesowego
              dla firm działających w Polsce.
            </p>

            <div className="mt-10 border-t border-[#DCE4EB]">
              {businessServices.map((service, index) => (
                <article
                  key={service.title}
                  className="grid gap-5 border-b border-[#DCE4EB] py-7 sm:grid-cols-[48px_1fr_auto] sm:items-start sm:gap-8"
                >
                  <span className="text-sm font-bold text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-[#0E2942]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-[#5B6878]">
                      {service.description}
                    </p>
                  </div>

                  <Link href={service.href} className={`${textLink} sm:mt-1`}>
                    Zobacz usługę
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <Link href="/pl/services" className={`${textLink} mt-8`}>
              Zobacz wszystkie usługi
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
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
              Współpracujmy
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]">
              Potrzebujesz rzetelnych pracowników lub wsparcia biznesowego?
              Chętnie Ci pomożemy.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Powiedz nam, czego potrzebujesz, i porozmawiajmy o tym, jak H&M
              Synergy może wesprzeć Twoją firmę lub cele zawodowe.
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