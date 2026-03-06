import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "ETF Beleggingsapp - VanEck Direct",
  description: "VanEck Direct is de ideale ETF beleggingsapp. Beleg gespreid in ETFs zonder keuzestress.",
};

export default function EtfBeleggingsappPage() {
  return (
    <PlaceholderPage
      title="Ideaal voor ETF Beleggen"
      description="VanEck Direct maakt ETF beleggen eenvoudig. Beleg automatisch en gespreid in professioneel samengestelde ETF-portefeuilles, zonder zelf fondsen te hoeven kiezen."
      breadcrumb="ETF Beleggingsapp"
    />
  );
}
