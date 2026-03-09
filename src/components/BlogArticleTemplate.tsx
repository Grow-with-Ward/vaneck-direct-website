import Image from "next/image";
import Link from "next/link";

const CDN = "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1";

export interface RelatedArticle {
  title: string;
  href: string;
  thumbnail?: string;
}

export interface QuoteBlockProps {
  personName: string;
  personTitle: string;
  personPhoto?: string;
  quote: string;
}

export function QuoteBlock({
  personName,
  personTitle,
  personPhoto,
  quote,
}: QuoteBlockProps) {
  const photoSrc = personPhoto
    ? personPhoto.startsWith("http")
      ? personPhoto
      : `${CDN}/${personPhoto}`
    : null;

  return (
    <div className="my-10 rounded-2xl bg-[#f7f9ff] p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        {photoSrc && (
          <Image
            src={photoSrc}
            alt={personName}
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-[#211f54]">
            {personName}, {personTitle}:
          </p>
          <p className="mt-3 text-base italic leading-relaxed text-[#4a5568]">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

interface BlogArticleTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footnotes?: string[];
  relatedArticles?: RelatedArticle[];
}

export default function BlogArticleTemplate({
  title,
  subtitle,
  children,
  footnotes,
  relatedArticles,
}: BlogArticleTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[48px] lg:leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 text-lg font-semibold leading-relaxed text-[#211f54]">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {children}

          {/* Footnotes */}
          {footnotes && footnotes.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <ol className="space-y-2 text-sm leading-relaxed text-[#4a5568]">
                {footnotes.map((note, i) => (
                  <li key={i}>
                    {i + 1}. {note}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="bg-[#f7f9ff] py-12">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-2xl font-bold text-[#211f54] md:text-3xl">
              Meer weten over VanEck Direct?
            </h2>
            <div className="mt-6 space-y-3">
              {relatedArticles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:bg-[#f7f9ff]"
                >
                  {article.thumbnail && (
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      width={96}
                      height={64}
                      className="h-16 w-24 shrink-0 rounded-lg object-cover"
                    />
                  )}
                  <span className="flex-1 text-base font-medium text-[#211f54]">
                    {article.title}
                  </span>
                  <svg
                    className="h-5 w-5 shrink-0 text-[#4a5568]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
