interface HelpArticleTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function HelpArticleTemplate({
  title,
  children,
}: HelpArticleTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[48px] lg:leading-[1.1]">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-5 px-6">{children}</div>
      </section>
    </>
  );
}
