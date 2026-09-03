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
  title: "Aplikuj – Operator wtryskarki | H&M Synergy",
  description:
    "Aplikuj na stanowisko Operatora wtryskarki we Wrocławiu.",
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
          href="/pl/jobs/injection-machine-operator"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition hover:text-[#159A86]"
        >
          <ArrowLeft className="h-4 w-4" />
          Powrót do oferty pracy
        </Link>

        {/* Job information */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#DCE4EB] bg-white shadow-sm">
          <div className="bg-[#0E2942] px-6 py-8 sm:px-8">
            <p className="text-sm font-bold tracking-[0.18em] text-[#7DE0CF]">
              APLIKACJA NA STANOWISKO
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {job.title.pl}
            </h1>

            <p className="mt-3 text-sm font-medium text-white/70">
              Kod oferty: {job.code}
            </p>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <BriefcaseBusiness className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Kategoria
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                {job.category.pl}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <MapPin className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Lokalizacja
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                {job.location.pl}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <Wallet className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Wynagrodzenie
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                25 PLN netto/godz.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F5F8FA] p-5">
              <Clock3 className="h-5 w-5 text-[#159A86]" />

              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#5B6878]">
                Czas pracy
              </p>

              <p className="mt-1 font-bold text-[#0E2942]">
                Praca 12-godzinna
              </p>
            </div>
          </div>

          <div className="border-t border-[#DCE4EB] px-6 py-6 sm:px-8">
            <h2 className="text-xl font-bold text-[#0E2942]">
              O stanowisku
            </h2>

            <p className="mt-3 leading-7 text-[#5B6878]">
              Poszukujemy Operatora wtryskarki do pracy we Wrocławiu.
              Stanowisko obejmuje obsługę wtryskarek oraz wykonywanie zadań
              związanych z produkcją zgodnie z obowiązującymi procedurami.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div>
                <span className="font-semibold text-[#0E2942]">
                  Zatrudnienie:
                </span>{" "}
                <span className="text-[#5B6878]">Pełny etat</span>
              </div>

              <div>
                <span className="font-semibold text-[#0E2942]">
                  System pracy:
                </span>{" "}
                <span className="text-[#5B6878]">
                  12 godzin/dzień, 5–6 dni/tydzień
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#0E2942]">
                  Kod oferty:
                </span>{" "}
                <span className="text-[#5B6878]">{job.code}</span>
              </div>

              <div>
                <span className="font-semibold text-[#0E2942]">
                  Miejsce pracy:
                </span>{" "}
                <span className="text-[#5B6878]">{job.location.pl}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Application form */}
        <div className="mt-12">
          <div className="mb-8">
            <p className="text-sm font-bold tracking-[0.18em] text-[#159A86]">
              APLIKUJ TERAZ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0E2942]">
              Wyślij swoją aplikację
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#5B6878]">
              Wypełnij poniższy formularz i prześlij swoje CV. Nasz zespół
              rekrutacyjny przeanalizuje Twoją aplikację i skontaktuje się z
              Tobą, jeśli Twój profil będzie odpowiadał stanowisku.
            </p>
          </div>

          <JobApplicationForm job={job} locale="pl" />
        </div>
      </section>
    </main>
  );
}