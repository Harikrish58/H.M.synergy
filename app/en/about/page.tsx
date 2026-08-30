import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About H&M Synergy | Employment & Business Services in Poland",
  description:
    "Learn about H&M Synergy, an employment and business support company in Poland connecting employers with workers, students, graduates and job seekers.",

  keywords: [
    "H&M Synergy",
    "employment agency Poland",
    "recruitment agency Poland",
    "staffing company Poland",
    "employment services Poland",
    "manufacturing recruitment Poland",
    "production workers Poland",
    "student jobs Poland",
    "graduate jobs Poland",
    "jobs for students Poland",
    "jobs for graduates Poland",
    "job opportunities Poland",
    "workforce solutions Poland",
    "business services Poland",
  ],

  alternates: {
    canonical: "/en/about",
    languages: {
      en: "/en/about",
      pl: "/pl/about",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/about",
    siteName: "H&M Synergy",
    title: "About H&M Synergy | Employment & Business Services in Poland",
    description:
      "H&M Synergy connects employers with workers, students, graduates and job seekers while providing workforce and business support services in Poland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Employment and Business Services in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About H&M Synergy | Employment & Business Services in Poland",
    description:
      "Employment, recruitment and business support services for companies and job seekers in Poland.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutRoutePage() {
  return <AboutPage />;
}