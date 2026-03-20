import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

export const metadata: Metadata = {
  title: "Rendement & Risico | VanEck Direct App",
  description:
    "Bekijk de gesimuleerde rendementen van VanEck Direct per risicoprofiel van 2020-2024.",
  alternates: {
    canonical: "/rendement",
  },
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
          <p className="mt-4 text-lg text-[#17468f] md:text-xl">
            zonder beloftes voor straks
          </p>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-8 lg:py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-base leading-relaxed text-[#4a5568] md:text-lg">
            Hierbij onze netto rendementen*, dat is na aftrek van kosten.{" "}
            <em>De rendementen zijn gesimuleerd</em> &ndash; want we hebben onze
            app eind 2024 gelanceerd. Hoewel we nog jong zijn, hebben we een
            rijke ETF geschiedenis om op terug te kijken.
          </p>
        </div>
      </section>

      {/* Performance Data Grid — white background, year heading above each card */}
      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
            {/* First row: 2024, 2023, 2022 */}
            {performanceData.slice(0, 3).map((yearData) => (
              <div key={yearData.year}>
                <h3 className="mb-4 text-center text-3xl font-bold text-[#211f54] md:text-4xl">
                  {yearData.year}
                </h3>
                <div className="overflow-hidden rounded-2xl bg-[#e8f0fe]">
                  <div className="divide-y divide-blue-100">
                    {yearData.profiles.map((profile) => (
                      <div
                        key={profile.name}
                        className="flex items-center justify-between px-6 py-3"
                      >
                        <span className="text-sm font-semibold text-[#211f54]">
                          {profile.name}
                        </span>
                        <span
                          className={`text-sm font-medium ${
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
              </div>
            ))}

            {/* Second row: 2021, 2020, Growth illustration */}
            {performanceData.slice(3).map((yearData) => (
              <div key={yearData.year}>
                <h3 className="mb-4 text-center text-3xl font-bold text-[#211f54] md:text-4xl">
                  {yearData.year}
                </h3>
                <div className="overflow-hidden rounded-2xl bg-[#e8f0fe]">
                  <div className="divide-y divide-blue-100">
                    {yearData.profiles.map((profile) => (
                      <div
                        key={profile.name}
                        className="flex items-center justify-between px-6 py-3"
                      >
                        <span className="text-sm font-semibold text-[#211f54]">
                          {profile.name}
                        </span>
                        <span className="text-sm font-medium text-[#4a5568]">
                          {profile.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Growth illustration in 3rd slot of row 2 */}
            <div className="flex items-center justify-center">
              <Image
                src={`${CDN}/677be6099f725bd3bc765253_Growth%201%20(2).svg`}
                alt="Rendement groei illustratie"
                width={357}
                height={300}
                className="h-auto w-full max-w-[357px]"
              />
            </div>
          </div>

          {/* Disclaimer — centered, all italic */}
          <div className="mt-12 text-center">
            <p className="text-sm italic leading-relaxed text-[#4a5568]">
              *Dit betreft gesimuleerde in het verleden behaalde resultaten die
              geen betrouwbare indicator vormen voor de toekomst.
            </p>
            <p className="mt-4 text-sm italic leading-relaxed text-[#4a5568]">
              We begrijpen dat je naar deze cijfers kijkt om een idee te krijgen
              van wat je kunt verwachten. Maar het is belangrijk om te weten dat
              eerdere groei of resultaten van een belegging niet voorspellen hoe
              deze in de toekomst zal presteren. Tussentijdse stortingen en
              onttrekkingen worden niet meegenomen in deze gesimuleerde
              rendementen, om die reden kunnen de door jouw behaalde rendementen
              afwijken van bovenstaande getallen.
            </p>
            <p className="mt-4 text-sm italic leading-relaxed text-[#4a5568]">
              De rendementen zijn berekend op basis van de NAVs van de ETFs die
              we daadwerkelijk gebruiken. De Net Asset Value (NAV) geeft de
              waarde van alle onderliggende beleggingen per ETF weer en wordt
              dagelijks berekend. In de weergave van deze rendementen hebben we
              alle kosten meegenomen:
            </p>
            <p className="mt-2 text-sm italic leading-relaxed text-[#4a5568]">
              - De totale kosten per profiel zijn inclusief 0,5% beheerkosten,
            </p>
            <p className="mt-1 text-sm italic leading-relaxed text-[#4a5568]">
              - De kosten van de fondsen zelf (die al in de ETF-prijzen verwerkt
              zijn) en
            </p>
            <p className="mt-1 text-sm italic leading-relaxed text-[#4a5568]">
              - De handelskosten die ontstaan bij het kopen en verkopen van de
              ETFs.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
