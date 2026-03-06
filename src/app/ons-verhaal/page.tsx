import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

export const metadata: Metadata = {
  title: "Over ons | Het verhaal achter VanEck Direct",
  description:
    "Leer het team achter VanEck Direct kennen. Sinds 1955 actief in vermogensbeheer, gelanceerd in 2024.",
};

const teamMembers = [
  { name: "Femke van Pijkeren", image: `${CDN}/63ee572e659dce632bb61cd8_client4.jpg` },
  { name: "Jeroen Braak", image: `${CDN}/641431c12d9306cdbbfedc7f_client5.jpg` },
  { name: "Shubhra Singh", image: `${CDN}/63ee572e659dce4645b61cd2_client3.jpg` },
  { name: "Fleur Schyns", image: `${CDN}/641431c12d93067efefedc83_client2.jpg` },
  { name: "Vân Anh Nguyễn", image: `${CDN}/63ee572e659dce4b44b61cd5_client1.jpg` },
  { name: "Thomas de Vries", image: `${CDN}/642c24dbc2550b52e0e06ad5_client6.jpg` },
];

export default function OnsVerhaalPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(to bottom, #f0f2f8, #ffffff)",
        }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="font-heading text-3xl font-bold leading-tight text-[#211f54] md:text-5xl">
                Samen bouwen we aan een betere financiële toekomst voor jou
              </h1>
            </div>
            <div className="flex justify-center">
              <Image
                src={`${CDN}/65bcc2ec04d123327c6e736c_CeasarBlaadjes.png`}
                alt="VanEck Direct team"
                width={400}
                height={380}
                className="h-auto w-full max-w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          {/* AFM vergunning */}
          <div className="flex flex-col items-center rounded-xl bg-[#f7f9ff] p-6 text-center">
            <svg
              className="mb-4 h-10 w-10 text-[#0e3065]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-sm font-semibold text-[#211f54]">
              AFM vergunning
            </span>
          </div>

          {/* In 2024 gelanceerd */}
          <div className="flex flex-col items-center rounded-xl bg-[#f7f9ff] p-6 text-center">
            <svg
              className="mb-4 h-10 w-10 text-[#0e3065]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C12 2 8 6 8 10c0 2 1 3 2 4l-1.5 6h7L14 14c1-1 2-2 2-4 0-4-4-8-4-8z" />
              <path d="M9.5 22h5" />
              <path d="M10 18h4" />
            </svg>
            <span className="text-sm font-semibold text-[#211f54]">
              In 2024 gelanceerd
            </span>
          </div>

          {/* Ervaring sinds 1955 */}
          <div className="flex flex-col items-center rounded-xl bg-[#f7f9ff] p-6 text-center">
            <svg
              className="mb-4 h-10 w-10 text-[#0e3065]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-sm font-semibold text-[#211f54]">
              Ervaring sinds 1955
            </span>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#f2f3f7] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-[#211f54] md:text-3xl">
            Welkom bij VanEck Direct!
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
            Wij geloven dat iedereen het recht heeft op financiële vrijheid. Met
            VanEck Direct maken we vermogensopbouw toegankelijk door middel van
            ETFs – zonder dat je zelf een expert hoeft te zijn. Miljoenen mensen
            wereldwijd beleggen al via VanEck. Nu kun jij dat ook, direct vanuit
            een app.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
            Beleggen kan overweldigend lijken, vooral als je net begint. Daarom
            hebben we VanEck Direct gebouwd: een app die het simpel maakt om
            automatisch en gespreid te beleggen, ondersteund door de jarenlange
            expertise van VanEck.
          </p>
        </div>
      </section>

      {/* Leadership Quotes */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6">
          {/* Quote 1 - text left, photo right */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative rounded-2xl bg-[#f7f9ff] p-8">
              <span className="absolute left-6 top-4 select-none text-6xl font-bold leading-none text-[#0e3065] opacity-20">
                &ldquo;
              </span>
              <p className="relative z-10 mt-6 text-base italic leading-relaxed text-[#4a5568]">
                Mijn tip voor beginners: begin niet met losse aandelen. Kies
                voor gespreide mandjes, zodat je risico beter verdeeld is.
              </p>
              <p className="mt-4 text-base font-bold text-[#211f54]">
                Lies Oudemans
              </p>
              <p className="text-sm text-[#4a5568]">
                Director VanEck Direct
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={`${CDN}/6461dbde446d0cb11095ebbc_Profile%20Picture%20Lies2.jpg`}
                alt="Lies Oudemans - Director VanEck Direct"
                width={400}
                height={400}
                className="h-64 w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Quote 2 - photo left, text right */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center md:order-1">
              <Image
                src={`${CDN}/645a0b396fc47533a3d9ef56_PhotoMartijnRozemuller2.jpg`}
                alt="Martijn Rozemuller - CEO VanEck Europe"
                width={400}
                height={400}
                className="h-64 w-full rounded-2xl object-cover"
              />
            </div>
            <div className="relative rounded-2xl bg-[#f7f9ff] p-8 md:order-2">
              <span className="absolute left-6 top-4 select-none text-6xl font-bold leading-none text-[#0e3065] opacity-20">
                &ldquo;
              </span>
              <p className="relative z-10 mt-6 text-base italic leading-relaxed text-[#4a5568]">
                Met VanEck Direct willen we de barrières bij beleggen wegnemen.
                Iedereen verdient toegang tot professioneel vermogensbeheer.
              </p>
              <p className="mt-4 text-base font-bold text-[#211f54]">
                Martijn Rozemuller
              </p>
              <p className="text-sm text-[#4a5568]">CEO VanEck Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-[#f2f3f7] py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center font-heading text-2xl font-bold text-[#211f54] md:text-3xl">
            De rest van het team
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl bg-[#f7f9ff] p-4 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <p className="mt-3 text-xs font-semibold text-[#211f54]">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + App Screenshots */}
      <CTASection />
      <AppScreenshots />
    </>
  );
}
