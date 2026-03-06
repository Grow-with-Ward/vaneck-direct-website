import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | VanEck Direct",
  description:
    "Neem contact op met VanEck Direct. Bel, mail of dien een klacht in via ons formulier.",
};

export default function ContactPage() {
  return <ContactContent />;
}
