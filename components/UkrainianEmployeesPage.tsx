import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const offerItems = [
  {
    title: "Вакансії",
    description:
      "Актуальні можливості на виробництві, промисловості, складах, у логістиці та інших операційних середовищах у Польщі.",
  },
  {
    title: "Підтримка у рекрутингу",
    description:
      "Супровід протягом усього процесу подачі заявки та найму — від вашого першого відгуку до виходу на нову роботу.",
  },
  {
    title: "Підтримка при працевлаштуванні",
    description:
      "Чітка комунікація та практична допомога протягом усього періоду співпраці з H&M Synergy.",
  },
];

const positions = [
  "Оператори термопластавтоматів",
  "Працівники виробництва",
  "Оператори машин",
  "Працівники збірки",
  "Працівники складу",
  "Працівники логістики",
];

const steps = [
  "Знайдіть відповідну вакансію",
  "Подайте заявку",
  "Наша команда рекрутерів зв'яжеться з вами",
  "Почніть вашу нову роботу",
];

const candidateGroups = [
  "Студенти",
  "Випускники",
  "Досвідчені працівники",
  "Шукачі роботи",
];

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "group inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

export default function UkrainianEmployeesPage() {
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

              <p className={sectionLabel}>Для шукачів роботи</p>
            </div>

            <h1
              id="employees-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              Знайдіть правильну роботу.
              <br />
              Побудуйте своє майбутнє в Польщі.
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>
              H&M Synergy з&apos;єднує шукачів роботи з можливостями
              працевлаштування у сферах виробництва, промисловості, складського
              господарства, логістики та інших операційних секторах у Польщі.
            </p>

            {/* Student / Graduate message */}
            <div className="mt-7 max-w-2xl border-l-2 border-[#159A86] pl-5">
              <p className="text-base font-semibold leading-7 text-[#0E2942] sm:text-lg">
                Студенти та випускники запрошуються до співпраці.
              </p>

              <p className="mt-1 text-sm leading-6 text-[#5B6878] sm:text-base">
                Ми вітаємо студентів, випускників, досвідчених працівників та
                інших кандидатів, які шукають підходящі можливості
                працевлаштування в Польщі.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ua/jobs" className={primaryLink}>
                Переглянути вакансії
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link href="/ua/contact" className={secondaryLink}>
                Зв&apos;язатися з рекрутером
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DCE4EB] pt-6">
              {["Виробництво", "Промисловість", "Склади", "Логістика"].map(
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
              <p className={sectionLabel}>Що ми пропонуємо</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Ми допомагаємо знайти підходящі можливості працевлаштування та
                надаємо підтримку протягом усього процесу рекрутингу.
              </p>
            </div>

            <div>
              <h2 id="offer-title" className="sr-only">
                Можливості працевлаштування та підтримка
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
            <p className={sectionLabel}>Хто може подати заявку</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Ми працюємо з кандидатами на різних етапах їхньої кар&apos;єри та
              вітаємо людей, які шукають свою наступну можливість у Польщі.
            </p>
          </div>

          <div>
            <h2 id="candidate-groups-title" className={sectionTitle}>
              Можливості для студентів, випускників та шукачів роботи.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Незалежно від того, чи починаєте ви свою кар&apos;єру, шукаєте
              свою першу роботу в Польщі чи вже маєте професійний досвід, наші
              вакансії можуть включати пропозиції, що відповідають вашим
              навичкам та доступності.
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
            <p className={sectionLabel}>Типи вакансій</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Доступні вакансії варіюються залежно від вимог роботодавців та
              поточного попиту на персоналу.
            </p>
          </div>

          <div>
            <h2 id="positions-title" className={sectionTitle}>
              Знайдіть роботу, яка відповідає вашим навичкам та досвіду.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Ми співпрацюємо з роботодавцями у різних операційних середовищах
              та здійснюємо підбір на різноманітні посади залежно від поточних
              вакансій.
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

            <Link href="/ua/jobs" className={`${primaryLink} mt-8`}>
              Переглянути вакансії
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
            <p className={sectionLabel}>Як це працює</p>

            <h2 id="process-title" className={`mt-5 ${sectionTitle}`}>
              Простий шлях до вашої нової роботи.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Ми робимо процес подачі заявок зрозумілим та забезпечуємо
              підтримку на всіх етапах рекрутингу.
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
            <p className={sectionLabel}>Шукаєте роботу?</p>

            <h2
              id="jobs-cta-title"
              className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl"
            >
              Перегляньте наші поточні вакансії.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B6878]">
              Досліджуйте доступні вакансії та знайдіть можливість, яка
              відповідає вашим навичкам, досвіду та графіку.
            </p>
          </div>

          <Link href="/ua/jobs" className={`${primaryLink} shrink-0`}>
            Переглянути доступні вакансії
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
            <p className={sectionLabel}>Маєте запитання?</p>

            <h2
              id="contact-cta-title"
              className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl"
            >
              Наша команда рекрутерів готова допомогти.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Якщо у вас є запитання щодо вакансії, процесу подачі заявки або
              можливостей для студентів, випускників чи досвідчених працівників,
              звертайтеся до нашої команди.
            </p>
          </div>

          <Link href="/ua/contact" className={`${primaryLink} shrink-0`}>
            Зв&apos;язатися з нами
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
