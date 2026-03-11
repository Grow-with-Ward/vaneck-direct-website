import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DownloadModalProvider } from "@/components/DownloadModal";

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
  metadataBase: new URL("https://direct.vaneck.com"),
  title: "VanEck Direct - Automatische beleggingsapp voor gespreid beleggen",
  description:
    "VanEck Direct - ETF beleggingsapp voor beginnende beleggers - automatisch & gespreid",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
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
        <DownloadModalProvider>
          <div className="min-h-screen bg-white">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#0e3065] focus:px-4 focus:py-2 focus:text-white"
            >
              Ga naar inhoud
            </a>
            <TopBanner />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </div>
        </DownloadModalProvider>
      </body>
    </html>
  );
}
