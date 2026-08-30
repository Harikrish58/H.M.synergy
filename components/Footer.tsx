"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "" },
  { label: "Services", href: "/services" },
  { label: "For Employees", href: "/employees" },
  { label: "For Employers", href: "/employers" },
  { label: "Jobs", href: "/jobs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Workforce Solutions", href: "/services/employment" },
  { label: "Logistics", href: "/services/logistics" },
  { label: "IT & Web Applications", href: "/services/it" },
];

const headingClass =
  "text-xs font-bold uppercase tracking-[0.16em] text-[#8FD8CA]";

const linkClass =
  "text-sm text-[#C7D2DD] transition-colors duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E2942]";

export default function Footer() {
  const pathname = usePathname() || "/en";

  const locale = pathname.startsWith("/pl") 
    ? "pl" 
    : pathname.startsWith("/ua") 
    ? "ua" 
    : "en";
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const content = {
    pl: {
      navigation: "Nawigacja",
      services: "Usługi",
      contact: "Kontakt",
      company: "H&M Synergy Sp. z o.o.",
      description:
        "Rozwiązania w zakresie zatrudnienia, rekrutacji i wsparcia dla firm produkcyjnych i operacyjnych w Polsce.",
      address: "Adres",
      email: "E-mail",
      phone: "Telefon",
      legal: "Informacje prawne",
      privacy: "Polityka prywatności",
      terms: "Warunki korzystania",
      cookies: "Polityka cookies",
      rights: "Wszelkie prawa zastrzeżone.",
      backToTop: "Do góry",
    },

    en: {
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      company: "H&M Synergy Sp. z o.o.",
      description:
        "Workforce, recruitment and business support solutions for manufacturing and operational businesses in Poland.",
      address: "Address",
      email: "Email",
      phone: "Phone",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      cookies: "Cookie Policy",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },

    ua: {
      navigation: "Навігація",
      services: "Послуги",
      contact: "Контакти",
      company: "H&M Synergy Sp. z o.o.",
      description:
        "Рішення у сфері працевлаштування, рекрутингу та підтримки бізнесу для виробничих та операційних компаній у Польщі.",
      address: "Адреса",
      email: "E-mail",
      phone: "Телефон",
      legal: "Правова інформація",
      privacy: "Політика конфіденційності",
      terms: "Умови використання",
      cookies: "Політика cookies",
      rights: "Всі права захищені.",
      backToTop: "Вгору",
    },
  }[locale];

  const navigationLabels =
    locale === "pl"
      ? {
          Home: "Strona główna",
          Services: "Usługi",
          "For Employees": "Dla pracowników",
          "For Employers": "Dla pracodawców",
          Jobs: "Oferty pracy",
          About: "O nas",
          Contact: "Kontakt",
        }
      : locale === "ua"
      ? {
          Home: "Головна",
          Services: "Послуги",
          "For Employees": "Для працівників",
          "For Employers": "Для роботодавців",
          Jobs: "Вакансії",
          About: "Про нас",
          Contact: "Контакти",
        }
      : null;

  const serviceLabels =
    locale === "pl"
      ? {
          "Workforce Solutions": "Rozwiązania kadrowe",
          Logistics: "Logistyka",
          "IT & Web Applications": "IT i aplikacje internetowe",
        }
      : locale === "ua"
      ? {
          "Workforce Solutions": "Кадрові рішення",
          Logistics: "Логістика",
          "IT & Web Applications": "IT та веб-додатки",
        }
      : null;

  return (
    <footer
      id="footer"
      className="border-t border-[#183A55] bg-[#0E2942] text-white"
    >
      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-14">
          {/* =====================================================
              COMPANY / LOGO
          ===================================================== */}
          <div>
            <Link
              href={base}
              aria-label="H&M Synergy"
              className="inline-flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0E2942]"
            >
              <Image
                src="/logo.png"
                alt="H&M Synergy"
                width={180}
                height={52}
                priority
                className="h-[82px] w-auto object-contain"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#C7D2DD]">
              {content.description}
            </p>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-[#8AABB7]">
              {content.company}
            </p>
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}
          <nav aria-label={content.navigation}>
            <p className={headingClass}>{content.navigation}</p>

            <ul className="mt-6 space-y-3.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={`${base}${item.href}`}
                    className={linkClass}
                  >
                    {navigationLabels
                      ? navigationLabels[
                          item.label as keyof typeof navigationLabels
                        ]
                      : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =====================================================
              SERVICES
          ===================================================== */}
          <nav aria-label={content.services}>
            <p className={headingClass}>{content.services}</p>

            <ul className="mt-6 space-y-3.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={`${base}${service.href}`}
                    className={linkClass}
                  >
                    {serviceLabels
                      ? serviceLabels[
                          service.label as keyof typeof serviceLabels
                        ]
                      : service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          <address className="not-italic">
            <p className={headingClass}>{content.contact}</p>

            {/* Address */}
            <div className="mt-6 flex gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-[#6FC7B5]"
                aria-hidden="true"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8AABB7]">
                  {content.address}
                </p>

                <p className="mt-1.5 text-sm leading-6 text-[#C7D2DD]">
                  ul. Wiejska 2/7
                  <br />
                  58-260 Bielawa
                  <br />
                  Poland
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-6 flex gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-[#6FC7B5]"
                aria-hidden="true"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8AABB7]">
                  {content.email}
                </p>

                <a
                  href="mailto:h.m.synergypl@gmail.com"
                  className="mt-1.5 block break-all text-sm text-[#C7D2DD] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                >
                  h.m.synergypl@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-6 flex gap-3">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-[#6FC7B5]"
                aria-hidden="true"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#8AABB7]">
                  {content.phone}
                </p>

                <div className="mt-1.5 space-y-1">
                  <a
                    href="tel:+48739686095"
                    className="block text-sm text-[#C7D2DD] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                  >
                    +48 739 686 095
                  </a>

                  <a
                    href="tel:+48573415010"
                    className="block text-sm text-[#C7D2DD] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86]"
                  >
                    +48 573 415 010
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* =========================================================
          LEGAL / BOTTOM BAR
      ========================================================= */}
      <div className="border-t border-[#183A55] bg-[#091D30]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-6 sm:px-10 lg:px-8 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-[#C7D2DD]">
              © {year} {content.company}
            </p>

            <p className="text-xs text-[#78909F]">
              {content.rights}
            </p>
          </div>

          {/* Legal links */}
          <nav aria-label={content.legal}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link
                  href={`${base}/privacy`}
                  className="text-xs font-medium text-[#AFC0CB] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#091D30]"
                >
                  {content.privacy}
                </Link>
              </li>

              <li>
                <Link
                  href={`${base}/terms`}
                  className="text-xs font-medium text-[#AFC0CB] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#091D30]"
                >
                  {content.terms}
                </Link>
              </li>

              <li>
                <Link
                  href={`${base}/cookies`}
                  className="text-xs font-medium text-[#AFC0CB] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#091D30]"
                >
                  {content.cookies}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Back to top */}
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#AFC0CB] transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2 focus-visible:ring-offset-[#091D30]"
          >
            {content.backToTop}

            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}