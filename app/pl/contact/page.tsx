import type { Metadata } from "next";
import PolishContactPage from "@/components/PolishContactPage";

export const metadata: Metadata = {
  title: "Kontakt H&M Synergy | Usługi Zatrudnienia i Rekrutacji w Polsce",

  description:
    "Skontaktuj się z H&M Synergy w sprawie zatrudnienia, rekrutacji i usług personalnych w Polsce. Pracodawcy mogą zapytać o pracowników, a osoby poszukujące pracy, studenci i absolwenci mogą uzyskać informacje o aktualnych ofertach.",

  keywords: [
    "kontakt H&M Synergy",
    "agencja zatrudnienia Polska",
    "agencja pracy Polska",
    "agencja rekrutacyjna Polska",
    "agencja pracy tymczasowej Polska",
    "usługi zatrudnienia Polska",
    "usługi rekrutacyjne Polska",
    "rekrutacja pracowników Polska",
    "rekrutacja produkcja Polska",
    "praca produkcja Polska",
    "pracownicy produkcji Polska",
    "praca magazyn Polska",
    "praca logistyka Polska",
    "praca dla studentów Polska",
    "praca dla absolwentów Polska",
    "praca studenci Polska",
    "praca absolwenci Polska",
    "oferty pracy Polska",
    "praca w Polsce",
  ],

  alternates: {
    canonical: "/pl/contact",
    languages: {
      en: "/en/contact",
      pl: "/pl/contact",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/contact",
    siteName: "H&M Synergy",
    title: "Kontakt H&M Synergy | Usługi Zatrudnienia i Rekrutacji w Polsce",
    description:
      "Skontaktuj się z H&M Synergy w sprawie rekrutacji, zatrudnienia, pracowników i aktualnych ofert pracy w Polsce.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Usługi zatrudnienia i rekrutacji w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kontakt H&M Synergy | Usługi Zatrudnienia i Rekrutacji w Polsce",
    description:
      "Skontaktuj się z H&M Synergy w sprawie rekrutacji, zatrudnienia i ofert pracy w Polsce.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <PolishContactPage />;
}