import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Best Execution Beleid | VanEck Direct",
  description:
    "Lees het orderuitvoeringsbeleid (Best Execution) van VanEck Direct.",
  alternates: {
    canonical: "/best-execution",
  },
};

export default function BestExecutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Best execution
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-lg font-bold text-[#211f54]">
            Orderuitvoeringsbeleid VanEck Direct
          </h2>

          <div className="mt-10 space-y-10">
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Waarover gaat dit?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Hier staat het orderuitvoeringsbeleid (Best execution policy). Daarin leggen wij
                uit hoe wij voor jou als VanEck Direct klant het best mogelijke resultaat
                nastreven bij het kopen en verkopen van effecten. En wat daarbij de spelregels
                zijn.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Wanneer is dit beleid van toepassing?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                VanEck Direct is een handelsnaam van VanEck Asset Management B.V. (VanEck).
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als je geld inlegt of opneemt via je VanEck Direct Omgeving, geef je ons daarmee
                een opdracht tot het uitvoeren van aan- en verkooporders van effecten volgens jouw
                risicoprofiel die wij beheren op basis van de vermogensbeheerovereenkomst die je
                met ons hebt afgesloten.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Bij het verwerken van aan- en verkooporders van effecten houden wij ons aan het
                hier beschreven orderuitvoeringsbeleid van VanEck Direct. Als je bij VanEck
                Direct een account hebt geopend stem je in met dit orderuitvoeringsbeleid.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Wat zijn de criteria voor onze orderuitvoering?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wij nemen alle redelijke maatregelen om het{" "}
                <strong>best mogelijke resultaat</strong> te behalen bij het verwerken van aan-en
                verkooporders. Dat geeft echter geen zekerheid dat ook het allerbeste resultaat
                wordt behaald. Om het best mogelijke resultaat te bepalen letten wij op de
                volgende criteria:
              </p>
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>- de prijs;</li>
                <li>- de kosten;</li>
                <li>- de snelheid;</li>
                <li>- de kans dat jouw order wordt uitgevoerd en afgehandeld;</li>
                <li>- de grootte;</li>
                <li>- de aard van de order;</li>
                <li>
                  - elke andere overweging die relevant is voor de uitvoering van de order.
                </li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als voor meerdere beleggers dezelfde order moet worden uitgevoerd, dan voegen wij
                in beginsel deze orders samen tot een order (per ETF). Door orders samen te voegen
                zijn wij in staat om de kosten voor de klant te optimaliseren.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Hoe we beleggen
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Bij VanEck Direct beleg je in Exchange Traded Funds (ETFs). Daarbij worden er
                effecten gekocht en verkocht. In dat proces streven wij naar het best haalbare
                resultaat voor jou als klant.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Waar voeren we jouw orders uit?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Bij de Custodybank (ABN AMRO Clearing Bank N.V.) voeren wij de aan-en
                verkooporders uit. Hun orderuitvoeringsbeleid bepaalt dan hoe jouw order wordt
                uitgevoerd. Indien nodig zullen wij bepaalde order restricties inbouwen zodat we
                het best mogelijke resultaat beter kunnen waarborgen.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wij controleren ieder jaar of het beleid van de Custodybank (of van eventuele
                andere partijen waarvan wij gebruik maken) ook inderdaad bijdraagt om voor jou
                het best mogelijke resultaat te behalen. Wij kijken bijvoorbeeld naar de inhoud
                van dit beleid en de kwaliteit van dienstverlening.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Bijzondere omstandigheden
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wij voeren dan de aan-en verkooporders voor jou altijd binnen vijf (5) werkdagen
                uit. Tenzij er sprake is van overmacht. Is er sprake van een bijzondere
                omstandigheid? Bijvoorbeeld het uitvallen van een ordersysteem of grote drukte op
                de beurs? Dan zijn wij niet verplicht orders uit te voeren binnen de daarvoor
                gebruikelijke tijd.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-xl font-bold text-[#0e3065]">
                Aanpassingen?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wij evalueren ieder jaar ons orderuitvoeringsbeleid en kunnen het
                orderuitvoeringsbeleid aanpassen als wij dat nodig vinden. Veranderen er
                belangrijke dingen? Dan laten wij je dat weten op direct.vaneck.com/best-execution
                door de meest recente versie van ons orderuitvoeringsbeleid daar beschikbaar te
                stellen.
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
