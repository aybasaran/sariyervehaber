import Header from "@/components/Header";

import "swiper/css";
import "swiper/css/navigation";

import "./globals.css";

import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
