import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Praca i rekrutacja w Polsce",
    template: "%s | H&M Synergy",
  },

  description:
    "Znajdź pracę w Polsce z H&M Synergy. Łączymy studentów, absolwentów, pracowników z Ukrainy i innych kandydatów z ofertami pracy w produkcji, logistyce i innych branżach.",

  alternates: {
    canonical: "/pl",
    languages: {
      en: "/en",
      pl: "/pl",
      uk: "/ua",
    },
  },

  openGraph: {
    locale: "pl_PL",
    url: "/pl",
    type: "website",
    siteName: "H&M Synergy",
  },
};

export default function PolishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}