import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Automatisch Beleggen App - VanEck Direct",
  description: "Beleg automatisch met de VanEck Direct app. Stel een maandelijkse inleg in en laat de experts het werk doen.",
};

export default function AutomatischBeleggenAppPage() {
  return (
    <PlaceholderPage
      title="Automatisch Beleggen App"
      description="Stel een maandelijkse inleg in en laat de VanEck ETF-experts het beleggen voor je doen. Automatisch, gespreid en zonder er dagelijks naar om te kijken."
      breadcrumb="Automatisch Beleggen"
    />
  );
}
