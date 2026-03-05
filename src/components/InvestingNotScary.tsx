import Image from "next/image";

export default function InvestingNotScary() {
  return (
    <section className="bg-[#f5f7fb] py-20">
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
          <h2 className="text-4xl font-bold leading-tight text-[#1a2b6b] md:text-5xl">
            Beleggen is niet eng
          </h2>
          <div className="mt-8">
            <p className="font-bold text-[#1a2b6b]">
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
            <p className="font-bold text-[#1a2b6b]">
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
  );
}
