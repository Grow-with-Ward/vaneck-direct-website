import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";
import FAQContent from "./FAQContent";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

export const metadata: Metadata = {
  title: "Veelgestelde vragen & contact | FAQ VanEck Direct",
  description:
    "Vind antwoorden op veelgestelde vragen over VanEck Direct: kosten, beleggen, account aanmaken en meer.",
};

export default function FaqPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold text-[#211f54] md:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-base text-[#4a5568]">
                Op deze pagina vind je antwoorden op vragen over VanEck Direct.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src={`${CDN}/6489d709401ba80a7916fc0d_FAQafbeelding.png`}
                alt="FAQ illustratie"
                width={360}
                height={280}
                className="h-auto w-full max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQContent />

      {/* Contact Block */}
      <section className="bg-[#f2f3f7] py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src={`${CDN}/6422e2e43cd0d40f2614028e_InItForTheWin.png`}
                alt="In it for the win"
                width={360}
                height={280}
                className="h-auto w-full max-w-[360px]"
              />
            </div>
            <div>
          <h2 className="text-3xl font-bold text-[#211f54] md:text-4xl">
            Nog steeds vragen?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
            Neem gerust contact met ons op. We helpen je graag verder.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-base text-[#4a5568]">
              <span className="font-semibold text-[#211f54]">E-mail: </span>
              <a
                href="mailto:direct@vaneck.com"
                className="text-[#0e3065] underline transition-colors hover:text-[#17468f]"
              >
                direct@vaneck.com
              </a>
            </p>
            <p className="text-base text-[#4a5568]">
              <span className="font-semibold text-[#211f54]">Telefoon: </span>
              <a
                href="tel:+31208085543"
                className="text-[#0e3065] underline transition-colors hover:text-[#17468f]"
              >
                +31 (0)20 808 5543
              </a>
            </p>
            <p className="text-base text-[#4a5568]">
              <span className="font-semibold text-[#211f54]">Adres: </span>
              Barbara Strozzilaan 310, 1083 HN Amsterdam
            </p>
          </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
