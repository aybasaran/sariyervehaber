import Header from "@/components/Header";

import "swiper/css";
import "swiper/css/navigation";

import "./globals.css";

import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const dynamic = "force-dynamic";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Sarıyer & Haber",
  description:
    "En güncel Sarıyer haberleri, son dakika gelişmeleri ve Sarıyer ile ilgili tüm video, fotoğraf ve haberler Sarıyer & Haber'de",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
