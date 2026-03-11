import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

export const metadata: Metadata = {
  title: "Over ons | Het verhaal achter VanEck Direct",
  description:
    "Leer het team achter VanEck Direct kennen. Sinds 1955 actief in vermogensbeheer, gelanceerd in 2024.",
  alternates: {
    canonical: "/ons-verhaal",
  },
};

const teamMembers = [
  { name: "Femke van Pijkeren", role: "Junior Business Analyst" },
  { name: "Jeroen Braak", role: "Technical Lead" },
  { name: "Shubhra Singh", role: "Junior Developer" },
  { name: "Fleur Schyns", role: "Marketing Specialist" },
];

export default function OnsVerhaalPage() {
  return (
    <>
      {/* Hero — full-width centered, no image */}
      <section
        className="py-16 lg:py-24"
        style={{ background: "linear-gradient(to bottom, #f0f2f8, #f0f2f8)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#211f54] md:text-5xl lg:text-6xl">
            Samen bouwen we aan een betere financiële toekomst voor jou.
          </h1>
        </div>

        {/* Credentials with laurel badges */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-10 px-6 sm:flex-row sm:gap-16">
          {[
            "AFM\nvergunning",
            "In 2024\ngelanceerd",
            "Ervaring sinds\n1955",
          ].map((label) => (
            <div key={label} className="flex flex-col items-center text-center">
              <p className="text-lg font-bold text-[#211f54]" style={{ whiteSpace: "pre-line" }}>
                {label}
              </p>
              <Image
                src={`${CDN}/65bcc2ec04d123327c6e736c_CeasarBlaadjes.png`}
                alt=""
                width={170}
                height={60}
                className="mt-2 h-auto w-[170px]"
              />
            </div>
          ))}
        </div>

        {/* Mission text below credentials */}
        <div className="mx-auto mt-16 max-w-2xl px-6 text-center">
          <p className="text-base leading-relaxed text-[#4a5568]">
            Wij geloven dat iedereen het recht heeft op financiële vrijheid en
            controle over hun vermogen. We begrijpen dat beleggen vaak complex
            en intimiderend kan lijken, en we willen deze barrières wegnemen.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
            Met{" "}
            <a href="/demo" className="text-[#17468f] underline">
              onze app
            </a>{" "}
            willen we een betere financiële toekomst mogelijk maken voor jou.
            Daarbij zetten we de kracht van Exchange Traded Funds (ETFs) in –
            mandjes van aandelen en obligaties – om jouw vermogen gestaag te
            laten groeien.
          </p>
        </div>
      </section>

      {/* Welcome section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-[#211f54] md:text-4xl">
            Welkom bij VanEck Direct!
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
            Het VanEck Direct-team heeft, onder de vlag van het grotere VanEck,
            een beleggingsapp ontwikkeld voor mensen die vandaag willen beginnen
            met het opbouwen van vermogen voor later. VanEck bestaat sinds 1955
            en is gespecialiseerd in het bouwen van ETFs, waarin al door{" "}
            <strong>miljoenen mensen</strong> wereldwijd wordt belegd. Om
            beleggen in ETFs toegankelijker te maken voor mensen die niet zelf
            hun beleggingskeuzes willen maken, heeft VanEck deze app
            ontwikkeld!
          </p>
        </div>

        {/* Quote 1 — Lies Oudemans */}
        <div className="mx-auto mt-16 max-w-3xl px-6">
          <div className="flex items-start gap-8">
            <Image
              src={`${CDN}/6461dbde446d0cb11095ebbc_Profile%20Picture%20Lies2.jpg`}
              alt="Lies Oudemans"
              width={120}
              height={120}
              className="h-28 w-28 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-heading text-xl font-bold italic leading-snug text-[#211f54] md:text-2xl">
                &lsquo;Mijn nummer 1 tip voor beginnende beleggers: start niet
                met het kopen van losse aandelen. Kies altijd eerst voor het
                gespreide mandje en dat kan bij VanEck Direct!&rsquo;
              </p>
              <p className="mt-4 text-sm text-[#4a5568]">
                Lies Oudemans | Director VanEck Direct
              </p>
            </div>
          </div>
        </div>

        {/* Body text between quotes */}
        <div className="mx-auto mt-16 max-w-2xl px-6">
          <p className="text-base leading-relaxed text-[#4a5568]">
            <strong>
              Wij zien dat mensen al snel overweldigd raken als ze willen
              beginnen met beleggen
            </strong>
            : Complexe termen, oneindig veel opties en eigenlijk is het toch
            best spannend om daadwerkelijk die stap te zetten. Hier zagen wij
            vanuit VanEck een gat in de markt waar we met onze app in zijn
            gesprongen!
          </p>
        </div>

        {/* Quote 2 — Martijn Rozemuller */}
        <div className="mx-auto mt-16 max-w-3xl px-6">
          <div className="flex items-start gap-8">
            <Image
              src={`${CDN}/645a0b396fc47533a3d9ef56_PhotoMartijnRozemuller2.jpg`}
              alt="Martijn Rozemuller"
              width={120}
              height={120}
              className="h-28 w-28 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-heading text-xl font-bold italic leading-snug text-[#211f54] md:text-2xl">
                &lsquo;Met VanEck Direct willen we de barrières bij beleggen
                wegnemen. Of je nu een beginnende belegger bent of al ervaring
                hebt, de app biedt een eenvoudige manier om te investeren. Je
                hoeft niet meer na te denken over het juiste instapmoment of
                andere ingewikkelde keuzes.&rsquo;
              </p>
              <p className="mt-4 text-sm text-[#4a5568]">
                Martijn Rozemuller | CEO VanEck Europa
              </p>
            </div>
          </div>
        </div>

        {/* Body text after second quote */}
        <div className="mx-auto mt-16 max-w-2xl px-6">
          <p className="text-base leading-relaxed text-[#4a5568]">
            Wij willen{" "}
            <a href="/rendement" className="text-[#17468f] underline">
              beginnende beleggers
            </a>{" "}
            helpen. In tegenstelling tot veel andere platformen, zullen we je
            niet verleiden tot het doen van veel aan- en verkopen. Het is al
            vaak genoeg bewezen dat dit ten koste gaat van jouw rendement.{" "}
            <strong>
              Des te langer en rustiger jij blijft beleggen, des te beter voor
              je vermogen.
            </strong>
          </p>
        </div>

        {/* Team */}
        <div className="mx-auto mt-20 max-w-3xl px-6">
          <h3 className="text-center font-heading text-2xl font-bold text-[#211f54]">
            De rest van het team
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <p className="text-sm font-semibold text-[#211f54]">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-[#4a5568]">{member.role}</p>
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
