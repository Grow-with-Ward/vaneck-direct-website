import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Toegankelijkheidsverklaring | VanEck Direct",
  description:
    "Toegankelijkheidsverklaring van VanEck Direct over de toegankelijkheid van de mobiele app.",
  alternates: {
    canonical: "/verklaring",
  },
};

export default function VerklaringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Toegankelijkheidsverklaring
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-base leading-relaxed text-[#4a5568]">
            VanEck zet zich in om zijn digitale diensten toegankelijk en inclusief te maken voor
            alle (potentiële) beleggers.
          </p>

          <div className="mt-10 space-y-10">
            {/* Reikwijdte */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">Reikwijdte</h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Deze verklaring is van toepassing op de VanEck Direct mobiele app, beschikbaar
                op:
              </p>
              <ul className="mt-2 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>- iOS (Apple App Store)</li>
                <li>- Android (Google Play Store)</li>
              </ul>
            </div>

            {/* Verklaring onevenredige last */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Verklaring onevenredige last
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Op dit moment hebben wij vastgesteld dat het volledig voldoen van de VanEck
                Direct mobiele app aan de toegankelijkheidsvereisten van de Europese
                Toegankelijkheidswet (Richtlijn (EU) 2019/882) en gerelateerde standaarden zoals
                EN 301 549 een onevenredige last zou vormen voor onze organisatie.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Deze beoordeling is gebaseerd op:
              </p>
              <ul className="mt-2 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>
                  - De huidige reikwijdte en het gebruiksniveau van de mobiele app
                </li>
                <li>
                  - De financiële en technische middelen die nodig zijn voor volledige naleving
                </li>
                <li>
                  - De geplande tijdlijn voor bredere platform herontwikkeling die reeds in gang
                  is gezet
                </li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Zoals toegestaan onder Artikel 5 van Richtlijn (EU) 2016/2102, en totdat een
                volledige herontwerp is afgerond, kunnen wij geen volledige naleving van alle
                toegankelijkheidscriteria garanderen.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">Contact</h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als u problemen ondervindt bij het gebruik van een functie of functionaliteit van
                de VanEck Direct mobiele app, kunt u contact met ons opnemen:
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                E-mail:{" "}
                <a
                  href="mailto:direct@vaneck.com"
                  className="font-semibold text-[#17468f] hover:underline"
                >
                  direct@vaneck.com
                </a>
              </p>
              <p className="mt-1 text-base leading-relaxed text-[#4a5568]">
                Telefoon:{" "}
                <a
                  href="tel:+31208085543"
                  className="font-semibold text-[#17468f] hover:underline"
                >
                  +31 (0)20 808 5543
                </a>
              </p>
            </div>

            {/* Voortdurende verbetering */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Voortdurende verbetering
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Hoewel volledige naleving momenteel buiten de reikwijdte valt, blijft VanEck zich
                inzetten om de toegankelijkheid van zijn mobiele diensten voor VanEck Direct
                geleidelijk te verbeteren. Feedback van gebruikers is essentieel bij het bepalen
                van toekomstige updates en herontwerpprioriteiten.
              </p>
            </div>

            {/* Herziening */}
            <div>
              <h2 className="text-xl font-bold text-[#0e3065]">
                Herziening van de verklaring
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Deze toegankelijkheidsverklaring is voor het laatst herzien op:{" "}
                <strong>12 september 2025</strong>
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wij zijn voornemens deze te actualiseren naarmate onze digitale praktijken zich
                ontwikkelen.
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
