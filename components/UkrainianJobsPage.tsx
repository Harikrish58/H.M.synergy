import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Users,
} from "lucide-react";

const jobs = [
  {
    title: "Оператор термопластавтомата",
    location: "Польща",
    category: "Виробництво",
    tags: ["Повна зайнятість", "Змінна робота"],
    href: "/ua/jobs/injection-machine-operator",
  },
];

const candidateGroups = [
  {
    icon: GraduationCap,
    title: "Студенти",
    description:
      "Студенти запрошуються до подачі заявок на відповідні вакансії, включаючи роботу на виробництві, складах та інші операційні посади.",
  },
  {
    icon: GraduationCap,
    title: "Випускники",
    description:
      "Нещодавні випускники можуть ознайомитися з початковими та операційними можливостями, здобуваючи практичний професійний досвід у Польщі.",
  },
  {
    icon: Users,
    title: "Досвідчені працівники",
    description:
      "Ми також вітаємо досвідчених кандидатів, які шукають нові можливості у сферах виробництва, промисловості, логістики та суміжних секторах.",
  },
];

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

export default function UkrainianJobsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="jobs-hero-title"
        className="border-b border-[#DCE4EB] bg-[#F5F8FA]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 shrink-0 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className={sectionLabel}>Робота в Польщі</p>
            </div>

            <h1
              id="jobs-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              Знайдіть свою наступну можливість у Польщі.
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>
              Досліджуйте актуальні вакансії на виробництві, у промисловості,
              для операторів верстатів, на складах та у логістиці в Польщі з H&M
              Synergy.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585] sm:text-base">
              Студенти, випускники та досвідчені працівники запрошуються до
              подачі заявок на підходящі вакансії.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#available-jobs" className={primaryLink}>
                Переглянути доступні вакансії
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link href="/ua/employees" className={secondaryLink}>
                Для шукачів роботи
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DCE4EB] pt-6">
              {[
                "Виробництво",
                "Промисловість",
                "Склади",
                "Логістика",
                "Студенти",
                "Випускники",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 bg-[#159A86]"
                    aria-hidden="true"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5B6878]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AVAILABLE POSITIONS — WHITE
      ========================================================= */}
      <section
        id="available-jobs"
        aria-labelledby="available-positions-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>Доступні вакансії</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                Поточні вакансії можуть змінюватися в міру розвитку вимог
                роботодавців та попиту на персонал.
              </p>
            </div>

            <div>
              <h2 id="available-positions-title" className="sr-only">
                Поточні вакансії в Польщі
              </h2>

              <div className="border-t border-[#DCE4EB]">
                {jobs.map((job, index) => (
                  <article
                    key={job.title}
                    className="border-b border-[#DCE4EB] py-8 sm:py-9"
                  >
                    <div className="grid gap-6 md:grid-cols-[56px_1fr_auto] md:items-start">
                      <span className="text-sm font-bold text-[#159A86]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#0E2942] sm:text-3xl">
                          {job.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                          <span className="inline-flex items-center gap-2 text-sm text-[#5B6878]">
                            <MapPin
                              className="h-4 w-4 text-[#159A86]"
                              aria-hidden="true"
                            />
                            {job.location}
                          </span>

                          <span className="inline-flex items-center gap-2 text-sm text-[#5B6878]">
                            <BriefcaseBusiness
                              className="h-4 w-4 text-[#159A86]"
                              aria-hidden="true"
                            />
                            {job.category}
                          </span>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-[#DCE4EB] px-3 py-1.5 text-xs font-semibold text-[#5B6878]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={job.href}
                        className={`${textLink} md:mt-2`}
                        aria-label={`Переглянути вакансію ${job.title}`}
                      >
                        Переглянути вакансію
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STUDENTS / GRADUATES / EXPERIENCED — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="candidate-groups-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className={sectionLabel}>Хто може подати заявку</p>

            <h2 id="candidate-groups-title" className={`mt-5 ${sectionTitle}`}>
              Можливості для студентів, випускників та досвідчених працівників.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Наші вакансії відрізняються залежно від вимог роботодавців. Якщо
              ви студент, нещодавній випускник або досвідчений працівник, ви
              можете ознайомитися з підходящими можливостями разом з H&M
              Synergy.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#DCE4EB] md:grid-cols-3">
            {candidateGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="border-b border-[#DCE4EB] py-8 md:px-7 md:border-b-0 md:[&:not(:last-child)]:border-r md:first:pl-0 md:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#159A86]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon
                      className="h-5 w-5 text-[#8A96A3]"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#0E2942]">
                    {group.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5B6878]">
                    {group.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CANDIDATE SUPPORT — WHITE
      ========================================================= */}
      <section
        aria-labelledby="candidate-support-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Шукаєте роботу?</p>

            <h2 id="candidate-support-title" className={sectionTitle}>
              Не знайшли потрібної вакансії?
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#8A96A3]">
              Нові вакансії можуть з&apos;являтися в міру зміни кадрових вимог
              роботодавців.
            </p>
          </div>

          <div>
            <p className={bodyText}>
              Надішліть нам свої дані та розкажіть, яку саме роботу ви шукаєте.
              Наша команда рекрутерів зможе зв&apos;язатися з вами, коли
              з&apos;явиться відповідна можливість.
            </p>

            <Link href="/ua/contact" className={`${primaryLink} mt-8`}>
              Зв&apos;язатися з рекрутером
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYMENT AREAS — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="employment-areas-title"
        className="border-b border-[#E2E8EF] bg-[#F7F9FB]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className={sectionLabel}>Сфери зайнятості</p>

            <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
              Наша рекрутингова діяльність зосереджена на практичних операційних
              ролях для компаній по всій Польщі.
            </p>
          </div>

          <div>
            <h2 id="employment-areas-title" className={sectionTitle}>
              Виробництво, промисловість, логістика та багато іншого.
            </h2>

            <p className={`mt-6 max-w-2xl ${bodyText}`}>
              Залежно від поточних вакансій, можливості можуть включати роботу
              на виробництві, у промисловості, посади операторів машин,
              складську справу, логістичні ролі та інші операційні посади.
            </p>

            <div className="mt-10 grid border-t border-[#DCE4EB] sm:grid-cols-2">
              {[
                "Вакансії на виробництві",
                "Вакансії у промисловості",
                "Робота оператором машин",
                "Робота на складі",
                "Робота в логістиці",
                "Операційні вакансії",
              ].map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-5 border-b border-[#DCE4EB] py-5 sm:pr-6"
                >
                  <span className="text-xs font-bold tracking-[0.1em] text-[#159A86]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.06em] text-[#182230]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMPLOYEE CTA — LIGHT GRAY
      ========================================================= */}
      <section
        aria-labelledby="jobs-cta-title"
        className="border-y border-[#E2E8EF] bg-white px-6 py-20 sm:px-10 lg:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={sectionLabel}>H&M Synergy</p>

            <h2
              id="jobs-cta-title"
              className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.8rem]"
            >
              Ваша наступна можливість може бути ближче, ніж ви думаєте.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
              Перегляньте доступні вакансії або зверніться до нашої команди
              рекрутерів, щоб обговорити вашу наступну роботу в Польщі.
            </p>
          </div>

          <Link
            href="/ua/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
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
