import "./global.css";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://hmsynergy.pl"),

  title: {
    default: "H&M Synergy | Jobs & Recruitment in Poland",
    template: "%s | H&M Synergy",
  },

  description:
    "H&M Synergy is an employment and recruitment agency in Poland connecting employers with workers and helping students, graduates and Ukrainian workers find employment in manufacturing, production, logistics and other sectors.",

  keywords: [
    "employment agency Poland",
    "recruitment agency Poland",
    "jobs in Poland",
    "work in Poland",
    "manufacturing jobs Poland",
    "production jobs Poland",
    "logistics jobs Poland",
    "warehouse jobs Poland",
    "student jobs Poland",
    "graduate jobs Poland",
    "jobs for students in Poland",
    "jobs for graduates in Poland",
    "Ukrainian jobs Poland",
    "jobs for Ukrainians in Poland",
    "work for Ukrainians in Poland",
    "temporary employment Poland",
  ],

  authors: [{ name: "H&M Synergy" }],
  creator: "H&M Synergy",
  publisher: "H&M Synergy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "H&M Synergy",
    title: "H&M Synergy | Jobs & Recruitment in Poland",
    description:
      "Employment and recruitment agency in Poland connecting employers with workers and helping students, graduates and Ukrainian workers find job opportunities.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&M Synergy — Jobs & Recruitment in Poland",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "H&M Synergy | Jobs & Recruitment in Poland",
    description:
      "Find employment opportunities in Poland with H&M Synergy.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#182230]">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}