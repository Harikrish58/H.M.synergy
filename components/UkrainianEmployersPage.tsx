import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const staffingSolutions = [
  {
    title: "Кадрові рішення",
    description:
      "Надійні працівники для виробництва, промисловості, складського господарства, логістики та інших операційних середовищ.",
  },
  {
    title: "Рекрутинг",
    description:
      "Ми знаходимо та підбираємо відповідних кандидатів відповідно до вимог кожної посади, робочого місця та роботодавця.",
  },
  {
    title: "Координація персоналу",
    description:
      "Ми підтримуємо комунікацію та координацію протягом усього процесу рекрутингу та працевлаштування для організації злагодженої співпраці.",
  },
];

const positions = [
  "Працівники виробництва",
  "Оператори термопластавтоматів",
  "Оператори машин",
  "Працівники збірки",
  "Працівники складу",
  "Працівники логістики",
];

const steps = [
  {
    title: "Розкажіть про ваші вимоги",
    description:
      "Поділіться інформацією про посади, кількість працівників, навички, досвід та графік, необхідні для вашого підприємства.",
  },
  {
    title: "Ми визначаємо підходящих кандидатів",
    description:
      "Ми шукаємо кандидатів, чиї навички, досвід та доступність відповідають вашим кадровим потребам.",
  },
  {
    title: "Ми координуємо процес",
    description:
      "Наша команда підтримує комунікацію та координацію протягом усього рекрутингу та процесу працевлаштування.",
  },
  {
    title: "Ваш персонал готовий до роботи",
    description:
      "Після завершення узгодженого процесу відповідні працівники можуть приступити до своїх обов'язків згідно з домовленостями.",
  },
];

const benefits = [
  {
    title: "Операційний досвід",
    description:
      "Ми розуміємо практичні кадрові вимоги виробництва, промисловості та інших складних операційних середовищ.",
  },
  {
    title: "Надійний рекрутинг",
    description:
      "Кандидати підбираються відповідно до вимог конкретної посади, робочого місця, графіка та роботодавця.",
  },
  {
    title: "Гнучка підтримка",
    description:
      "Наші рішення з рекрутингу та підбору персоналу можуть бути адаптовані до різних кадрових потреб і умов роботи.",
  },
  {
    title: "Чітка комунікація",
    description:
      "Пряма координація допомагає роботодавцям і працівникам залишатися поінформованими протягом усього процесу рекрутингу.",
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

export default function UkrainianEmployersPage() {
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

              <p className={sectionLabel}>Для роботодавців</p>
            </div>

            <h1
              id="employers-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              Сформуйте надійну команду без уповільнення бізнесу.
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>
              H&M Synergy допомагає роботодавцям у Польщі знаходити та наймати
              працівників для виробництва, промисловості, складського
              господарства, логістики та інших операційних посад.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585] sm:text-base">
              Від окремих вакансій до масштабних кадрових потреб — ми
              допомагаємо бізнесу знаходити підходящих кандидатів та
              координувати процес рекрутингу.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={primaryLink}>
                Знайти працівників
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/ua/contact" className={secondaryLink}>
                Зв&apos;яжіться з нами
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
              <p className={sectionLabel}>Кадрові рішення</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Практичний рекрутинг та підтримка персоналу, розроблені
                відповідно до вимог вашого бізнесу.
              </p>
            </div>

            <div>
              <h2 id="staffing-solutions-title" className="sr-only">
                Рішення з рекрутингу та підбору персоналу для роботодавців
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
            <p className={sectionLabel}>Сфери зайнятості</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Ми підтримуємо роботодавців у різних операційних середовищах та з
              різними кадровими вимогами.
            </p>
          </div>

          <div>
            <h2 id="workforce-areas-title" className={sectionTitle}>
              Знайдіть потрібних людей для вашого підприємства.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Наші послуги з рекрутингу та підбору персоналу охоплюють різні
              відділи, посади та робочі середовища. Виробництво та промисловість
              є ключовими напрямками нашої діяльності, з додатковою підтримкою
              для складів, логістики та інших операційних ролей.
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
              Розкажіть, що вам потрібно
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
              <p className={sectionLabel}>Як це працює</p>

              <h2
                id="recruitment-process-title"
                className={`mt-5 ${sectionTitle}`}
              >
                Зрозумілий процес рекрутингу.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
                Від ваших початкових кадрових вимог до координації кандидатів —
                ми робимо процес чітким та організованим.
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
          <p className={sectionLabel}>Чому H&M Synergy</p>

          <h2 id="why-hm-title" className={`mt-5 max-w-2xl ${sectionTitle}`}>
            Кадровий партнер, орієнтований на ваші вимоги.
          </h2>

          <p className={`mt-6 max-w-2xl ${bodyText}`}>
            Ми прагнемо полегшити планування персоналу та рекрутинг завдяки
            практичним кадровим рішенням, підходящим кандидатам та чіткій
            комунікації протягом усього періоду співпраці.
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
          CONTACT CTA — LIGHT GRAY
      ========================================================= */}
      <section
        id="contact"
        aria-labelledby="employer-contact-title"
        className="border-y border-[#E2E8EF] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>Потрібні працівники?</p>

            <h2
              id="employer-contact-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Давайте обговоримо ваші кадрові потреби.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Розкажіть нам, які посади вам потрібні, скільки працівників ви
              шукаєте та коли вони вам необхідні. Наша команда обговорить
              найбільш підходяще рішення з підбору персоналу для вашого бізнесу.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Зв&apos;язатися з H&M Synergy
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
