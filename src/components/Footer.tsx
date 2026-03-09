import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2230] pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/vaneck_direct_white.svg"
              alt="VanEck Direct"
              width={180}
              height={30}
              className="h-7 w-auto"
            />
            <p className="mt-4 text-sm text-gray-400">
              Bouw nu vermogen op voor later.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Ons Product &amp; App</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/hoe-werkt-het" className="text-sm text-gray-400 hover:text-white">Hoe werkt het?</Link></li>
              <li><Link href="/kosten" className="text-sm text-gray-400 hover:text-white">Kostenoverzicht</Link></li>
              <li><Link href="/etf-beleggingsapp" className="text-sm text-gray-400 hover:text-white">- Ideaal voor ETF Beleggen</Link></li>
              <li><Link href="/automatisch-beleggen-app" className="text-sm text-gray-400 hover:text-white">- Automatisch Beleggen App</Link></li>
              <li><Link href="/demo" className="text-sm text-gray-400 hover:text-white">Demo</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Ons bedrijf</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/ons-verhaal" className="text-sm text-gray-400 hover:text-white">Ons verhaal</Link></li>
              <li><Link href="/duurzaamheid" className="text-sm text-gray-400 hover:text-white">ESG bij VanEck Direct</Link></li>
              <li><Link href="/beleggingsapp-voor-beginners" className="text-sm text-gray-400 hover:text-white">Voor Beginnende Beleggers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Overig</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/klachten" className="text-sm text-gray-400 hover:text-white">Klachten</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-700 py-6 md:flex-row">
          <p className="text-xs text-gray-500">&copy; 2024 VanEck Direct&reg;</p>
          <div className="mt-4 flex flex-wrap gap-6 md:mt-0">
            <Link href="/verklaring" className="text-xs text-gray-500 hover:text-white">Toegankelijkheidsverklaring</Link>
            <Link href="/best-execution" className="text-xs text-gray-500 hover:text-white">Best Execution</Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-white">Cookies</Link>
            <Link href="/terms-conditions" className="text-xs text-gray-500 hover:text-white">Terms</Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 bg-[#151b26] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold text-gray-400">Disclaimer website VanEck Direct</p>
          <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
            <strong>BELANGRIJKE INFORMATIE</strong> Dit is een reclame-uiting. Raadpleeg het prospectus van de UCITS en het essenti&euml;le-informatiedocument voordat u definitieve beleggingsbeslissingen neemt.
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
            De informatie op deze website is afkomstig van VanEck Asset Management B.V. (Kamer van Koophandel 34314095), een besloten vennootschap met beperkte aansprakelijkheid naar Nederlands recht, statutair gevestigd te Amsterdam en kantoorhoudende aan de Barbara Strozzilaan 310. VanEck Asset Management B.V. is een beheermaatschappij van UCITS en beschikt over een vergunning conform artikel 2:69b Wft (Wet financieel toezicht) en is als zodanig geregistreerd bij de AFM en DNB. Deze website is bedoeld voor Nederlandse retailbeleggers in Nederland. De informatie is uitsluitend bedoeld om beleggers te voorzien van algemene en voorlopige informatie en mag niet worden opgevat als beleggings-, juridisch of fiscaal advies. VanEck Asset Management B.V. en de aan VanEck Asset Management B.V. verbonden en gelieerde bedrijven (samen &apos;VanEck&apos;) wijzen elke aansprakelijkheid van de hand met betrekking tot beslissingen die de belegger op basis van deze informatie neemt ten aanzien van het kopen, verkopen of aanhouden van beleggingen. Informatie is actueel op de datum van publicatie en kan worden aangepast. Bepaalde verklaringen in dit artikel kunnen ramingen, voorspellingen en andere op de toekomst gerichte verklaringen zijn die niet overeenkomen met de werkelijkheid. Wij achten de informatie die afkomstig is van derden, betrouwbaar. Deze informatie is echter niet onafhankelijk gecontroleerd. De nauwkeurigheid en volledigheid ervan kunnen daarom niet worden gegarandeerd. Er kunnen broker- of transactiekosten in rekening worden gebracht. VanEck geeft geen financieel advies, maar voldoet wel aan de geschiktheidsbeoordeling onder de MiFiD II-richtlijn. Houd er rekening mee dat internet niet altijd een volledig betrouwbare voorziening is voor de overdracht van en toegang tot informatie en dat er storingen, vertragingen en fouten kunnen optreden. VanEck aanvaardt geen aansprakelijkheid voor directe of indirecte schade die verband houdt met het (tijdelijk) niet kunnen openen of gebruiken van deze website, alsmede voor eventuele vertraging of fouten bij het verzenden of ontvangen van berichten, inclusief communicatie en instructies. Deze website biedt geen enkele dienst en/of product aan en is ook niet bedoeld voor ingezetenen van de VS. &apos;Ingezetene van de VS&apos; betekent elke persoon of entiteit die door de Securities and Exchange Commission van tijd tot tijd wordt beschouwd als een &apos;ingezetene van de VS&apos; op grond van Regel 902(k) van de Act van 1933 of andere personen of entiteiten die de bestuurders van VanEck kunnen aanwijzen. Alle rendementsinformatie is gebaseerd op historische gegevens en voorspelt geen toekomstige rendementen. Beleggen brengt risico&apos;s met zich mee, waaronder mogelijk verlies van de hoofdsom.
          </p>
          <p className="mt-3 text-[11px] leading-relaxed text-gray-500">
            Niets in dit materiaal mag in welke vorm dan ook worden verveelvoudigd en er mag ook niet naar worden verwezen in andere publicaties zonder de uitdrukkelijke schriftelijke toestemming van VanEck.
          </p>
          <p className="mt-4 text-[11px] leading-relaxed text-gray-500">&copy; VanEck Asset Management B.V.</p>
        </div>
      </div>
    </footer>
  );
}
