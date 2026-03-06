import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Klachten - VanEck Direct",
  description: "Heb je een klacht over VanEck Direct? Lees hier hoe je een klacht kunt indienen.",
};

export default function KlachtenPage() {
  return (
    <PlaceholderPage
      title="Klachten"
      description="Heb je een klacht? Wij nemen klachten serieus en doen ons best om deze zo snel mogelijk op te lossen. Lees hier hoe je een klacht kunt indienen."
    />
  );
}
