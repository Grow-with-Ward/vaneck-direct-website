import type { Metadata } from "next";
import SEOLandingContent from "@/components/SEOLandingContent";

export const metadata: Metadata = {
  title: "Beste beleggingsapp in Nederland voor beheerd beleggen",
  description:
    "VanEck Direct: de beste beleggingsapp voor automatisch en gespreid beleggen in ETFs, tegen lage kosten.",
  alternates: {
    canonical: "/beste-beleggingsapp",
  },
};

export default function BesteBeleggingsappPage() {
  return (
    <SEOLandingContent
      heroHeading="Beste beleggingsapp voor beleggen zonder gedoe"
      valueProps={[
        {
          bold: "Automatisch & flexibel:",
          text: "Beleg maandelijks zonder dagelijks omkijken & pas aan wanneer jij wilt!",
        },
        {
          bold: "Altijd controle via de app:",
          text: "Je kan altijd weer wat opnemen of eerder stoppen.",
        },
        {
          bold: "Jarenlange expertise:",
          text: "VanEck is al meer dan 15 jaar specialist in ETFs & sinds 1955 expert in vermogensbeheer.",
        },
      ]}
      painHeading="Herken je dit...?"
      painPoints={[
        {
          bold: "Overweldigend aanbod:",
          text: "Zoveel manieren om te beleggen en zoveel keuzes. Waar begin je nou?!",
        },
        {
          bold: "Onduidelijke kosten:",
          text: "Je bent moe van beleggingspartijen die hier niet transparant genoeg over zijn.",
        },
        {
          bold: "Gebrek aan vertrouwen:",
          text: "Je wilt zeker weten dat jouw geld in goede handen is bij een ervaren partij.",
        },
      ]}
      solutionHeading="Waarom is VanEck Direct de beste beleggingsapp voor jou?"
      solutions={[
        {
          title: "Een van de voordeligste beheerde beleggingsapps",
          body: "Met beheerkosten van 0,5% en fondskosten tussen 0,18%-0,22%, inclusief spreadkosten. Verder geen pakketten of abonnementen.",
          image: "/images/kostenoverzicht.png",
          imageAlt: "Kostenoverzicht VanEck Direct",
        },
        {
          title: "Lift mee op de jarenlange kennis van de ETF experts bij VanEck",
          body: "Bij VanEck Direct creëren en beheren we voor jou de mandjes van aandelen en obligaties (ETFs), in plaats van gebruik te maken van derden.",
          image: "/images/frame_illustration.svg",
          imageAlt: "ETF expertise VanEck",
        },
        {
          title: "Beleggen zonder er dagelijks mee bezig te zijn",
          body: "Geen losse aandelen of moeilijke keuzes, wij nemen het meeste werk uit handen, zodat jij je kunt richten op wat echt belangrijk is.",
          image: "/images/gelukt_solution.png",
          imageAlt: "Automatisch beleggen",
        },
      ]}
      ctaHeading="Klaar voor de eerste stap?"
      ctaHeadingLine2="Begin nu. Voor later."
    />
  );
}
