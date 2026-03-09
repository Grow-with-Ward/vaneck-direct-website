export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a2230]">
      <div className="relative mx-auto aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/1sYm1fJqUR4?rel=0&modestbranding=1"
          title="VanEck Direct - Beleggingsapp"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
        />
      </div>
    </section>
  );
}
