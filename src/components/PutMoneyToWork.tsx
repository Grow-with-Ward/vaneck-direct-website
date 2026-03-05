import Image from "next/image";

export default function PutMoneyToWork() {
  return (
    <section className="bg-[#f5f7fb] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/images/spaargeld.png"
            alt="Geld laten beleggen in beleggingsapp"
            width={400}
            height={400}
            className="h-auto w-full max-w-sm"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#1a2b6b] md:text-5xl">
            Zet je geld
            <br />
            aan het werk
          </h2>
          <p className="mt-2 text-2xl font-medium text-[#2e5eaa]">Maar hoe doe je dat?</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
            Wil je straks een huis kopen? Vervroegd met pensioen? Of wil je gewoon een potje voor later? Dan kan het verstandig zijn om naast sparen ook te gaan beleggen en zo iets extra&apos;s op te bouwen voor de toekomst.
          </p>
        </div>
      </div>
    </section>
  );
}
