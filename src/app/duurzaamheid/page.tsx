import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "ESG bij VanEck Direct - VanEck Direct",
  description: "Ontdek hoe VanEck Direct omgaat met ESG en duurzaam beleggen.",
};

export default function DuurzaamheidPage() {
  return (
    <PlaceholderPage
      title="ESG bij VanEck Direct"
      description="Duurzaamheid is belangrijk. Ontdek hoe VanEck Direct omgaat met Environmental, Social en Governance (ESG) criteria bij het samenstellen van beleggingsportefeuilles."
      breadcrumb="Duurzaamheid"
    />
  );
}
