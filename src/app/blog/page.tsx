import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Blog - VanEck Direct",
  description: "Lees het laatste nieuws en artikelen over beleggen, ETFs en VanEck Direct.",
};

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Blog"
      description="Lees het laatste nieuws en artikelen over beleggen, ETFs, financiële planning en VanEck Direct."
    />
  );
}
