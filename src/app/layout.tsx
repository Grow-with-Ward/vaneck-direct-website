import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "VanEck Direct - Automatische beleggingsapp voor gespreid beleggen",
  description:
    "VanEck Direct - ETF beleggingsapp voor beginnende beleggers - automatisch & gespreid",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${merriweather.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
