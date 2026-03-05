export default function CostsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-light leading-tight text-gray-400 md:text-5xl">
          Lage en simpele{" "}
          <span className="underline decoration-gray-400">kosten</span>:
          <br />
          beheerkosten van 0,5%
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-400 md:text-xl">
          en fondskosten tussen 0,18%-0,22%.
          <br />
          Verder geen pakketten of abonnementen.
          <br />
          Gewoon simpel.
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-gray-400">
          VanEck heeft verschillende eigen beleggingsproducten &amp; ETFs, waardoor er minder tussenpartijen nodig zijn bij jouw beleggingen. Daardoor besparen we kosten aan tussenpersonen, wat ten goede komt aan jouw rendement. Als je &euro;5.000 belegt in het neutrale profiel, dan ben je &euro; 2,92 kwijt per maand.
        </p>

        {/* Cost CTA Banner */}
        <div className="mx-auto mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#0e3065] px-8 py-6 md:flex-row">
          <p className="text-left text-sm text-white md:text-base">
            Weten wat dit voor jou betekent?
            <br />
            Kijk op de kostenpagina om een berekening te maken.
          </p>
          <a
            href="#"
            className="shrink-0 rounded-full border-2 border-white px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0e3065]"
          >
            Naar overzicht
          </a>
        </div>
      </div>
    </section>
  );
}
