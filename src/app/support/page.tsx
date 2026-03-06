import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Support - VanEck Direct",
  description: "Krijg ondersteuning bij het gebruik van VanEck Direct. Vind antwoorden op je vragen.",
};

export default function SupportPage() {
  return (
    <PlaceholderPage
      title="Support"
      description="Heb je hulp nodig? Bekijk onze veelgestelde vragen of neem contact met ons op. Wij staan klaar om je te helpen."
    />
  );
}
