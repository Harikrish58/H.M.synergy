import type { Metadata } from "next";
import PolishEmployeesPage from "@/components/PolishEmployeesPage";

export const metadata: Metadata = {
  title: "Praca w Polsce | Oferty pracy dla studentów i absolwentów | H&M Synergy",

  description:
    "Znajdź pracę w Polsce z H&M Synergy. Oferty pracy w produkcji, przemyśle, magazynach i logistyce. Zapraszamy studentów, absolwentów i doświadczonych pracowników.",

  keywords: [
    "praca w Polsce",
    "oferty pracy Polska",
    "praca dla studentów Polska",
    "praca dla absolwentów Polska",
    "praca dla studentów",
    "praca dla absolwentów",
    "praca produkcja Polska",
    "praca na produkcji Polska",
    "praca magazyn Polska",
    "praca logistyka Polska",
    "praca operator wtryskarki",
    "operator wtryskarki praca",
    "operator maszyn praca Polska",
    "pracownik produkcji praca",
    "pracownik magazynowy praca",
    "praca dla obcokrajowców Polska",
    "zatrudnienie w Polsce",
    "agencja pracy Polska",
    "agencja zatrudnienia Polska",
    "H&M Synergy praca",
  ],

  alternates: {
    canonical: "/pl/employees",
    languages: {
      en: "/en/employees",
      pl: "/pl/employees",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/employees",
    siteName: "H&M Synergy",
    title: "Praca w Polsce | Oferty pracy dla studentów i absolwentów | H&M Synergy",
    description:
      "Znajdź odpowiednią pracę w Polsce. Oferty w produkcji, przemyśle, magazynach i logistyce dla studentów, absolwentów i doświadczonych pracowników.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Oferty pracy w Polsce",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Praca w Polsce | H&M Synergy",
    description:
      "Oferty pracy w produkcji, przemyśle, magazynach i logistyce dla studentów, absolwentów i osób poszukujących pracy.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployeesRoutePagePL() {
  return <PolishEmployeesPage />;
}