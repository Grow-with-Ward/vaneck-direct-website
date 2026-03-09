import type { Metadata } from "next";
import SEOLandingContent from "@/components/SEOLandingContent";

export const metadata: Metadata = {
  title: "De beleggingsapp voor beginners | VanEck Direct",
  description:
    "VanEck Direct is de ideale beleggingsapp voor beginners. Leer hoe je eenvoudig kunt starten met beleggen.",
};

export default function BeleggingsappVoorBeginnersPage() {
  return (
    <SEOLandingContent
      heroHeading="Ideale beleggingsapp voor beginners zonder ervaring"
      valueProps={[
        {
          bold: "De experts van VanEck nemen het meeste werk voor je uit handen;",
          text: "met automatische maandelijkse inleg heb je rust in je hoofd & profiteer je mee van de kennis van echte professionals.",
        },
        {
          bold: "Een beleggingsplan dat echt bij je past;",
          text: "helemaal afgestemd op jouw keuzes en wensen, zodat je je goed voelt bij wat je doet.",
        },
        {
          bold: "Je hoeft niet gelijk all-in te gaan;",
          text: "beleg op jouw eigen tempo, zonder keuzestress. Want beleggen doe je voor de lange termijn.",
        },
      ]}
      painHeading="Beleggen kan zo overweldigend & moeilijk zijn..."
      painPoints={[
        {
          bold: "Keuze-stress;",
          text: "Ojee, wat een keuzes... Crypto? Amerikaanse of Europese aandelen? Het lijkt wel alsof je door de bomen het bos niet meer ziet.",
        },
        {
          bold: "De ene moeilijke term na de andere;",
          text: "Gek toch? Je moet alles zelf uitzoeken & leren, daardoor weet je niet waar je moet beginnen.",
        },
        {
          bold: "Geen grip op resultaat:",
          text: "je investeert en blijft wachten, maar het voelt alsof er geen duidelijk pad is naar resultaten. Hoe weet je of je investeringen echt voor je werken?",
        },
      ]}
      solutionHeading="Zo maken we beleggen makkelijker"
      solutions={[
        {
          title: "Laat onze experts het werk voor je uit handen nemen",
          body: "We helpen je met het samenstellen van je portefeuille en beheren deze voor je, helemaal afgestemd op jouw wensen en voorkeuren.",
          image: "/images/gelukt_solution.png",
          imageAlt: "Experts nemen het werk uit handen",
        },
        {
          title: "Duidelijke uitleg in gewone taal, zo kan het ook",
          body: "Geen ingewikkeld jargon, we leggen het voor je uit zodat jij precies weet wat je doet & je goed voelt bij de keuzes die je maakt.",
          image: "/images/success_illustration.svg",
          imageAlt: "Duidelijke uitleg",
        },
        {
          title: "Beleg slim en wereldwijd gespreid",
          body: "Via VanEck Direct beleg je automatisch in 4 \"mandjes\" met onderliggend goed gespreide",
          image: "/images/frame_illustration.svg",
          imageAlt: "Wereldwijd gespreid beleggen",
          link: { text: "aandelen & obligaties.", href: "/hoe-werkt-het" },
        },
      ]}
      ctaHeading="Neem zelf een kijkje hoe gemakkelijk het echt kan zijn!"
    />
  );
}
