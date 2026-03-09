"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "VanEck Direct",
    articles: [
      { title: "Het verschil tussen VanEck & VanEck Direct", href: "/hoe-werkt-het" },
      { title: "Hoe werkt beleggen bij VanEck Direct?", href: "/hoe-werkt-het" },
      { title: "Hoe kijkt VanEck Direct naar duurzaamheid?", href: "/duurzaamheid" },
    ],
  },
  {
    name: "Beleggen & Dividend",
    articles: [
      { title: "Wat zijn de historische rendementen van VanEck?", href: "/rendement" },
      { title: "Hoe worden risicoprofielen bepaald?", href: "/hoe-werkt-het" },
      { title: "Wat is dividendlekkage?", href: "/faq" },
      { title: "Hoe werkt het Beleggingsplan?", href: "/hoe-werkt-het" },
      { title: "Hoe wordt mijn rendement berekend?", href: "/rendement" },
    ],
  },
  {
    name: "Account aanmaken",
    articles: [
      { title: "Welke kosten kan ik verwachten?", href: "/kosten" },
      { title: "Hoe maak ik een account aan?", href: "/faq" },
      { title: "Welke documenten heb ik nodig?", href: "/faq" },
    ],
  },
  {
    name: "Storten & Opnemen",
    articles: [
      { title: "Maandelijkse inleg", href: "/faq" },
      { title: "Verbonden kosten aan storten en opnemen", href: "/kosten" },
    ],
  },
  {
    name: "Overig",
    articles: [
      { title: "Wat zijn 'gunstige', 'verwachte' & 'ongunstige' scenario's?", href: "/faq" },
      { title: "Wat is ID & pay", href: "/faq" },
      { title: "Mijn storting is vertraagd of geweigerd", href: "/faq" },
      { title: "Waarom vraagt VanEck Direct om persoonlijke gegevens", href: "/faq" },
    ],
  },
];

export default function SupportContent() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Wij helpen je graag
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#4a5568]">
            Hier vind je uitgebreide artikelen en antwoorden op veelgestelde vragen over
            het gebruik van VanEck Direct — van accountbeheer tot beleggen en veiligheid
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-12">
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, index) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveTab(index)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      activeTab === index
                        ? "bg-[#0e3065] text-white"
                        : "bg-[#f2f3f7] text-[#4a5568] hover:bg-[#e5e7eb]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Articles List */}
              <div className="mt-8 space-y-3">
                {categories[activeTab].articles.map((article) => (
                  <Link
                    key={article.title}
                    href={article.href}
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:bg-[#f7f9ff]"
                  >
                    <span className="text-base font-medium text-[#211f54]">
                      {article.title}
                    </span>
                    <svg
                      className="h-5 w-5 shrink-0 text-[#4a5568]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden shrink-0 lg:block">
              <Image
                src="/images/catalog1.svg"
                alt="Support illustratie"
                width={196}
                height={197}
                className="h-auto w-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="bg-[#f7f9ff] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-[#211f54] md:text-4xl">
                Nog steeds vragen?
              </h2>
              <p className="mt-4 text-base text-[#4a5568]">
                Mail of bel VanEck Direct:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0 text-[#0e3065]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:direct@vaneck.com" className="text-[#17468f] hover:underline">
                    direct@vaneck.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0 text-[#0e3065]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+31208085543" className="text-[#17468f] hover:underline">
                    +31 (0)20 808 5543
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#0e3065]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[#4a5568]">
                    VanEck Direct<br />
                    Barbara Strozzilaan 310<br />
                    1083 HN Amsterdam<br />
                    The Netherlands
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/column2.svg"
                alt="Contact illustratie"
                width={400}
                height={400}
                className="h-auto w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
