import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jobs & Recruitment in Poland",
    template: "%s | H&M Synergy",
  },

  description:
    "Find jobs in Poland with H&M Synergy. We connect students, graduates, Ukrainian workers and other candidates with employment opportunities in manufacturing, production, logistics and other sectors.",

  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      pl: "/pl",
    },
  },

  openGraph: {
    locale: "en_PL",
    url: "/en",
    type: "website",
    siteName: "H&M Synergy",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}