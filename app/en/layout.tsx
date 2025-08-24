import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "H&M Synergy",
  description: "Delivery coordination, cost optimization, and IT services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
