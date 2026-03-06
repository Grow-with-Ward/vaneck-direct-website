import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Beleggingsapp voor Beginners - VanEck Direct",
  description: "VanEck Direct is de ideale beleggingsapp voor beginners. Leer hoe je eenvoudig kunt starten met beleggen.",
};

export default function BeleggingsappVoorBeginnersPage() {
  return (
    <PlaceholderPage
      title="Voor Beginnende Beleggers"
      description="Geen ervaring met beleggen? Geen probleem. VanEck Direct is speciaal ontworpen voor mensen die willen beginnen met beleggen, zonder de complexiteit van traditionele beleggingsplatformen."
      breadcrumb="Beginnende Beleggers"
    />
  );
}
