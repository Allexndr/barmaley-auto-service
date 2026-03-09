import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AppBarWrapper } from "@/components/AppBarWrapper";
import { PageTransition } from "@/components/PageTransition";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Бармалей — Ремонт электромобилей в Алматы. Авто из Китая в СНГ",
  description:
    "Ремонт электромобилей и гибридов в Алматы. Подбор и поставка авто из Китая в страны СНГ.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geist.variable} font-sans antialiased`}>
        <AppBarWrapper />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
