import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden - VanEck Direct",
  description: "Lees de algemene voorwaarden van VanEck Direct.",
};

export default function TermsConditionsPage() {
  return (
    <PlaceholderPage
      title="Algemene Voorwaarden"
      description="Lees de algemene voorwaarden die van toepassing zijn op het gebruik van VanEck Direct en de bijbehorende diensten."
      breadcrumb="Terms & Conditions"
    />
  );
}
