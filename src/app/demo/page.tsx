import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Demo - VanEck Direct",
  description: "Bekijk een demo van de VanEck Direct app en ontdek hoe eenvoudig automatisch beleggen is.",
};

export default function DemoPage() {
  return (
    <PlaceholderPage
      title="Demo"
      description="Bekijk een demo van de VanEck Direct app en ontdek hoe eenvoudig automatisch beleggen kan zijn. Verken de functies zonder account."
    />
  );
}
