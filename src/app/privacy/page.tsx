import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacybeleid - VanEck Direct",
  description: "Lees het privacybeleid van VanEck Direct en hoe wij omgaan met uw persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      title="Privacybeleid"
      description="Lees hoe VanEck Direct omgaat met uw persoonsgegevens en welke rechten u heeft op het gebied van privacy."
      breadcrumb="Privacy"
    />
  );
}
