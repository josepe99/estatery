import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estatery",
  description:
    "Buy, rent, or sell your property easily. A great platform to buy, sell, or even rent your properties without any commissions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
