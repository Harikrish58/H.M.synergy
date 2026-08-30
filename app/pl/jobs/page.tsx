import type { Metadata } from "next";
import PolishJobsPage from "@/components/PolishJobsPage";

export const metadata: Metadata = {
  title:
    "Oferty pracy w Polsce | Produkcja, magazyn i praca dla studentów | H&M Synergy",

  description:
    "Znajdź aktualne oferty pracy w Polsce z H&M Synergy, w tym pracę w produkcji, przemyśle, na stanowisku operatora maszyn, w magazynie i logistyce oraz oferty dla studentów i absolwentów.",

  keywords: [
    "praca w Polsce",
    "oferty pracy Polska",
    "praca produkcja Polska",
    "praca na produkcji",
    "praca w fabryce Polska",
    "praca przemysł Polska",
    "praca operator maszyn",
    "praca operator wtryskarki",
    "operator wtryskarki praca",
    "praca pracownik produkcji",
    "praca magazyn Polska",
    "praca magazynier",
    "praca logistyka Polska",
    "praca dla studentów Polska",
    "praca dla studentów",
    "praca dla absolwentów Polska",
    "praca dla absolwentów",
    "praca bez doświadczenia Polska",
    "oferty pracy dla obcokrajowców Polska",
    "agencja pracy Polska",
    "H&M Synergy praca",
  ],

  alternates: {
    canonical: "/pl/jobs",
    languages: {
      en: "/en/jobs",
      pl: "/pl/jobs",
    },
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/pl/jobs",
    siteName: "H&M Synergy",
    title:
      "Oferty pracy w Polsce | Produkcja, magazyn i praca dla studentów | H&M Synergy",
    description:
      "Znajdź oferty pracy w produkcji, przemyśle, magazynach, logistyce oraz oferty dla studentów i absolwentów w Polsce.",
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
    title:
      "Oferty pracy w Polsce | Produkcja, magazyn i praca dla studentów | H&M Synergy",
    description:
      "Aktualne oferty pracy w produkcji, magazynach, logistyce oraz oferty dla studentów i absolwentów w Polsce.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PolishJobsRoutePage() {
  return <PolishJobsPage />;
}