import type { Metadata } from "next";
import HoeWerktHetContent from "./HoeWerktHetContent";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Hoe werkt het? | Beleggen met de VanEck Direct App",
  description:
    "Ontdek hoe VanEck Direct werkt: automatisch beleggen in ETFs, eenvoudig via de app. Bekijk onze 4 ETFs, risicoprofielen en het 6-stappen plan.",
  alternates: {
    canonical: "/hoe-werkt-het",
  },
};

export default function HoeWerktHetPage() {
  return (
    <>
      <HoeWerktHetContent />
      <CTASection />
      <AppScreenshots />
    </>
  );
}
