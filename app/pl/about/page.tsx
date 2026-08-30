import type { Metadata } from "next";
import PolishAboutPage from "@/components/PolishAboutPage";

export const metadata: Metadata = {
  title: "O H&M Synergy | Zatrudnienie i usługi biznesowe w Polsce",
  description:
    "Poznaj H&M Synergy — firmę wspierającą pracodawców i osoby poszukujące pracy oraz oferującą rozwiązania z zakresu zatrudnienia i wsparcia biznesowego w Polsce.",

  keywords: [
    "H&M Synergy",
    "agencja pracy Polska",
    "agencja rekrutacyjna Polska",
    "firma rekrutacyjna Polska",
    "usługi zatrudnienia Polska",
    "rekrutacja pracowników Polska",
    "pracownicy produkcji Polska",
    "praca produkcja Polska",
    "praca dla studentów Polska",
    "praca dla absolwentów Polska",
    "oferty pracy Polska",
    "rozwiązania kadrowe Polska",
    "usługi biznesowe Polska",
  ],

  alternates: {
    canonical: "/pl/about",
    languages: {
      en: "/en/about",
      pl: "/pl/about",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/about",
    siteName: "H&M Synergy",
    title: "O H&M Synergy | Zatrudnienie i usługi biznesowe w Polsce",
    description:
      "H&M Synergy łączy pracodawców z pracownikami oraz oferuje rozwiązania z zakresu zatrudnienia i wsparcia biznesowego w Polsce.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Zatrudnienie i usługi biznesowe w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "O H&M Synergy | Zatrudnienie i usługi biznesowe w Polsce",
    description:
      "Usługi zatrudnienia, rekrutacji i wsparcia biznesowego dla firm i osób poszukujących pracy w Polsce.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutRoutePage() {
  return <PolishAboutPage />;
}