import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

export const metadata: Metadata = {
  title: "Rendement & Risico | VanEck Direct App",
  description:
    "Bekijk de gesimuleerde rendementen van VanEck Direct per risicoprofiel van 2020-2024.",
};

const performanceData = [
  {
    year: 2024,
    profiles: [
      { name: "Zeer offensief", value: "14,22%" },
      { name: "Offensief", value: "11,52%" },
      { name: "Neutraal", value: "8,68%" },
      { name: "Defensief", value: "6,18%" },
      { name: "Zeer defensief", value: "3,71%" },
    ],
  },
  {
    year: 2023,
    profiles: [
      { name: "Zeer offensief", value: "14,03%" },
      { name: "Offensief", value: "12,63%" },
      { name: "Neutraal", value: "11,03%" },
      { name: "Defensief", value: "9,72%" },
      { name: "Zeer defensief", value: "8,37%" },
    ],
  },
  {
    year: 2022,
    profiles: [
      { name: "Zeer offensief", value: "-14,19%", negative: true },
      { name: "Offensief", value: "-14,61%", negative: true },
      { name: "Neutraal", value: "-15,32%", negative: true },
      { name: "Defensief", value: "-15,66%", negative: true },
      { name: "Zeer defensief", value: "-16,06%", negative: true },
    ],
  },
  {
    year: 2021,
    profiles: [
      { name: "Zeer offensief", value: "25,26%" },
      { name: "Offensief", value: "18,55%" },
      { name: "Neutraal", value: "12,40%" },
      { name: "Defensief", value: "6,06%" },
      { name: "Zeer defensief", value: "0,04%" },
    ],
  },
  {
    year: 2020,
    profiles: [
      { name: "Zeer offensief", value: "2,73%" },
      { name: "Offensief", value: "3,08%" },
      { name: "Neutraal", value: "2,64%" },
      { name: "Defensief", value: "2,96%" },
      { name: "Zeer defensief", value: "3,01%" },
    ],
  },
];

export default function RendementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold text-[#211f54] md:text-4xl lg:text-5xl">
            Resultaten van toen
          </h1>
          <p className="mt-4 text-lg text-[#4a5568] md:text-xl">
            zonder beloftes voor straks
          </p>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-base leading-relaxed text-[#4a5568] md:text-lg">
            Hierbij onze netto rendementen*, dat is na aftrek van kosten.{" "}
            <em>De rendementen zijn gesimuleerd</em> &ndash; want we hebben onze
            app eind 2024 gelanceerd. Hoewel we nog jong zijn, hebben we een
            rijke ETF geschiedenis om op terug te kijken.
          </p>
        </div>
      </section>

      {/* Growth chart illustration */}
      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-6">
          <Image
            src={`${CDN}/677be6099f725bd3bc765253_Growth%201%20(2).svg`}
            alt="Rendement groei grafiek"
            width={800}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Performance Data Grid */}
      <section className="bg-[#f2f3f7] py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {performanceData.map((yearData) => (
              <div
                key={yearData.year}
                className="rounded-2xl bg-[#f7f9ff] shadow-sm"
              >
                <div className="border-b border-gray-200 px-8 py-5">
                  <h3 className="text-xl font-bold text-[#211f54]">
                    {yearData.year}
                  </h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {yearData.profiles.map((profile) => (
                    <div
                      key={profile.name}
                      className="flex items-center justify-between px-8 py-3"
                    >
                      <span className="text-sm font-medium text-[#211f54]">
                        {profile.name}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          "negative" in profile && profile.negative
                            ? "text-red-600"
                            : "text-[#4a5568]"
                        }`}
                      >
                        {profile.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-[#f2f3f7] pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm italic leading-relaxed text-[#4a5568]">
            *Dit betreft gesimuleerde in het verleden behaalde resultaten die
            geen betrouwbare indicator vormen voor de toekomst.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[#4a5568]">
            We begrijpen dat je naar deze cijfers kijkt om een idee te krijgen
            van wat je kunt verwachten. Maar het is belangrijk om te weten dat
            eerdere groei of resultaten van een belegging niet voorspellen hoe
            deze in de toekomst zal presteren. Tussentijdse stortingen en
            onttrekkingen worden niet meegenomen in deze gesimuleerde
            rendementen, om die reden kunnen de door jouw behaalde rendementen
            afwijken van bovenstaande getallen.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[#4a5568]">
            De rendementen zijn berekend op basis van de NAVs van de ETFs die we
            daadwerkelijk gebruiken. De Net Asset Value (NAV) geeft de waarde van
            alle onderliggende beleggingen per ETF weer en wordt dagelijks
            berekend. In de weergave van deze rendementen hebben we alle kosten
            meegenomen:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-relaxed text-[#4a5568]">
            <li>
              De totale kosten per profiel zijn inclusief 0,5% beheerkosten,
            </li>
            <li>
              De kosten van de fondsen zelf (die al in de ETF-prijzen verwerkt
              zijn) en
            </li>
            <li>
              De handelskosten die ontstaan bij het kopen en verkopen van de
              ETFs.
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
