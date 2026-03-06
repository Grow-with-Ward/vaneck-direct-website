"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Over VanEck Direct",
    items: [
      {
        question: "Wat is VanEck Direct?",
        answer:
          "VanEck Direct is een beleggingsapp waarmee je automatisch belegt in een gespreide portefeuille van VanEck ETFs. Wij beheren je beleggingen, zodat jij er geen omkijken naar hebt.",
      },
      {
        question: "Is VanEck Direct een betrouwbare partij?",
        answer:
          "Ja. VanEck Direct is onderdeel van VanEck, een internationaal vermogensbeheerder die sinds 1955 actief is. We beschikken over een vergunning van de AFM en staan onder toezicht van de AFM en DNB.",
      },
      {
        question: "Wat is passief beleggen?",
        answer:
          "Bij passief beleggen volg je een index in plaats van actief te handelen. Dit houdt de kosten laag en zorgt voor een breed gespreide portefeuille.",
      },
    ],
  },
  {
    title: "Beleggen & Dividend",
    items: [
      {
        question: "Hoe wordt er belegd bij VanEck Direct?",
        answer:
          "Jouw inleg wordt automatisch verdeeld over 4 VanEck ETFs: aandelen, vastgoed, bedrijfsobligaties en staatsobligaties. De verdeling hangt af van je gekozen risicoprofiel.",
      },
      {
        question: "Wat is beleggen?",
        answer:
          "Beleggen is het investeren van geld met als doel om op de lange termijn vermogen op te bouwen. Bij VanEck Direct beleg je in breed gespreide ETFs.",
      },
      {
        question: "Wat gebeurt er met dividend?",
        answer:
          "Dividenden worden automatisch herbelegd in je portefeuille. Zo profiteer je van het rente-op-rente effect.",
      },
    ],
  },
  {
    title: "Account aanmaken",
    items: [
      {
        question: "Hoe begin ik met beleggen bij VanEck Direct?",
        answer:
          "Download de app, doorloop de vragenlijst, kies je risicoprofiel en doe je eerste storting van minimaal \u20ac100. Daarna kun je maandelijks vanaf \u20ac50 bijleggen.",
      },
      {
        question: "Kan ik mijn bestaande beleggingen overzetten?",
        answer:
          "Nee, het is helaas niet mogelijk om een bestaande portefeuille over te zetten naar VanEck Direct.",
      },
    ],
  },
  {
    title: "Storten & Opnemen",
    items: [
      {
        question: "Zijn er kosten verbonden aan storten?",
        answer:
          "Nee, storten is gratis. Je kunt maandelijks bijstorten zonder extra kosten.",
      },
      {
        question: "Hoe lang duurt een opname?",
        answer:
          "Een opname duurt maximaal 5 werkdagen. Er wordt een symbolisch bedrag van \u20ac1 in rekening gebracht.",
      },
      {
        question: "Kan ik mijn periodieke inleg pauzeren?",
        answer:
          "Je kunt je periodieke inleg op elk moment aanpassen of stopzetten via de app.",
      },
    ],
  },
  {
    title: "Risico\u2019s & Veiligheid",
    items: [
      {
        question: "Welke risicoprofielen zijn er?",
        answer:
          "VanEck Direct biedt vijf risicoprofielen: zeer defensief, defensief, neutraal, offensief en zeer offensief. Elk profiel heeft een andere verdeling over aandelen, vastgoed en obligaties.",
      },
      {
        question: "Wat gebeurt er als VanEck failliet gaat?",
        answer:
          "Je beleggingen worden gescheiden bewaard bij een onafhankelijke bewaarbank. Bij een eventueel faillissement van VanEck blijven je beleggingen beschermd.",
      },
    ],
  },
  {
    title: "Overig",
    items: [
      {
        question: "Hoe zit het met belasting?",
        answer:
          "Je beleggingen vallen in Box 3. VanEck Direct rapporteert automatisch aan de Belastingdienst.",
      },
      {
        question: "Is er een webversie beschikbaar?",
        answer:
          "Nee, VanEck Direct is alleen beschikbaar als app voor iOS en Android. Er is momenteel geen webplatform.",
      },
      {
        question: "Is VanEck Direct beschikbaar buiten Nederland?",
        answer:
          "Nee, VanEck Direct is momenteel alleen beschikbaar voor inwoners van Nederland.",
      },
    ],
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`shrink-0 transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#211f54"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(key: string) {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        {faqData.map((category, categoryIndex) => (
          <div key={category.title} className={categoryIndex > 0 ? "mt-12" : ""}>
            <h2 className="text-xl font-bold text-[#211f54]">
              {category.title}
            </h2>
            <div className="mt-4">
              {category.items.map((item, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems[key] || false;

                return (
                  <div key={key} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleItem(key)}
                      className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#0e3065]"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 text-base font-medium text-[#211f54]">
                        {item.question}
                      </span>
                      <ChevronIcon isOpen={isOpen} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-[#4a5568]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
