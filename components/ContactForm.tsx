"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

type Locale = "pl" | "en";

type ContactCopy = {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  topic: string;
  message: string;
  consent: string;
  send: string;
  sending: string;
  ok: string;
  fail: string;
  topics: string[];
};

const inputClass =
  "mt-2 h-12 w-full border border-[#DCE4EB] bg-white px-4 text-sm text-[#182230] outline-none transition-colors placeholder:text-[#8A96A3] focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const textareaClass =
  "mt-2 w-full border border-[#DCE4EB] bg-white p-4 text-sm leading-7 text-[#182230] outline-none transition-colors placeholder:text-[#8A96A3] focus:border-[#159A86] focus:ring-1 focus:ring-[#159A86]";

const primaryButton =
  "group inline-flex items-center justify-center gap-2 bg-[#123B63] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0E2942] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export default function ContactForm() {
  const pathname = usePathname() || "/pl";
  const locale: Locale = pathname.startsWith("/en") ? "en" : "pl";

  const content: Record<Locale, ContactCopy> = {
    pl: {
      title: "Skontaktuj się z nami",
      subtitle: "Odpowiemy w ciągu 24 godzin roboczych.",
      name: "Imię i nazwisko",
      email: "E-mail",
      phone: "Telefon",
      company: "Firma",
      topic: "W czym możemy pomóc?",
      message: "Wiadomość",
      consent: "Wyrażam zgodę na kontakt w celu obsługi mojego zapytania.",
      send: "Wyślij wiadomość",
      sending: "Wysyłanie...",
      ok: "Dziękujemy. Twoja wiadomość została wysłana.",
      fail: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
      topics: [
        "Zatrudnienie pracowników",
        "Poszukuję pracy",
        "Usługi logistyczne",
        "Usługi IT i aplikacje internetowe",
        "Inne zapytanie",
      ],
    },

    en: {
      title: "Tell us how we can help.",
      subtitle: "We’ll get back within 24 business hours.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      topic: "I am contacting you about",
      message: "Message",
      consent: "I agree to be contacted regarding this enquiry.",
      send: "Send Message",
      sending: "Sending...",
      ok: "Thank you. Your message has been sent.",
      fail: "We couldn’t send your message. Please try again.",
      topics: [
        "Hiring workers",
        "Finding a job",
        "Logistics services",
        "IT & Web Applications",
        "General enquiry",
      ],
    },
  };

  const dict = content[locale];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const topic = String(form.get("topic") || "").trim();

    if (!name || !email || !message || !topic) {
      setStatus("error");
      setErrorMsg(dict.fail);
      return;
    }

    setStatus("loading");
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          name,
          email,
          phone: form.get("phone"),
          company: form.get("company"),
          message: `Enquiry topic: ${topic}\n\n${message}`,
          website: form.get("website"),
          consent: form.get("consent") === "on",
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const fieldIssue =
          data?.issues?.name?.[0] ||
          data?.issues?.email?.[0] ||
          data?.issues?.message?.[0] ||
          data?.issues?.consent?.[0];

        setStatus("error");
        setErrorMsg(fieldIssue || data?.error || dict.fail);
        return;
      }

      // SUCCESS
      setStatus("success");
      setErrorMsg(null);

      // Use saved form reference
      formElement.reset();
    } catch {
      setStatus("error");
      setErrorMsg(dict.fail);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" autoComplete="off">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name + Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[#182230]">
          {dict.name}

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

      {/* Phone + Company */}
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[#182230]">
          {dict.phone}

          <input name="phone" autoComplete="tel" className={inputClass} />
        </label>

        <label className="block text-sm font-semibold text-[#182230]">
          {dict.company}

          <input
            name="company"
            autoComplete="organization"
            className={inputClass}
          />
        </label>
      </div>

      {/* Topic */}
      <fieldset>
        <legend className="text-sm font-semibold text-[#182230]">
          {dict.topic}
        </legend>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {dict.topics.map((topic) => (
            <label
              key={topic}
              className="flex cursor-pointer items-center gap-3 border border-[#DCE4EB] bg-white px-4 py-3.5 text-sm text-[#5B6878] transition-colors hover:border-[#159A86] hover:bg-[#F7F9FB]"
            >
              <input
                type="radio"
                name="topic"
                value={topic}
                required
                className="h-4 w-4 accent-[#159A86]"
              />

              <span>{topic}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <label className="block text-sm font-semibold text-[#182230]">
        {dict.message}

        <textarea name="message" required rows={7} className={textareaClass} />
      </label>

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
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={primaryButton}
        >
          {status === "loading" ? dict.sending : dict.send}

          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Status */}
      {status === "success" && (
        <p
          role="status"
          className="border border-[#BFE3DB] bg-[#F0FAF7] px-4 py-3 text-sm font-medium text-[#137C6B]"
        >
          {dict.ok}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {errorMsg ?? dict.fail}
        </p>
      )}
    </form>
  );
}
