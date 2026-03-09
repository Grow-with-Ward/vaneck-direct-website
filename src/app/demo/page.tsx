import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Demo | Ontdek hoe de VanEck Direct app werkt",
  description:
    "Bekijk een voorproefje van de VanEck Direct beleggingsapp. Ontdek hoe eenvoudig automatisch beleggen kan zijn.",
};

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(to bottom, #f0f2f8, #ffffff)",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold text-[#211f54] md:text-5xl lg:text-6xl">
            Nieuwsgierig?
          </h1>
          <p className="mt-4 text-lg text-[#4a5568] md:text-xl">
            Hier is vast een voorproefje
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-[#211f54] md:text-3xl">
            Kijk maar even rond in deze demo-app voor een eerste indruk
          </h2>

          <div className="mt-12 flex justify-center">
            <Image
              src="/images/homescreen.png"
              alt="VanEck Direct app homescreen"
              width={320}
              height={640}
              className="h-auto w-auto drop-shadow-2xl"
            />
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/demo">
              <Image
                src="/images/app_store.png"
                alt="Download in de App Store"
                width={156}
                height={52}
                className="h-auto w-auto"
              />
            </Link>
            <Link href="/demo">
              <Image
                src="/images/google_play.png"
                alt="Download via Google Play"
                width={156}
                height={52}
                className="h-auto w-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA & App Screenshots */}
      <CTASection />
      <AppScreenshots />
    </>
  );
}
