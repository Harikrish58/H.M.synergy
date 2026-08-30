import type { Metadata } from "next";
import UkrainianAboutPage from "@/components/UkrainianAboutPage";

export const metadata: Metadata = {
  title:
    "Про компанію H&M Synergy | Послуги з працевлаштування та бізнесу в Польщі",
  description:
    "Дізнайтеся більше про H&M Synergy — компанію з працевлаштування та бізнес-підтримки в Польщі, яка з'єднує роботодавців із працівниками, студентами, випускниками та шукачами роботи.",

  keywords: [
    "H&M Synergy",
    "агентство з працевлаштування Польща",
    "рекрутингове агентство Польща",
    "кадрова компанія Польща",
    "послуги працевлаштування Польща",
    "рекрутинг на виробництво Польща",
    "працівники виробництва Польща",
    "робота для студентів Польща",
    "робота для випускників Польща",
    "можливості працевлаштування Польща",
    "кадрові рішення Польща",
    "бізнес-послуги Польща",
  ],

  alternates: {
    canonical: "/ua/about",
    languages: {
      en: "/en/about",
      pl: "/pl/about",
      uk: "/ua/about",
    },
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/ua/about",
    siteName: "H&M Synergy",
    title:
      "Про компанію H&M Synergy | Послуги з працевлаштування та бізнесу в Польщі",
    description:
      "H&M Synergy з'єднує роботодавців із працівниками, студентами, випускниками та шукачами роботи, а також надає послуги з підбору персоналу та бізнес-підтримки в Польщі.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Послуги з працевлаштування та бізнесу в Польщі",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Про компанію H&M Synergy | Послуги з працевлаштування та бізнесу в Польщі",
    description:
      "Послуги з працевлаштування, рекрутингу та бізнес-підтримки для компаній і шукачів роботи в Польщі.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function UkrainianAboutRoutePage() {
  return <UkrainianAboutPage />;
}
