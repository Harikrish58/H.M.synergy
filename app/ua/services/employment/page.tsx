import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  UserPlus,
  ClipboardCheck,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Послуги з працевлаштування та рекрутингу в Польщі | H&M Synergy",
  description:
    "H&M Synergy надає послуги з рекрутингу, підбору персоналу та кадрових рішень у Польщі для виробництва, складів, логістики та інших операційних посад.",

  keywords: [
    "агентство з працевлаштування Польща",
    "рекрутингове агентство Польща",
    "послуги працевлаштування Польща",
    "рекрутингові послуги Польща",
    "підбір персоналу Польща",
    "кадрові рішення Польща",
    "рекрутинг на виробництво Польща",
    "працівники виробництва Польща",
    "робота на виробництві Польща",
    "працівники складу Польща",
    "працівники логістики Польща",
    "українські працівники Польща",
    "робота для студентів Польща",
    "робота для випускників Польща",
  ],

  alternates: {
    canonical: "/ua/services/employment",
    languages: {
      en: "/en/services/employment",
      pl: "/pl/services/employment",
      uk: "/ua/services/employment",
    },
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/ua/services/employment",
    siteName: "H&M Synergy",
    title: "Послуги з працевлаштування та рекрутингу в Польщі | H&M Synergy",
    description:
      "Рекрутинг, підбір персоналу та кадрові рішення для бізнесу в Польщі у сферах виробництва, промисловості, складського господарства, логістики та інших операційних секторах.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Послуги з працевлаштування та рекрутингу в Польщі",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Послуги з працевлаштування та рекрутингу в Польщі | H&M Synergy",
    description:
      "Рекрутинг, підбір персоналу та кадрові рішення для компаній, що працюють у Польщі.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const primaryLink =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const secondaryLink =
  "group inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

const solutions = [
  {
    icon: Users,
    number: "01",
    title: "Кадрові рішення",
    description:
      "Ми допомагаємо бізнесу знаходити відповідних працівників для виробництва, промисловості, складів, логістики та інших операційних посад.",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Рекрутинг",
    description:
      "Ми шукаємо кандидатів відповідно до вимог посади, робочого місця, графіка та роботодавця.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Координація персоналу",
    description:
      "Ми підтримуємо комунікацію та координацію протягом усього процесу рекрутингу та працевлаштування.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Постійна підтримка",
    description:
      "Ми залишаємося на зв'язку під час співпраці, щоб підтримувати чітку комунікацію між роботодавцями, працівниками та нашою командою.",
  },
];

const environments = [
  "Промисловість",
  "Виробництво",
  "Складське господарство",
  "Логістика",
  "Харчова промисловість та переробка",
  "Збірка та монтаж",
];

const positions = [
  "Оператори термопластавтоматів",
  "Працівники виробництва",
  "Оператори машин",
  "Працівники збірки",
  "Працівники складу",
  "Працівники логістики",
];

const processSteps = [
  {
    number: "01",
    title: "Розкажіть, що вам потрібно",
    description:
      "Поділіться інформацією про посади, кількість працівників, навички, графік та інші вимоги вашого підприємства.",
  },
  {
    number: "02",
    title: "Ми шукаємо підходящих кандидатів",
    description:
      "Ми шукаємо кандидатів, чий досвід, навички та доступність відповідають вашим вимогам.",
  },
  {
    number: "03",
    title: "Відбір кандидатів",
    description:
      "Ми координуємо наступні кроки та надаємо підходящих кандидатів на ваш розгляд.",
  },
  {
    number: "04",
    title: "Початок процесу працевлаштування",
    description:
      "Після завершення узгодженого процесу працівники можуть приступити до своїх обов'язків, а ми продовжуємо підтримувати співпрацю.",
  },
];

const benefits = [
  "Доступ до підходящих кандидатів",
  "Підтримка у рекрутингу",
  "Гнучкі кадрові рішення",
  "Чітка комунікація",
  "Координація персоналу",
  "Підтримка протягом усієї співпраці",
];

export default function WorkforceSolutionsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="employment-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 shrink-0 bg-[#159A86]"
                  aria-hidden="true"
                />

                <p className={sectionLabel}>Працевлаштування та рекрутинг</p>
              </div>

              <h1
                id="employment-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
              >
                Люди, необхідні вашому бізнесу для безперервного руху.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy допомагає компаніям у Польщі з рекрутингом, підбором
                персоналу та кадровими рішеннями. Ми шукаємо кандидатів для
                промисловості, виробництва, складів, логістики, харчової
                переробки та інших операційних середовищ.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/ua/employers" className={primaryLink}>
                  Знайти працівників
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/ua/contact" className={secondaryLink}>
                  Зв&apos;яжіться з нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO — WHITE
      ========================================================= */}
      <section
        aria-labelledby="workforce-support-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Кадрова підтримка</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 id="workforce-support-title" className={sectionTitle}>
              Рекрутинг і підбір персоналу, побудовані навколо ваших операційних
              процесів.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Пошук та утримання надійного персоналу може вимагати часу та
              ресурсів. H&M Synergy співпрацює з роботодавцями, щоб зрозуміти
              їхні вимоги та з&apos;єднати їх з підходящими кандидатами.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              Чи потрібні вам додаткові працівники для розширення діяльності,
              постійна підтримка у рекрутингу або кандидати на конкретні посади,
              ми можемо допомогти розробити кадрове рішення відповідно до ваших
              потреб.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="solutions-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>Що ми пропонуємо</p>

            <h2 id="solutions-title" className={`mt-5 ${sectionTitle}`}>
              Практичні кадрові рішення для роботодавців.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Наші послуги створені для того, щоб зробити рекрутинг та
              координацію персоналу простішими та зрозумілішими для бізнесу.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="border-b border-[#DCE4EB] px-0 py-8 sm:px-7 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:first:pl-0 lg:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#159A86]">
                      {solution.number}
                    </span>

                    <Icon
                      className="h-5 w-5 text-[#8A96A3]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#0E2942]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#5B6878]">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WORK ENVIRONMENTS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="environments-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Робочі середовища</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Ми підтримуємо бізнес у різних операційних середовищах та з
              різними кадровими вимогами.
            </p>
          </div>

          <div>
            <h2 id="environments-title" className={sectionTitle}>
              Рекрутинг у ключових операційних секторах.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Наш підхід до рекрутингу може бути адаптований до різних робочих
              місць, графіків та операційних вимог.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {environments.map((environment, index) => (
                <div
                  key={environment}
                  className="flex items-center gap-5 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                    {environment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSITIONS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="positions-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Посади</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Приклади посад, на які ми можемо проводити набір, залежно від
              поточних вимог роботодавця та наявних вакансій.
            </p>
          </div>

          <div>
            <h2 id="positions-title" className={sectionTitle}>
              Знайдіть потрібних вам людей.
            </h2>

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

            <Link href="/ua/contact" className={`${primaryLink} mt-8`}>
              Залишити заявку на працівників
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>Як це працює</p>

            <h2 id="process-title" className={`mt-5 ${sectionTitle}`}>
              Зрозумілий та простий кадровий процес.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Ми робимо процес прозорим і зосередженим на ваших реальних
              кадрових потребах.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-b border-[#DCE4EB] py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:last:pr-0"
              >
                <span className="text-sm font-bold text-[#159A86]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-lg font-bold text-[#0E2942]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6878]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="benefits-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Чому варто працювати з нами</p>

            <h2 id="benefits-title" className={`mt-5 ${sectionTitle}`}>
              Кадровий партнер, орієнтований на ваші потреби.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              Ми прагнемо зробити координацію персоналу простішою завдяки
              підтримці в рекрутингу, чіткій комунікації та практичним рішенням,
              адаптованим до кожного роботодавця.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-[#159A86]"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-semibold text-[#182230]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    FINAL CTA — LIGHT GRAY
========================================================= */}
      <section
        aria-labelledby="employment-cta-title"
        className="border-y border-[#DCE4EB] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              Потрібні працівники?
            </p>

            <h2
              id="employment-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Давайте створимо правильну команду для вашого бізнесу.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Розкажіть нам про ваші кадрові потреби, і наша команда обговорить
              з вами процес рекрутингу та наступні кроки.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Залишити заявку на працівників
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
