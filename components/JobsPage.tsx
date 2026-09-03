import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
} from "lucide-react";

import { createSupabaseServerClient } from "@/lib/supabase/server";

type Locale = "en" | "pl" | "ua";

type JobRow = {
  id: string;
  code: string;
  slug: string;
  title_en: string;
  title_pl: string;
  title_ua: string;
  category: string;
  location_en: string;
  location_pl: string;
  location_ua: string;
  workers_needed: number;
  employment_type: string;
  salary: string | null;
  start_date: string | null;
  shifts: string | null;
  working_hours: string | null;
  created_at: string;
};

type LocalizedJob = {
  id: string;
  code: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  workersNeeded: number;
  employmentType: string;
  salary: string | null;
  startDate: string | null;
  shifts: string | null;
  workingHours: string | null;
  tags: string[];
  href: string;
  applyHref: string;
};

type JobsPageProps = {
  locale: Locale;
};

const permanentInjectionMachineOperatorJobs: Record<
  Locale,
  LocalizedJob
> = {
  en: {
    id: "permanent-injection-machine-operator",
    code: "HMS-260801",
    slug: "injection-machine-operator",
    title: "Injection Machine Operator",
    location: "Wrocław, Lower Silesia",
    category: "Manufacturing",
    workersNeeded: 1,
    employmentType: "Full-time",
    salary: "25 PLN net/hour",
    startDate: null,
    shifts: "12-hour shifts",
    workingHours: "12 hours/day",
    tags: ["Full-time", "12-hour shifts"],
    href: "/en/jobs/injection-machine-operator",
    applyHref: "/en/jobs/injection-machine-operator/apply",
  },

  pl: {
    id: "permanent-injection-machine-operator",
    code: "HMS-260801",
    slug: "injection-machine-operator",
    title: "Operator wtryskarki",
    location: "Wrocław, Dolny Śląsk",
    category: "Produkcja",
    workersNeeded: 1,
    employmentType: "Pełny etat",
    salary: "25 PLN netto/godz.",
    startDate: null,
    shifts: "Praca 12-godzinna",
    workingHours: "12 godzin/dzień",
    tags: ["Pełny etat", "Praca 12-godzinna"],
    href: "/pl/jobs/injection-machine-operator",
    applyHref: "/pl/jobs/injection-machine-operator/apply",
  },

  ua: {
    id: "permanent-injection-machine-operator",
    code: "HMS-260801",
    slug: "injection-machine-operator",
    title: "Оператор термопластавтомата",
    location: "Вроцлав, Нижньосілезьке воєводство",
    category: "Виробництво",
    workersNeeded: 1,
    employmentType: "Повна зайнятість",
    salary: "25 PLN нетто/год.",
    startDate: null,
    shifts: "12-годинні зміни",
    workingHours: "12 годин/день",
    tags: ["Повна зайнятість", "12-годинні зміни"],
    href: "/ua/jobs/injection-machine-operator",
    applyHref: "/ua/jobs/injection-machine-operator/apply",
  },
};

function getLocalizedJob(row: JobRow, locale: Locale): LocalizedJob {
  const title =
    locale === "en"
      ? row.title_en
      : locale === "pl"
        ? row.title_pl
        : row.title_ua;

  const location =
    locale === "en"
      ? row.location_en
      : locale === "pl"
        ? row.location_pl
        : row.location_ua;

  const tags: string[] = [];

  if (row.employment_type) {
    tags.push(row.employment_type);
  }

  if (row.shifts) {
    tags.push(row.shifts);
  }

  if (row.workers_needed > 1) {
    tags.push(
      locale === "en"
        ? `${row.workers_needed} workers`
        : locale === "pl"
          ? `${row.workers_needed} pracowników`
          : `${row.workers_needed} працівників`,
    );
  }

  return {
    id: row.id,
    code: row.code,
    slug: row.slug,
    title,
    location,
    category: row.category,
    workersNeeded: row.workers_needed,
    employmentType: row.employment_type,
    salary: row.salary,
    startDate: row.start_date,
    shifts: row.shifts,
    workingHours: row.working_hours,
    tags,
    href: `/${locale}/jobs/${row.slug}`,
    applyHref: `/${locale}/jobs/${row.slug}/apply`,
  };
}

const copy = {
  en: {
    heroLabel: "CAREERS",
    heroTitle: "Find your next opportunity",
    heroText:
      "Explore current vacancies with H&M Synergy and find a role that matches your experience, skills and career goals.",
    availableLabel: "OPEN POSITIONS",
    availableTitle: "Current job opportunities",
    availableText:
      "Browse our current vacancies and apply directly for the position that interests you.",
    noJobs:
      "There are currently no additional vacancies available. Please check again soon.",
    viewJob: "View position",
    apply: "Apply now",
    workers: "workers",
    startDate: "Start date",
    flexible: "Flexible",
    candidateLabel: "FOR CANDIDATES",
    candidateTitle: "Support throughout your recruitment journey",
    candidateText:
      "We help candidates understand job requirements, prepare their application and move smoothly through the recruitment process.",
    candidateGroups: [
      {
        title: "Production & Manufacturing",
        text: "Production operators, machine operators, assemblers and other manufacturing roles.",
      },
      {
        title: "Logistics & Warehousing",
        text: "Warehouse workers, order pickers, packers and logistics positions.",
      },
      {
        title: "Other opportunities",
        text: "We also recruit for selected technical, service and operational positions.",
      },
    ],
    supportLabel: "CANDIDATE SUPPORT",
    supportTitle: "Looking for a specific role?",
    supportText:
      "Send us your CV and tell us what kind of work you are looking for. We can contact you when a suitable opportunity becomes available.",
    sendCv: "Send your CV",
    areasLabel: "EMPLOYMENT AREAS",
    areasTitle: "Where we recruit",
    areas: ["Manufacturing", "Logistics", "Warehousing", "Production"],
    ctaTitle: "Ready to take the next step?",
    ctaText:
      "Apply for a current vacancy or contact our team to discuss available opportunities.",
    viewVacancies: "View vacancies",
    contactUs: "Contact us",
  },

  pl: {
    heroLabel: "KARIERA",
    heroTitle: "Znajdź swoją kolejną możliwość",
    heroText:
      "Poznaj aktualne oferty pracy H&M Synergy i znajdź stanowisko dopasowane do Twojego doświadczenia, umiejętności i celów zawodowych.",
    availableLabel: "AKTUALNE OFERTY",
    availableTitle: "Aktualne oferty pracy",
    availableText:
      "Przeglądaj nasze aktualne oferty i aplikuj bezpośrednio na wybrane stanowisko.",
    noJobs:
      "Obecnie nie ma dodatkowych ofert pracy. Sprawdź ponownie wkrótce.",
    viewJob: "Zobacz ofertę",
    apply: "Aplikuj",
    workers: "pracowników",
    startDate: "Data rozpoczęcia",
    flexible: "Elastyczna",
    candidateLabel: "DLA KANDYDATÓW",
    candidateTitle: "Wsparcie na każdym etapie rekrutacji",
    candidateText:
      "Pomagamy kandydatom zrozumieć wymagania stanowiska, przygotować aplikację i sprawnie przejść przez proces rekrutacyjny.",
    candidateGroups: [
      {
        title: "Produkcja i przemysł",
        text: "Operatorzy produkcji, operatorzy maszyn, monterzy i inne stanowiska produkcyjne.",
      },
      {
        title: "Logistyka i magazyny",
        text: "Pracownicy magazynowi, kompletujący zamówienia, pakowacze i stanowiska logistyczne.",
      },
      {
        title: "Pozostałe stanowiska",
        text: "Prowadzimy również rekrutacje na wybrane stanowiska techniczne, usługowe i operacyjne.",
      },
    ],
    supportLabel: "WSPARCIE KANDYDATÓW",
    supportTitle: "Szukasz konkretnej pracy?",
    supportText:
      "Wyślij nam swoje CV i napisz, jakiego rodzaju pracy szukasz. Skontaktujemy się z Tobą, gdy pojawi się odpowiednia oferta.",
    sendCv: "Wyślij CV",
    areasLabel: "OBSZARY ZATRUDNIENIA",
    areasTitle: "Gdzie prowadzimy rekrutacje",
    areas: ["Produkcja", "Logistyka", "Magazyny", "Przemysł"],
    ctaTitle: "Gotowy na kolejny krok?",
    ctaText:
      "Aplikuj na aktualną ofertę pracy lub skontaktuj się z naszym zespołem, aby poznać dostępne możliwości.",
    viewVacancies: "Zobacz oferty",
    contactUs: "Skontaktuj się",
  },

  ua: {
    heroLabel: "КАР'ЄРА",
    heroTitle: "Знайдіть свою наступну можливість",
    heroText:
      "Перегляньте актуальні вакансії H&M Synergy та знайдіть роботу, яка відповідає вашому досвіду, навичкам і професійним цілям.",
    availableLabel: "АКТУАЛЬНІ ВАКАНСІЇ",
    availableTitle: "Актуальні вакансії",
    availableText:
      "Перегляньте наші актуальні вакансії та подайте заявку безпосередньо на обрану посаду.",
    noJobs:
      "Наразі немає додаткових вакансій. Будь ласка, перевірте пізніше.",
    viewJob: "Переглянути вакансію",
    apply: "Подати заявку",
    workers: "працівників",
    startDate: "Дата початку",
    flexible: "Гнучка",
    candidateLabel: "ДЛЯ КАНДИДАТІВ",
    candidateTitle: "Підтримка на кожному етапі рекрутингу",
    candidateText:
      "Ми допомагаємо кандидатам зрозуміти вимоги до роботи, підготувати заявку та пройти процес рекрутингу.",
    candidateGroups: [
      {
        title: "Виробництво та промисловість",
        text: "Оператори виробництва, оператори машин, монтажники та інші виробничі посади.",
      },
      {
        title: "Логістика та склади",
        text: "Працівники складу, комплектувальники замовлень, пакувальники та логістичні посади.",
      },
      {
        title: "Інші можливості",
        text: "Ми також проводимо рекрутинг на окремі технічні, сервісні та операційні посади.",
      },
    ],
    supportLabel: "ПІДТРИМКА КАНДИДАТІВ",
    supportTitle: "Шукаєте конкретну роботу?",
    supportText:
      "Надішліть нам своє CV та розкажіть, яку роботу ви шукаєте. Ми зв'яжемося з вами, коли з'явиться відповідна вакансія.",
    sendCv: "Надіслати CV",
    areasLabel: "НАПРЯМИ ПРАЦЕВЛАШТУВАННЯ",
    areasTitle: "Де ми проводимо рекрутинг",
    areas: ["Виробництво", "Логістика", "Склади", "Промисловість"],
    ctaTitle: "Готові зробити наступний крок?",
    ctaText:
      "Подайте заявку на актуальну вакансію або зв'яжіться з нашою командою, щоб дізнатися про доступні можливості.",
    viewVacancies: "Переглянути вакансії",
    contactUs: "Зв'язатися з нами",
  },
} as const;

export default async function JobsPage({ locale }: JobsPageProps) {
  const t = copy[locale];
  const permanentJob = permanentInjectionMachineOperatorJobs[locale];

  const supabase = await createSupabaseServerClient();

  const { data } = await supabase
    .from("jobs")
    .select(
      `
        id,
        code,
        slug,
        title_en,
        title_pl,
        title_ua,
        category,
        location_en,
        location_pl,
        location_ua,
        workers_needed,
        employment_type,
        salary,
        start_date,
        shifts,
        working_hours,
        created_at
      `,
    )
    .eq("status", "published")
    .order("created_at", { ascending: false });

  const databaseJobs = ((data ?? []) as JobRow[]).map((job) =>
    getLocalizedJob(job, locale),
  );

  // Permanent company vacancy ALWAYS comes first.
  const jobs: LocalizedJob[] = [permanentJob, ...databaseJobs];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E2942]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,154,134,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/75">
              <BriefcaseBusiness className="h-4 w-4" />
              {t.heroLabel}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {t.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-[0.16em] text-[#159A86]">
            {t.availableLabel}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E2942] sm:text-4xl">
            {t.availableTitle}
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5B6878]">
            {t.availableText}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {jobs.map((job, index) => (
            <article
              key={job.id}
              className={`group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                index === 0
                  ? "border-[#159A86]/40 ring-1 ring-[#159A86]/10"
                  : "border-[#DCE4EB]"
              }`}
            >
              {index === 0 && (
                <div className="mb-5 inline-flex rounded-full bg-[#159A86]/10 px-3 py-1 text-xs font-bold text-[#159A86]">
                  {locale === "en"
                    ? "Permanent company vacancy"
                    : locale === "pl"
                      ? "Stała oferta firmy"
                      : "Постійна вакансія компанії"}
                </div>
              )}

              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-[#5B6878]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>

                    <span className="text-[#DCE4EB]">•</span>

                    <span>{job.category}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-[#0E2942]">
                    {job.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#5B6878]">
                    {job.code}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {job.salary && (
                    <div className="rounded-xl bg-[#F7F9FB] p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                        {locale === "en"
                          ? "Salary"
                          : locale === "pl"
                            ? "Wynagrodzenie"
                            : "Зарплата"}
                      </div>
                      <div className="mt-1 font-bold text-[#0E2942]">
                        {job.salary}
                      </div>
                    </div>
                  )}

                  <div className="rounded-xl bg-[#F7F9FB] p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                      {locale === "en"
                        ? "Employment"
                        : locale === "pl"
                          ? "Zatrudnienie"
                          : "Зайнятість"}
                    </div>
                    <div className="mt-1 font-bold text-[#0E2942]">
                      {job.employmentType}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#DCE4EB] bg-white px-3 py-1.5 text-xs font-semibold text-[#5B6878]"
                    >
                      {tag}
                    </span>
                  ))}

                  {job.workersNeeded > 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DCE4EB] bg-white px-3 py-1.5 text-xs font-semibold text-[#5B6878]">
                      <Users className="h-3.5 w-3.5" />
                      {job.workersNeeded}{" "}
                      {job.workersNeeded === 1 ? "" : t.workers}
                    </span>
                  )}

                  {job.workingHours && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DCE4EB] bg-white px-3 py-1.5 text-xs font-semibold text-[#5B6878]">
                      <Clock3 className="h-3.5 w-3.5" />
                      {job.workingHours}
                    </span>
                  )}
                </div>

                {job.startDate && (
                  <div className="flex items-center gap-2 text-sm text-[#5B6878]">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {t.startDate}:{" "}
                      <strong className="text-[#0E2942]">
                        {job.startDate}
                      </strong>
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-3 border-t border-[#DCE4EB] pt-5 sm:flex-row">
                  <Link
                    href={job.href}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#123B63] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0E2942]"
                  >
                    {t.viewJob}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={job.applyHref}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#159A86] px-5 py-3 text-sm font-bold text-[#159A86] transition hover:bg-[#159A86] hover:text-white"
                  >
                    {t.apply}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {jobs.length === 1 && (
          <p className="mt-8 text-center text-sm text-[#5B6878]">
            {t.noJobs}
          </p>
        )}
      </section>

      {/* Candidate support */}
      <section className="bg-[#F5F8FA]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.16em] text-[#159A86]">
              {t.candidateLabel}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E2942] sm:text-4xl">
              {t.candidateTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-[#5B6878]">
              {t.candidateText}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.candidateGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[#DCE4EB] bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#0E2942]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5B6878]">
                  {group.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV support */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-[#123B63] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.16em] text-[#7DE0CF]">
              {t.supportLabel}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              {t.supportTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-white/70">
              {t.supportText}
            </p>
          </div>

          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#123B63] transition hover:bg-[#F5F8FA] lg:mt-0"
          >
            {t.sendCv}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Employment areas */}
      <section className="bg-[#F5F8FA]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.16em] text-[#159A86]">
              {t.areasLabel}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E2942] sm:text-4xl">
              {t.areasTitle}
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#DCE4EB] bg-white px-5 py-3 text-sm font-semibold text-[#123B63]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0E2942] sm:text-4xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5B6878]">
            {t.ctaText}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={`/${locale}/jobs`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#123B63] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0E2942]"
            >
              {t.viewVacancies}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DCE4EB] px-6 py-3 text-sm font-bold text-[#123B63] transition hover:bg-[#F5F8FA]"
            >
              {t.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}