import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Kosten van beleggen | VanEck Direct app",
  description:
    "Bekijk de transparante kosten van VanEck Direct: beheerkosten 0,5%, fondskosten 0,18%-0,22%, en slechts \u20ac1 bij opname.",
};

const costCards = [
  {
    value: "0,5%",
    label: "Beheerkosten",
    description:
      "Met beheerkosten van slechts 0,5% houdt VanEck Direct beleggen betaalbaar.",
  },
  {
    value: "0,18% - 0,22%",
    label: "Fondskosten",
    description:
      "Afhankelijk van je risicoprofiel, liggen de fondskosten tussen 0,18% en 0,22%. Dit is inclusief de spread (koop- en verkoop) kosten.",
  },
  {
    value: "\u20ac1",
    label: "Bij opname",
    description:
      "Als je geld opneemt voordat je jouw doel hebt bereikt dan vragen we daar een symbolisch bedrag van \u20ac1 voor.",
  },
];

const profileCosts = [
  { name: "Zeer defensief", cost: "0,68%" },
  { name: "Defensief", cost: "0,69%" },
  { name: "Neutraal", cost: "0,70%" },
  { name: "Offensief", cost: "0,71%" },
  { name: "Zeer offensief", cost: "0,72%" },
];

export default function KostenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold italic text-[#211f54] md:text-4xl lg:text-5xl">
            Elke euro die jij bespaart aan kosten
          </h1>
          <p className="mt-4 text-lg text-[#4a5568] md:text-xl">
            komt ten goede aan jouw rendement.
          </p>
        </div>
      </section>

      {/* Cost Breakdown Section */}
      <section className="bg-[#f2f3f7] py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#211f54] md:text-4xl">
            De kosten
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {costCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-[#211f54] md:text-4xl">
                  {card.value}
                </p>
                <p className="mt-2 text-lg font-semibold text-[#211f54]">
                  {card.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm italic leading-relaxed text-[#4a5568]">
            VanEck Direct biedt &eacute;&eacute;n van de voordeligere opties aan
            in vermogensbeheer, met totale kosten tussen de 0,68% en 0,72%. Er
            zijn geen kosten voor het openen of opzeggen van je account, en je
            kunt zonder extra kosten (maandelijks) bijstorten. Bovendien rekenen
            we geen abonnementskosten, zodat jij zoveel mogelijk vermogen op kunt
            bouwen voor later.
          </p>
        </div>
      </section>

      {/* All-in Costs Per Profile */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#211f54] md:text-4xl">
              All-in kosten per profiel
            </h2>
            <p className="mt-4 text-base text-[#4a5568]">
              Beleg met onze app direct in de VanEck ETFs, daarmee bespaar je
              kosten. Zo simpel is het.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            {/* Cost Table */}
            <div className="overflow-hidden rounded-2xl bg-[#f7f9ff] shadow-sm">
              <div className="divide-y divide-gray-200">
                {profileCosts.map((profile) => (
                  <div
                    key={profile.name}
                    className="flex items-center justify-between px-8 py-4"
                  >
                    <span className="font-semibold text-[#211f54]">
                      {profile.name}
                    </span>
                    <span className="text-[#4a5568]">{profile.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart illustration placeholder */}
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 300 250"
                className="h-auto w-full max-w-[300px]"
                fill="none"
              >
                <rect x="80" y="160" width="30" height="70" rx="4" fill="#0e3065" opacity="0.7" />
                <rect x="120" y="120" width="30" height="110" rx="4" fill="#e67e22" opacity="0.8" />
                <rect x="160" y="80" width="30" height="150" rx="4" fill="#0e3065" opacity="0.5" />
                <rect x="200" y="100" width="30" height="130" rx="4" fill="#0e3065" opacity="0.9" />
                <line x1="60" y1="230" x2="250" y2="230" stroke="#211f54" strokeWidth="2" opacity="0.3" />
                <circle cx="95" cy="150" r="4" fill="#e67e22" />
                <circle cx="135" cy="110" r="4" fill="#0e3065" />
                <circle cx="175" cy="70" r="4" fill="#e67e22" />
                <circle cx="215" cy="90" r="4" fill="#0ab400" />
                <polyline points="95,150 135,110 175,70 215,90" stroke="#e67e22" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
