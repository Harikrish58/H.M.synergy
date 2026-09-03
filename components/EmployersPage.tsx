"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Trash2,
  Users,
} from "lucide-react";

type Locale = "en" | "pl" | "ua";

type Props = {
  locale: Locale;
};

type FormState = {
  jobTitle: string;
  category: string;
  location: string;
  workersNeeded: string;
  employmentType: string;
  salary: string;
  startDate: string;

  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];

  workingHours: string;
  shifts: string;
  overtime: string;
  weekendWork: string;
  accommodation: string;
  transportation: string;

  experience: string;
  education: string;
  language: string;
  otherRequirements: string;

  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  nipKrs: string;

  additionalNotes: string;

  privacyConsent: boolean;
  contactConsent: boolean;
};

const content = {
  en: {
    heroLabel: "For Employers",
    heroTitle:
      "Submit your vacancy and find the right people for your business.",
    heroText:
      "Tell us about the position you need to fill. Provide your workforce requirements and our recruitment team will review your request and help identify suitable candidates.",
    heroNote:
      "Your vacancy will be reviewed by H&M Synergy before any publication or recruitment activity begins.",

    formLabel: "Submit a Vacancy",
    formTitle: "Tell us about the position you need to fill.",
    formDescription:
      "Complete the vacancy details below. Fields marked with an asterisk are required.",

    sections: {
      jobInformation: "Job Information",
      jobDescription: "Job Description",
      workingConditions: "Working Conditions",
      candidateRequirements: "Candidate Requirements",
      companyInformation: "Company Information",
      additionalInformation: "Additional Information",
    },

    fields: {
      jobTitle: "Job Title",
      category: "Category",
      location: "Location",
      workersNeeded: "Number of Workers Needed",
      employmentType: "Employment Type",
      salary: "Salary / Rate",
      startDate: "Preferred Start Date",

      description: "About the Position",
      responsibilities: "Responsibilities",
      requirements: "Requirements",
      benefits: "What We Offer",

      workingHours: "Working Hours",
      shifts: "Shifts",
      overtime: "Overtime Available",
      weekendWork: "Weekend Work",
      accommodation: "Accommodation",
      transportation: "Transportation",

      experience: "Required Experience",
      education: "Education",
      language: "Language Requirements",
      otherRequirements: "Other Requirements",

      companyName: "Company Name",
      contactPerson: "Contact Person",
      email: "Business Email",
      phone: "Phone",
      website: "Company Website",
      nipKrs: "NIP / KRS",

      additionalNotes: "Additional Notes",
    },

    placeholders: {
      jobTitle: "e.g. Injection Machine Operator",
      location: "e.g. Wrocław",
      workersNeeded: "e.g. 5",
      salary: "e.g. 30–35 PLN gross/hour",
      startDate: "Select a date",
      description:
        "Describe the position, type of work and main responsibilities of the role.",
      responsibility: "e.g. Operate production machinery",
      requirement: "e.g. Previous production experience",
      benefit: "e.g. Stable employment",
      workingHours: "e.g. 8 hours/day",
      shifts: "e.g. 3 shifts",
      experience: "e.g. 1+ year",
      education: "e.g. Not required",
      language: "e.g. Polish — basic",
      otherRequirements: "Additional candidate requirements",
      companyName: "Your company name",
      contactPerson: "Full name",
      email: "name@company.com",
      phone: "+48 ...",
      website: "https://...",
      nipKrs: "Optional",
      additionalNotes:
        "Anything else our recruitment team should know about this vacancy?",
    },

    select: {
      category: "Select a category",
      employmentType: "Select employment type",
      yesNo: "Select",
      accommodation: "Select",
      transportation: "Select",
    },

    options: {
      categories: [
        "Manufacturing",
        "Production",
        "Warehousing",
        "Logistics",
        "Machine Operations",
        "Assembly",
        "Other",
      ],
      employmentTypes: [
        "Full-time",
        "Part-time",
        "Temporary",
        "Contract",
        "Other",
      ],
      yesNo: ["Yes", "No"],
      accommodation: ["Provided", "Not provided"],
      transportation: ["Provided", "Not provided"],
    },

    add: "Add",
    remove: "Remove",

    consent: {
      privacy:
        "I agree to the processing of my personal data in accordance with the Privacy Policy.",
      contact:
        "I agree to be contacted by H&M Synergy regarding this vacancy and related recruitment services.",
    },

    submit: "Submit Vacancy",
    submitting: "Submitting...",

    success: {
      label: "Vacancy Submitted",
      title: "Thank you. Your vacancy has been submitted.",
      description:
        "Our recruitment team will review the information you provided and contact you regarding the next steps.",
      another: "Submit Another Vacancy",
      contact: "Contact Us",
    },

    error:
      "Something went wrong while submitting your vacancy. Please try again.",

    validation: {
      required: "Please complete all required fields.",
      privacy: "Please accept the Privacy Policy.",
      contact: "Please confirm that we may contact you regarding this vacancy.",
      email: "Please enter a valid business email address.",
      workers: "Please enter a valid number of workers.",
    },
  },

  pl: {
    heroLabel: "Dla Pracodawców",
    heroTitle:
      "Zgłoś swoją ofertę i znajdź odpowiednich pracowników dla swojej firmy.",
    heroText:
      "Opowiedz nam o stanowisku, które chcesz obsadzić. Podaj swoje wymagania kadrowe, a nasz zespół rekrutacyjny przeanalizuje zgłoszenie i pomoże znaleźć odpowiednich kandydatów.",
    heroNote:
      "Twoja oferta zostanie sprawdzona przez H&M Synergy przed jej publikacją lub rozpoczęciem procesu rekrutacyjnego.",

    formLabel: "Zgłoś ofertę pracy",
    formTitle: "Opowiedz nam o stanowisku, które chcesz obsadzić.",
    formDescription:
      "Uzupełnij poniższe informacje. Pola oznaczone gwiazdką są wymagane.",

    sections: {
      jobInformation: "Informacje o stanowisku",
      jobDescription: "Opis stanowiska",
      workingConditions: "Warunki pracy",
      candidateRequirements: "Wymagania wobec kandydatów",
      companyInformation: "Informacje o firmie",
      additionalInformation: "Dodatkowe informacje",
    },

    fields: {
      jobTitle: "Nazwa stanowiska",
      category: "Kategoria",
      location: "Lokalizacja",
      workersNeeded: "Liczba potrzebnych pracowników",
      employmentType: "Rodzaj zatrudnienia",
      salary: "Wynagrodzenie / Stawka",
      startDate: "Preferowana data rozpoczęcia",

      description: "O stanowisku",
      responsibilities: "Zakres obowiązków",
      requirements: "Wymagania",
      benefits: "Co oferujemy",

      workingHours: "Godziny pracy",
      shifts: "System zmianowy",
      overtime: "Możliwość pracy w nadgodzinach",
      weekendWork: "Praca w weekendy",
      accommodation: "Zakwaterowanie",
      transportation: "Transport",

      experience: "Wymagane doświadczenie",
      education: "Wykształcenie",
      language: "Wymagania językowe",
      otherRequirements: "Pozostałe wymagania",

      companyName: "Nazwa firmy",
      contactPerson: "Osoba kontaktowa",
      email: "E-mail służbowy",
      phone: "Telefon",
      website: "Strona internetowa firmy",
      nipKrs: "NIP / KRS",

      additionalNotes: "Dodatkowe informacje",
    },

    placeholders: {
      jobTitle: "np. Operator wtryskarki",
      location: "np. Wrocław",
      workersNeeded: "np. 5",
      salary: "np. 30–35 PLN brutto/godz.",
      startDate: "Wybierz datę",
      description:
        "Opisz stanowisko, rodzaj pracy oraz główne obowiązki na danym stanowisku.",
      responsibility: "np. Obsługa maszyn produkcyjnych",
      requirement: "np. Doświadczenie w pracy na produkcji",
      benefit: "np. Stabilne zatrudnienie",
      workingHours: "np. 8 godzin dziennie",
      shifts: "np. 3 zmiany",
      experience: "np. minimum 1 rok",
      education: "np. niewymagane",
      language: "np. język polski — podstawowy",
      otherRequirements: "Dodatkowe wymagania wobec kandydata",
      companyName: "Nazwa firmy",
      contactPerson: "Imię i nazwisko",
      email: "nazwa@firma.pl",
      phone: "+48 ...",
      website: "https://...",
      nipKrs: "Opcjonalnie",
      additionalNotes:
        "Czy jest coś jeszcze, o czym nasz zespół rekrutacyjny powinien wiedzieć?",
    },

    select: {
      category: "Wybierz kategorię",
      employmentType: "Wybierz rodzaj zatrudnienia",
      yesNo: "Wybierz",
      accommodation: "Wybierz",
      transportation: "Wybierz",
    },

    options: {
      categories: [
        "Produkcja",
        "Przemysł",
        "Magazynowanie",
        "Logistyka",
        "Obsługa maszyn",
        "Montaż",
        "Inne",
      ],
      employmentTypes: [
        "Pełny etat",
        "Część etatu",
        "Praca tymczasowa",
        "Umowa kontraktowa",
        "Inne",
      ],
      yesNo: ["Tak", "Nie"],
      accommodation: ["Zapewniamy", "Nie zapewniamy"],
      transportation: ["Zapewniamy", "Nie zapewniamy"],
    },

    add: "Dodaj",
    remove: "Usuń",

    consent: {
      privacy:
        "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką prywatności.",
      contact:
        "Wyrażam zgodę na kontakt ze strony H&M Synergy w sprawie tej oferty oraz powiązanych usług rekrutacyjnych.",
    },

    submit: "Zgłoś ofertę",
    submitting: "Wysyłanie...",

    success: {
      label: "Oferta została zgłoszona",
      title: "Dziękujemy. Twoja oferta została przesłana.",
      description:
        "Nasz zespół rekrutacyjny przeanalizuje podane informacje i skontaktuje się z Tobą w sprawie dalszych kroków.",
      another: "Zgłoś kolejną ofertę",
      contact: "Skontaktuj się z nami",
    },

    error: "Wystąpił problem podczas wysyłania formularza. Spróbuj ponownie.",

    validation: {
      required: "Uzupełnij wszystkie wymagane pola.",
      privacy: "Zaakceptuj Politykę prywatności.",
      contact: "Potwierdź zgodę na kontakt w sprawie tej oferty.",
      email: "Podaj prawidłowy adres e-mail służbowy.",
      workers: "Podaj prawidłową liczbę pracowników.",
    },
  },

  ua: {
    heroLabel: "Для роботодавців",
    heroTitle:
      "Подайте вакансію та знайдіть відповідних працівників для вашої компанії.",
    heroText:
      "Розкажіть нам про посаду, яку потрібно заповнити. Надайте ваші кадрові вимоги, а наша команда рекрутингу перегляне заявку та допоможе знайти відповідних кандидатів.",
    heroNote:
      "Ваша вакансія буде перевірена H&M Synergy перед її публікацією або початком процесу рекрутингу.",

    formLabel: "Подати вакансію",
    formTitle: "Розкажіть нам про посаду, яку потрібно заповнити.",
    formDescription:
      "Заповніть інформацію нижче. Поля, позначені зірочкою, є обов'язковими.",

    sections: {
      jobInformation: "Інформація про вакансію",
      jobDescription: "Опис вакансії",
      workingConditions: "Умови роботи",
      candidateRequirements: "Вимоги до кандидата",
      companyInformation: "Інформація про компанію",
      additionalInformation: "Додаткова інформація",
    },

    fields: {
      jobTitle: "Назва посади",
      category: "Категорія",
      location: "Місце роботи",
      workersNeeded: "Кількість працівників",
      employmentType: "Тип зайнятості",
      salary: "Зарплата / Ставка",
      startDate: "Бажана дата початку",

      description: "Про посаду",
      responsibilities: "Обов'язки",
      requirements: "Вимоги",
      benefits: "Ми пропонуємо",

      workingHours: "Робочі години",
      shifts: "Зміни",
      overtime: "Понаднормова робота",
      weekendWork: "Робота у вихідні",
      accommodation: "Проживання",
      transportation: "Транспорт",

      experience: "Необхідний досвід",
      education: "Освіта",
      language: "Мовні вимоги",
      otherRequirements: "Інші вимоги",

      companyName: "Назва компанії",
      contactPerson: "Контактна особа",
      email: "Робоча електронна пошта",
      phone: "Телефон",
      website: "Вебсайт компанії",
      nipKrs: "NIP / KRS",

      additionalNotes: "Додаткова інформація",
    },

    placeholders: {
      jobTitle: "наприклад, Оператор термопластавтомата",
      location: "наприклад, Вроцлав",
      workersNeeded: "наприклад, 5",
      salary: "наприклад, 30–35 PLN брутто/год.",
      startDate: "Оберіть дату",
      description:
        "Опишіть посаду, характер роботи та основні обов'язки працівника.",
      responsibility: "наприклад, Обслуговування виробничих машин",
      requirement: "наприклад, Досвід роботи на виробництві",
      benefit: "наприклад, Стабільне працевлаштування",
      workingHours: "наприклад, 8 годин на день",
      shifts: "наприклад, 3 зміни",
      experience: "наприклад, від 1 року",
      education: "наприклад, не вимагається",
      language: "наприклад, польська — базовий рівень",
      otherRequirements: "Додаткові вимоги до кандидата",
      companyName: "Назва компанії",
      contactPerson: "Ім'я та прізвище",
      email: "name@company.com",
      phone: "+48 ...",
      website: "https://...",
      nipKrs: "Необов'язково",
      additionalNotes:
        "Чи є щось ще, що наша команда рекрутингу повинна знати про цю вакансію?",
    },

    select: {
      category: "Оберіть категорію",
      employmentType: "Оберіть тип зайнятості",
      yesNo: "Оберіть",
      accommodation: "Оберіть",
      transportation: "Оберіть",
    },

    options: {
      categories: [
        "Виробництво",
        "Промисловість",
        "Склад",
        "Логістика",
        "Обслуговування машин",
        "Монтаж",
        "Інше",
      ],
      employmentTypes: [
        "Повна зайнятість",
        "Неповна зайнятість",
        "Тимчасова робота",
        "Контракт",
        "Інше",
      ],
      yesNo: ["Так", "Ні"],
      accommodation: ["Надається", "Не надається"],
      transportation: ["Надається", "Не надається"],
    },

    add: "Додати",
    remove: "Видалити",

    consent: {
      privacy:
        "Я погоджуюся на обробку моїх персональних даних відповідно до Політики конфіденційності.",
      contact:
        "Я погоджуюся на контакт з боку H&M Synergy щодо цієї вакансії та пов'язаних рекрутингових послуг.",
    },

    submit: "Подати вакансію",
    submitting: "Надсилання...",

    success: {
      label: "Вакансію подано",
      title: "Дякуємо. Вашу вакансію успішно надіслано.",
      description:
        "Наша команда рекрутингу перегляне надану інформацію та зв'яжеться з вами щодо наступних кроків.",
      another: "Подати іншу вакансію",
      contact: "Зв'язатися з нами",
    },

    error: "Під час надсилання вакансії сталася помилка. Спробуйте ще раз.",

    validation: {
      required: "Будь ласка, заповніть усі обов'язкові поля.",
      privacy: "Будь ласка, прийміть Політику конфіденційності.",
      contact: "Підтвердіть згоду на контакт щодо цієї вакансії.",
      email: "Введіть правильну робочу електронну адресу.",
      workers: "Введіть правильну кількість працівників.",
    },
  },
} as const;

const primaryButton =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 border border-[#123B63] bg-white px-6 py-3.5 text-sm font-semibold text-[#123B63] transition-all duration-200 hover:bg-[#EAF3FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2";

const sectionLabel =
  "text-xs font-bold uppercase tracking-[0.18em] text-[#159A86]";

const sectionTitle =
  "text-3xl font-bold leading-tight tracking-[-0.035em] text-[#0E2942] sm:text-4xl lg:text-[2.65rem]";

const bodyText = "text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8";

const inputClass =
  "w-full border border-[#CBD6DF] bg-white px-4 py-3.5 text-sm text-[#182230] outline-none transition-colors placeholder:text-[#9AA6B2] focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const textareaClass =
  "min-h-[150px] w-full resize-y border border-[#CBD6DF] bg-white px-4 py-4 text-sm leading-7 text-[#182230] outline-none transition-colors placeholder:text-[#9AA6B2] focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const selectClass =
  "w-full appearance-none border border-[#CBD6DF] bg-white px-4 py-3.5 pr-10 text-sm text-[#182230] outline-none transition-colors focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const initialForm: FormState = {
  jobTitle: "",
  category: "",
  location: "",
  workersNeeded: "",
  employmentType: "",
  salary: "",
  startDate: "",

  description: "",
  responsibilities: [""],
  requirements: [""],
  benefits: [""],

  workingHours: "",
  shifts: "",
  overtime: "",
  weekendWork: "",
  accommodation: "",
  transportation: "",

  experience: "",
  education: "",
  language: "",
  otherRequirements: "",

  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  website: "",
  nipKrs: "",

  additionalNotes: "",

  privacyConsent: false,
  contactConsent: false,
};

function FieldLabel({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mb-2 block text-sm font-bold text-[#0E2942]">
      {children}
      {required && <span className="ml-1 text-[#159A86]">*</span>}
    </label>
  );
}

function TextField({
  label,
  required,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass}
      />
    </div>
  );
}

function SelectField({
  label,
  required,
  placeholder,
  value,
  options,
  onChange,
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={selectClass}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#687585]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function TextAreaField({
  label,
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>

      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={textareaClass}
      />
    </div>
  );
}

export default function EmployersPage({ locale }: Props) {
  const t = content[locale];

  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = <K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const updateList = (
    field: "responsibilities" | "requirements" | "benefits",
    index: number,
    value: string,
  ) => {
    setForm((current) => {
      const updated = [...current[field]];
      updated[index] = value;

      return {
        ...current,
        [field]: updated,
      };
    });
  };

  const addListItem = (
    field: "responsibilities" | "requirements" | "benefits",
  ) => {
    setForm((current) => ({
      ...current,
      [field]: [...current[field], ""],
    }));
  };

  const removeListItem = (
    field: "responsibilities" | "requirements" | "benefits",
    index: number,
  ) => {
    setForm((current) => {
      if (current[field].length === 1) {
        return current;
      }

      return {
        ...current,
        [field]: current[field].filter((_, itemIndex) => itemIndex !== index),
      };
    });
  };

  const validate = () => {
    if (
      !form.jobTitle.trim() ||
      !form.category ||
      !form.location.trim() ||
      !form.workersNeeded.trim() ||
      !form.employmentType ||
      !form.description.trim() ||
      !form.companyName.trim() ||
      !form.contactPerson.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      return t.validation.required;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return t.validation.email;
    }

    if (
      Number.isNaN(Number(form.workersNeeded)) ||
      Number(form.workersNeeded) < 1
    ) {
      return t.validation.workers;
    }

    if (!form.privacyConsent) {
      return t.validation.privacy;
    }

    if (!form.contactConsent) {
      return t.validation.contact;
    }

    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    const validationError = validate();

    if (validationError) {
      setError(validationError);

      window.scrollTo({
        top: document.getElementById("vacancy-form")?.offsetTop
          ? document.getElementById("vacancy-form")!.offsetTop - 100
          : 0,
        behavior: "smooth",
      });

      return;
    }

    setSubmitting(true);

    const payload = {
      locale,

      vacancy: {
        title: form.jobTitle.trim(),
        category: form.category,
        location: form.location.trim(),
        workersNeeded: Number(form.workersNeeded),
        employmentType: form.employmentType,
        salary: form.salary.trim(),
        startDate: form.startDate || null,

        description: form.description.trim(),

        responsibilities: form.responsibilities
          .map((item) => item.trim())
          .filter(Boolean),

        requirements: form.requirements
          .map((item) => item.trim())
          .filter(Boolean),

        benefits: form.benefits.map((item) => item.trim()).filter(Boolean),
      },

      workingConditions: {
        workingHours: form.workingHours.trim(),
        shifts: form.shifts.trim(),
        overtime: form.overtime,
        weekendWork: form.weekendWork,
        accommodation: form.accommodation,
        transportation: form.transportation,
      },

      candidateRequirements: {
        experience: form.experience.trim(),
        education: form.education.trim(),
        language: form.language.trim(),
        otherRequirements: form.otherRequirements.trim(),
      },

      employer: {
        companyName: form.companyName.trim(),
        contactPerson: form.contactPerson.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        website: form.website.trim(),
        nipKrs: form.nipKrs.trim(),
      },

      additionalNotes: form.additionalNotes.trim(),

      consent: {
        privacy: form.privacyConsent,
        contact: form.contactConsent,
      },
    };

    try {
      const response = await fetch("/api/employer-job-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.error);
      }

      setSubmitting(false);
      setSubmitted(true);

      window.scrollTo({
        top: document.getElementById("vacancy-form")?.offsetTop
          ? document.getElementById("vacancy-form")!.offsetTop - 100
          : 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Employer vacancy submission failed:", error);

      setSubmitting(false);
      setError(error instanceof Error ? error.message : t.error);

      window.scrollTo({
        top: document.getElementById("vacancy-form")?.offsetTop
          ? document.getElementById("vacancy-form")!.offsetTop - 100
          : 0,
        behavior: "smooth",
      });
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setError("");
    setSubmitted(false);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <main className="overflow-hidden bg-white text-[#182230]">
        <section className="border-b border-[#DCE4EB] bg-[#F5F8FA]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span
                  className="h-px w-8 shrink-0 bg-[#159A86]"
                  aria-hidden="true"
                />

                <p className={sectionLabel}>{t.success.label}</p>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]">
                {t.success.title}
              </h1>

              <p className={`mt-7 max-w-2xl ${bodyText}`}>
                {t.success.description}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resetForm}
                  className={primaryButton}
                >
                  {t.success.another}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>

                <Link href={`/${locale}/contact`} className={secondaryButton}>
                  {t.success.contact}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#E2E8EF] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>H&M Synergy</p>

                <div
                  className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                  aria-hidden="true"
                />
              </div>

              <div>
                <div className="flex items-start gap-5 border-t border-[#DCE4EB] py-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#159A86]">
                    <Check
                      className="h-5 w-5 text-[#159A86]"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="max-w-xl text-base leading-7 text-[#5B6878] sm:text-lg sm:leading-8">
                    {t.success.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white text-[#182230]">
      {/* =========================================================
          HERO
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

              <p className={sectionLabel}>{t.heroLabel}</p>
            </div>

            <h1
              id="employers-hero-title"
              className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#0E2942] sm:text-5xl lg:text-[4.2rem]"
            >
              {t.heroTitle}
            </h1>

            <p className={`mt-7 max-w-2xl ${bodyText}`}>{t.heroText}</p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#687585] sm:text-base">
              {t.heroNote}
            </p>

            <div className="mt-9">
              <a href="#vacancy-form" className={primaryButton}>
                {t.formLabel}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORM INTRO
      ========================================================= */}
      <section
        id="vacancy-form"
        aria-labelledby="vacancy-form-title"
        className="border-b border-[#E2E8EF] bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
            <div>
              <p className={sectionLabel}>{t.formLabel}</p>

              <div
                className="mt-8 hidden h-px w-20 bg-[#DCE4EB] lg:block"
                aria-hidden="true"
              />

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                {t.formDescription}
              </p>
            </div>

            <div>
              <h2 id="vacancy-form-title" className={sectionTitle}>
                {t.formTitle}
              </h2>

              <p className={`mt-6 max-w-2xl ${bodyText}`}>
                {t.formDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        {/* =========================================================
            JOB INFORMATION
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>{t.sections.jobInformation}</p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  Provide the main details of the position and workforce you
                  need.
                </p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <TextField
                  label={t.fields.jobTitle}
                  required
                  placeholder={t.placeholders.jobTitle}
                  value={form.jobTitle}
                  onChange={(value) => updateField("jobTitle", value)}
                />

                <SelectField
                  label={t.fields.category}
                  required
                  placeholder={t.select.category}
                  value={form.category}
                  options={t.options.categories}
                  onChange={(value) => updateField("category", value)}
                />

                <TextField
                  label={t.fields.location}
                  required
                  placeholder={t.placeholders.location}
                  value={form.location}
                  onChange={(value) => updateField("location", value)}
                />

                <TextField
                  label={t.fields.workersNeeded}
                  required
                  type="number"
                  placeholder={t.placeholders.workersNeeded}
                  value={form.workersNeeded}
                  onChange={(value) => updateField("workersNeeded", value)}
                />

                <SelectField
                  label={t.fields.employmentType}
                  required
                  placeholder={t.select.employmentType}
                  value={form.employmentType}
                  options={t.options.employmentTypes}
                  onChange={(value) => updateField("employmentType", value)}
                />

                <TextField
                  label={t.fields.salary}
                  placeholder={t.placeholders.salary}
                  value={form.salary}
                  onChange={(value) => updateField("salary", value)}
                />

                <TextField
                  label={t.fields.startDate}
                  type="date"
                  placeholder={t.placeholders.startDate}
                  value={form.startDate}
                  onChange={(value) => updateField("startDate", value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            JOB DESCRIPTION
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>{t.sections.jobDescription}</p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  Give candidates a clear understanding of the role,
                  responsibilities and benefits.
                </p>
              </div>

              <div className="space-y-10">
                <TextAreaField
                  label={t.fields.description}
                  required
                  placeholder={t.placeholders.description}
                  value={form.description}
                  onChange={(value) => updateField("description", value)}
                />

                {/* Responsibilities */}
                <div>
                  <FieldLabel required>{t.fields.responsibilities}</FieldLabel>

                  <div className="space-y-3">
                    {form.responsibilities.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          value={item}
                          placeholder={t.placeholders.responsibility}
                          onChange={(event) =>
                            updateList(
                              "responsibilities",
                              index,
                              event.target.value,
                            )
                          }
                          className={inputClass}
                        />

                        {form.responsibilities.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeListItem("responsibilities", index)
                            }
                            className="flex w-12 shrink-0 items-center justify-center border border-[#CBD6DF] text-[#687585] transition-colors hover:border-[#159A86] hover:text-[#159A86]"
                            aria-label={t.remove}
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => addListItem("responsibilities")}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    {t.add}
                  </button>
                </div>

                {/* Requirements */}
                <div>
                  <FieldLabel required>{t.fields.requirements}</FieldLabel>

                  <div className="space-y-3">
                    {form.requirements.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          value={item}
                          placeholder={t.placeholders.requirement}
                          onChange={(event) =>
                            updateList(
                              "requirements",
                              index,
                              event.target.value,
                            )
                          }
                          className={inputClass}
                        />

                        {form.requirements.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeListItem("requirements", index)
                            }
                            className="flex w-12 shrink-0 items-center justify-center border border-[#CBD6DF] text-[#687585] transition-colors hover:border-[#159A86] hover:text-[#159A86]"
                            aria-label={t.remove}
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => addListItem("requirements")}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    {t.add}
                  </button>
                </div>

                {/* Benefits */}
                <div>
                  <FieldLabel>{t.fields.benefits}</FieldLabel>

                  <div className="space-y-3">
                    {form.benefits.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          value={item}
                          placeholder={t.placeholders.benefit}
                          onChange={(event) =>
                            updateList("benefits", index, event.target.value)
                          }
                          className={inputClass}
                        />

                        {form.benefits.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeListItem("benefits", index)}
                            className="flex w-12 shrink-0 items-center justify-center border border-[#CBD6DF] text-[#687585] transition-colors hover:border-[#159A86] hover:text-[#159A86]"
                            aria-label={t.remove}
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => addListItem("benefits")}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#123B63] transition-colors hover:text-[#159A86]"
                  >
                    <Plus className="h-4 w-4" aria-hidden="true" />
                    {t.add}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WORKING CONDITIONS
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>{t.sections.workingConditions}</p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  Tell us how the work is organized and what practical
                  conditions apply to the position.
                </p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <TextField
                  label={t.fields.workingHours}
                  placeholder={t.placeholders.workingHours}
                  value={form.workingHours}
                  onChange={(value) => updateField("workingHours", value)}
                />

                <TextField
                  label={t.fields.shifts}
                  placeholder={t.placeholders.shifts}
                  value={form.shifts}
                  onChange={(value) => updateField("shifts", value)}
                />

                <SelectField
                  label={t.fields.overtime}
                  placeholder={t.select.yesNo}
                  value={form.overtime}
                  options={t.options.yesNo}
                  onChange={(value) => updateField("overtime", value)}
                />

                <SelectField
                  label={t.fields.weekendWork}
                  placeholder={t.select.yesNo}
                  value={form.weekendWork}
                  options={t.options.yesNo}
                  onChange={(value) => updateField("weekendWork", value)}
                />

                <SelectField
                  label={t.fields.accommodation}
                  placeholder={t.select.accommodation}
                  value={form.accommodation}
                  options={t.options.accommodation}
                  onChange={(value) => updateField("accommodation", value)}
                />

                <SelectField
                  label={t.fields.transportation}
                  placeholder={t.select.transportation}
                  value={form.transportation}
                  options={t.options.transportation}
                  onChange={(value) => updateField("transportation", value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CANDIDATE REQUIREMENTS
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>
                  {t.sections.candidateRequirements}
                </p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  Describe the experience, education, language skills and other
                  qualities required for the position.
                </p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <TextField
                  label={t.fields.experience}
                  placeholder={t.placeholders.experience}
                  value={form.experience}
                  onChange={(value) => updateField("experience", value)}
                />

                <TextField
                  label={t.fields.education}
                  placeholder={t.placeholders.education}
                  value={form.education}
                  onChange={(value) => updateField("education", value)}
                />

                <TextField
                  label={t.fields.language}
                  placeholder={t.placeholders.language}
                  value={form.language}
                  onChange={(value) => updateField("language", value)}
                />

                <TextField
                  label={t.fields.otherRequirements}
                  placeholder={t.placeholders.otherRequirements}
                  value={form.otherRequirements}
                  onChange={(value) => updateField("otherRequirements", value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            COMPANY INFORMATION
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>{t.sections.companyInformation}</p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  These details are used by our recruitment team to contact your
                  company and discuss the vacancy.
                </p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                <TextField
                  label={t.fields.companyName}
                  required
                  placeholder={t.placeholders.companyName}
                  value={form.companyName}
                  onChange={(value) => updateField("companyName", value)}
                />

                <TextField
                  label={t.fields.contactPerson}
                  required
                  placeholder={t.placeholders.contactPerson}
                  value={form.contactPerson}
                  onChange={(value) => updateField("contactPerson", value)}
                />

                <TextField
                  label={t.fields.email}
                  required
                  type="email"
                  placeholder={t.placeholders.email}
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                />

                <TextField
                  label={t.fields.phone}
                  required
                  type="tel"
                  placeholder={t.placeholders.phone}
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                />

                <div className="relative">
                  <Globe2
                    className="pointer-events-none absolute left-4 top-[42px] h-4 w-4 text-[#8A96A3]"
                    aria-hidden="true"
                  />

                  <FieldLabel>{t.fields.website}</FieldLabel>

                  <input
                    type="url"
                    value={form.website}
                    placeholder={t.placeholders.website}
                    onChange={(event) =>
                      updateField("website", event.target.value)
                    }
                    className={`${inputClass} pl-11`}
                  />
                </div>

                <TextField
                  label={t.fields.nipKrs}
                  placeholder={t.placeholders.nipKrs}
                  value={form.nipKrs}
                  onChange={(value) => updateField("nipKrs", value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ADDITIONAL INFORMATION
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-white">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>
                  {t.sections.additionalInformation}
                </p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  Add any information that could help our recruitment team
                  understand your vacancy.
                </p>
              </div>

              <div>
                <TextAreaField
                  label={t.fields.additionalNotes}
                  placeholder={t.placeholders.additionalNotes}
                  value={form.additionalNotes}
                  onChange={(value) => updateField("additionalNotes", value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONSENT + SUBMIT
        ========================================================= */}
        <section className="border-b border-[#E2E8EF] bg-[#F7F9FB]">
          <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
              <div>
                <p className={sectionLabel}>{t.formLabel}</p>

                <p className="mt-8 max-w-xs text-sm leading-6 text-[#8A96A3]">
                  Review your information and submit your vacancy to our
                  recruitment team.
                </p>
              </div>

              <div>
                {error && (
                  <div
                    role="alert"
                    className="mb-8 border-l-2 border-[#159A86] bg-white px-5 py-4 text-sm leading-6 text-[#5B6878]"
                  >
                    {error}
                  </div>
                )}

                <div className="border-t border-[#DCE4EB]">
                  <label className="flex cursor-pointer gap-4 border-b border-[#DCE4EB] py-5">
                    <input
                      type="checkbox"
                      checked={form.privacyConsent}
                      onChange={(event) =>
                        updateField("privacyConsent", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 shrink-0 accent-[#159A86]"
                    />

                    <span className="text-sm leading-6 text-[#5B6878]">
                      {t.consent.privacy}
                    </span>
                  </label>

                  <label className="flex cursor-pointer gap-4 border-b border-[#DCE4EB] py-5">
                    <input
                      type="checkbox"
                      checked={form.contactConsent}
                      onChange={(event) =>
                        updateField("contactConsent", event.target.checked)
                      }
                      className="mt-1 h-4 w-4 shrink-0 accent-[#159A86]"
                    />

                    <span className="text-sm leading-6 text-[#5B6878]">
                      {t.consent.contact}
                    </span>
                  </label>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-[#8A96A3]">
                    * {t.formDescription}
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`${primaryButton} shrink-0`}
                  >
                    {submitting ? t.submitting : t.submit}

                    {!submitting && (
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>

      {/* =========================================================
          BOTTOM TRUST SECTION
      ========================================================= */}
      <section className="border-b border-[#E2E8EF] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
          <div className="grid border-t border-[#DCE4EB] sm:grid-cols-3">
            <div className="border-b border-[#DCE4EB] py-7 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0">
              <Building2
                className="h-5 w-5 text-[#159A86]"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm font-bold text-[#0E2942]">
                {t.sections.companyInformation}
              </p>
            </div>

            <div className="border-b border-[#DCE4EB] py-7 sm:border-b-0 sm:border-r sm:px-7">
              <Users className="h-5 w-5 text-[#159A86]" aria-hidden="true" />

              <p className="mt-4 text-sm font-bold text-[#0E2942]">
                {t.sections.candidateRequirements}
              </p>
            </div>

            <div className="py-7 sm:px-7 sm:last:pr-0">
              <Check className="h-5 w-5 text-[#159A86]" aria-hidden="true" />

              <p className="mt-4 text-sm font-bold text-[#0E2942]">
                {t.formLabel}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
