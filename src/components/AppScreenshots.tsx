import Image from "next/image";

export default function AppScreenshots() {
  return (
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
  );
}
