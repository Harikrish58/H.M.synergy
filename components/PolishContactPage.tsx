import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

import ContactForm from "@/components/ContactForm";

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const textLink =
  "group inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText =
  "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function PolishContactPage() {
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

              <p className={sectionLabel}>Kontakt</p>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              Porozmawiajmy.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Niezależnie od tego, czy szukasz rzetelnych pracowników,
              poszukujesz swojej kolejnej pracy, czy potrzebujesz wsparcia
              biznesowego — jesteśmy tutaj, aby Ci pomóc.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className={primaryLink}>
                Skontaktuj się z nami
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/pl/jobs" className={secondaryLink}>
                Zobacz oferty pracy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section
        id="contact-form"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Skontaktuj się z nami</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <h2 className={`mt-8 ${sectionTitle}`}>
              Powiedz nam, jak możemy Ci pomóc.
            </h2>

            <p className={`mt-6 max-w-md ${bodyText}`}>
              Niezależnie od tego, czy jesteś pracodawcą poszukującym
              pracowników, osobą szukającą pracy czy interesują Cię nasze
              usługi biznesowe — napisz do nas.
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYERS / JOB SEEKERS
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Employers */}
            <article className="border-t border-[#DCE4EB] pt-7">
              <p className={sectionLabel}>Dla pracodawców</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Szukasz rzetelnych pracowników?
              </h2>

              <p className={`mt-5 max-w-xl ${bodyText}`}>
                Opowiedz nam o swoich potrzebach kadrowych, a porozmawiamy o
                tym, jak H&amp;M Synergy może wesprzeć Twoją firmę.
              </p>

              <ul className="mt-8 border-y border-[#DCE4EB]">
                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    01
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Stanowiska, których potrzebujesz
                  </span>
                </li>

                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    02
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Liczba potrzebnych pracowników
                  </span>
                </li>

                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    03
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Lokalizacja i harmonogram pracy
                  </span>
                </li>

                <li className="flex items-center gap-4 py-4">
                  <span className="text-sm font-bold text-[#159A86]">
                    04
                  </span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Oczekiwany termin rozpoczęcia
                  </span>
                </li>
              </ul>

              <Link href="/pl/employers" className={`${textLink} mt-8`}>
                Dla pracodawców

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Job seekers */}
            <article className="border-t border-[#DCE4EB] pt-7">
              <p className={sectionLabel}>Dla osób poszukujących pracy</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Szukasz swojej kolejnej możliwości?
              </h2>

              <p className={`mt-5 max-w-xl ${bodyText}`}>
                Zobacz nasze aktualne oferty pracy lub skontaktuj się z naszym
                zespołem rekrutacyjnym i powiedz nam, jakiej pracy szukasz.
              </p>

              <div className="mt-8 border-t border-[#DCE4EB]">
                <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                  <span className="text-sm font-bold text-[#159A86]">
                    01
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Przeglądaj aktualne oferty
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Sprawdź aktualnie dostępne możliwości zatrudnienia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                  <span className="text-sm font-bold text-[#159A86]">
                    02
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Prześlij swoje dane
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Opowiedz nam o swoim doświadczeniu i rodzaju pracy,
                      który Cię interesuje.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 py-6">
                  <span className="text-sm font-bold text-[#159A86]">
                    03
                  </span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Skontaktujemy się z Tobą
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Nasz zespół rekrutacyjny skontaktuje się z Tobą, gdy
                      pojawi się odpowiednia oferta.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/pl/jobs" className={`${textLink} mt-8`}>
                Zobacz dostępne oferty

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
          CONTACT DETAILS
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>H&amp;M Synergy</p>

            <h2 className={`mt-5 ${sectionTitle}`}>
              Jesteśmy tutaj, aby pomóc.
            </h2>

            <p className={`mt-6 max-w-md ${bodyText}`}>
              Skontaktuj się z nami bezpośrednio lub wyślij wiadomość za
              pomocą formularza kontaktowego powyżej.
            </p>
          </div>

          <div>
            <dl className="border-t border-[#DCE4EB]">
              {/* Email */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Mail
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  E-mail
                </dt>

                <dd>
                  <a
                    href="mailto:h.m.synergypl@gmail.com"
                    className="text-sm text-[#5B6878] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                  >
                    h.m.synergypl@gmail.com
                  </a>
                </dd>
              </div>

              {/* Phone */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Phone
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Telefon
                </dt>

                <dd>
                  <a
                    href="tel:+48739686095"
                    className="text-sm leading-6 text-[#5B6878] transition-colors hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                  >
                    +48 739 686 095
                    <br />
                    +48 573 415 010
                  </a>
                </dd>
              </div>

              {/* Location */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <MapPin
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Lokalizacja
                </dt>

                <dd className="text-sm text-[#5B6878]">
                  Wrocław, Polska
                </dd>
              </div>

              {/* Office hours */}
              <div className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Clock
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Godziny pracy
                </dt>

                <dd className="text-sm leading-6 text-[#5B6878]">
                  Poniedziałek – Piątek
                  <br />
                  08:00 – 18:00
                </dd>
              </div>
            </dl>
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
              Masz pytanie? Porozmawiajmy.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Niezależnie od tego, czy jesteś pracodawcą, czy osobą
              poszukującą pracy — jesteśmy gotowi porozmawiać o Twoich
              potrzebach.
            </p>
          </div>

          <a
            href="#contact-form"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Skontaktuj się z nami

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
    </main>
  );
}