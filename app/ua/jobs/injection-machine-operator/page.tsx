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
  title: "Оператор термопластавтомата | H&M Synergy",
  description: "Вакансія оператора термопластавтомата в Польщі з H&M Synergy.",
  alternates: {
    canonical: "/ua/jobs/injection-machine-operator",
    languages: {
      en: "/en/jobs/injection-machine-operator",
      pl: "/pl/jobs/injection-machine-operator",
      uk: "/ua/jobs/injection-machine-operator",
    },
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

export default function UkrainianInjectionMachineOperatorPage() {
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

                <p className={sectionLabel}>Актуальна вакансія</p>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.3rem]">
                Оператор
                <br className="hidden sm:block" />
                термопластавтомата
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                Приєднуйтесь до виробничої команди в Польщі як оператор
                термопластавтомата. Ми шукаємо надійних людей, зацікавлених у
                стабільній роботі на виробництві.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#394656]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#159A86]" />
                  Польща
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-[#159A86]" />
                  Виробництво
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#apply" className={primaryButton}>
                  Подати заявку
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link href="/ua/jobs" className={secondaryButton}>
                  Усі вакансії
                </Link>
              </div>
            </div>

            {/* Salary card */}
            <div className="border border-[#DCE4EB] bg-white p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#159A86]">
                Оплата праці
              </p>

              <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0E2942] sm:text-5xl">
                25 PLN
              </p>

              <p className="mt-1 text-sm font-medium text-[#5B6878]">
                нетто / година
              </p>

              <div className="mt-7 border-t border-[#DCE4EB] pt-6">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#5B6878]">Години роботи</span>

                  <span className="text-sm font-semibold text-[#0E2942]">
                    12 годин / день
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#5B6878]">Робочі дні</span>

                  <span className="text-sm font-semibold text-[#0E2942]">
                    5–6 днів / тиждень
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
                  Оплата
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">
                  25 PLN нетто/год
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Графік
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">12 годин/день</p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Робочий тиждень
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">
                  5–6 днів/тиждень
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8 lg:last:pr-0">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Розташування
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">Польща</p>
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
          <p className={sectionLabel}>Про посаду</p>

          <h2 className={`mt-5 ${sectionTitle}`}>
            Оператор термопластавтомата
          </h2>
        </div>

        <div>
          <div className="space-y-5">
            <p className={bodyText}>
              Ми шукаємо людей, зацікавлених у роботі на виробничому
              підприємстві в якості операторів термопластавтоматів.
            </p>

            <p className={bodyText}>
              Ця роль передбачає підтримку виробничого процесу, експлуатацію
              обладнання для лиття під тиском та забезпечення виконання
              виробничої роботи відповідно до процедур на робочому місці.
            </p>

            <p className={bodyText}>
              Це виробнича позиція, яка підходить для кандидатів, які є
              надійними, відповідальними та комфортно почуваються працюючи у
              змінному форматі на виробництві.
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
              <p className={sectionLabel}>Обов&apos;язки</p>

              <h2 className={`mt-5 ${sectionTitle}`}>Що ви будете робити</h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Експлуатація термопластавтоматів відповідно до внутрішніх процедур.",
                  "Моніторинг виробничого процесу та операційне звітування про будь-які невідповідності.",
                  "Проведення базового контролю якості виготовленої продукції.",
                  "Підтримання чистоти та порядку на робочому місці.",
                  "Дотримання правил охорони праці та виробничих інструкцій.",
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
              <p className={sectionLabel}>Вимоги</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Що ми очікуємо від кандидата
              </h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Надійність та відповідальність.",
                  "Готовність працювати у виробничому середовищі.",
                  "Здатність працювати по 12 годин у зміну.",
                  "Готовність працювати 5–6 днів на тиждень.",
                  "Вміння дотримуватися інструкцій та правил техніки безпеки на робочому місці.",
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
              <p className={sectionLabel}>Як подати заявку</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Зацікавила ця вакансія?
              </h2>

              <p className={`mt-6 max-w-md ${bodyText}`}>
                Зв&apos;яжіться з H&amp;M Synergy та повідомте про свою
                зацікавленість у вакансії оператора термопластавтомата.
              </p>
            </div>

            <div className="border-t border-[#DCE4EB] pt-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                    Електронна пошта
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
                    Телефон
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
                <Link href="/ua/contact" className={primaryButton}>
                  Подати заявку на цю роботу
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href="/ua/jobs" className={secondaryButton}>
                  Переглянути всі вакансії
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#0E2942] px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8FD8CA]">
              H&amp;M Synergy
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.8rem]">
              Ваша наступна можливість може бути ближче, ніж ви думаєте.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#D8E2EC] sm:text-lg sm:leading-8">
              Зв&apos;яжіться з нашою командою рекрутерів, щоб обговорити цю
              посаду та процес подачі заявки.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[#0E2942] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2942]"
          >
            Зв&apos;яжіться з нами
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
