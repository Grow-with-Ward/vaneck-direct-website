import type { Metadata } from "next";
import SupportContent from "./SupportContent";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Vragen & Support | VanEck Direct App",
  description:
    "Krijg ondersteuning bij het gebruik van VanEck Direct. Vind antwoorden op je vragen.",
};

export default function SupportPage() {
  return (
    <>
      <SupportContent />
      <CTASection />
      <AppScreenshots />
    </>
  );
}
