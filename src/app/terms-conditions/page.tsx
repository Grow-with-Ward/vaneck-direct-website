import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Terms & Conditions | VanEck Direct",
  description:
    "Lees de algemene voorwaarden van VanEck Direct voor het gebruik van de website en applicatie.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Terms &amp; conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Algemene disclaimers voor gebruik van de website of applicatie
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                VanEck Asset Management B.V. (&quot;VanEck&quot;) stelt de informatie op deze
                website (&quot;site&quot;) of applicatie (&quot;app&quot;) beschikbaar als een
                service aan bezoekers, die uitsluitend voor informatieve doeleinden mag worden
                gebruikt. VanEck verleent ten aanzien van VanEck Direct uitsluitend financiële
                diensten aan niet-professionele cliënten in landen aan waar deze beleggingsdienst
                is geregistreerd. Op dit moment biedt VanEck Direct haar diensten alleen in
                Nederland aan en categoriseert zij haar klanten als niet-professionele
                klanten/beleggers.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Algemene disclaimers voor producten/prestaties
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Beleggers zijn onderworpen aan effecten- en belastingregels binnen hun
                toepasselijke rechtsgebieden die niet op deze site of app worden behandeld. Niets
                op deze site of app mag worden beschouwd als een uitnodiging om aandelen van een
                belegging te kopen of een aanbod om aandelen te verkopen in een rechtsgebied waar
                het aanbod of verzoek onwettig zou zijn volgens de effectenwetgeving van een
                dergelijk rechtsgebied. Het is ook niet bedoeld als beleggings-, fiscaal,
                financieel of juridisch advies. Beleggers dienen dergelijk professioneel advies
                in te winnen voor hun specifieke situatie.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Belangrijke informatie voor buitenlandse investeerders
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Vanwege het wereldwijde karakter van het internet, gaat u ermee akkoord om te
                voldoen aan alle lokale regels met betrekking tot uw account en uw online gedrag,
                inclusief alle wetten, regels, codes en voorschriften van het land waarin u woont
                en het land van waaruit u deze site of app bezoekt, inclusief maar niet beperkt
                tot, alle wetten, regels, codes, voorschriften, decreten, wetten, bevelen,
                richtlijnen, wetgeving, wetsvoorstellen en statuten met betrekking tot
                belastingen, contracten, intellectueel eigendom, effecten, e-commerce, bankieren,
                technologie, computers, fraude en privacy. Bovendien stemt u ermee in om te
                voldoen aan alle toepasselijke wetten, regels, codes en voorschriften met
                betrekking tot de overdracht van technische gegevens.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Niets op deze site of app mag worden beschouwd als een uitnodiging om aandelen
                van de Subfondsen te kopen of een aanbod om aandelen van de Subfondsen te
                verkopen in een rechtsgebied waar het aanbod of verzoek onwettig zou zijn volgens
                de effectenwetgeving van een dergelijk buitenlands rechtsgebied.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Koppelingen/viruswaarschuwingen
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Hyperlinks naar andere internetsites of materiaal dat door derden is opgesteld
                (&quot;links&quot;) zijn opgenomen voor het gemak van onze bezoekers. VanEck
                aanvaardt geen aansprakelijkheid voor de inhoud van gelinkte sites en materialen
                die door derden zijn opgesteld, met inbegrip van, maar niet beperkt tot, de
                nauwkeurigheid, het onderwerp, de kwaliteit of de tijdigheid van de inhoud van
                dergelijke gelinkte sites of materialen. Het feit dat dergelijke links zijn
                verstrekt, vormt geen goedkeuring, autorisatie, sponsoring door of affiliatie met
                VanEck met betrekking tot een gelinkte site of materiaal of hun sponsor of
                auteur. Er zijn risico&apos;s verbonden aan het gebruik van informatie, software
                of producten die toegankelijk zijn op internet, en we raden u aan ervoor te
                zorgen dat u deze risico&apos;s begrijpt voordat u dit doet. VanEck is niet
                aansprakelijk voor enige schade die wordt veroorzaakt door de overdracht, door
                toegang tot deze site of app, van een computervirus of andere computercode of
                programmeerapparaat dat kan worden gebruikt om toegang te krijgen tot de site of
                app of de software, hardware, gegevens of eigendommen van een gebruiker, deze te
                verwijderen, te beschadigen, uit te schakelen, te verstoren of anderszins te
                belemmeren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
