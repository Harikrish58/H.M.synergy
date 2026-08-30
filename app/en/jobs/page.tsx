import type { Metadata } from "next";
import JobsPage from "@/components/JobsPage";

export const metadata: Metadata = {
  title: "Jobs in Poland | Manufacturing, Production & Student Jobs | H&M Synergy",

  description:
    "Find current jobs in Poland with H&M Synergy, including manufacturing, production, machine operator, warehouse, logistics, student and graduate job opportunities.",

  keywords: [
    "jobs in Poland",
    "job vacancies Poland",
    "work in Poland",
    "manufacturing jobs Poland",
    "production jobs Poland",
    "factory jobs Poland",
    "industrial jobs Poland",
    "machine operator jobs Poland",
    "injection machine operator jobs Poland",
    "injection molding jobs Poland",
    "production worker jobs Poland",
    "warehouse jobs Poland",
    "warehouse worker jobs Poland",
    "logistics jobs Poland",
    "student jobs Poland",
    "jobs for students Poland",
    "graduate jobs Poland",
    "jobs for graduates Poland",
    "entry level jobs Poland",
    "employment agency jobs Poland",
    "H&M Synergy jobs",
  ],

  alternates: {
    canonical: "/en/jobs",
    languages: {
      en: "/en/jobs",
      pl: "/pl/jobs",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/jobs",
    siteName: "H&M Synergy",
    title:
      "Jobs in Poland | Manufacturing, Production & Student Jobs | H&M Synergy",
    description:
      "Find manufacturing, production, machine operator, warehouse, logistics, student and graduate job opportunities in Poland with H&M Synergy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Jobs in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Jobs in Poland | Manufacturing, Production & Student Jobs | H&M Synergy",
    description:
      "Find current manufacturing, production, warehouse, logistics, student and graduate jobs in Poland.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function JobsRoutePage() {
  return <JobsPage />;
}