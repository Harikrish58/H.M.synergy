import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const focusAreas = [
  "Виробництво та промисловість",
  "Складське господарство",
  "Логістика",
  "Інші операційні посади",
];

const approach = [
  {
    title: "Розуміння",
    description:
      "Спочатку ми вивчаємо вимоги роботодавця та очікування кандидата.",
  },
  {
    title: "З'єднання",
    description:
      "Ми працюємо над тим, щоб підібрати відповідних людей для відповідних можливостей працевлаштування.",
  },
  {
    title: "Підтримка",
    description:
      "Ми підтримуємо чітку комунікацію та надаємо допомогу протягом усього процесу рекрутингу та співпраці.",
  },
];

const businessServices = [
  {
    title: "Логістика",
    description:
      "Координація логістики та підтримка доставки для компаній, що працюють у Польщі.",
    href: "/ua/services/logistics",
  },
  {
    title: "ІТ та веб-додатки",
    description:
      "Веб-сайти, додатки та цифрові рішення, розроблені для підтримки сучасного бізнесу.",
    href: "/ua/services/it",
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

export default function UkrainianAboutPage() {
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

              <p className={sectionLabel}>Про компанію H&amp;M Synergy</p>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              Люди. Бізнес. Кращі можливості.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              H&amp;M Synergy з&apos;єднує людей, які шукають роботу, з
              компаніями, що шукають надійних співробітників. Ми надаємо рішення
              у сфері персоналу та бізнес-підтримки для компаній, що працюють у
              Польщі.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ua/contact" className={primaryLink}>
                Зв&apos;яжіться з нами
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link href="/ua/services" className={textLink}>
                Переглянути наші послуги
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
          WHO WE ARE
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Хто ми</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Практичний партнер з кадрової підтримки та бізнес-послуг у Польщі.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              Кадровий партнер, орієнтований на людей та бізнес.
            </h2>

            <div className={`mt-6 max-w-2xl space-y-5 ${bodyText}`}>
              <p>
                H&amp;M Synergy — це компанія з кадрових рішень, що працює в
                Польщі. Ми з&apos;єднуємо роботодавців із людьми, які можуть
                підтримати їхню повсякденну діяльність.
              </p>

              <p>
                Наша рекрутингова діяльність зосереджена на виробництві та
                промисловості, а наші кадрові рішення також підтримують
                складське господарство, логістику та інші операційні посади.
              </p>

              <p>
                Ми співпрацюємо з роботодавцями, яким потрібні надійні люди, та
                кандидатами, які шукають стабільні можливості працевлаштування.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AREAS OF EXPERIENCE
      ========================================================= */}
      <section className="border-y border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Сфери досвіду</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Кадрова підтримка в різних операційних середовищах.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>
              Люди для роботи, яку необхідно виконати вашому бізнесу.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Ми зосереджені на розумінні практичних вимог кожного робочого
              місця та з&aposєднанні роботодавців із відповідними кандидатами.
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
          FOR EMPLOYERS / EMPLOYEES
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Employers */}
            <article className="border-t border-[#E2E8EF] pt-7">
              <p className={sectionLabel}>Для роботодавців</p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
                Надійна кадрова підтримка.
              </h2>

              <p className={`mt-5 max-w-md ${bodyText}`}>
                Ми допомагаємо компаніям знаходити та наймати працівників
                відповідно до їхніх операційних вимог, одночасно підтримуючи
                комунікацію та координацію персоналу.
              </p>

              <Link href="/ua/employers" className={`${textLink} mt-8`}>
                Для роботодавців
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* Employees */}
            <article className="border-t border-[#E2E8EF] pt-7">
              <p className={sectionLabel}>Для шукачів роботи</p>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
                Можливості для кожного.
              </h2>

              <p className={`mt-5 max-w-md ${bodyText}`}>
                Ми з&apos;єднуємо кандидатів із можливостями працевлаштування та
                надаємо підтримку протягом усього процесу рекрутингу.
              </p>

              <Link href="/ua/employees" className={`${textLink} mt-8`}>
                Для шукачів роботи
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
          OUR APPROACH
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <p className={sectionLabel}>Наш підхід</p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <h2 className={sectionTitle}>
                Професійно.
                <br />
                Зрозуміло.
                <br />З турботою про людей.
              </h2>
            </div>

            <div>
              <p className={bodyText}>
                Ми віримо, що хороші кадрові рішення починаються з розуміння.
                Завдяки чіткій комунікації та простому процесу ми прагнемо
                побудувати надійну співпрацю між роботодавцями та кандидатами.
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
          BEYOND WORKFORCE
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Наші послуги</p>

            <div className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block" />

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Додаткова бізнес-підтримка поза межами рекрутингу та підбору
              персоналу.
            </p>
          </div>

          <div>
            <h2 className={sectionTitle}>Більше, ніж кадрові рішення.</h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              H&amp;M Synergy також надає вибрані послуги бізнес-підтримки для
              компаній, що працюють у Польщі.
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
                    Переглянути послугу
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <Link href="/ua/services" className={`${textLink} mt-8`}>
              Переглянути всі послуги
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
              Давайте працювати разом
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]">
              Незалежно від того, чи потрібні вам надійні працівники, чи
              бізнес-підтримка, ми будемо раді почути вас.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Розкажіть нам, що вам потрібно, і давайте обговоримо, як H&amp;M
              Synergy може підтримати ваш бізнес чи цілі працевлаштування.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
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
