import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Veelgestelde vragen (FAQ) - VanEck Direct",
  description: "Antwoorden op veelgestelde vragen over VanEck Direct, automatisch beleggen en ETFs.",
};

export default function FaqPage() {
  return (
    <PlaceholderPage
      title="Veelgestelde vragen"
      description="Vind antwoorden op de meest gestelde vragen over VanEck Direct, automatisch beleggen, kosten, en meer."
      breadcrumb="FAQ"
    />
  );
}
