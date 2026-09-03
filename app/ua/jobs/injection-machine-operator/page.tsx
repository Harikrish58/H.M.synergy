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
  title: "Оператор термопластавтомата | Вроцлав, Польща | H&M Synergy",
  description:
    "Робота оператором термопластавтомата у Вроцлаві, Нижньосілезьке воєводство, Польща. 25 PLN нетто/год., 12 годин роботи на день та 5–6 робочих днів на тиждень. Запрошуємо студентів та випускників.",
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

                <p className={sectionLabel}>Актуальна вакансія</p>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.3rem]">
                Оператор
                <br className="hidden sm:block" />
                термопластавтомата
              </h1>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#394656]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#159A86]" />
                  Вроцлав, Нижньосілезьке воєводство
                </span>

                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-[#159A86]" />
                  Виробництво
                </span>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A96A3]">
                Код вакансії: HMS-260801
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#apply" className={primaryButton}>
                  Подати заявку
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link href="/ua/jobs" className={secondaryButton}>
                  Усі вакансії
                </Link>
              </div>
            </div>

            {/* Salary / working conditions */}
            <div className="border border-[#DCE4EB] bg-white p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#159A86]">
                Заробітна плата
              </p>

              <p className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#0E2942] sm:text-5xl">
                25 PLN
              </p>

              <p className="mt-1 text-sm font-medium text-[#5B6878]">
                нетто / год.
              </p>

              <div className="mt-5 border-l-2 border-[#159A86] bg-[#F5F8FA] px-4 py-3">
                <p className="text-sm font-bold text-[#0E2942]">
                  Запрошуємо студентів та випускників
                </p>

                <p className="mt-1 text-sm leading-6 text-[#5B6878]">
                  Студенти, які відповідають необхідним умовам, можуть
                  користуватися податковими пільгами та отримувати повну
                  погодинну ставку як нетто-заробіток.
                </p>
              </div>

              <div className="mt-7 border-t border-[#DCE4EB] pt-6">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[#5B6878]">
                    Робочі години
                  </span>

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
                  Заробітна плата
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">
                  25 PLN нетто/год.
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Робочі години
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">
                  12 годин/день
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-7 sm:px-7 lg:px-8">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#159A86]" />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                  Робочі дні
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
                  Місце роботи
                </p>

                <p className="mt-2 font-bold text-[#0E2942]">
                  Вроцлав, Нижньосілезьке воєводство
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
          <p className={sectionLabel}>Опис роботи</p>

          <h2 className={`mt-5 ${sectionTitle}`}>
            Оператор термопластавтомата
          </h2>
        </div>

        <div className="space-y-5">
          <p className={bodyText}>
            Ми шукаємо надійних та відповідальних людей для роботи на посаді
            оператора термопластавтомата на виробництві у Вроцлаві,
            Нижньосілезьке воєводство.
          </p>

          <p className={bodyText}>
            Робота передбачає обслуговування термопластавтоматів та участь у
            виробництві пластикових деталей. Оператор відповідає за контроль
            виробничого процесу, вилучення готової продукції та проведення
            базового візуального контролю якості.
          </p>

          <p className={bodyText}>
            Це виробнича посада для людей, які готові працювати позмінно,
            дотримуватися робочих процедур та правил безпеки.
          </p>

          <div className="border-l-2 border-[#159A86] pl-5">
            <p className="font-bold text-[#0E2942]">
              Запрошуємо студентів та випускників до подачі заявки.
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
              <p className={sectionLabel}>Обов’язки</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Що ви будете робити
              </h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Обслуговувати термопластавтомати відповідно до робочих процедур.",
                  "Вилучати готову продукцію з виробничого процесу.",
                  "Виконувати візуальний контроль якості виготовленої продукції.",
                  "Контролювати виробничий процес та повідомляти про відхилення.",
                  "Пакувати готову продукцію відповідно до робочих інструкцій.",
                  "Підтримувати чистоту та порядок на робочому місці.",
                  "Дотримуватися виробничих процедур та правил безпеки.",
                  "Повідомляти керівника про проблеми або відхилення у виробничому процесі.",
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
                Кого ми шукаємо
              </h2>

              <ul className="mt-9 border-t border-[#DCE4EB]">
                {[
                  "Надійність та відповідальність.",
                  "Готовність працювати у виробничому середовищі.",
                  "Готовність працювати по 12 годин.",
                  "Готовність працювати 5–6 днів на тиждень.",
                  "Здатність дотримуватися інструкцій та правил безпеки праці.",
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
              <p className={sectionLabel}>Подати заявку</p>

              <h2 className={`mt-5 ${sectionTitle}`}>
                Вас зацікавила ця вакансія?
              </h2>

              <p className={`mt-6 max-w-md ${bodyText}`}>
                Зв’яжіться з H&amp;M Synergy та повідомте, що ви зацікавлені у
                вакансії оператора термопластавтомата у Вроцлаві.
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
                    Телефон
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
                  href="/ua/jobs/injection-machine-operator/apply"
                  className={primaryButton}
                >
                  Подати заявку
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link href="/ua/jobs" className={secondaryButton}>
                  Усі вакансії
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
              Ваша наступна можливість може бути ближче, ніж ви думаєте.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Зв’яжіться з нашою рекрутинговою командою, щоб подати заявку на
              цю вакансію.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Зв’язатися з нами
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