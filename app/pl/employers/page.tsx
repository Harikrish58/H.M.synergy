import type { Metadata } from "next";
import PolishEmployersPage from "@/components/PolishEmployersPage";

export const metadata: Metadata = {
  title: "Rekrutacja i pracownicy dla firm w Polsce | H&M Synergy",
  description:
    "H&M Synergy pomaga pracodawcom w Polsce znaleźć odpowiednich pracowników do produkcji, przemysłu, magazynów, logistyki i innych stanowisk operacyjnych.",
  keywords: [
    "agencja pracy Polska",
    "agencja zatrudnienia Polska",
    "agencja rekrutacyjna Polska",
    "rekrutacja pracowników Polska",
    "pracownicy dla firm Polska",
    "pracownicy produkcji Polska",
    "operatorzy wtryskarek Polska",
    "pracownicy magazynowi Polska",
    "pracownicy logistyki Polska",
    "zatrudnianie pracowników Polska",
    "pracownicy tymczasowi Polska",
    "rekrutacja dla firm Polska",
    "outsourcing pracowników Polska",
    "H&M Synergy rekrutacja",
  ],

  alternates: {
    canonical: "/pl/employers",
    languages: {
      en: "/en/employers",
      pl: "/pl/employers",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/employers",
    siteName: "H&M Synergy",
    title: "Rekrutacja i pracownicy dla firm w Polsce | H&M Synergy",
    description:
      "Rozwiązania rekrutacyjne i kadrowe dla pracodawców w Polsce — produkcja, przemysł, magazyny, logistyka i inne stanowiska operacyjne.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Rekrutacja i pracownicy dla firm w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rekrutacja i pracownicy dla firm w Polsce | H&M Synergy",
    description:
      "Znajdź odpowiednich pracowników do produkcji, przemysłu, magazynów, logistyki i innych stanowisk w Polsce.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployersRoutePagePL() {
  return <PolishEmployersPage />;
}