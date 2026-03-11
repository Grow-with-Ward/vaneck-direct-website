import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#0ab400]">404</p>
        <h1 className="font-heading mt-3 text-4xl font-bold text-[#0e3065] md:text-5xl">
          Pagina niet gevonden
        </h1>
        <p className="mt-4 text-lg text-[#4a5568]">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-[20px] bg-[#0ab400] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#099a00]"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
