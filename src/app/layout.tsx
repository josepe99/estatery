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
  title: "Estatery | Real Estate in the United States - Buy, Sell & Rent Properties",
  description:
    "Estatery is the leading real estate platform in the United States. Find houses, apartments, and properties to buy, sell, or rent nationwide. No hidden fees. Your next home or real estate investment is here!",
  keywords: [
    "real estate United States",
    "real estate USA",
    "houses for sale USA",
    "apartments for rent USA",
    "properties in the United States",
    "buy house USA",
    "sell property USA",
    "rent apartment USA",
    "real estate investment USA",
    "Estatery"
  ],
  openGraph: {
    title: "Estatery | Real Estate in the United States",
    description: "Buy, sell, and rent properties in the United States. Find your next home or real estate investment with Estatery.",
    url: "https://estatery.com/",
    type: "website",
    locale: "en_US",
    siteName: "Estatery",
    images: [
      {
        url: "/hero-house.jpg",
        width: 1200,
        height: 630,
        alt: "Estatery - Real Estate in the United States"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Estatery | Real Estate in the United States",
    description: "Buy, sell, and rent properties in the United States. Find your next home or real estate investment with Estatery.",
    images: ["/hero-house.jpg"]
  },
  alternates: {
    canonical: "https://estatery.com/"
  }
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
