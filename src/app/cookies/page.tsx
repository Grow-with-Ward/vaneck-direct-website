import type { Metadata } from "next";
import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Cookiebeleid - VanEck Direct",
  description: "Lees het cookiebeleid van VanEck Direct.",
};

export default function CookiesPage() {
  return (
    <PlaceholderPage
      title="Cookiebeleid"
      description="Lees hoe VanEck Direct cookies en vergelijkbare technologieën gebruikt op deze website."
      breadcrumb="Cookies"
    />
  );
}
