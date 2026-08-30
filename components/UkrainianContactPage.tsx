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

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export const metadata = {
  title: "Контакти | H&M Synergy",
  description:
    "Зв'яжіться з H&M Synergy щодо послуг з підбору персоналу, рекрутингу, логістики та ІТ в Польщі.",
};

export default function UkrainianContactPage() {
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

              <p className={sectionLabel}>Контакти</p>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              Давайте поспілкуємося.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Незалежно від того, чи шукаєте ви надійних працівників, нову
              роботу чи потребуєте бізнес-підтримки, наша команда готова
              допомогти.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className={primaryLink}>
                Зв&apos;язатися з нами
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/ua/jobs" className={secondaryLink}>
                Переглянути вакансії
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM
      ========================================================= */}
      <section id="contact-form" className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          {/* Introduction */}
          <div>
            <p className={sectionLabel}>Зв&apos;яжіться з нами</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <h2 className={`mt-8 ${sectionTitle}`}>
              Розкажіть, чим ми можемо допомогти.
            </h2>

            <p className={`mt-6 max-w-md ${bodyText}`}>
              Незалежно від того, чи ви роботодавець, який шукає працівників,
              шукач роботи в пошуках можливостей, чи вас цікавлять наші
              бізнес-послуги, надішліть нам повідомлення.
            </p>
          </div>

          {/* Single contact form */}
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
              <p className={sectionLabel}>Для роботодавців</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Шукаєте надійних працівників?
              </h2>

              <p className={`mt-5 max-w-xl ${bodyText}`}>
                Розкажіть нам про ваші кадрові потреби, і ми обговоримо, як
                H&amp;M Synergy може підтримати ваш бізнес.
              </p>

              <ul className="mt-8 border-y border-[#DCE4EB]">
                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">01</span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Посади, які вам потрібні
                  </span>
                </li>

                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">02</span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Кількість працівників
                  </span>
                </li>

                <li className="flex items-center gap-4 border-b border-[#DCE4EB] py-4">
                  <span className="text-sm font-bold text-[#159A86]">03</span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Розташування та графік
                  </span>
                </li>

                <li className="flex items-center gap-4 py-4">
                  <span className="text-sm font-bold text-[#159A86]">04</span>

                  <span className="text-sm font-semibold text-[#182230]">
                    Очікувана дата початку
                  </span>
                </li>
              </ul>

              <Link href="/ua/employers" className={`${textLink} mt-8`}>
                Для роботодавців
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Job seekers */}
            <article className="border-t border-[#DCE4EB] pt-7">
              <p className={sectionLabel}>Для шукачів роботи</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Шукаєте свою наступну можливість?
              </h2>

              <p className={`mt-5 max-w-xl ${bodyText}`}>
                Перегляньте наші поточні вакансії або зверніться до нашої
                команди рекрутерів і розкажіть, який тип роботи ви шукаєте.
              </p>

              <div className="mt-8 border-t border-[#DCE4EB]">
                <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                  <span className="text-sm font-bold text-[#159A86]">01</span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Перегляд поточних вакансій
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Досліджуйте можливості працевлаштування, що доступні
                      зараз.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 border-b border-[#DCE4EB] py-6">
                  <span className="text-sm font-bold text-[#159A86]">02</span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Надішліть свої дані
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Розкажіть про свій досвід та тип роботи, який вас
                      цікавить.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 py-6">
                  <span className="text-sm font-bold text-[#159A86]">03</span>

                  <div>
                    <h3 className="font-semibold text-[#0E2942]">
                      Зв&apos;язок із нашою командою
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5B6878]">
                      Наша команда рекрутерів зв&apos;яжеться з вами, коли
                      з&apos;явиться підходяща можливість.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/ua/jobs" className={`${textLink} mt-8`}>
                Переглянути вакансії
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

            <h2 className={`mt-5 ${sectionTitle}`}>Ми тут, щоб допомогти.</h2>

            <p className={`mt-6 max-w-md ${bodyText}`}>
              Зв&apos;яжіться з нами напряму або надішліть повідомлення за
              допомогою контактної форми вище.
            </p>
          </div>

          <div>
            <dl className="border-t border-[#DCE4EB]">
              {/* Email */}
              <div className="grid gap-3 border-b border-[#DCE4EB] py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Mail className="h-4 w-4 text-[#159A86]" aria-hidden="true" />
                  Електронна пошта
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
                  Телефон
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
                  Адреса
                </dt>

                <dd className="text-sm text-[#5B6878]">Вроцлав, Польща</dd>
              </div>

              {/* Office hours */}
              <div className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="flex items-center gap-3 text-sm font-semibold text-[#0E2942]">
                  <Clock
                    className="h-4 w-4 text-[#159A86]"
                    aria-hidden="true"
                  />
                  Години роботи
                </dt>

                <dd className="text-sm leading-6 text-[#5B6878]">
                  Понеділок – П&apos;ятниця
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
              Маєте запитання? Давайте поспілкуємося.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Незалежно від того, чи ви роботодавець, чи шукач роботи, наша
              команда готова обговорити ваші потреби.
            </p>
          </div>

          <a
            href="#contact-form"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Зв&apos;язатися з нами
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
