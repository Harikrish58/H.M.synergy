import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Clock3,
  MapPin,
  Wallet,
} from "lucide-react";

import JobApplicationForm from "@/components/JobApplicationForm";
import type { Job } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Подати заявку – Оператор термопластавтомата | H&M Synergy",
  description:
    "Подайте заявку на вакансію оператора термопластавтомата у Вроцлаві.",
};

const job: Job = {
  slug: "injection-machine-operator",
  code: "HMS-260801",
  title: {
    en: "Injection Machine Operator",
    pl: "Operator wtryskarki",
    ua: "Оператор термопластавтомата",
  },
  location: {
    en: "Wrocław, Lower Silesia",
    pl: "Wrocław, Dolny Śląsk",
    ua: "Вроцлав, Нижньосілезьке воєводство",
  },
  category: {
    en: "Manufacturing",
    pl: "Produkcja",
    ua: "Виробництво",
  },
};

export default function InjectionMachineOperatorApplyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10">
        <Link
          href="/ua/jobs/injection-machine-operator"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition hover:text-[#159A86]"
        >
          <ArrowLeft className="h-4 w-4" />
          Повернутися до вакансії
        </Link>

        {/* Job information */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#DCE4EB] bg-white shadow-sm">
          <div className="bg-[#0E2942] px-6 py-8 sm:px-8">
            <p className="text-sm font-bold tracking-[0.18em] text-[#7DE0CF]">
              ЗАЯВКА НА ВАКАНСІЮ
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {job.title.ua}
            </h1>

            <p className="mt-3 text-sm font-medium text-white/70">
              Код вакансії: {job.code}
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <BriefcaseBusiness className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Категорія
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                {job.category.ua}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <MapPin className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Місце роботи
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                {job.location.ua}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <Wallet className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Зарплата
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                25 PLN нетто/год.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <Clock3 className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Робочий час
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                12-годинні зміни
              </p>
            </div>
          </div>

          <div className="border-t border-[#DCE4EB] px-6 py-6 sm:px-8">
            <h2 className="text-xl font-bold text-[#0E2942]">
              Про вакансію
            </h2>

            <p className="mt-3 leading-7 text-[#5B6878]">
              Ми шукаємо оператора термопластавтомата для роботи у Вроцлаві.
              Робота включає обслуговування термопластавтоматів та виконання
              виробничих завдань відповідно до встановлених процедур компанії.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div>
                <span className="font-semibold text-[#0E2942]">
                  Зайнятість:
                </span>{" "}
                <span className="text-[#5B6878]">
                  Повна зайнятість
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#0E2942]">
                  Графік роботи:
                </span>{" "}
                <span className="text-[#5B6878]">
                  12 годин/день, 5–6 днів/тиждень
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#0E2942]">
                  Код вакансії:
                </span>{" "}
                <span className="text-[#5B6878]">{job.code}</span>
              </div>

              <div>
                <span className="font-semibold text-[#0E2942]">
                  Місце роботи:
                </span>{" "}
                <span className="text-[#5B6878]">
                  {job.location.ua}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Application form */}
        <div className="mt-12">
          <div className="mb-8">
            <p className="text-sm font-bold tracking-[0.18em] text-[#159A86]">
              ПОДАТИ ЗАЯВКУ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E2942]">
              Надішліть свою заявку
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#5B6878]">
              Заповніть форму нижче та завантажте своє CV. Наша рекрутингова
              команда розгляне вашу заявку та зв&apos;яжеться з вами, якщо ваш
              профіль відповідатиме вимогам вакансії.
            </p>
          </div>

          <JobApplicationForm job={job} locale="ua" />
        </div>
      </section>
    </main>
  );
}