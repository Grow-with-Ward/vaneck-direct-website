import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Toegankelijkheidsverklaring - VanEck Direct",
  description: "Lees de toegankelijkheidsverklaring van VanEck Direct.",
};

export default function VerklaringPage() {
  return (
    <PlaceholderPage
      title="Toegankelijkheidsverklaring"
      description="VanEck Direct streeft ernaar om haar website en app toegankelijk te maken voor iedereen. Lees hier onze toegankelijkheidsverklaring."
      breadcrumb="Verklaring"
    />
  );
}
