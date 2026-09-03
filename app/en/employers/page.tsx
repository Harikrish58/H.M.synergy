import type { Metadata } from "next";
import EmployersPage from "@/components/EmployersPage";

export const metadata: Metadata = {
  title: "Submit a Job Vacancy | H&M Synergy",
  description:
    "Submit your job vacancy to H&M Synergy and find reliable workers for manufacturing, production, warehousing, logistics and operational positions in Poland.",
  keywords: [
    "submit job vacancy Poland",
    "staffing agency Poland",
    "recruitment agency Poland",
    "staffing services Poland",
    "workforce solutions Poland",
    "manufacturing staffing Poland",
    "production staffing Poland",
    "warehouse staffing Poland",
    "logistics staffing Poland",
    "hire workers Poland",
    "H&M Synergy recruitment",
  ],
  alternates: {
    canonical: "/en/employers",
    languages: {
      en: "/en/employers",
      pl: "/pl/employers",
      uk: "/ua/employers",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/employers",
    siteName: "H&M Synergy",
    title: "Submit a Job Vacancy | H&M Synergy",
    description:
      "Submit your workforce requirements to H&M Synergy and find suitable workers in Poland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Submit a Job Vacancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit a Job Vacancy | H&M Synergy",
    description:
      "Submit your workforce requirements to H&M Synergy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployersRoutePage() {
  return <EmployersPage locale="en" />;
}