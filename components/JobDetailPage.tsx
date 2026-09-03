import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Clock3,
  GraduationCap,
  MapPin,
  Users,
  Wallet,
  Home,
  Bus,
} from "lucide-react";

export type JobDetailLocale = "en" | "pl" | "ua";

export type JobDetail = {
  id: string;
  slug: string;
  code: string;
  status: "draft" | "published" | "closed";

  title_en: string;
  title_pl: string;
  title_ua: string;

  category: string;

  location_en: string;
  location_pl: string;
  location_ua: string;

  workers_needed: number;
  employment_type: string | null;
  salary: string | null;
  start_date: string | null;

  description_en: string;
  description_pl: string;
  description_ua: string;

  responsibilities_en: string[];
  responsibilities_pl: string[];
  responsibilities_ua: string[];

  requirements_en: string[];
  requirements_pl: string[];
  requirements_ua: string[];

  benefits_en: string[];
  benefits_pl: string[];
  benefits_ua: string[];

  working_hours: string | null;
  shifts: string | null;
  overtime: string | null;
  weekend_work: string | null;
  accommodation: string | null;
  transportation: string | null;
  experience: string | null;
  education: string | null;
  language_requirements: string | null;
  other_requirements: string | null;

  company_name: string | null;
  published_at: string | null;
};

const copy = {
  en: {
    backToJobs: "Back to all jobs",
    vacancy: "Job vacancy",
    employment: "Employment",
    salary: "Salary",
    positions: "Positions",
    startDate: "Start date",
    toBeAgreed: "To be agreed",
    contactUs: "Contact us",

    aboutPosition: "About the position",
    jobDescription: "Job description",

    responsibilities: "Responsibilities",
    whatYouWillDo: "What you will do",

    candidateRequirements: "Candidate requirements",
    whatWeAreLookingFor: "What we are looking for",

    benefits: "Benefits",
    whatWeOffer: "What we offer",

    applyNow: "Apply now",
    interested: "Interested in this position?",
    applicationDescription:
      "Submit your details and CV. Our recruitment team will review your application for this position.",
    applyForPosition: "Apply for this position",

    workingConditions: "Working conditions",
    workingHours: "Working hours",
    shifts: "Shifts",
    overtime: "Overtime",
    weekendWork: "Weekend work",

    candidateProfile: "Candidate profile",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    additionalRequirements: "Additional requirements",

    additionalSupport: "Additional support",
    accommodation: "Accommodation",
    transportation: "Transportation",

    readyToApply: "Ready to apply?",
    takeNextStep: "Take the next step.",
    bottomDescription:
      "Send us your application and CV for this position.",
    applyNowButton: "Apply Now",

    positionNotFound: "Position not found",
    positionUnavailable:
      "The position you are looking for is no longer available or does not exist.",
  },

  pl: {
    backToJobs: "Wróć do wszystkich ofert",
    vacancy: "Oferta pracy",
    employment: "Zatrudnienie",
    salary: "Wynagrodzenie",
    positions: "Stanowiska",
    startDate: "Data rozpoczęcia",
    toBeAgreed: "Do uzgodnienia",
    contactUs: "Skontaktuj się z nami",

    aboutPosition: "O stanowisku",
    jobDescription: "Opis stanowiska",

    responsibilities: "Obowiązki",
    whatYouWillDo: "Zakres obowiązków",

    candidateRequirements: "Wymagania",
    whatWeAreLookingFor: "Kogo szukamy",

    benefits: "Oferujemy",
    whatWeOffer: "Co oferujemy",

    applyNow: "Aplikuj teraz",
    interested: "Zainteresowany/a tym stanowiskiem?",
    applicationDescription:
      "Prześlij swoje dane i CV. Nasz zespół rekrutacyjny zapozna się z Twoją aplikacją na to stanowisko.",
    applyForPosition: "Aplikuj na to stanowisko",

    workingConditions: "Warunki pracy",
    workingHours: "Godziny pracy",
    shifts: "System zmianowy",
    overtime: "Nadgodziny",
    weekendWork: "Praca w weekendy",

    candidateProfile: "Profil kandydata",
    experience: "Doświadczenie",
    education: "Wykształcenie",
    languages: "Znajomość języków",
    additionalRequirements: "Dodatkowe wymagania",

    additionalSupport: "Dodatkowe wsparcie",
    accommodation: "Zakwaterowanie",
    transportation: "Transport",

    readyToApply: "Gotowy/a do aplikowania?",
    takeNextStep: "Zrób kolejny krok.",
    bottomDescription:
      "Prześlij swoją aplikację i CV na to stanowisko.",
    applyNowButton: "Aplikuj teraz",

    positionNotFound: "Nie znaleziono stanowiska",
    positionUnavailable:
      "Stanowisko, którego szukasz, nie jest już dostępne lub nie istnieje.",
  },

  ua: {
    backToJobs: "Повернутися до всіх вакансій",
    vacancy: "Вакансія",
    employment: "Зайнятість",
    salary: "Зарплата",
    positions: "Позиції",
    startDate: "Дата початку",
    toBeAgreed: "За домовленістю",
    contactUs: "Зв'язатися з нами",

    aboutPosition: "Про вакансію",
    jobDescription: "Опис вакансії",

    responsibilities: "Обов'язки",
    whatYouWillDo: "Що ви будете робити",

    candidateRequirements: "Вимоги до кандидата",
    whatWeAreLookingFor: "Кого ми шукаємо",

    benefits: "Ми пропонуємо",
    whatWeOffer: "Що ми пропонуємо",

    applyNow: "Подати заявку",
    interested: "Зацікавлені в цій вакансії?",
    applicationDescription:
      "Надішліть свої дані та CV. Наша рекрутингова команда розгляне вашу заявку на цю вакансію.",
    applyForPosition: "Подати заявку на вакансію",

    workingConditions: "Умови роботи",
    workingHours: "Години роботи",
    shifts: "Змінна робота",
    overtime: "Надурочні години",
    weekendWork: "Робота у вихідні",

    candidateProfile: "Профіль кандидата",
    experience: "Досвід",
    education: "Освіта",
    languages: "Знання мов",
    additionalRequirements: "Додаткові вимоги",

    additionalSupport: "Додаткова підтримка",
    accommodation: "Проживання",
    transportation: "Транспорт",

    readyToApply: "Готові подати заявку?",
    takeNextStep: "Зробіть наступний крок.",
    bottomDescription:
      "Надішліть свою заявку та CV на цю вакансію.",
    applyNowButton: "Подати заявку",

    positionNotFound: "Вакансію не знайдено",
    positionUnavailable:
      "Вакансія, яку ви шукаєте, більше недоступна або не існує.",
  },
};

function safeArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item): item is string =>
      typeof item === "string" && item.trim().length > 0,
  );
}

function formatStartDate(
  date: string | null,
  locale: JobDetailLocale,
): string | null {
  if (!date) {
    return null;
  }

  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  const localeMap: Record<JobDetailLocale, string> = {
    en: "en-GB",
    pl: "pl-PL",
    ua: "uk-UA",
  };

  return new Intl.DateTimeFormat(localeMap[locale], {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

function getLocalizedJob(job: JobDetail, locale: JobDetailLocale) {
  const title =
    locale === "pl"
      ? job.title_pl
      : locale === "ua"
        ? job.title_ua
        : job.title_en;

  const location =
    locale === "pl"
      ? job.location_pl
      : locale === "ua"
        ? job.location_ua
        : job.location_en;

  const description =
    locale === "pl"
      ? job.description_pl
      : locale === "ua"
        ? job.description_ua
        : job.description_en;

  const responsibilities =
    locale === "pl"
      ? safeArray(job.responsibilities_pl)
      : locale === "ua"
        ? safeArray(job.responsibilities_ua)
        : safeArray(job.responsibilities_en);

  const requirements =
    locale === "pl"
      ? safeArray(job.requirements_pl)
      : locale === "ua"
        ? safeArray(job.requirements_ua)
        : safeArray(job.requirements_en);

  const benefits =
    locale === "pl"
      ? safeArray(job.benefits_pl)
      : locale === "ua"
        ? safeArray(job.benefits_ua)
        : safeArray(job.benefits_en);

  return {
    title,
    location,
    description,
    responsibilities,
    requirements,
    benefits,
  };
}

type JobDetailPageProps = {
  job: JobDetail | null;
  locale: JobDetailLocale;
};

export default function JobDetailPage({
  job,
  locale,
}: JobDetailPageProps) {
  const dict = copy[locale];

  if (!job) {
    return (
      <main className="min-h-[70vh] bg-white px-6 py-20 sm:px-10 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
            {dict.vacancy}
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#0E2942]">
            {dict.positionNotFound}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#5B6878]">
            {dict.positionUnavailable}
          </p>

          <Link
            href={`/${locale}/jobs`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            <ArrowLeft className="h-4 w-4" />
            {dict.backToJobs}
          </Link>
        </div>
      </main>
    );
  }

  const localized = getLocalizedJob(job, locale);
  const startDate = formatStartDate(job.start_date, locale);

  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-[#F5F8FA]">
        <div className="mx-auto max-w-[1280px] px-6 py-14 sm:px-10 lg:px-8 lg:py-20">
          <Link
            href={`/${locale}/jobs`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
          >
            <ArrowLeft className="h-4 w-4" />
            {dict.backToJobs}
          </Link>

          <div className="mt-10 max-w-5xl">
            <div className="flex items-center gap-3">
              <span
                className="h-px w-8 bg-[#159A86]"
                aria-hidden="true"
              />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                {dict.vacancy}
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
              {localized.title}
            </h1>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#394656]">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  className="h-4 w-4 text-[#159A86]"
                  aria-hidden="true"
                />
                {localized.location}
              </span>

              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness
                  className="h-4 w-4 text-[#159A86]"
                  aria-hidden="true"
                />
                {job.category}
              </span>

              <span>Job Code: {job.code}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOB SUMMARY
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 lg:px-8">
          <div className="grid border border-[#DCE4EB] sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-[#DCE4EB] p-6 sm:border-r lg:border-b-0">
              <BriefcaseBusiness
                className="h-5 w-5 text-[#159A86]"
                aria-hidden="true"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                {dict.employment}
              </p>

              <p className="mt-2 font-bold text-[#0E2942]">
                {job.employment_type || "—"}
              </p>
            </div>

            <div className="border-b border-[#DCE4EB] p-6 lg:border-b-0 lg:border-r">
              <Wallet
                className="h-5 w-5 text-[#159A86]"
                aria-hidden="true"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                {dict.salary}
              </p>

              <p className="mt-2 font-bold text-[#0E2942]">
                {job.salary || dict.contactUs}
              </p>
            </div>

            <div className="border-b border-[#DCE4EB] p-6 sm:border-r lg:border-b-0">
              <Users
                className="h-5 w-5 text-[#159A86]"
                aria-hidden="true"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                {dict.positions}
              </p>

              <p className="mt-2 font-bold text-[#0E2942]">
                {job.workers_needed}
              </p>
            </div>

            <div className="p-6">
              <CalendarDays
                className="h-5 w-5 text-[#159A86]"
                aria-hidden="true"
              />

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8A96A3]">
                {dict.startDate}
              </p>

              <p className="mt-2 font-bold text-[#0E2942]">
                {startDate || dict.toBeAgreed}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="border-b border-[#DCE4EB] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_360px] lg:gap-20 lg:px-8 lg:py-28">
          {/* LEFT */}
          <div className="min-w-0">
            {/* Description */}
            <section aria-labelledby="job-description-title">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                {dict.aboutPosition}
              </p>

              <h2
                id="job-description-title"
                className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl"
              >
                {dict.jobDescription}
              </h2>

              <div className="mt-6 max-w-3xl whitespace-pre-line text-base leading-8 text-[#5B6878] sm:text-lg">
                {localized.description}
              </div>
            </section>

            {/* Responsibilities */}
            {localized.responsibilities.length > 0 && (
              <section
                aria-labelledby="responsibilities-title"
                className="mt-16 border-t border-[#DCE4EB] pt-12"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  {dict.responsibilities}
                </p>

                <h2
                  id="responsibilities-title"
                  className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942]"
                >
                  {dict.whatYouWillDo}
                </h2>

                <ul className="mt-7 space-y-4">
                  {localized.responsibilities.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex items-start gap-4 text-base leading-7 text-[#5B6878]"
                    >
                      <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center bg-[#EAF6F3]">
                        <Check
                          className="h-3.5 w-3.5 text-[#159A86]"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Requirements */}
            {localized.requirements.length > 0 && (
              <section
                aria-labelledby="requirements-title"
                className="mt-16 border-t border-[#DCE4EB] pt-12"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  {dict.candidateRequirements}
                </p>

                <h2
                  id="requirements-title"
                  className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942]"
                >
                  {dict.whatWeAreLookingFor}
                </h2>

                <ul className="mt-7 space-y-4">
                  {localized.requirements.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex items-start gap-4 text-base leading-7 text-[#5B6878]"
                    >
                      <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center bg-[#EAF6F3]">
                        <Check
                          className="h-3.5 w-3.5 text-[#159A86]"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            {localized.benefits.length > 0 && (
              <section
                aria-labelledby="benefits-title"
                className="mt-16 border-t border-[#DCE4EB] pt-12"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  {dict.benefits}
                </p>

                <h2
                  id="benefits-title"
                  className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942]"
                >
                  {dict.whatWeOffer}
                </h2>

                <ul className="mt-7 space-y-4">
                  {localized.benefits.map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className="flex items-start gap-4 text-base leading-7 text-[#5B6878]"
                    >
                      <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center bg-[#EAF6F3]">
                        <Check
                          className="h-3.5 w-3.5 text-[#159A86]"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* RIGHT */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-[#DCE4EB] bg-[#F7F9FB] p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                {dict.applyNow}
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-[#0E2942]">
                {dict.interested}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#5B6878]">
                {dict.applicationDescription}
              </p>

              <Link
                href={`/${locale}/jobs/${job.slug}/apply`}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
              >
                {dict.applyForPosition}

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Working conditions */}
            {(job.working_hours ||
              job.shifts ||
              job.overtime ||
              job.weekend_work) && (
              <div className="mt-6 border-t border-[#DCE4EB] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  {dict.workingConditions}
                </p>

                <div className="mt-5 divide-y divide-[#DCE4EB]">
                  {job.working_hours && (
                    <div className="flex items-start gap-4 py-4 first:pt-0">
                      <Clock3
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.workingHours}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.working_hours}
                        </p>
                      </div>
                    </div>
                  )}

                  {job.shifts && (
                    <div className="flex items-start gap-4 py-4">
                      <Clock3
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.shifts}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.shifts}
                        </p>
                      </div>
                    </div>
                  )}

                  {job.overtime && (
                    <div className="flex items-start gap-4 py-4">
                      <Clock3
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.overtime}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.overtime}
                        </p>
                      </div>
                    </div>
                  )}

                  {job.weekend_work && (
                    <div className="flex items-start gap-4 py-4">
                      <CalendarDays
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.weekendWork}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.weekend_work}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Candidate profile */}
            {(job.experience ||
              job.education ||
              job.language_requirements ||
              job.other_requirements) && (
              <div className="mt-8 border-t border-[#DCE4EB] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  {dict.candidateProfile}
                </p>

                <div className="mt-5 divide-y divide-[#DCE4EB]">
                  {job.experience && (
                    <div className="py-4 first:pt-0">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                        {dict.experience}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#394656]">
                        {job.experience}
                      </p>
                    </div>
                  )}

                  {job.education && (
                    <div className="flex items-start gap-4 py-4">
                      <GraduationCap
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.education}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.education}
                        </p>
                      </div>
                    </div>
                  )}

                  {job.language_requirements && (
                    <div className="py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                        {dict.languages}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#394656]">
                        {job.language_requirements}
                      </p>
                    </div>
                  )}

                  {job.other_requirements && (
                    <div className="py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                        {dict.additionalRequirements}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-[#394656]">
                        {job.other_requirements}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Accommodation / transport */}
            {(job.accommodation || job.transportation) && (
              <div className="mt-8 border-t border-[#DCE4EB] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
                  {dict.additionalSupport}
                </p>

                <div className="mt-5 divide-y divide-[#DCE4EB]">
                  {job.accommodation && (
                    <div className="flex items-start gap-4 py-4 first:pt-0">
                      <Home
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.accommodation}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.accommodation}
                        </p>
                      </div>
                    </div>
                  )}

                  {job.transportation && (
                    <div className="flex items-start gap-4 py-4">
                      <Bus
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#159A86]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#8A96A3]">
                          {dict.transportation}
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#394656]">
                          {job.transportation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]">
              {dict.readyToApply}
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl">
              {dict.takeNextStep}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5B6878]">
              {dict.bottomDescription}
            </p>
          </div>

          <Link
            href={`/${locale}/jobs/${job.slug}/apply`}
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#123B63] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
          >
            {dict.applyNowButton}

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