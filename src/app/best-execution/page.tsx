import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Best Execution - VanEck Direct",
  description: "Lees het Best Execution beleid van VanEck Direct.",
};

export default function BestExecutionPage() {
  return (
    <PlaceholderPage
      title="Best Execution"
      description="Lees hoe VanEck Direct het Best Execution beleid toepast om de beste resultaten voor uw orders te waarborgen."
    />
  );
}
