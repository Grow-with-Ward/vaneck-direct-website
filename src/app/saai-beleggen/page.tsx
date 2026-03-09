import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Saaiste beleggingsapp voor automatisch, langetermijn beleggen",
  description:
    "Saai beleggen is slim beleggen. Ontdek de kracht van geduldig en gespreid beleggen met VanEck Direct.",
};

export default function SaaiBeleggenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl leading-tight text-[#1f2c3d] md:text-5xl lg:text-[64px] lg:leading-[70px]">
              <span className="font-heading font-bold">De saaiste beleggingsapp</span>
              <br />
              <span className="font-sans font-normal">
                voor automatisch &amp;
                <br />
                gespreid beleggen
              </span>
            </h1>

            <div className="mt-10 space-y-5">
              {[
                { bold: "Lekker saai,", text: "dus geen keuzestress van zelf losse aandelen te kiezen of dagelijks kijken" },
                { bold: "Geen ervaring?", text: "Geen probleem, want de VanEck ETF-experts beleggen voor jou!" },
                { bold: "Gespreid & automatisch beleggen,", text: "zonder er dagelijks mee bezig te zijn" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Image
                    src="/images/circle_check.png"
                    alt="check"
                    width={24}
                    height={24}
                    className="mt-0.5 h-6 w-6 shrink-0"
                  />
                  <p className="text-base text-[#1f2c3d]">
                    <strong>{item.bold}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/demo" className="inline-block">
                <Image
                  src="/images/app_store.png"
                  alt="Download on the App Store"
                  width={156}
                  height={52}
                  className="h-[52px] w-auto"
                />
              </a>
              <a href="/demo" className="inline-block">
                <Image
                  src="/images/google_play.png"
                  alt="Get it on Google Play"
                  width={156}
                  height={52}
                  className="h-[52px] w-auto"
                />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/monthly_investment.png"
                alt="VanEck Direct app"
                width={375}
                height={816}
                className="h-auto w-[320px] drop-shadow-2xl"
                priority
              />
              <Image
                src="/images/monthly_nudge.png"
                alt="Maandelijkse inleg"
                width={300}
                height={80}
                className="absolute -left-16 bottom-32 h-auto w-48 drop-shadow-lg"
              />
              <Image
                src="/images/simple_background.png"
                alt=""
                width={600}
                height={600}
                className="absolute -z-10 -left-24 -top-12 h-auto w-[450px] opacity-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Saai beleggen... Hoe werkt dat? */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/images/walking_woman.svg"
              alt="Saai beleggen illustratie"
              width={400}
              height={400}
              className="h-auto w-full max-w-sm"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-[50px] md:leading-[1.1]">
              Saai beleggen...
            </h2>
            <p className="text-[32px] font-normal text-[#17468f]">Hoe werkt dat precies?</p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
              Saai beleggen zou juist verstandig beleggen kunnen zijn. Geen impulsieve
              beslissingen, geen stress over dagkoersen. In plaats daarvan hou je meer
              tijd over voor de echt leuke dingen in het leven.
            </p>
          </div>
        </div>
      </section>

      {/* Investeren zonder dagelijks om te kijken */}
      <section className="bg-[#f2f3f7] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#211f54] md:text-4xl lg:text-[48px] lg:leading-[1.1]">
              Investeren zonder dagelijks om te kijken
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
              Bij VanEck Direct beleg je in VanEck ETFs. Dat zijn gespreide mandjes van
              onderliggende aandelen en obligaties. Deze verdeling stemmen we af op jouw
              situatie. Op die manier hoef je zelf geen uren te besteden aan het
              selecteren en beheren van aandelen, maar investeer je automatisch met focus
              op de lange termijn.
            </p>
            <blockquote className="mt-8">
              <p className="text-3xl font-light leading-tight text-gray-400 md:text-4xl">
                &ldquo;Een buffer van 3-6 maanden is al genoeg&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
              Het NIBUD adviseert om een buffer voor 3 tot 6 maanden aan te houden.* Heb
              je voor jezelf een goeie spaarbuffer opgebouwd? Super! Dan kun je aan de
              slag met beleggen.
            </p>
            <p className="mt-2 text-xs italic text-gray-400">*interne analyse VanEck</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/ved_etf_gif.gif"
              alt="ETF beleggingsapp voor automatisch beleggen"
              width={540}
              height={540}
              className="h-auto w-full max-w-md"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Geen slapeloze nachten */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/images/column3.svg"
              alt="ETF beleggen beleggingsapp"
              width={318}
              height={318}
              className="h-auto w-full max-w-xs"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-[50px] md:leading-[1.1]">
              Geen slapeloze nachten
            </h2>
            <div className="mt-8">
              <p className="font-bold text-[#0e3065]">
                Beleggen wordt soms heel ingewikkeld of spannend gemaakt
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Image src="/images/notification.png" alt="" width={24} height={24} className="mt-0.5 h-6 w-6 shrink-0" />
                  <p className="text-[#4a5568]">
                    De beleggingswereld is complex en gebruikt moeilijke woorden als: short, swap, spread of yield.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image src="/images/notification.png" alt="" width={24} height={24} className="mt-0.5 h-6 w-6 shrink-0" />
                  <p className="text-[#4a5568]">
                    Bij sommige producten, zoals opties of futures, kan je de hele waarde van je inleg kwijtraken.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="font-bold text-[#0e3065]">
                Bij VanEck Direct houden we het simpel met:
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Image src="/images/circle_check.png" alt="" width={24} height={24} className="mt-0.5 h-6 w-6 shrink-0" />
                  <p className="text-[#4a5568]">
                    Breed gespreid en automatisch beleggen, zodat jij er niet naar om hoeft te kijken.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image src="/images/circle_check.png" alt="" width={24} height={24} className="mt-0.5 h-6 w-6 shrink-0" />
                  <p className="text-[#4a5568]">
                    Beleggen zonder keuzestress, jargon en tegen een eerlijke prijs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gevestigde naam */}
      <section className="bg-[#f7f9ff] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-bold leading-tight text-[#211f54] md:text-[56px] md:leading-[1.1]">
              Je geeft het uit handen aan een gevestigde naam
            </h2>
            <p className="mt-4 text-lg font-semibold text-[#211f54]">
              VanEck bestaat al sinds 1955 en heeft een solide reputatie in indexbeleggen.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
              VanEck is wereldwijd een bekende aanbieder van ETFs met miljoenen bestaande
              klanten. Om dit ook de beginnende belegger aan te kunnen bieden heeft VanEck
              een app ontwikkeld voor mensen die meer willen dan sparen.
            </p>
            <a
              href="/demo"
              className="mt-8 inline-block rounded-[20px] bg-[#0ab400] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#099a00]"
            >
              Download de app
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/eenveiligeplek.png"
              alt="Overzicht van beleggingsapp"
              width={600}
              height={780}
              className="h-auto w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Lage en simpele kosten */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold leading-tight text-[#211f54] md:text-[56px] md:leading-[1.1]">
            Lage en simpele{" "}
            <span className="underline decoration-[#211f54]">kosten</span>:
            <br />
            beheerkosten van 0,5%
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-[#17468f] md:text-[32px]">
            en fondskosten tussen 0,18%-0,22%.
            <br />
            Verder geen pakketten of abonnementen.
            <br />
            Gewoon simpel.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#4a5568]">
            VanEck heeft verschillende eigen beleggingsproducten &amp; ETFs, waardoor er
            minder tussenpartijen nodig zijn bij jouw beleggingen. Daardoor besparen we
            kosten aan tussenpersonen, wat ten goede komt aan jouw rendement. Als je
            €5.000 belegt in het neutrale profiel, dan ben je € 2,92 kwijt per maand.
          </p>

          <div className="mx-auto mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0e3065] px-8 py-6 md:flex-row">
            <p className="text-left text-sm text-white md:text-base">
              Weten wat dit voor jou betekent?
              <br />
              Kijk op de kostenpagina om een berekening te maken.
            </p>
            <a
              href="/kosten"
              className="shrink-0 rounded-full border-2 border-white px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0e3065]"
            >
              Naar overzicht
            </a>
          </div>
        </div>
      </section>

      {/* Altijd controle */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-bold italic leading-tight text-[#0e3065] md:text-[50px] md:leading-[1.1]">
              Altijd controle
              <br />
              via de app
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
              Je belegt bijvoorbeeld een vast bedrag naar keuze. Je kan altijd weer wat
              opnemen of eerder stoppen, mocht dat écht nodig zijn. We stellen samen een
              beleggingsplan op. Stop je eerder, dan is de kans wel minder groot dat je je
              beleggingsdoel gaat halen.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/altijdcontrole.png"
              alt="Altijd controle via de app"
              width={610}
              height={610}
              className="h-auto w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Ga er rustig voor zitten */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/maandelijks_inleggen.png"
                alt="Maandelijks inleggen"
                width={445}
                height={585}
                className="h-auto w-full max-w-sm"
              />
              <Image
                src="/images/vermogen.png"
                alt="Vermogen overzicht"
                width={200}
                height={400}
                className="absolute -right-8 top-12 h-auto w-36 drop-shadow-lg"
              />
              <Image
                src="/images/tipcard.png"
                alt="Tip card"
                width={200}
                height={100}
                className="absolute -right-4 bottom-16 h-auto w-40 drop-shadow-lg"
              />
            </div>
          </div>
          <div>
            <p className="text-xl text-[#17468f]">Ga er rustig voor zitten -</p>
            <h2 className="font-heading mt-1 text-4xl font-bold leading-tight text-[#0e3065] md:text-[50px] md:leading-[1.1]">
              dan lopen we alles samen door.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
              Je hoeft niet alle ins en outs van beleggen te weten voordat je begint, want
              wij bieden een gemakkelijk stappenplan waarmee je in no-time kunt beleggen.
              Wij helpen je om lange termijn doelen te stellen, want met geduld ga je het
              beste rendement behalen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA + App Screenshots */}
      <CTASection />
      <AppScreenshots />
    </>
  );
}
