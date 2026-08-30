import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Робота та рекрутинг у Польщі",
    template: "%s | H&M Synergy",
  },

  description:
    "Знайдіть роботу в Польщі з H&M Synergy. Ми з'єднуємо студентів, випускників, працівників з України та інших кандидатів з вакансіями на виробництві, в логістиці та інших галузях.",

  alternates: {
    canonical: "/ua",
    languages: {
      en: "/en",
      pl: "/pl",
      uk: "/ua",
    },
  },

  openGraph: {
    locale: "uk_UA",
    url: "/ua",
    type: "website",
    siteName: "H&M Synergy",
  },
};

export default function UkrainianLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}