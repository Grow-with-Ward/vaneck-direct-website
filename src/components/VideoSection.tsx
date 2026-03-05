export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#0e3065] py-0">
      <div className="relative mx-auto flex aspect-video max-w-7xl items-center justify-center">
        {/* Video placeholder with dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e3065]/80 to-[#0a1f45]/90" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 400\"%3E%3Crect fill=\"%23334\" width=\"800\" height=\"400\"/%3E%3Ccircle cx=\"400\" cy=\"200\" r=\"80\" fill=\"%23556\" opacity=\"0.5\"/%3E%3C/svg%3E')",
          }}
        />

        {/* Play button */}
        <button className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 transition-transform hover:scale-110">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Overlay text */}
        <div className="absolute bottom-12 left-0 right-0 z-10 text-center">
          <p className="text-lg text-white/80 md:text-xl">
            De app houdt haar op
          </p>
          <p className="text-lg text-white/80 md:text-xl">
            de hoogte van haar beleggingen,
          </p>
        </div>

        {/* Risk warning */}
        <div className="absolute bottom-4 left-0 right-0 z-10 text-center">
          <p className="text-sm text-white/60">
            Beleggen kent risico&apos;s. Je kunt (een deel van) je inleg verliezen.
          </p>
        </div>
      </div>
    </section>
  );
}
