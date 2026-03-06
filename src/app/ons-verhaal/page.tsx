import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Ons verhaal - VanEck Direct",
  description: "Leer meer over VanEck Direct en ons verhaal. VanEck bestaat al sinds 1955.",
};

export default function OnsVerhaalPage() {
  return (
    <PlaceholderPage
      title="Ons verhaal"
      description="VanEck bestaat al sinds 1955 en heeft een solide reputatie in indexbeleggen. Leer meer over wie wij zijn, onze missie en waarom miljoenen beleggers wereldwijd ons vertrouwen."
    />
  );
}
