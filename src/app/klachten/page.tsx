import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Klachten & Feedback | VanEck Direct",
  description:
    "Klachten- en feedbackprocedure van VanEck Direct. Lees hoe u een klacht kunt indienen.",
  alternates: {
    canonical: "/klachten",
  },
};

export default function KlachtenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Klachten
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm text-[#4a5568]">Versie 23 september 2024</p>

          <p className="mt-6 text-base font-bold leading-relaxed text-[#211f54]">
            Samenvatting van de klachtenafhandelingsprocedure van VanEck Asset Management B.V.
            voor VanEck Direct
          </p>

          <div className="mt-10 space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">1. Introductie</h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Deze Klachtenafhandelingsprocedure (de &quot;Procedure&quot;) is gebaseerd op de
                gedrags-, organisatorische en transparantieverplichtingen van VanEck Asset
                Management B.V. (hierna &quot;VanEck&quot;). Deze procedure regelt de richtlijnen
                en het proces voor klachtenbehandeling met betrekking tot klachten die worden
                ontvangen van beleggers of klanten of potentiële klanten van VanEck. Om de
                gerechtvaardigde belangen van beleggers en cliënten adequaat te beschermen, zal
                VanEck er via deze procedure voor zorgen dat:
              </p>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
                <li className="italic">
                  - Klachten snel worden behandeld en zo snel mogelijk worden opgelost;
                </li>
                <li className="italic">
                  - De beoordeling van de klachten eerlijk en respectvol is voor alle betrokken
                  partijen;
                </li>
                <li className="italic">
                  - Klagers specifieke en begrijpelijke uitleg krijgen voor een beslissing die
                  rechtstreeks verband houdt met de klachten; en
                </li>
                <li className="italic">
                  - Klachten in overweging worden genomen en gebruikt als basis voor voortdurende
                  verbetering van onze dienstverlening en jaarlijkse herziening van ons
                  klachtenbeleid en onze procedures.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                2. Rechten van beleggers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Beleggers kunnen hun rechten doen gelden door juridische stappen te ondernemen
                bij de gewone rechtbanken of, indien beschikbaar, door te kiezen voor alternatieve
                methoden voor geschillenbeslechting.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                3. Wat verstaan we onder een klacht?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Een klacht is een uiting van ontevredenheid die een cliënt of een potentiële
                cliënt (&apos;Klager&apos;) bij VanEck kenbaar maakt in verband met een door
                VanEck aangeboden product of de verlening van een beleggingsdienst of een
                nevendienst. De term &quot;klacht&quot; hoeft niet per se te worden gebruikt. Voor
                de klacht is geen specifiek formulier vereist en deze kan worden ingediend in de
                officiële taal (of een van de officiële talen) van de lidstaat van de belegger.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                4. Wat hebben wij van u nodig om uw klacht in behandeling te nemen?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Om ons in staat te stellen uw klacht efficiënt te onderzoeken, dienen klachten zo
                dicht mogelijk bij de betreffende gebeurtenis of het onderwerp te worden
                ingediend. Uw klacht moet de volgende informatie bevatten:
              </p>
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>- Uw naam en adres;</li>
                <li>- De datum waarop uw zaak of zaak zich heeft voorgedaan;</li>
                <li>- Het product of de dienst met betrekking tot de klacht; en</li>
                <li>- Wat is er gebeurd en hoe bent u beïnvloed.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                5. Waar kunt u een klacht indienen?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als u in contact staat met een klantrelatiebeheerder, moeten uw vragen of
                klachten telefonisch of per e-mail aan de klantrelatiebeheerder worden gericht.
                Daarnaast wordt u verzocht een schriftelijke klacht per e-mail te sturen naar{" "}
                <a
                  href="mailto:complaints-europe@vaneck.com"
                  className="font-semibold text-[#17468f] hover:underline"
                >
                  complaints-europe@vaneck.com
                </a>{" "}
                of als brief naar het volgende adres:
              </p>
              <div className="mt-4 text-base leading-relaxed text-[#4a5568]">
                <p>VanEck Asset Management B.V.</p>
                <p>Barbara Strozzilaan 310</p>
                <p>1083 HN Amsterdam</p>
                <p>Nederland</p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                6. Wat gebeurt er met uw klacht?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                De directie en complianceafdeling van VanEck zal de volgende stappen ondernemen:
              </p>
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>
                  - Bevestig de ontvangst van de klacht binnen 5 werkdagen aan de Klager;
                </li>
                <li>
                  - Interview de manager van de medewerker die verantwoordelijk was voor uw zaak
                  of zaken;
                </li>
                <li>
                  - Indien nodig meer informatie vragen aan de verantwoordelijke medewerker;
                </li>
                <li>- U indien nodig om meer informatie te vragen;</li>
                <li>
                  - Beoordeling van alle informatie en afweging van de argumenten van beide
                  partijen;
                </li>
                <li>- Nemen van een definitief standpunt;</li>
                <li>
                  - U binnen 15 werkdagen schriftelijk te informeren over ons standpunt en te
                  motiveren waarom wij tot dit standpunt zijn gekomen;
                </li>
                <li>
                  - U tijdig op de hoogte te brengen indien intussen blijkt dat wij niet binnen 15
                  werkdagen een standpunt kunnen innemen en de redenen voor de vertraging toe te
                  lichten en wanneer u ons standpunt kunt verwachten;
                </li>
                <li>
                  - Zorg voor een correcte registratie van uw klacht in het klachtenregister van
                  VanEck met klachtnummer, datum, onderwerp, inhoud en status.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                7. Wat kunt u doen als wij uw klacht ongegrond verklaren?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Gaat uw klacht over een financieel product of een financiële dienst? Dan kunt u
                uw klacht indienen bij het Klachteninstituut Financiële Dienstverlening (KIFID)
                via{" "}
                <a
                  href="https://www.kifid.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#17468f] hover:underline"
                >
                  www.KIFID.nl
                </a>{" "}
                of telefonisch (0900) 355 2248 (0900-FKLACHT). De deadline voor het indienen van
                een klacht bij het KIFID is te vinden op de website van het KIFID. Daarnaast heeft
                u ook altijd de mogelijkheid om uw geschil rechtstreeks voor de bevoegde
                burgerlijke rechter te brengen.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-bold text-[#0ab400]">
                8. Procedures bijwerken
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Geen enkel proces blijft hetzelfde en verandering is onvermijdelijk, daarom is het
                belangrijk dat deze procedure jaarlijks wordt herzien en indien nodig wordt
                bijgewerkt.
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-[#4a5568]">Versie 23 september 2024</p>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
