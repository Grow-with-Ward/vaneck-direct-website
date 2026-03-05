import Image from "next/image";

export default function TrustedName() {
  return (
    <section className="bg-[#f0f2f8] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#1a2b6b] md:text-5xl">
            Je geeft het uit handen aan een gevestigde naam
          </h2>
          <p className="mt-4 text-lg font-semibold text-[#1a2b6b]">
            VanEck bestaat al sinds 1955 en heeft een solide reputatie in indexbeleggen.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
            VanEck is wereldwijd een bekende aanbieder van ETFs met miljoenen bestaande klanten. Om dit ook de beginnende belegger aan te kunnen bieden heeft VanEck een app ontwikkeld voor mensen die meer willen dan sparen.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#00b341] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#009a38]"
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
  );
}
