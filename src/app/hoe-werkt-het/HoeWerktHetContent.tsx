"use client";

import { useState } from "react";
import Image from "next/image";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

const etfs = [
  {
    id: "aandelen",
    label: "Aandelen",
    name: "VanEck Aandelen ETF",
    officialName: "VanEck World Equal Weight Screened UCITS ETF",
    riskScore: 4,
    image: `${CDN}/6718e709bbb61a6cade9f1b0_aandelen-1.png`,
    riskScoreImage: `${CDN}/6729e51de17a28a2c56e7e3e_afm_dutch_risicoscore_4.png`,
    description:
      "Met dit mandje beleg je automatisch in de 250 grootste en meest liquide bedrijven ter wereld. Al deze bedrijven voldoen aan de verantwoordelijk bedrijfsgedrag principes van de Verenigde Naties.",
    extra:
      "Daarnaast worden sectoren uitgesloten die niet voldoen aan de normen van maatschappelijk verantwoord ondernemen: alcohol, dierproeven, defensie, wapens, gokken, pornografie, tabak en kernenergie. Voor meer info en het essentiële-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tget/",
  },
  {
    id: "vastgoed",
    label: "Vastgoed",
    name: "VanEck Vastgoed ETF",
    officialName: "VanEck Global Real Estate UCITS ETF",
    riskScore: 5,
    image: `${CDN}/6718e4bf81166902d2d3c6cd_vastgoed-1.png`,
    riskScoreImage: `${CDN}/6729e51d8d4f1a395f461bfb_afm_dutch_risicoscore_5.png`,
    description:
      "Met dit mandje beleg je automatisch in een wereldwijd gespreide vastgoedportefeuille met de 100 grootste beursgenoteerde vastgoedaandelen.",
    extra:
      "Je belegt dan in onder andere deze vastgoedsectoren: Woningen, Kantoren, Industrieel vastgoed, Hotels, Gezondheidszorg en Winkelvastgoed. Voor meer info en het essentiële-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tret/",
  },
  {
    id: "bedrijfsobligaties",
    label: "Bedrijfsobligaties",
    name: "VanEck bedrijfsobligaties ETF",
    officialName: "VanEck iBoxx EUR Corporates UCITS ETF",
    riskScore: 3,
    image: `${CDN}/6718e709003a9173ba2036eb_bedrijfsobligaties.png`,
    riskScoreImage: `${CDN}/6729e51d0ca7cbe916802458_afm_dutch_risicoscore_3.png`,
    description:
      "Met dit mandje beleg je automatisch in de 40 grootste en meest verhandelbare euro-bedrijfsobligaties met een goede kredietwaardigheid.",
    extra:
      "Bij het selecteren van deze obligaties worden ESG-criteria (milieu, maatschappij en bestuur) in overweging genomen. Op deze manier kun je investeren op een manier die rekening houdt met duurzaamheid. Voor meer info en het essentiële-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tcbt/",
  },
  {
    id: "staatsobligaties",
    label: "Staatsobligaties",
    name: "VanEck staatsobligaties ETF",
    officialName: "VanEck iBoxx EUR Sovereign Diversified 1-10 UCITS ETF",
    riskScore: 2,
    image: `${CDN}/6718e70b5b19546b979541ca_Staatsobligaties-1.png`,
    riskScoreImage: `${CDN}/6729e51d399417aa09070c3c_afm_dutch_risicoscore_2.png`,
    description:
      "Met dit mandje beleg je automatisch in 25 makkelijk verhandelbare staatsobligaties binnen de Eurozone.",
    extra:
      "Deze obligaties hebben allemaal een looptijd van 1 tot 10 jaar. Op deze manier kun je investeren in overheidsleningen voor de middellange termijn en mogelijk een stabiel rendement behalen. Voor meer info en het essentiële-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tswe/",
  },
];

const riskProfiles = [
  {
    name: "Zeer offensief",
    allocations: [
      { name: "VanEck Aandelen ETF", percentage: "77,5%" },
      { name: "VanEck Vastgoed ETF", percentage: "12,5%" },
      { name: "VanEck Bedrijfsobligaties ETF", percentage: "5%" },
      { name: "VanEck Staatsobligaties", percentage: "5%" },
    ],
  },
  {
    name: "Offensief",
    allocations: [
      { name: "VanEck Aandelen ETF", percentage: "60%" },
      { name: "VanEck Vastgoed ETF", percentage: "10%" },
      { name: "VanEck Bedrijfsobligaties ETF", percentage: "15%" },
      { name: "VanEck Staatsobligaties", percentage: "15%" },
    ],
  },
  {
    name: "Neutraal",
    allocations: [
      { name: "VanEck Aandelen ETF", percentage: "40%" },
      { name: "VanEck Vastgoed ETF", percentage: "10%" },
      { name: "VanEck Bedrijfsobligaties ETF", percentage: "25%" },
      { name: "VanEck Staatsobligaties", percentage: "25%" },
    ],
  },
  {
    name: "Defensief",
    allocations: [
      { name: "VanEck Aandelen ETF", percentage: "25%" },
      { name: "VanEck Vastgoed ETF", percentage: "5%" },
      { name: "VanEck Bedrijfsobligaties ETF", percentage: "35%" },
      { name: "VanEck Staatsobligaties", percentage: "35%" },
    ],
  },
  {
    name: "Zeer defensief",
    allocations: [
      { name: "VanEck Aandelen ETF", percentage: "10%" },
      { name: "VanEck Vastgoed ETF", percentage: "0%" },
      { name: "VanEck Bedrijfsobligaties ETF", percentage: "45%" },
      { name: "VanEck Staatsobligaties", percentage: "45%" },
    ],
  },
];

const steps = [
  {
    number: 1,
    title: "Installeer de app",
    description:
      "Als je de app downloadt dan begin je met een uitgebreide vragenlijst waarin je aangeeft hoe jouw financiële situatie eruit ziet en hoeveel risico je prettig vindt om te nemen.",
  },
  {
    number: 2,
    title: "Stel je plan op",
    description:
      "Je geeft aan hoeveel je bij de start en maandelijks wil inleggen, wij laten dan met rendementsgrafieken zien hoe je vermogen op lange termijn kan groeien.",
  },
  {
    number: 3,
    title: "Kies je risicoprofiel",
    description:
      "VanEck Direct biedt vijf zorgvuldig samengestelde ETF-portefeuilles. Deze zijn afgestemd op verschillende risiconiveaus, wij helpen je met kiezen wat het beste bij jou past.",
  },
  {
    number: 4,
    title: "Automatiseer je inleg",
    description:
      "Stel eenvoudig een periodieke inleg in, zodat je automatisch en zonder zorgen investeert. Je kunt je inleg aanpassen wanneer je wilt of alleen een eenmalige storting doen.",
  },
  {
    number: 5,
    title: "Wij beheren en beleggen voor jou",
    description:
      "Het team van VanEck Direct zorgt ervoor dat je geld belegd wordt in een breed gespreide portefeuille van ETFs, zonder dat jij continu actief hoeft te zijn. Zo kun je beleggen zonder keuzestress.",
  },
  {
    number: 6,
    title: "Bekijk en pas je beleggingen aan",
    description:
      "Via de app kun je altijd de voortgang van je beleggingen volgen en, als je situatie verandert, eenvoudig je inleg aanpassen of opnemen.",
  },
];

export default function HoeWerktHetContent() {
  const [activeETF, setActiveETF] = useState(0);
  const [activeProfile, setActiveProfile] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white pb-4 pt-16 lg:pb-6 lg:pt-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-[#211f54] md:text-5xl lg:text-6xl">
            Bij ons beleg je in ETFs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#17468f] md:text-xl">
            dit zijn goed gespreide mandjes van aandelen en obligaties.
          </p>
        </div>
      </section>

      {/* Our 4 ETFs Section */}
      <section className="pt-6 pb-16 lg:pt-8 lg:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#211f54] md:text-4xl">
              Onze 4 ETFs
            </h2>
            <p className="mt-4 text-base text-[#4a5568]">
              Op basis van je gekozen risicoprofiel bestaat jouw portefeuille uit
              een mix van 4 ETFs.
            </p>
          </div>

          {/* ETF Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {etfs.map((etf, index) => (
              <button
                key={etf.id}
                onClick={() => setActiveETF(index)}
                className={`rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeETF === index
                    ? "border-[#0ab400] bg-[#0ab400] text-white"
                    : "border-gray-300 bg-white text-[#4a5568] hover:border-[#0ab400] hover:text-[#0ab400]"
                }`}
              >
                {etf.label}
              </button>
            ))}
          </div>

          {/* Active ETF Card */}
          <div className="mt-8 overflow-hidden rounded-2xl bg-[#f7f9ff] shadow-sm">
            <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <h3 className="text-2xl font-bold text-[#211f54]">
                  {etfs[activeETF].name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
                  De officiële naam van deze ETF is{" "}
                  {etfs[activeETF].officialName}.{" "}
                  {etfs[activeETF].description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
                  {etfs[activeETF].extra}
                </p>
                <a
                  href={etfs[activeETF].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-[#0e3065] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a2550]"
                >
                  Meer over deze ETF
                </a>
              </div>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src={etfs[activeETF].image}
                  alt={etfs[activeETF].name}
                  width={280}
                  height={200}
                  className="h-auto w-full max-w-[280px] object-contain"
                />
                <Image
                  src={etfs[activeETF].riskScoreImage}
                  alt={`AFM risicoscore ${etfs[activeETF].riskScore}`}
                  width={200}
                  height={80}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Profile Weighting Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <h2 className="text-3xl font-bold text-[#211f54] md:text-4xl">
              Weging per risicoprofiel
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#4a5568]">
              VanEck Direct kent vijf risicoprofielen: van zeer offensief tot
              zeer defensief. Hieronder vind je de bouwstenen voor een goed
              gespreide beleggingsportefeuille.
            </p>
          </div>

          {/* All 5 profile cards in a horizontal scrollable row */}
          <div className="relative mt-8">
            {/* Left arrow */}
            <button
              onClick={() => setActiveProfile((p) => Math.max(0, p - 1))}
              disabled={activeProfile === 0}
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 shadow-md transition-colors hover:border-[#0e3065] disabled:opacity-30"
              aria-label="Vorig profiel"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-5 pb-2" style={{ minWidth: "max-content" }}>
                {riskProfiles.map((profile, index) => (
                  <div
                    key={profile.name}
                    className={`w-72 shrink-0 rounded-2xl border bg-white p-8 transition-all ${
                      activeProfile === index
                        ? "border-[#0ab400] shadow-md"
                        : "border-gray-200 shadow-sm"
                    }`}
                    onClick={() => setActiveProfile(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveProfile(index)}
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={`${CDN}/632da3701f293842f95637d0_thunderwoman.png`}
                        alt="Risicoprofiel illustratie"
                        width={100}
                        height={100}
                        className="h-auto w-20 object-contain"
                      />
                      <h3 className="mt-3 text-center text-base font-bold italic text-[#211f54]">
                        {profile.name}
                      </h3>
                      <div className="mt-4 w-full space-y-3">
                        {profile.allocations.map((allocation) => (
                          <div
                            key={allocation.name}
                            className="flex items-center justify-between border-b border-gray-100 pb-2"
                          >
                            <span className="text-sm font-medium text-[#211f54]">
                              {allocation.name}
                            </span>
                            <span className="text-sm font-semibold text-[#4a5568]">
                              {allocation.percentage}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() =>
                setActiveProfile((p) => Math.min(riskProfiles.length - 1, p + 1))
              }
              disabled={activeProfile === riskProfiles.length - 1}
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 shadow-md transition-colors hover:border-[#0e3065] disabled:opacity-30"
              aria-label="Volgend profiel"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 6-Step Process Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Title + Roadmap illustration */}
            <div>
              <h2 className="text-3xl font-bold text-[#211f54] md:text-4xl lg:text-5xl">
                En dan werkt het zo:
              </h2>
              <div className="mt-8">
                <Image
                  src={`${CDN}/6658357f326bb15c8b013840_Roadmapping%201.png`}
                  alt="Stappenplan VanEck Direct"
                  width={400}
                  height={350}
                  className="h-auto w-full max-w-[400px]"
                />
              </div>
            </div>

            {/* Right: Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-xl bg-[#e8f0fe] p-6">
                  <h3 className="text-lg font-bold text-[#0e3065]">
                    {step.number}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
