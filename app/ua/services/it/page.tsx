import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Code2, Globe, Monitor, Server } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "ІТ та веб-розробка в Польщі | H&M Synergy",
  description:
    "H&M Synergy створює корпоративні веб-сайти, веб-додатки, панелі управління, API та цифрові рішення для компаній, що працюють у Польщі.",

  keywords: [
    "ІТ послуги Польща",
    "веб-розробка Польща",
    "послуги веб-розробки Польща",
    "розробка сайтів Польща",
    "корпоративні сайти Польща",
    "веб-додатки Польща",
    "кастомні веб-додатки Польща",
    "бізнес-портали Польща",
    "панелі управління Польща",
    "інтеграція API Польща",
    "розробка React Польща",
    "розробка Next.js Польща",
    "розробка TypeScript Польща",
    "цифрові рішення Польща",
  ],

  alternates: {
    canonical: "/ua/services/it",
    languages: {
      en: "/en/services/it",
      pl: "/pl/services/it",
      uk: "/ua/services/it",
    },
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/ua/services/it",
    siteName: "H&M Synergy",
    title: "ІТ та веб-розробка в Польщі | H&M Synergy",
    description:
      "Корпоративні веб-сайти, веб-додатки та практичні цифрові рішення для компаній, що працюють у Польщі.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — ІТ та веб-розробка в Польщі",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ІТ та веб-розробка в Польщі | H&M Synergy",
    description:
      "Професійні веб-сайти, веб-додатки та цифрові рішення для бізнесу в Польщі.",
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
    number: "01",
    icon: Globe,
    title: "Корпоративні сайти",
    description:
      "Професійні, адаптивні веб-сайти, які чітко представляють вашу компанію, послуги та цінність для клієнтів і бізнес-партнерів.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Веб-додатки",
    description:
      "Кастомні веб-додатки, розроблені з урахуванням специфічних бізнес-процесів, робочих процесів та операційних вимог.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Сучасні веб-інтерфейси",
    description:
      "Зрозумілі та адаптивні інтерфейси, розроблені для забезпечення простої, узгодженої та зручної роботи на будь-яких пристроях.",
  },
  {
    number: "04",
    icon: Server,
    title: "Бізнес-інтеграції",
    description:
      "Практичні інтеграції між веб-сайтами, додатками, API та іншими цифровими системами, які використовує ваш бізнес.",
  },
];

const capabilities = [
  "Корпоративні веб-сайти",
  "Адаптивні веб-додатки",
  "Бізнес-портали",
  "Кастомні панелі управління",
  "Інтеграції API",
  "Внутрішні бізнес-інструменти",
];

const technologies = [
  {
    name: "React",
    icon: SiReact,
    category: "Фронтенд",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Фронтенд",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Фронтенд",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Бекенд",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Бази даних",
  },
  {
    name: "AWS",
    category: "Хмарні технології",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "Хмарні технології",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Розуміння",
    description:
      "Спочатку ми вивчаємо ваш бізнес, користувачів, цілі та проблему, яку має вирішити наше рішення.",
  },
  {
    number: "02",
    title: "Планування",
    description:
      "Ми визначаємо структуру, функціональність та технічний напрямок до початку розробки.",
  },
  {
    number: "03",
    title: "Розробка",
    description:
      "Рішення розробляється з увагою до продуктивності, зручності використання, адаптивності та зручності підтримки.",
  },
  {
    number: "04",
    title: "Вдосконалення",
    description:
      "Після запуску рішення може вдосконалюватися та розширюватися в міру розвитку вашого бізнесу та вимог.",
  },
];

const benefits = [
  "Професійна присутність в Інтернеті",
  "Адаптивність на всіх пристроях",
  "Створено з урахуванням вимог бізнесу",
  "Зрозумілі та зручні інтерфейси",
  "Сучасні технології, зручні для підтримки",
  "Гнучкість для майбутнього розвитку",
];

export default function ITPageUA() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="it-hero-title"
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

                <p className={sectionLabel}>ІТ та веб-розробка</p>
              </div>

              <h1
                id="it-hero-title"
                className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4rem]"
              >
                Цифрові рішення, створені для вашого бізнесу.
              </h1>
            </div>

            <div>
              <p className={bodyText}>
                H&M Synergy створює професійні веб-сайти, веб-додатки та
                цифрові рішення, покликані допомогти бізнесу зміцнити свою
                присутність в Інтернеті та покращити ефективність роботи.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/ua/contact" className={primaryLink}>
                  Обговорити ваш проект
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link href="/ua/services" className={secondaryLink}>
                  Переглянути всі послуги
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION — WHITE
      ========================================================= */}
      <section
        aria-labelledby="digital-solutions-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Цифрові рішення</p>

            <div
              className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
              aria-hidden="true"
            />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Практичні технології, створені для підтримки реальних потреб
              бізнесу.
            </p>
          </div>

          <div>
            <h2 id="digital-solutions-title" className={sectionTitle}>
              Технології повинні робити ваш бізнес кращим.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Незалежно від того, чи потрібен вам професійний корпоративний сайт,
              кастомний веб-додаток або внутрішній бізнес-інструмент, ми
              зосереджені на створенні цифрових рішень, які є зрозумілими,
              надійними та практичними.
            </p>

            <p className={`mt-5 max-w-2xl ${bodyText}`}>
              Ми відштовхуємося від ваших бізнес-вимог, а потім обираємо
              відповідний технічний підхід, уникаючи зайвої складності.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="digital-services-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>Що ми пропонуємо</p>

            <h2 id="digital-services-title" className={`mt-5 ${sectionTitle}`}>
              Веб- та цифрові рішення для сучасного бізнесу.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Від корпоративних сайтів до кастомних додатків — ми розробляємо
              рішення відповідно до ваших конкретних вимог.
            </p>
          </div>

          <div className="mt-14 grid border-t border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="border-b border-[#DCE4EB] py-9 sm:px-7 lg:border-b-0 lg:[&:not(:last-child)]:border-r lg:first:pl-0 lg:last:pr-0"
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
          CAPABILITIES — WHITE
      ========================================================= */}
      <section
        aria-labelledby="capabilities-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Напрямки нашої роботи</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Рішення можуть бути адаптовані до розміру, структури та цілей
              вашого бізнесу.
            </p>
          </div>

          <div>
            <h2 id="capabilities-title" className={sectionTitle}>
              Створено з урахуванням ваших вимог.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Кожен проект унікальний. Ми зосереджуємося на розумінні реальних
              потреб вашого бізнесу перед тим, як обрати правильний підхід та
              технології.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center gap-5 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="technology-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Технології</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Сучасні технології, підібрані відповідно до потреб кожного
              проекту.
            </p>
          </div>

          <div>
            <h2 id="technology-title" className={sectionTitle}>
              Сучасні інструменти. Практичні результати.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Ми використовуємо сучасні веб-технології для створення адаптивних
              цифрових рішень, які легко підтримувати.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="group flex items-center gap-4 border border-[#DCE4EB] bg-white px-5 py-4 transition-all duration-200 hover:border-[#159A86]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DCE4EB] bg-[#F7F9FB] text-[#123B63] transition-colors group-hover:border-[#159A86] group-hover:text-[#159A86]">
                      {technology.name === "AWS" ? (
                        <Image
                          src="/icons/aws.svg"
                          alt="AWS"
                          width={22}
                          height={22}
                          className="h-5 w-5 object-contain"
                        />
                      ) : Icon ? (
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      ) : null}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#182230]">
                        {technology.name}
                      </p>

                      <p className="mt-0.5 text-xs text-[#8A96A3]">
                        {technology.category === "Cloud"
                          ? "Хмарні технології"
                          : technology.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — WHITE
      ========================================================= */}
      <section
        aria-labelledby="development-process-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>Як ми працюємо</p>

            <h2
              id="development-process-title"
              className={`mt-5 ${sectionTitle}`}
            >
              Прозорий процес від ідеї до готового рішення.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Ми робимо процес розробки простим і зосередженим на створенні
              корисного продукту для вашого бізнесу.
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
          WHY US — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="it-benefits-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Наш підхід</p>

            <h2 id="it-benefits-title" className={`mt-5 ${sectionTitle}`}>
              Цифрові рішення без зайвої складності.
            </h2>
          </div>

          <div>
            <p className={bodyText}>
              Ми зосереджені на створенні корисних, зрозумілих цифрових
              продуктів, які відповідають цілям вашого бізнесу.
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
    FINAL CTA — WHITE
========================================================= */}
      <section
        aria-labelledby="it-cta-title"
        className="border-y border-[#DCE4EB] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              Маєте проект?
            </p>

            <h2
              id="it-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Давайте обговоримо ваші цифрові потреби.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Розкажіть нам, що ви хочете створити, покращити або
              автоматизувати, і ми запропонуємо практичне цифрове рішення для
              вашого бізнесу.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            Зв&apso;яжіться з нами
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