import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Hoe werkt het? - VanEck Direct",
  description: "Ontdek hoe VanEck Direct werkt: automatisch beleggen in ETFs, eenvoudig via de app.",
};

export default function HoeWerktHetPage() {
  return (
    <PlaceholderPage
      title="Hoe werkt het?"
      description="Ontdek hoe VanEck Direct werkt. Wij leggen je stap voor stap uit hoe automatisch beleggen in ETFs werkt en hoe je eenvoudig kunt starten via de app."
    />
  );
}
