import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Blog | VanEck Direct over ETFs, saai beleggen & goed spreiden",
  description:
    "Lees het laatste nieuws en artikelen over beleggen, ETFs en VanEck Direct.",
};

const blogPosts = [
  {
    title: "Waarom we VanEck Direct zijn begonnen",
    slug: "waarom-van-eck-direct-begonnen",
    image: "/images/blog_1.png",
  },
  {
    title: "Goede voornemens & financiële gezondheid",
    slug: "goede-voornemens-financiele-gezondheid",
    image: "/images/blog_2.png",
  },
  {
    title: "Beleggen: De gemiste kans van Nederland?",
    slug: "beleggen-gemiste-kans-nederland",
    image: "/images/blog_3.png",
  },
  {
    title: "Hoe kan je beginnen met beleggen zonder ervaring",
    slug: "hoe-beleggen-zonder-ervaring",
    image: "/images/blog_4.png",
  },
  {
    title: "Schenk jezelf financiële rust - en de kans op rendement",
    slug: "schenk-financiele-rust",
    image: "/images/blog_5.png",
  },
  {
    title: "4 dingen die elke startende belegger zou moeten begrijpen",
    slug: "4-dingen-startende-belegger",
    image: "/images/blog_6.png",
  },
  {
    title: "Rendement berekenen",
    slug: "rendement-berekenen",
    image: "/images/blog_7.png",
  },
  {
    title: "Wat is een ETF",
    slug: "wat-is-een-etf",
    image: "/images/blog_8.png",
  },
  {
    title: "ETF kopen",
    slug: "etf-kopen-2",
    image: "/images/blog_9.png",
  },
  {
    title: "Automatisch maandelijks beleggen",
    slug: "automatisch-maandelijks-beleggen",
    image: "/images/blog_10.png",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Blog van VanEck Direct
          </h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group text-center"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={300}
                    className="aspect-square w-full object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-5 font-heading text-[24px] font-bold leading-snug text-[#211f54] group-hover:text-[#17468f] lg:text-[30px]">
                  {post.title}
                </h2>
              </Link>
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
