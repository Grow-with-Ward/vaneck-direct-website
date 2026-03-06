import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description: string;
  breadcrumb?: string;
}

export default function PlaceholderPage({ title, description, breadcrumb }: PlaceholderPageProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <nav className="mb-8 text-sm text-[#4a5568]">
          <Link href="/" className="hover:text-[#0e3065]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#0e3065]">{breadcrumb || title}</span>
        </nav>
        <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-[56px] md:leading-[1.1]">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#4a5568]">
          {description}
        </p>
        <div className="mt-12 rounded-2xl border-2 border-dashed border-gray-300 bg-[#f7f9ff] p-12 text-center">
          <p className="text-lg font-semibold text-[#211f54]">Pagina in ontwikkeling</p>
          <p className="mt-2 text-sm text-[#4a5568]">
            De inhoud van deze pagina wordt binnenkort toegevoegd.
          </p>
        </div>
      </div>
    </section>
  );
}
