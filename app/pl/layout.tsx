import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "H&M Synergy",
  description: "Koordynacja dostaw, optymalizacja kosztów oraz usługi IT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-gray-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
