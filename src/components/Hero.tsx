import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-[#1a2b6b] md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            De beleggingsapp
            <br />
            <span className="font-normal text-[#1a2b6b]">
              voor automatisch &amp;
              <br />
              serieus beleggen
            </span>
          </h1>

          <div className="mt-10 space-y-5">
            {[
              { bold: "Geen ervaring?", text: "Geen probleem, want de VanEck ETF-experts beleggen voor jou!" },
              { bold: "Serieus beleggen", text: "zonder de keuzestress van zelf losse aandelen te kiezen" },
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
                <p className="text-base text-[#1a2b6b]">
                  <strong>{item.bold}</strong> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#" className="inline-block">
              <Image
                src="/images/app_store.png"
                alt="Download on the App Store"
                width={156}
                height={52}
                className="h-[52px] w-auto"
              />
            </a>
            <a href="#" className="inline-block">
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

        {/* Right Content - Phone Mockup with real image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/images/homescreen.png"
              alt="VanEck Direct app voor beginnende beleggers"
              width={375}
              height={816}
              className="h-auto w-[320px] drop-shadow-2xl"
              priority
            />
            {/* Magnifying glass illustration */}
            <Image
              src="/images/magnifying.png"
              alt=""
              width={200}
              height={200}
              className="absolute -left-16 top-1/4 h-40 w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
