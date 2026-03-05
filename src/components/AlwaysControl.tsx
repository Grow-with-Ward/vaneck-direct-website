import Image from "next/image";

export default function AlwaysControl() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold italic leading-tight text-[#1a2b6b] md:text-5xl">
            Altijd controle
            <br />
            via de app
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
            Je belegt bijvoorbeeld een vast bedrag naar keuze. Je kan altijd weer wat opnemen of eerder stoppen, mocht dat &eacute;cht nodig zijn. We stellen samen een beleggingsplan op. Stop je eerder, dan is de kans wel minder groot dat je je beleggingsdoel gaat halen.
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
  );
}
