import type { Metadata } from "next";
import EnglishContactPage from "@/components/EnglishContactPage";

export const metadata: Metadata = {
  title: "Contact H&M Synergy | Employment & Recruitment Services in Poland",

  description:
    "Contact H&M Synergy for employment, recruitment and staffing services in Poland. Employers can request workers, while job seekers, students and graduates can ask about current job opportunities.",

  keywords: [
    "H&M Synergy contact",
    "employment agency Poland",
    "recruitment agency Poland",
    "staffing agency Poland",
    "employment services Poland",
    "recruitment services Poland",
    "manufacturing recruitment Poland",
    "manufacturing jobs Poland",
    "production jobs Poland",
    "production workers Poland",
    "warehouse jobs Poland",
    "logistics jobs Poland",
    "student jobs Poland",
    "graduate jobs Poland",
    "jobs for students Poland",
    "jobs for graduates Poland",
    "job opportunities Poland",
  ],

  alternates: {
    canonical: "/en/contact",
    languages: {
      en: "/en/contact",
      pl: "/pl/contact",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/contact",
    siteName: "H&M Synergy",
    title:
      "Contact H&M Synergy | Employment & Recruitment Services in Poland",
    description:
      "Contact H&M Synergy for recruitment, staffing, employment opportunities and business services in Poland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Employment and Recruitment Services in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Contact H&M Synergy | Employment & Recruitment Services in Poland",
    description:
      "Contact H&M Synergy for recruitment, staffing and employment opportunities in Poland.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <EnglishContactPage />;
}