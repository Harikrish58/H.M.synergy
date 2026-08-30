import type { Metadata } from "next";
import UkrainianContactPage from "@/components/UkrainianContactPage";

export const metadata: Metadata = {
  title: "Контакти H&M Synergy | Послуги з працевлаштування та рекрутингу в Польщі",

  description:
    "Зв'яжіться з H&M Synergy щодо послуг з працевлаштування, рекрутингу та підбору персоналу в Польщі. Роботодавці можуть залишати заявки на працівників, а шукачі роботи, студенти та випускники — запитувати про актуальні вакансії.",

  keywords: [
    "H&M Synergy контакти",
    "агентство з працевлаштування Польща",
    "рекрутингове агентство Польща",
    "кадрове агентство Польща",
    "послуги працевлаштування Польща",
    "рекрутингові послуги Польща",
    "рекрутинг на виробництво Польща",
    "робота на виробництві Польща",
    "виробничі вакансії Польща",
    "працівники виробництва Польща",
    "робота на складі Польща",
    "робота в логістиці Польща",
    "робота для студентів Польща",
    "робота для випускників Польща",
    "вакансії для студентів Польща",
    "вакансії для випускників Польща",
    "можливості працевлаштування Польща",
  ],

  alternates: {
    canonical: "/ua/contact",
    languages: {
      en: "/en/contact",
      pl: "/pl/contact",
      uk: "/ua/contact",
    },
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/ua/contact",
    siteName: "H&M Synergy",
    title:
      "Контакти H&M Synergy | Послуги з працевлаштування та рекрутингу в Польщі",
    description:
      "Зв'яжіться з H&M Synergy для отримання послуг з рекрутингу, підбору персоналу, можливостей працевлаштування та бізнес-послуг у Польщі.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Послуги з працевлаштування та рекрутингу в Польщі",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Контакти H&M Synergy | Послуги з працевлаштування та рекрутингу в Польщі",
    description:
      "Зв'яжіться з H&M Synergy щодо рекрутингу, підбору персоналу та можливостей працевлаштування в Польщі.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function UkrainianContactRoutePage() {
  return <UkrainianContactPage />;
}