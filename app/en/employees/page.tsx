import type { Metadata } from "next";
import EmployeesPage from "@/components/EmployeesPage";

export const metadata: Metadata = {
  title: "Jobs in Poland | Student & Graduate Jobs | H&M Synergy",

  description:
    "Find jobs in Poland with H&M Synergy. Student jobs, graduate jobs and employment opportunities in manufacturing, production, warehousing, logistics and other operational roles.",

  keywords: [
    "jobs in Poland",
    "jobs Poland",
    "work in Poland",
    "employment Poland",
    "job opportunities Poland",
    "student jobs Poland",
    "jobs for students Poland",
    "graduate jobs Poland",
    "jobs for graduates Poland",
    "employment for students Poland",
    "employment for graduates Poland",
    "manufacturing jobs Poland",
    "production jobs Poland",
    "factory jobs Poland",
    "injection machine operator jobs Poland",
    "machine operator jobs Poland",
    "warehouse jobs Poland",
    "logistics jobs Poland",
    "production worker jobs Poland",
    "assembly jobs Poland",
    "job agency Poland",
    "employment agency Poland",
    "H&M Synergy jobs",
  ],

  alternates: {
    canonical: "/en/employees",
    languages: {
      en: "/en/employees",
      pl: "/pl/employees",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PL",
    url: "/en/employees",
    siteName: "H&M Synergy",

    title: "Jobs in Poland | Student & Graduate Jobs | H&M Synergy",

    description:
      "Find employment opportunities in Poland for students, graduates, experienced workers and other job seekers across manufacturing, production, warehousing and logistics.",

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

    title: "Jobs in Poland | Student & Graduate Jobs | H&M Synergy",

    description:
      "Find student jobs, graduate jobs and employment opportunities in Poland across manufacturing, production, warehousing and logistics.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EmployeesRoutePage() {
  return <EmployeesPage />;
}