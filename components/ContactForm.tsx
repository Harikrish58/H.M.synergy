"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type Locale = "pl" | "en";

type ContactCopy = {
  title: string;
  subtitle: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: string;
  send: string;
  sending: string;
  ok: string;
  fail: string;
};

export default function ContactForm() {
  const pathname = usePathname() || "/pl";
  const locale: Locale = pathname.startsWith("/en") ? "en" : "pl";

  const t: Record<Locale, ContactCopy> = {
    pl: {
      title: "Skontaktuj się z nami",
      subtitle: "Odpowiemy w ciągu 24 godzin roboczych.",
      name: "Imię i nazwisko",
      email: "E-mail",
      phone: "Telefon (opcjonalnie)",
      company: "Firma (opcjonalnie)",
      message: "Wiadomość",
      consent: "Wyrażam zgodę na kontakt w celu obsługi zapytania.",
      send: "Wyślij",
      sending: "Wysyłanie...",
      ok: "Dziękujemy! Wiadomość została wysłana.",
      fail: "Nie udało się wysłać. Spróbuj ponownie.",
    },
    en: {
      title: "Contact us",
      subtitle: "We’ll get back within 24 business hours.",
      name: "Full name",
      email: "Email",
      phone: "Phone (optional)",
      company: "Company (optional)",
      message: "Message",
      consent: "I agree to be contacted regarding this inquiry.",
      send: "Send",
      sending: "Sending...",
      ok: "Thanks! Your message has been sent.",
      fail: "Couldn’t send. Please try again.",
    },
  };

  const dict = t[locale];

  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (!String(form.get("name")) || !String(form.get("email")) || !String(form.get("message"))) {
      setStatus("error");
      setErrorMsg(dict.fail);
      return;
    }

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          company: form.get("company"),
          message: form.get("message"),
          website: form.get("website"), // honeypot
          consent: form.get("consent") === "on",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        // Prefer field-specific error if present
        const fieldIssue =
          data?.issues?.name?.[0] ||
          data?.issues?.email?.[0] ||
          data?.issues?.message?.[0] ||
          data?.issues?.consent?.[0];
        setStatus("error");
        setErrorMsg(fieldIssue || data?.error || dict.fail);
        return;
      }

      setStatus("ok");
      setErrorMsg(null);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(dict.fail);
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{dict.title}</h1>
      <p className="text-gray-600 mt-1">{dict.subtitle}</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4" autoComplete="off">
        {/* Honeypot */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{dict.name}</label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{dict.email}</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{dict.phone}</label>
            <input
              name="phone"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{dict.company}</label>
            <input
              name="company"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">{dict.message}</label>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <label className="flex items-start gap-2 text-sm">
          <input name="consent" type="checkbox" required className="mt-1" />
          <span className="text-gray-700">{dict.consent}</span>
        </label>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold disabled:opacity-60 hover:bg-blue-700 transition-colors"
          >
            {status === "loading" ? dict.sending : dict.send}
          </button>
        </div>

        {status === "ok" && <p className="text-green-700">{dict.ok}</p>}
        {status === "error" && <p className="text-red-600">{errorMsg ?? dict.fail}</p>}
      </form>
    </section>
  );
}
