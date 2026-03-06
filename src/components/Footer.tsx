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
            BELANGRIJKE INFORMATIE Dit is een reclame-uiting. Raadpleeg het prospectus van de UCITS en het essenti&euml;le-informatiedocument voordat u definitieve beleggingsbeslissingen neemt. De informatie op deze website is afkomstig van VanEck Asset Management B.V., een besloten vennootschap naar Nederlands recht, statutair gevestigd te Amsterdam. VanEck Asset Management B.V. is een beheermaatschappij van UCITS en beschikt over een vergunning conform artikel 2:69b Wft en is als zodanig geregistreerd bij de AFM en DNB. Deze website is bedoeld voor Nederlandse retailbeleggers in Nederland.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-gray-500">&copy; VanEck Asset Management B.V.</p>
        </div>
      </div>
      <div className="bg-[#0e3065] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-lg font-bold text-white">DOWNLOAD DE APP</p>
              <p className="mt-1 text-sm font-medium text-white">Start nu met VanEck Direct</p>
              <p className="mt-1 text-xs text-gray-300">
                Laat je geld voor je werken - download onze app nu en begin met beheerd beleggen. Beschikbaar in de App Store en Google Play!
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">Investeer in jouw toekomst</p>
              <p className="text-xs text-gray-300">Passend bij jouw situatie.</p>
              <p className="mt-1 text-xs text-gray-400">VanEck, een bekende naam, sinds 1955.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
