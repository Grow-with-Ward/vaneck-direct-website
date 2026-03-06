import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Saai Beleggen - VanEck Direct",
  description: "Saai beleggen is slim beleggen. Ontdek de kracht van geduldig en gespreid beleggen met VanEck Direct.",
};

export default function SaaiBeleggenPage() {
  return (
    <PlaceholderPage
      title="Saai Beleggen"
      description="Saai beleggen is slim beleggen. Ontdek waarom geduldig en gespreid beleggen op de lange termijn de beste strategie is."
    />
  );
}
