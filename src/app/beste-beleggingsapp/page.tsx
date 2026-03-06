import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Beste Beleggingsapp - VanEck Direct",
  description: "VanEck Direct: de beste beleggingsapp voor automatisch en gespreid beleggen in ETFs.",
};

export default function BesteBeleggingsappPage() {
  return (
    <PlaceholderPage
      title="Beste Beleggingsapp"
      description="Ontdek waarom VanEck Direct de beste beleggingsapp is voor automatisch en gespreid beleggen in ETFs, tegen lage kosten."
    />
  );
}
