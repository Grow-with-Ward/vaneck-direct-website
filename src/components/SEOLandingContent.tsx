"use client";

import Image from "next/image";
import { useDownloadModal } from "@/components/DownloadModal";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

interface ValueProp {
  bold: string;
  text: string;
}

interface PainPoint {
  bold: string;
  text: string;
}

interface SolutionCard {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  link?: { text: string; href: string };
  afterLink?: string;
}

interface SEOLandingContentProps {
  heroHeading: string;
  heroHeadingLine2?: string;
  valueProps: ValueProp[];
  painHeading: string;
  painPoints: PainPoint[];
  painIllustration?: string;
  painIllustrationAlt?: string;
  solutionHeading: string;
  solutionHeadingLine2?: string;
  solutions: SolutionCard[];
  ctaHeading: string;
  ctaHeadingLine2?: string;
  heroImage?: string;
  heroImageAlt?: string;
  showFinalCTA?: boolean;
  showAppScreenshots?: boolean;
}

export default function SEOLandingContent({
  heroHeading,
  heroHeadingLine2,
  valueProps,
  painHeading,
  painPoints,
  painIllustration = "/images/aandelen_etf_illustration.svg",
  painIllustrationAlt = "Illustratie",
  solutionHeading,
  solutionHeadingLine2,
  solutions,
  ctaHeading,
  ctaHeadingLine2,
  heroImage = "/images/newsletter_hero.png",
  heroImageAlt = "VanEck Direct app",
  showFinalCTA = false,
  showAppScreenshots = false,
}: SEOLandingContentProps) {
  const { openModal } = useDownloadModal();

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.15]">
                {heroHeading}
                {heroHeadingLine2 && (
                  <>
                    <br />
                    <span className="font-sans font-normal">{heroHeadingLine2}</span>
                  </>
                )}
              </h1>

              <div className="mt-10 space-y-5">
                {valueProps.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Image
                      src="/images/circle_check.png"
                      alt="check"
                      width={24}
                      height={24}
                      className="mt-0.5 h-6 w-6 shrink-0"
                    />
                    <p className="text-base text-[#1f2c3d]">
                      <strong>{item.bold}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-[#4a5568]">
                Beleggen kent risico&apos;s. Je inleg kan minder waard worden.
              </p>

              {/* App Store Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.vaneck.direct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/google_play.png"
                    alt="Get it on Google Play"
                    width={156}
                    height={52}
                    className="h-[52px] w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/nl/app/vaneck-direct/id1545588838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/app_store.png"
                    alt="Download on the App Store"
                    width={156}
                    height={52}
                    className="h-[52px] w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                width={500}
                height={500}
                className="h-auto w-full max-w-md"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-[#f7f9ff] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.15]">
                {painHeading}
              </h2>

              <div className="mt-10 space-y-5">
                {painPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Image
                      src="/images/cross_red_circle.png"
                      alt="pain point"
                      width={24}
                      height={24}
                      className="mt-0.5 h-6 w-6 shrink-0"
                    />
                    <p className="text-base text-[#1f2c3d]">
                      <strong>{item.bold}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={painIllustration}
                alt={painIllustrationAlt}
                width={400}
                height={400}
                className="h-auto w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#0e3065] md:text-4xl lg:text-[48px] lg:leading-[1.15]">
              {solutionHeading}
              {solutionHeadingLine2 && (
                <>
                  <br />
                  {solutionHeadingLine2}
                </>
              )}
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {solutions.map((card, i) => (
              <div key={i} className="text-center">
                <h3 className="text-lg font-bold text-[#0e3065]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">
                  {card.body}
                  {card.link && (
                    <>
                      {" "}
                      <a
                        href={card.link.href}
                        className="font-semibold text-[#17468f] underline"
                      >
                        {card.link.text}
                      </a>
                    </>
                  )}
                  {card.afterLink && card.afterLink}
                </p>
                <div className="mt-6 flex justify-center">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={280}
                    height={280}
                    className="h-auto w-full max-w-[240px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[48px] lg:leading-[1.15]">
                {ctaHeading}
                {ctaHeadingLine2 && (
                  <>
                    <br />
                    {ctaHeadingLine2}
                  </>
                )}
              </h2>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/circle_check.png"
                    alt="check"
                    width={24}
                    height={24}
                    className="mt-0.5 h-6 w-6 shrink-0"
                  />
                  <p className="text-base text-[#1f2c3d]">
                    <strong>Stap 1:</strong> Download de app
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/circle_check.png"
                    alt="check"
                    width={24}
                    height={24}
                    className="mt-0.5 h-6 w-6 shrink-0"
                  />
                  <p className="text-base text-[#1f2c3d]">
                    <strong>Stap 2:</strong> Samen maken we je beleggingsplan
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/circle_check.png"
                    alt="check"
                    width={24}
                    height={24}
                    className="mt-0.5 h-6 w-6 shrink-0"
                  />
                  <p className="text-base text-[#1f2c3d]">
                    <strong>Stap 3:</strong> Automatiseer je inleg en leun achterover!
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/nl/app/vaneck-direct/id1545588838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/app_store.png"
                    alt="Download on the App Store"
                    width={156}
                    height={52}
                    className="h-[52px] w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.vaneck.direct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
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

            {/* App Screenshot with decorations */}
            <div className="relative flex justify-center">
              <div className="relative">
                <Image
                  src="/images/monthly_investment.png"
                  alt="VanEck Direct app overzicht"
                  width={280}
                  height={560}
                  className="h-auto w-[260px] drop-shadow-2xl"
                />
                <Image
                  src="/images/monthly_nudge.png"
                  alt="Maandelijkse inleg"
                  width={300}
                  height={80}
                  className="absolute -left-16 bottom-24 h-auto w-48 drop-shadow-lg"
                />
                <Image
                  src="/images/clouds.png"
                  alt=""
                  width={200}
                  height={120}
                  className="absolute -right-12 -top-8 h-auto w-36 opacity-60"
                />
                <Image
                  src="/images/magnifying.png"
                  alt=""
                  width={120}
                  height={120}
                  className="absolute -left-20 top-1/3 h-24 w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {showFinalCTA && (
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#17468f] md:text-[32px]">
              Bouw nu vermogen op voor later,
            </h2>
            <h2 className="font-heading text-3xl font-bold leading-tight text-[#211f54] md:text-[40px]">
              met VanEck Direct.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#4a5568]">
              Download vandaag de app en ga er even rustig voor zitten om de stappen te
              doorlopen en je account in te richten. En dan pakken wij het vanaf daar
              verder op!
            </p>
            <button
              onClick={openModal}
              className="mt-8 rounded-[20px] bg-[#0ab400] px-10 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#099a00]"
            >
              Download de app
            </button>
          </div>
        </section>
      )}

      {/* App Screenshots */}
      {showAppScreenshots && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Image
              src="/images/footer_mockup.png"
              alt="VanEck Direct app screenshots"
              width={1728}
              height={759}
              className="h-auto w-full"
            />
          </div>
        </section>
      )}
    </>
  );
}
