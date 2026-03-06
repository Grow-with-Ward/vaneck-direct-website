import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Rendement - VanEck Direct",
  description: "Bekijk het rendement van de VanEck Direct beleggingsprofielen.",
};

export default function RendementPage() {
  return (
    <PlaceholderPage
      title="Rendement"
      description="Bekijk het historisch rendement van de verschillende VanEck Direct beleggingsprofielen en begrijp hoe je vermogen kan groeien op de lange termijn."
    />
  );
}
