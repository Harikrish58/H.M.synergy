import type { Metadata } from "next";
import EmployersPage from "@/components/EmployersPage";

export const metadata: Metadata = {
  title: "Подати вакансію | H&M Synergy",
  description:
    "Подайте вакансію до H&M Synergy та знайдіть надійних працівників для виробництва, складів, логістики та інших операційних посад у Польщі.",
  keywords: [
    "агенція праці Польща",
    "працевлаштування в Польщі",
    "рекрутинг Польща",
    "працівники виробництва Польща",
    "працівники складу Польща",
    "логістика Польща",
    "працівники Польща",
    "підбір персоналу Польща",
    "H&M Synergy",
  ],
  alternates: {
    canonical: "/ua/employers",
    languages: {
      en: "/en/employers",
      pl: "/pl/employers",
      uk: "/ua/employers",
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/ua/employers",
    siteName: "H&M Synergy",
    title: "Подати вакансію | H&M Synergy",
    description:
      "Подайте заявку на пошук працівників до H&M Synergy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Подати вакансію",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Подати вакансію | H&M Synergy",
    description:
      "Подайте заявку на пошук працівників до H&M Synergy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployersRoutePage() {
  return <EmployersPage locale="ua" />;
}