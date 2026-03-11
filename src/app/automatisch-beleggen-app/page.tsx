import type { Metadata } from "next";
import SEOLandingContent from "@/components/SEOLandingContent";

export const metadata: Metadata = {
  title: "Automatisch beleggen app voor de lange termijn | VanEck Direct",
  description:
    "Beleg automatisch met de VanEck Direct app. Stel een maandelijkse inleg in en laat de experts het werk doen.",
  alternates: {
    canonical: "/automatisch-beleggen-app",
  },
};

export default function AutomatischBeleggenAppPage() {
  return (
    <SEOLandingContent
      heroHeading="Automatisch beleggen voor de lange termijn"
      heroImage="/images/elearning4.png"
      heroImageAlt="Kijkje in automatisch beleggen app"
      valueProps={[
        {
          bold: "Beleg automatisch direct in een wereldwijd gespreide portefeuille;",
          text: "afgestemd op wat bij jou past, met zorgvuldig gekozen ETFs.",
        },
        {
          bold: "Samengesteld door de pioniers in ETFs;",
          text: "profiteer van het bedrijf dat al 15 jaar ervaring in ETF beleggen heeft.",
        },
        {
          bold: "Automatisch & flexibel:",
          text: "Beleg maandelijks zonder dagelijks omkijken & pas aan wanneer jij wilt!",
        },
      ]}
      painHeading="Herken je dit...?"
      painPoints={[
        {
          bold: "Overweldigend aanbod:",
          text: "Zoveel manieren om te beleggen en zoveel keuzes. Waar begin je nou?!",
        },
        {
          bold: "Je wilt niet alles zelf doen;",
          text: "met het idee dat je dagelijks het nieuws & je aandelen moet volgen..",
        },
        {
          bold: "En dan nog de risico's van beleggen:",
          text: "Wat als je op één paard wedt... en het levert niks op?",
        },
      ]}
      solutionHeading="Zo maken we automatisch beleggen makkelijk"
      solutions={[
        {
          title: "Focus op rendement voor de lange termijn",
          body: "In plaats van te focussen op snelle winsten, helpen we je om vermogen op te bouwen voor de lange termijn – zonder dat je dagelijks het financiële nieuws hoeft te volgen!",
          image: "/images/click_solution.png",
          imageAlt: "Lange termijn focus bij automatisch beleggen app",
        },
        {
          title: "Beleg automatisch zonder de app dagelijks te hoeven openen",
          body: "Geen losse aandelen of moeilijke keuzes, wij nemen het meeste werk uit handen, zodat jij je kunt richten op wat echt belangrijk is.  Zet automatische maandelijkse inleg aan en open de app alleen wanneer je wilt.",
          image: "/images/gelukt_solution.png",
          imageAlt: "Maandelijks inleg om automatisch te beleggen in de app",
        },
        {
          title: "Zonder keuzestress automatisch gespreid beleggen met ETFs",
          body: "Beleg wereldwijd in diverse landen en sectoren met 4 zorgvuldig geselecteerde",
          image: "/images/shipping_solution.svg",
          imageAlt: "Overzicht ETFs voor automatisch beleggen app",
          link: { text: "VanEck ETF's.", href: "/hoe-werkt-het" },
          afterLink: " Zo nemen wij het kiezen voor je uit handen!",
        },
      ]}
      ctaHeading="Begin nu ook met automatisch beleggen in de app!"
    />
  );
}
