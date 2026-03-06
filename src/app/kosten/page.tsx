import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Kostenoverzicht - VanEck Direct",
  description: "Bekijk de kosten van VanEck Direct: beheerkosten van 0,5% en fondskosten tussen 0,18%-0,22%.",
};

export default function KostenPage() {
  return (
    <PlaceholderPage
      title="Kostenoverzicht"
      description="Transparante en lage kosten. Bekijk de beheerkosten, fondskosten en bereken wat beleggen via VanEck Direct jou kost."
      breadcrumb="Kosten"
    />
  );
}
