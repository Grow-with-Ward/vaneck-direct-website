import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact - VanEck Direct",
  description: "Neem contact op met VanEck Direct. Wij helpen je graag met al je vragen.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Heb je een vraag of wil je meer weten? Neem gerust contact met ons op. Ons team staat klaar om je te helpen."
    />
  );
}
