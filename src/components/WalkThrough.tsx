import Image from "next/image";

export default function WalkThrough() {
  return (
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
            {/* Vermogen side card */}
            <Image
              src="/images/vermogen.png"
              alt="Vermogen overzicht"
              width={200}
              height={400}
              className="absolute -right-8 top-12 h-auto w-36 drop-shadow-lg"
            />
            {/* Tip card */}
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
            Je hoeft niet alle ins en outs van beleggen te weten voordat je begint, want wij bieden een gemakkelijk stappenplan waarmee je in no-time kunt beleggen. Wij helpen je om lange termijn doelen te stellen, want met geduld ga je het beste rendement behalen.
          </p>
        </div>
      </div>
    </section>
  );
}
