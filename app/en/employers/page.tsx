import type { Metadata } from "next";
import EmployersPage from "@/components/EmployersPage";

export const metadata: Metadata = {
  title: "Staffing & Recruitment for Employers in Poland | H&M Synergy",

  description:
    "H&M Synergy helps employers in Poland recruit and staff reliable workers for manufacturing, production, warehousing, logistics and other operational positions.",

  keywords: [
    "staffing services Poland",
    "staffing agency Poland",
    "recruitment agency Poland",
    "recruitment services Poland",
    "employment agency Poland",
    "workforce solutions Poland",
    "workforce staffing Poland",
    "manufacturing staffing Poland",
    "manufacturing recruitment Poland",
    "production workers Poland",
    "production staffing Poland",
    "factory workers Poland",
    "warehouse staffing Poland",
    "warehouse workers Poland",
    "logistics staffing Poland",
    "logistics workers Poland",
    "machine operators Poland",
    "injection machine operators Poland",
    "hire workers Poland",
    "hire employees Poland",
    "temporary workers Poland",
    "business staffing solutions Poland",
    "H&M Synergy recruitment",
  ],

  alternates: {
    canonical: "/en/employers",
    languages: {
      en: "/en/employers",
      pl: "/pl/employers",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/employers",
    siteName: "H&M Synergy",

    title: "Staffing & Recruitment for Employers in Poland | H&M Synergy",

    description:
      "Recruitment and staffing solutions for employers in Poland across manufacturing, production, warehousing, logistics and other operational sectors.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Staffing and Recruitment for Employers in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Staffing & Recruitment for Employers in Poland | H&M Synergy",

    description:
      "Find reliable workers for manufacturing, production, warehousing, logistics and other operational positions in Poland.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployersRoutePage() {
  return <EmployersPage />;
}