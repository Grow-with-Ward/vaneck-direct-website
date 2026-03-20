"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-red-500">Fout</p>
        <h1 className="font-heading mt-3 text-4xl font-bold text-[#0e3065] md:text-5xl">
          Er ging iets mis
        </h1>
        <p className="mt-4 text-lg text-[#4a5568]">
          Probeer het opnieuw of ga terug naar de homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-[20px] bg-[#0ab400] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#099a00]"
          >
            Opnieuw proberen
          </button>
          <a
            href="/"
            className="rounded-[20px] border border-[#0e3065] px-8 py-3 text-sm font-semibold text-[#0e3065] transition-colors hover:bg-[#f7f9ff]"
          >
            Terug naar home
          </a>
        </div>
      </div>
    </section>
  );
}
