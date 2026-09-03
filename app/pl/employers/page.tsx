import type { Metadata } from "next";
import EmployersPage from "@/components/EmployersPage";

export const metadata: Metadata = {
  title: "Zgłoś ofertę pracy | H&M Synergy",
  description:
    "Zgłoś ofertę pracy do H&M Synergy i znajdź odpowiednich pracowników do produkcji, przemysłu, magazynowania, logistyki i innych stanowisk w Polsce.",
  keywords: [
    "agencja pracy Polska",
    "agencja zatrudnienia Polska",
    "rekrutacja pracowników Polska",
    "pracownicy produkcji Polska",
    "pracownicy magazynowi Polska",
    "pracownicy logistyka Polska",
    "outsourcing pracowników Polska",
    "zatrudnienie pracowników Polska",
    "H&M Synergy",
  ],
  alternates: {
    canonical: "/pl/employers",
    languages: {
      en: "/en/employers",
      pl: "/pl/employers",
      uk: "/ua/employers",
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/employers",
    siteName: "H&M Synergy",
    title: "Zgłoś ofertę pracy | H&M Synergy",
    description:
      "Zgłoś zapotrzebowanie na pracowników do H&M Synergy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Zgłoś ofertę pracy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zgłoś ofertę pracy | H&M Synergy",
    description:
      "Zgłoś zapotrzebowanie na pracowników do H&M Synergy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployersRoutePage() {
  return <EmployersPage locale="pl" />;
}