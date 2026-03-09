import type { Metadata } from "next";
import SEOLandingContent from "@/components/SEOLandingContent";

export const metadata: Metadata = {
  title: "Beleg slim op de lange termijn met de beleggingsapp VanEck Direct",
  description:
    "VanEck Direct is de ideale ETF beleggingsapp. Beleg gespreid in ETFs zonder keuzestress.",
};

export default function EtfBeleggingsappPage() {
  return (
    <SEOLandingContent
      heroHeading="De ETF beleggingsapp voor beleggers met geduld"
      valueProps={[
        {
          bold: "Beleg direct in een wereldwijd gespreide portefeuille;",
          text: "afgestemd op wat bij jou past, met zorgvuldig gekozen ETFs.",
        },
        {
          bold: "Samengesteld door de pioniers in ETFs;",
          text: "profiteer van het bedrijf dat al 15 jaar ervaring in ETF beleggen heeft.",
        },
        {
          bold: "Ervaar de potentiële kracht van het rendement-op-rendement-effect:",
          text: "Beleggen draait om geduld. Het is een lange termijn reis, geen korte sprint.",
        },
      ]}
      painHeading="Beleggen kan zo overweldigend zijn.."
      painPoints={[
        {
          bold: "Zo veel opties...",
          text: "je ziet door de bomen het bos niet meer; het is al lastig genoeg om te bepalen wat het beste past bij jouw lange termijn doelen.",
        },
        {
          bold: "Je wilt niet alles zelf doen;",
          text: "met het idee dat je dagelijks het nieuws & je aandelen moet volgen..",
        },
        {
          bold: "En dan nog de risico's van beleggen:",
          text: "Wat als je op een paard wedt... en het levert niks op?",
        },
      ]}
      solutionHeading="Waarom VanEck Direct een goede keuze is voor jouw lange termijn beleggingsdoelen"
      solutions={[
        {
          title: "Beleg in een persoonlijke portefeuille",
          body: "Laat de experts het meeste werk voor je doen en krijg een persoonlijke portefeuille die past bij jouw voorkeuren en situatie.",
          image: "/images/high_quality_product.png",
          imageAlt: "Persoonlijke portefeuille",
        },
        {
          title: "Focus op rendement voor de lange termijn",
          body: "In plaats van te focussen op snelle winsten, helpen we je om vermogen op te bouwen voor de lange termijn – zonder dat je dagelijks het financiële nieuws hoeft te volgen!",
          image: "/images/click_solution.png",
          imageAlt: "Focus op lange termijn rendement",
        },
        {
          title: "Zonder keuzestress wereldwijd beleggen met ETFs",
          body: "Beleg wereldwijd in diverse landen en sectoren met 4 zorgvuldig geselecteerde VanEck ETF's. Zo nemen wij het kiezen voor je uit handen!",
          image: "/images/spaargeld.png",
          imageAlt: "Wereldwijd gespreid beleggen",
        },
      ]}
      ctaHeading="Het beste moment? Nu."
      ctaHeadingLine2="Voor de lange termijn begin je nooit te vroeg."
    />
  );
}
