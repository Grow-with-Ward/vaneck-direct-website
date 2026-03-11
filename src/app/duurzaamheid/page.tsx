import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Duurzaamheid | VanEck Direct",
  description:
    "Ontdek hoe VanEck Direct omgaat met ESG en duurzaam beleggen. Screening en uitsluiting op basis van ESG factoren.",
  alternates: {
    canonical: "/duurzaamheid",
  },
};

export default function DuurzaamheidPage() {
  return (
    <>
      {/* Hero Section - Dark blue like original */}
      <section className="bg-[#0e3065] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            ESG bij VanEck Direct
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base font-bold leading-relaxed text-[#211f54]">
            Screening en uitsluiting op basis van Environment, Social en Governance (ESG)
            factoren bij VanEck Direct
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
            Bij VanEck Direct vinden we milieuvriendelijke, sociale en goed bestuurlijke (ESG)
            factoren belangrijk in de manier waarop we voor jou beleggen.
          </p>

          <div className="mt-10 space-y-10">
            {/* Wat zijn duurzaamheidheidsrisico's */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                Wat zijn duurzaamheidheidsrisico&apos;s?
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Duurzaamheidsrisico&apos;s zijn risico&apos;s die kunnen ontstaan door
                gebeurtenissen of omstandigheden op het gebied van het milieu, de samenleving of
                het bestuur van een bedrijf. Denk hierbij aan zaken zoals klimaatverandering,
                het opraken van natuurlijke hulpbronnen, vervuiling, arbeidskwesties,
                aansprakelijkheid voor producten en de manier waarop een bedrijf wordt bestuurd.
                Deze risico&apos;s kunnen van invloed zijn op de waarde van een belegging. Het
                kan er zelfs toe leiden dat andere financi&euml;le risico&apos;s zich voordoen,
                waardoor de waarde van een investering kan dalen.
              </p>
            </div>

            {/* Hoe we duurzaamheidsrisico's beperken */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                Hoe we duurzaamheidsrisico&apos;s beperken.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Het beperken van duurzaamheidsrisico&apos;s kan de financi&euml;le prestaties
                van een bedrijf be&iuml;nvloeden en invloed hebben op de waarde ervan. Er zijn
                ook Europese regels opgesteld die eisen dat we duurzaamheidsrisico&apos;s
                meenemen in ons beleggingsproces. Milieu-, sociale en governancekwesties (ESG)
                kunnen zowel een positieve als negatieve invloed hebben op onze investeringen.
                Daarom doen we ons best om rekening te houden met deze aspecten in ons
                beleggingsbeleid.
              </p>
            </div>

            {/* Hoe we beleggen */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                Hoe we beleggen
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Bij VanEck Direct beleggen we in, we volgen een beleid van beleggen in een
                portefeuille die bestaat uit verschillende Exchange Traded Funds (ETFs). Deze
                worden beheerd door VanEck en volgen specifieke indices. Bij het opstellen van
                deze indices wordt duurzaamheid overwogen waar mogelijk. Sommige van de indices
                overwegen ESG-factoren. Hieronder leggen we uit hoe we duurzaamheid
                risico&apos;s integreren in de ETFs en hoe we duurzaamheid risico&apos;s
                overwegen door proxy stemming op aandeelhoudersvergaderingen.
              </p>
            </div>

            {/* Uitsluiting en weging */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                Uitsluiting en weging van duurzaamheid
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Bepaalde uitsluitingen zijn van toepassing op al onze beleggingsstrategie&euml;n.
                Bijvoorbeeld, we beleggen niet in bedrijven die worden verboden door
                internationale wetten en verdragen, zoals sancties die worden opgelegd door de
                Europese Unie, de Verenigde Naties of de Verenigde Staten. Bovendien uitsluiten
                we voor bepaalde ETFs bedrijven die schenden standaarden op bijvoorbeeld
                milieuvervuiling, arbeids- en mensenrechtenovertredingen, corruptie en/of
                producten en diensten die als ongewenst worden beschouwd, zoals alcohol, wapens,
                tabak, gokken, genetische modificatie en volwassen entertainment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Onze ETF voor onroerend goed sluit bedrijven uit met een lage
                transparantiescore (E). Het gewicht van de overgebleven bedrijven in de index
                worden aangepast op basis van de transparantiescore.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Onze ETF voor bedrijfsobligaties worden ESG-scores gebruikt en het gewicht
                aangepast op basis van deze scores. Die scores omvatten verschillende
                milieuproblemen, sociale factoren en governance-aspecten. Obligatie-uitgevers
                met hogere duurzaamheidsscores krijgen een groter gewicht in de index, terwijl
                uitgevers met lagere scores een kleiner gewicht krijgen.
              </p>
            </div>

            {/* Stemmen */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                Stemmen (proxy stemmen)
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                VanEck heeft een proxy stemspecialist - Glass Lewis Europe, Ltd. - benoemd om
                stemrecht uit te oefenen voor al onze aandelenfondsen en past het
                ESG-geori&euml;nteerde stembeleid toe. Dit betekent dat
                duurzaamheidsfactoren worden overwogen bij het uitbrengen van stemmen op
                aandeelhoudersvergaderingen.
              </p>
            </div>

            {/* VanEck Direct proposition */}
            <div>
              <p className="text-base leading-relaxed text-[#4a5568]">
                <strong className="text-[#211f54]">VanEck Direct proposition.</strong>{" "}
                De VanEck Direct propositie bestaat uit vier verschillende ETFs: drie daarvan
                worden gecategoriseerd als Artikel 8 volgens de Sustainable Finance Disclosure
                Regulation (SFDR). Dit betekent dat ze ecologische en/of sociale kenmerken
                bevorderen.
              </p>
              <ol className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>1. VanEck World Equal Weight UCITS ETF;</li>
                <li>2. VanEck Global Real Estate UCITS ETF;</li>
                <li>3. VanEck iBoxx EUR Corporates UCITS ETF.</li>
              </ol>
            </div>

            {/* ESG screening per ETF */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                ESG screening per ETF.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Bij VanEck Direct zul je in 4 verschillende ETFs met verschillende toewijzingen
                beleggen, afhankelijk van jouw risicoprofiel. Voor elke van de ETFs
                gecategoriseerd als SFDR Art. 8, wordt een andere soort ESG-screening
                uitgevoerd.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Voor de VanEck World Equal Weight UCITS ETF worden beleggingen uit de
                portefeuille uitgesloten op basis van de volgende drie elementen:
              </p>
              <ul className="mt-2 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>
                  - Overtreding van de beginselen van het UN Global Compact en de
                  OECD-richtlijnen voor multinationale ondernemingen;
                </li>
                <li>- Betrokkenheid bij omstreden wapens; en</li>
                <li>
                  - Betrokkenheid bij bepaalde producten: alcohol (&gt;5% van de omzet),
                  dierenproeven (&gt;0%), militaire (&gt;0%), burgerlijke vuurwapens (&gt;0%),
                  gokken (&gt;5%), pornografie (&gt;3%), tabak (&gt;0% van de productie),
                  pesticiden (&gt;10%), intensieve landbouw (&gt;0%) en kernenergieproductie
                  (&gt;0%). Zie de website product disclosure voor meer informatie.
                </li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Voor de VanEck Global Real Estate UCITS ETF worden beleggingen alleen opgenomen
                als ze een score hoger hebben dan &quot;E&quot; in termen van het algemene
                ESG-ontsluitingsscore van GRESB. Zie de website product disclosure voor meer
                informatie.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Voor de VanEck iBoxx EUR Corporates UCITS ETF worden bedrijven met een hoge of
                lage ESG-score opnieuw gewogen in het fonds. Zie de website product disclosure
                voor meer informatie.
              </p>
            </div>

            {/* SFDR Pre-contractuele informatie */}
            <div>
              <p className="text-base font-bold leading-relaxed text-[#211f54]">
                SFDR Pre-contractuele informatie:
              </p>
              <ol className="mt-4 space-y-2 text-base leading-relaxed">
                <li>
                  <a
                    href="https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/675ff7301b7ab8982a76ed57_Precontractuele%20template%20VED%20Nederlands_Gematigd%20Defensief_zeer_NEW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    1. Precontractuele informatie zeer defensief profiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/675ff730ecc165939f529eaf_Precontractuele%20template%20VED%20Nederlands_Defensief_NEW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    2. Precontractuele informatie defensief profiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/675ff73083864b4340f5b46e_Precontractuele%20template%20VED%20Nederlands_Neutraal_NEW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    3. Precontractuele informatie neutraal profiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/675ff7305027e3a2e89efc10_Precontractuele%20template%20VED%20Nederlands_Offensief_NEW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    4. Precontractuele informatie offensief profiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/675ff730b9b650b554cde030_Precontractuele%20template%20VED%20Nederlands_Zeer%20Offensief_NEW.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    5. Precontractuele informatie zeer offensief profiel
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
