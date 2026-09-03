"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Upload } from "lucide-react";

type Locale = "en" | "pl" | "ua";

type ApplicationJob = {
  slug: string;
  code: string;
  title: {
    en: string;
    pl: string;
    ua: string;
  };
  location: {
    en: string;
    pl: string;
    ua: string;
  };
};

type Props = {
  job: ApplicationJob;
  locale?: Locale;
};

const inputClass =
  "mt-2 h-12 w-full border border-[#DCE4EB] bg-white px-4 text-sm text-[#182230] outline-none transition-colors placeholder:text-[#8A96A3] focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const textareaClass =
  "mt-2 w-full border border-[#DCE4EB] bg-white p-4 text-sm leading-7 text-[#182230] outline-none transition-colors placeholder:text-[#8A96A3] focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const selectClass = inputClass;

const primaryButton =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const copy = {
  en: {
    candidateInformation: "Candidate information",
    fullName: "Full name *",
    email: "Email *",
    phone: "Phone *",
    currentLocation: "Current city / location *",

    citizenship: "Citizenship *",
    citizenshipPlaceholder: "e.g. Polish",

    workEligibility: "Work eligibility in Poland *",
    selectOption: "Select an option",
    yes: "Yes",
    no: "No",
    needAssistance: "I need assistance / clarification",

    studentStatus: "Are you currently a student? *",
    polishUniversityGraduate: "Graduate of a Polish university? *",

    experience: "Work experience *",
    experiencePlaceholder:
      "Briefly describe your relevant experience.",

    availability: "Availability / start date *",
    availabilityPlaceholder: "e.g. Immediately",

    languages: "Languages",
    languagesPlaceholder:
      "e.g. Polish, English, Ukrainian",

    additionalMessage: "Additional message",
    additionalMessagePlaceholder:
      "Anything else you would like us to know?",

    cv: "CV / Resume",
    uploadCv: "Upload your CV *",
    cvHelp: "PDF, DOC or DOCX · Maximum 5 MB",

    consent:
      "I consent to H&M Synergy processing my personal data for the purpose of recruitment and contacting me regarding this application. *",

    submit: "Submit application",
    submitting: "Submitting application...",

    success:
      "Thank you. Your application has been submitted successfully. Our recruitment team will review your application and contact you if your profile matches the position.",

    genericError:
      "We couldn't submit your application. Please check your details and try again.",

    networkError:
      "We couldn't submit your application. Please try again.",

    cvError: "Please upload your CV.",
  },

  pl: {
    candidateInformation: "Informacje o kandydacie",
    fullName: "Imię i nazwisko *",
    email: "E-mail *",
    phone: "Telefon *",
    currentLocation: "Aktualne miasto / miejsce zamieszkania *",

    citizenship: "Obywatelstwo *",
    citizenshipPlaceholder: "np. polskie",

    workEligibility: "Prawo do pracy w Polsce *",
    selectOption: "Wybierz opcję",
    yes: "Tak",
    no: "Nie",
    needAssistance: "Potrzebuję pomocy / wyjaśnienia",

    studentStatus:
      "Czy jesteś obecnie studentem/studentką? *",

    polishUniversityGraduate:
      "Czy jesteś absolwentem/absolwentką polskiej uczelni? *",

    experience: "Doświadczenie zawodowe *",
    experiencePlaceholder:
      "Krótko opisz swoje odpowiednie doświadczenie.",

    availability:
      "Dostępność / możliwa data rozpoczęcia pracy *",
    availabilityPlaceholder: "np. Od zaraz",

    languages: "Znajomość języków",
    languagesPlaceholder:
      "np. polski, angielski, ukraiński",

    additionalMessage: "Dodatkowa wiadomość",
    additionalMessagePlaceholder:
      "Czy jest coś jeszcze, co powinniśmy wiedzieć?",

    cv: "CV",
    uploadCv: "Dodaj swoje CV *",
    cvHelp: "PDF, DOC lub DOCX · Maksymalnie 5 MB",

    consent:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych przez H&M Synergy w celu rekrutacji oraz kontaktu w związku z niniejszą aplikacją. *",

    submit: "Wyślij aplikację",
    submitting: "Wysyłanie aplikacji...",

    success:
      "Dziękujemy. Twoja aplikacja została pomyślnie wysłana. Nasz zespół rekrutacyjny przeanalizuje Twoją aplikację i skontaktuje się z Tobą, jeśli Twój profil będzie odpowiadał stanowisku.",

    genericError:
      "Nie udało się wysłać aplikacji. Sprawdź wprowadzone dane i spróbuj ponownie.",

    networkError:
      "Nie udało się wysłać aplikacji. Spróbuj ponownie.",

    cvError: "Dodaj swoje CV.",
  },

  ua: {
    candidateInformation: "Інформація про кандидата",
    fullName: "Ім'я та прізвище *",
    email: "Електронна пошта *",
    phone: "Телефон *",
    currentLocation: "Поточне місто / місце проживання *",

    citizenship: "Громадянство *",
    citizenshipPlaceholder: "наприклад, українське",

    workEligibility: "Право на роботу в Польщі *",
    selectOption: "Виберіть варіант",
    yes: "Так",
    no: "Ні",
    needAssistance: "Потрібна допомога / роз'яснення",

    studentStatus: "Ви зараз є студентом/студенткою? *",

    polishUniversityGraduate:
      "Ви є випускником/випускницею польського університету? *",

    experience: "Досвід роботи *",
    experiencePlaceholder:
      "Коротко опишіть свій відповідний досвід.",

    availability: "Доступність / дата початку роботи *",
    availabilityPlaceholder: "наприклад, негайно",

    languages: "Знання мов",
    languagesPlaceholder:
      "наприклад, польська, англійська, українська",

    additionalMessage: "Додаткове повідомлення",
    additionalMessagePlaceholder:
      "Чи є ще щось, що ми повинні знати?",

    cv: "Резюме / CV",
    uploadCv: "Додайте своє CV *",
    cvHelp: "PDF, DOC або DOCX · Максимальний розмір 5 МБ",

    consent:
      "Я даю згоду H&M Synergy на обробку моїх персональних даних з метою рекрутингу та зв'язку зі мною щодо цієї заявки. *",

    submit: "Надіслати заявку",
    submitting: "Надсилання заявки...",

    success:
      "Дякуємо. Вашу заявку успішно надіслано. Наша рекрутингова команда розгляне вашу заявку та зв'яжеться з вами, якщо ваш профіль відповідатиме цій вакансії.",

    genericError:
      "Не вдалося надіслати заявку. Перевірте введені дані та спробуйте ще раз.",

    networkError:
      "Не вдалося надіслати заявку. Спробуйте ще раз.",

    cvError: "Будь ласка, додайте своє CV.",
  },
};

export default function JobApplicationForm({
  job,
  locale = "en",
}: Props) {
  const dict = copy[locale];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setStatus("loading");
    setErrorMsg(null);

    try {
      const response = await fetch("/api/job-application", {
        method: "POST",
        body: form,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setStatus("error");
        setErrorMsg(data?.error || dict.genericError);
        return;
      }

      setStatus("success");
      setErrorMsg(null);
      setFileName("");
      formElement.reset();
    } catch {
      setStatus("error");
      setErrorMsg(dict.networkError);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8"
      encType="multipart/form-data"
      autoComplete="off"
    >
      {/* Job identification */}
      <input type="hidden" name="jobSlug" value={job.slug} />
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Candidate information */}
      <div>
        <h3 className="text-xl font-bold text-[#0E2942]">
          {dict.candidateInformation}
        </h3>

        <div className="mt-6 space-y-6">
          {/* Name + Email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-[#182230]">
              {dict.fullName}

              <input
                name="name"
                required
                autoComplete="name"
                className={inputClass}
              />
            </label>

            <label className="block text-sm font-semibold text-[#182230]">
              {dict.email}

              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </label>
          </div>

          {/* Phone + City */}
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-[#182230]">
              {dict.phone}

              <input
                name="phone"
                required
                autoComplete="tel"
                className={inputClass}
              />
            </label>

            <label className="block text-sm font-semibold text-[#182230]">
              {dict.currentLocation}

              <input
                name="currentLocation"
                required
                autoComplete="address-level2"
                className={inputClass}
              />
            </label>
          </div>

          {/* Citizenship + work eligibility */}
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-[#182230]">
              {dict.citizenship}

              <input
                name="citizenship"
                required
                autoComplete="country-name"
                placeholder={dict.citizenshipPlaceholder}
                className={inputClass}
              />
            </label>

            <label className="block text-sm font-semibold text-[#182230]">
              {dict.workEligibility}

              <select
                name="workEligibility"
                required
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  {dict.selectOption}
                </option>

                <option value="yes">{dict.yes}</option>

                <option value="no">{dict.no}</option>

                <option value="need-assistance">
                  {dict.needAssistance}
                </option>
              </select>
            </label>
          </div>

          {/* Student + Polish university graduate */}
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-[#182230]">
              {dict.studentStatus}

              <select
                name="studentStatus"
                required
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  {dict.selectOption}
                </option>

                <option value="yes">{dict.yes}</option>

                <option value="no">{dict.no}</option>
              </select>
            </label>

            <label className="block text-sm font-semibold text-[#182230]">
              {dict.polishUniversityGraduate}

              <select
                name="polishUniversityGraduate"
                required
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  {dict.selectOption}
                </option>

                <option value="yes">{dict.yes}</option>

                <option value="no">{dict.no}</option>
              </select>
            </label>
          </div>

          {/* Experience + availability */}
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-[#182230]">
              {dict.experience}

              <textarea
                name="experience"
                required
                rows={4}
                placeholder={dict.experiencePlaceholder}
                className={textareaClass}
              />
            </label>

            <label className="block text-sm font-semibold text-[#182230]">
              {dict.availability}

              <input
                name="availability"
                required
                placeholder={dict.availabilityPlaceholder}
                className={inputClass}
              />
            </label>
          </div>

          {/* Languages */}
          <label className="block text-sm font-semibold text-[#182230]">
            {dict.languages}

            <input
              name="languages"
              placeholder={dict.languagesPlaceholder}
              className={inputClass}
            />
          </label>

          {/* Additional message */}
          <label className="block text-sm font-semibold text-[#182230]">
            {dict.additionalMessage}

            <textarea
              name="message"
              rows={5}
              className={textareaClass}
              placeholder={dict.additionalMessagePlaceholder}
            />
          </label>
        </div>
      </div>

      {/* CV */}
      <div className="border-t border-[#DCE4EB] pt-8">
        <h3 className="text-xl font-bold text-[#0E2942]">
          {dict.cv}
        </h3>

        <label className="mt-6 block cursor-pointer border border-dashed border-[#C8D3DD] bg-[#F7F9FB] px-6 py-8 text-center transition-colors hover:border-[#159A86] hover:bg-[#F5F8FA]">
          <Upload className="mx-auto h-6 w-6 text-[#159A86]" />

          <span className="mt-3 block text-sm font-semibold text-[#123B63]">
            {dict.uploadCv}
          </span>

          <span className="mt-1 block text-xs text-[#8A96A3]">
            {dict.cvHelp}
          </span>

          <input
            type="file"
            name="cv"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="sr-only"
            onChange={(event) => {
              setFileName(event.target.files?.[0]?.name || "");
            }}
          />

          {fileName && (
            <span className="mt-4 block text-sm font-semibold text-[#159A86]">
              {fileName}
            </span>
          )}
        </label>
      </div>

      {/* Consent */}
      <label className="flex items-start gap-3 text-sm leading-6 text-[#5B6878]">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#159A86]"
        />

        <span>{dict.consent}</span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={primaryButton}
      >
        {status === "loading"
          ? dict.submitting
          : dict.submit}

        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>

      {/* Success */}
      {status === "success" && (
        <p
          role="status"
          className="border border-[#BFE3DB] bg-[#F0FAF7] px-4 py-3 text-sm font-medium text-[#137C6B]"
        >
          {dict.success}
        </p>
      )}

      {/* Error */}
      {status === "error" && (
        <p
          role="alert"
          className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {errorMsg || dict.genericError}
        </p>
      )}
    </form>
  );
}