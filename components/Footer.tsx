"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/pl";
  const locale = pathname.startsWith("/en") ? "en" : "pl";
  const base = locale === "en" ? "/en" : "/pl";
  const year = new Date().getFullYear();

  const t = {
    pl: {
      companyName: "H&M Synergy Sp. z o.o.",
      tagline:
        "Logistyka, rozwój biznesu i rozwiązania IT – efektywnie i przejrzyście.",
      headings: { company: "Firma", services: "Usługi", contact: "Kontakt" },
      links: {
        home: "Strona główna",
        services: "Usługi",
        logistics: "Koordynacja logistyki",
        business: "Rozwój biznesu",
        it: "Rozwiązania Web & IT",
        contact: "Formularz kontaktowy",
        privacy: "Polityka prywatności",
      },
      privacyHref: "/pl/privacy",
      addressCountry: "Polska",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      companyLine: `© ${year} H&M Synergy Sp. z o.o.`,
      legalLine:
        "NIP: 8822152332 · REGON: 542508629 · KRS: 0001189932 · ul. Wiejska 2/7, 58-260 Bielawa, Polska",
    },
    en: {
      companyName: "H&M Synergy Sp. z o.o.",
      tagline:
        "Logistics coordination, business growth, and Web & IT solutions—done right.",
      headings: { company: "Company", services: "Services", contact: "Contact" },
      links: {
        home: "Home",
        services: "Our services",
        logistics: "Logistics coordination",
        business: "Business growth",
        it: "Web & IT solutions",
        contact: "Contact form",
        privacy: "Privacy Policy",
      },
      privacyHref: "/en/privacy",
      addressCountry: "Poland",
      emailLabel: "Email",
      phoneLabel: "Phone",
      companyLine: `© ${year} H&M Synergy Sp. z o.o.`,
      legalLine:
        "Tax ID (NIP): 8822152332 · REGON: 542508629 · KRS: 0001189932 · ul. Wiejska 2/7, 58-260 Bielawa, Poland",
    },
  } as const;

  const dict = t[locale];

  const linkCls =
    "text-sm text-gray-600 hover:text-gray-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded dark:text-gray-300 dark:hover:text-white";
  const headingCls =
    "text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wide";

  return (
    <footer className="mt-16 border-t border-gray-200/70 bg-white/70 backdrop-blur dark:bg-gray-900/70 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {dict.companyName}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-sm">
              {dict.tagline}
            </p>

            <address className="not-italic mt-4 text-sm text-gray-600 dark:text-gray-300">
              ul. Wiejska 2/7
              <br />
              58-260 Bielawa, {dict.addressCountry}
            </address>
          </div>

          {/* Services nav */}
          <nav aria-label={dict.headings.services} className="space-y-3">
            <p className={headingCls}>{dict.headings.services}</p>
            <ul className="space-y-2">
              <li>
                <Link href={`${base}#services`} className={linkCls}>
                  {dict.links.services}
                </Link>
              </li>
              <li>
                <Link href={`${base}/logistics`} className={linkCls}>
                  {dict.links.logistics}
                </Link>
              </li>
              <li>
                <Link href={`${base}/business`} className={linkCls}>
                  {dict.links.business}
                </Link>
              </li>
              <li>
                <Link href={`${base}/it`} className={linkCls}>
                  {dict.links.it}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company nav */}
          <nav aria-label={dict.headings.company} className="space-y-3">
            <p className={headingCls}>{dict.headings.company}</p>
            <ul className="space-y-2">
              <li>
                <Link href={base} className={linkCls}>
                  {dict.links.home}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact`} className={linkCls}>
                  {dict.links.contact}
                </Link>
              </li>
              <li>
                <Link href={dict.privacyHref} className={linkCls}>
                  {dict.links.privacy}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <p className={headingCls}>{dict.headings.contact}</p>
            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-medium">{dict.emailLabel}:</span>{" "}
                <a
                  className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                  href="mailto:h.m.synergypl@gmail.com"
                >
                  h.m.synergypl@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">{dict.phoneLabel}:</span>{" "}
                <a
                  className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                  href="tel:+48739686095"
                >
                  +48 739 686 095
                </a>{" "}
                ·{" "}
                <a
                  className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                  href="tel:+48573415010"
                >
                  +48 573 415 010
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200/70 dark:border-gray-800" />

        {/* Bottom legal strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6 text-xs text-gray-600 dark:text-gray-400">
          <p className="font-medium">{dict.companyLine}</p>
          <p className="opacity-80">{dict.legalLine}</p>
        </div>
      </div>
    </footer>
  );
}
