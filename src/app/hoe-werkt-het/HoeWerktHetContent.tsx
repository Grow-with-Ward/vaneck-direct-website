"use client";

import { useState } from "react";

const etfs = [
  {
    id: "aandelen",
    label: "Aandelen",
    name: "VanEck Aandelen ETF",
    officialName: "VanEck World Equal Weight Screened UCITS ETF",
    riskScore: 4,
    description:
      "Met dit mandje beleg je automatisch in de 250 grootste en meest liquide bedrijven ter wereld. Al deze bedrijven voldoen aan de verantwoordelijk bedrijfsgedrag principes van de Verenigde Naties.",
    extra:
      "Daarnaast worden sectoren uitgesloten die niet voldoen aan de normen van maatschappelijk verantwoord ondernemen: alcohol, dierproeven, defensie, wapens, gokken, pornografie, tabak en kernenergie. Voor meer info en het essenti\u00eble-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tget/",
  },
  {
    id: "vastgoed",
    label: "Vastgoed",
    name: "VanEck Vastgoed ETF",
    officialName: "VanEck Global Real Estate UCITS ETF",
    riskScore: 5,
    description:
      "Met dit mandje beleg je automatisch in een wereldwijd gespreide vastgoedportefeuille met de 100 grootste beursgenoteerde vastgoedaandelen.",
    extra:
      "Je belegt dan in onder andere deze vastgoedsectoren: Woningen, Kantoren, Industrieel vastgoed, Hotels, Gezondheidszorg en Winkelvastgoed. Voor meer info en het essenti\u00eble-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tret/",
  },
  {
    id: "bedrijfsobligaties",
    label: "Bedrijfsobligaties",
    name: "VanEck bedrijfsobligaties ETF",
    officialName: "VanEck iBoxx EUR Corporates UCITS ETF",
    riskScore: 3,
    description:
      "Met dit mandje beleg je automatisch in de 40 grootste en meest verhandelbare euro-bedrijfsobligaties met een goede kredietwaardigheid.",
    extra:
      "Bij het selecteren van deze obligaties worden ESG-criteria (milieu, maatschappij en bestuur) in overweging genomen. Op deze manier kun je investeren op een manier die rekening houdt met duurzaamheid. Voor meer info en het essenti\u00eble-informatiedocument, klik op onderstaande knop.",
    link: "https://www.vaneck.com/nl/nl/tcbt/",
  },
  {
    id: "staatsobligaties",
    label: "Staatsobligaties",
    name: "VanEck staatsobligaties ETF",
    officialName: "VanEck iBoxx EUR Sovereign Diversified 1-10 UCITS ETF",
    riskScore: 2,
    description:
      "Met dit mandje beleg je automatisch in 25 makkelijk verhandelbare staatsobligaties binnen de Eurozone.",
    extra:
      "Deze obligaties hebben allemaal een looptijd van 1 tot 10 jaar. Op deze manier kun je investeren in overheidsleningen voor de middellange termijn en mogelijk een stabiel rendement behalen. Voor meer info en het essenti\u00eble-informatiedocument, klik op onderstaande knop.",
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
      "Als je de app downloadt dan begin je met een uitgebreide vragenlijst waarin je aangeeft hoe jouw financi\u00eble situatie eruit ziet en hoeveel risico je prettig vindt om te nemen.",
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

function RiskScoreBadge({ score }: { score: number }) {
  return (
    <div className="inline-flex flex-col items-center">
      <div className="rounded-full border-2 border-gray-300 px-4 py-3 text-center">
        <p className="text-xs font-bold text-[#211f54] leading-tight">
          Loop geen
          <br />
          onnodig risico.
        </p>
        <div className="mt-2 flex gap-0.5">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <span
              key={n}
              className={`flex h-5 w-5 items-center justify-center text-[10px] font-bold ${
                n === score
                  ? "bg-[#0e3065] text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {n}
            </span>
          ))}
        </div>
        <p className="mt-1 text-[9px] text-gray-500">
          Lees het essenti&euml;le-
          <br />
          informatiedocument.
        </p>
      </div>
    </div>
  );
}

export default function HoeWerktHetContent() {
  const [activeETF, setActiveETF] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-[#211f54] md:text-5xl lg:text-6xl">
            Bij ons beleg je in ETFs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4a5568] md:text-xl">
            dit zijn goed gespreide mandjes van aandelen en obligaties.
          </p>
        </div>
      </section>

      {/* Our 4 ETFs Section */}
      <section className="py-16 lg:py-24">
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
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeETF === index
                    ? "border-[#0e3065] bg-white text-[#0e3065]"
                    : "border-gray-200 bg-white text-[#4a5568] hover:border-gray-300"
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
                  De offici&euml;le naam van deze ETF is{" "}
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
                {/* ETF Illustration placeholder - using an inline SVG chart icon */}
                <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e8ecf4] to-[#f7f9ff]">
                  <svg
                    className="h-24 w-24 text-[#0e3065] opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <RiskScoreBadge score={etfs[activeETF].riskScore} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Profile Weighting Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
          </div>

          {/* Profile Cards - Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {riskProfiles.map((profile) => (
              <div
                key={profile.name}
                className="min-w-[240px] flex-shrink-0 rounded-xl border border-gray-200 bg-white p-6 lg:min-w-0"
              >
                {/* Thunder woman icon placeholder */}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                  <svg
                    className="h-14 w-14 text-[#0e3065] opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-center text-lg font-bold text-[#211f54]">
                  {profile.name}
                </h3>
                <div className="mt-4 space-y-3">
                  {profile.allocations.map((allocation) => (
                    <div key={allocation.name} className="text-center">
                      <p className="text-sm font-medium text-[#211f54]">
                        {allocation.name}
                      </p>
                      <p className="text-sm text-[#4a5568]">
                        {allocation.percentage}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              {/* Roadmap illustration - inline SVG */}
              <div className="mt-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 300 250"
                  className="h-auto w-full max-w-[300px] text-[#0e3065]"
                  fill="none"
                >
                  {/* Winding path */}
                  <path
                    d="M30 220 C30 220 80 220 100 200 C120 180 60 160 80 140 C100 120 160 120 180 100 C200 80 140 60 160 40 C180 20 240 20 270 30"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    fill="none"
                    opacity="0.3"
                  />
                  {/* Map markers */}
                  <circle cx="30" cy="220" r="6" fill="#e67e22" />
                  <circle cx="100" cy="200" r="5" fill="#0e3065" opacity="0.5" />
                  <circle cx="80" cy="140" r="5" fill="#0e3065" opacity="0.5" />
                  <circle cx="180" cy="100" r="5" fill="#e67e22" />
                  <circle cx="160" cy="40" r="5" fill="#0e3065" opacity="0.5" />
                  <circle cx="270" cy="30" r="8" fill="#0ab400" />
                  {/* Flag at the end */}
                  <rect x="270" y="10" width="12" height="8" fill="#0ab400" rx="1" />
                  <line x1="270" y1="10" x2="270" y2="30" stroke="#0ab400" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Right: Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl bg-[#f7f9ff] p-6"
                >
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
