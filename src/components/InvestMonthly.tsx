import Image from "next/image";

export default function InvestMonthly() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold leading-tight text-[#211f54] md:text-4xl lg:text-[48px] lg:leading-[1.1]">
            Investeer elke maand automatisch in je toekomst
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
            Bij VanEck Direct beleggen wij voor jou in onze eigen ETFs. Dat zijn gespreide mandjes van aandelen en obligaties. Daarbij kijken wij goed naar jouw situatie en gaan we voor de lange termijn. Op die manier achten wij de kans groter dat je op lange termijn een hoger rendement haalt dan wanneer je actief belegt.
          </p>
          <blockquote className="mt-8">
            <p className="text-3xl font-light leading-tight text-gray-400 md:text-4xl">
              &ldquo;Een buffer van 3-6 maanden is al genoeg&rdquo;
            </p>
          </blockquote>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
            Het NIBUD adviseert om een buffer voor 3 tot 6 maanden aan te houden.* Heb je voor jezelf een goeie spaarbuffer opgebouwd? Super! Dan kun je aan de slag met beleggen.
          </p>
          <p className="mt-2 text-xs italic text-gray-400">*interne analyse VanEck</p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/etf_gif.gif"
            alt="ETF beleggingsapp voor automatisch beleggen"
            width={540}
            height={540}
            className="h-auto w-full max-w-md"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
