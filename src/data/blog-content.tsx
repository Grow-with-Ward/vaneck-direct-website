import { QuoteBlock } from "@/components/BlogArticleTemplate";

const MARTINPHOTO =
  "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/645a0b396fc47533a3d9ef56_PhotoMartijnRozemuller2.jpg";
const LIESPHOTO =
  "https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/6461dbde446d0cb11095ebbc_Profile%20Picture%20Lies2.jpg";

export interface BlogArticleData {
  title: string;
  subtitle?: string;
  description: string;
  content: React.ReactNode;
  footnotes?: string[];
  relatedArticles?: { title: string; href: string }[];
}

export const blogArticles: Record<string, BlogArticleData> = {
  "waarom-van-eck-direct-begonnen": {
    title: "Waarom we VanEck Direct zijn begonnen",
    subtitle: "De oplossing voor de 'niet-beleggende' belegger",
    description:
      "VanEck lanceert een innovatieve beleggingsapp voor de beginnende belegger. Ontdek waarom we VanEck Direct zijn begonnen.",
    footnotes: [
      "AFM: https://www.afm.nl/en/sector/actueel/2022/maart/meer-nederlanders-beleggen-sparen",
      "Fiscale informatie is primair bedoeld voor beleggers die Nederlands belastingplichtig zijn. Verstrekte informatie betreft geen fiscaal advies. Raadpleeg waar nodig een fiscaal adviseur.",
      "Veronderstellende 15% dividendbronbelasting. 3% dividendrendement x 15% bronbelasting = 0,45% extra rendement in geval van aandelen ETFs. Voor obligatie ETFs is dit niet van toepassing.",
    ],
    relatedArticles: [
      {
        title: "Goede voornemens & financiële gezondheid",
        href: "/blog/goede-voornemens-financiele-gezondheid",
      },
      {
        title: "Beleggen: de gemiste kans van Nederland?",
        href: "/blog/beleggen-gemiste-kans-nederland",
      },
      {
        title: "Hoe kan je beginnen met beleggen zonder ervaring?",
        href: "/blog/hoe-beleggen-zonder-ervaring",
      },
    ],
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dit keer brengen we u geen ETF nieuws, maar hebben we iets bijzonders
          om met u te delen: een primeur! VanEck lanceert een innovatieve en
          betrouwbare beleggingsapp, speciaal ontwikkeld voor de beginnende
          belegger die het investeren graag uit handen wil geven aan een écht
          goede partij.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Waarschijnlijk bent u zelf allang bekend met de ins en outs van
          beleggen, maar krijgt u, net als ik, ook wel eens de vraag van
          vrienden, familieleden, buren of zelfs vage kennissen;{" "}
          &ldquo;Hoe kan ik beginnen met beleggen zonder er meteen alles over te
          moeten weten?&rdquo; Lees dan verder!
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Het antwoord op die vraag? VanEck Direct &ndash; een beleggingsapp die
          we speciaal hebben ontwikkeld voor de &ldquo;niet-beleggende
          belegger&rdquo;.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Waarom zou u VanEck Direct aanraden?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Uit onderzoek<sup>1</sup> blijkt dat bijna de helft van de Nederlandse
          huishoudens eigenlijk voldoende financiële ruimte heeft om te
          beleggen, maar dit vaak toch niet doet. De drempel blijkt te hoog door
          tijdgebrek, keuzestress, angst voor marktschommelingen, of simpelweg
          omdat termen als &lsquo;ETF&rsquo; of &lsquo;indexbeleggen&rsquo; ze
          al afschrikken. Voor die mensen, uw familie en vrienden, biedt VanEck
          Direct een eenvoudige start om vermogen op te bouwen zonder dagelijkse
          zorgen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct neemt werk uit handen: er wordt automatisch belegd in
          een aantal voor u waarschijnlijk bekende VanEck ETFs. Aangezien
          beleggen altijd risico&apos;s met zich meebrengt en je een (deel) van
          je inleg kunt verliezen, wordt er een persoonlijk profiel en
          risicoanalyse opgesteld om ervoor te zorgen dat de strategie en het
          risiconiveau aansluiten bij de financiële situatie en doelen van de
          belegger.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          De &ldquo;niet-beleggende belegger&rdquo;
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck noemen we hen de &ldquo;niet-beleggende beleggers&rdquo;:
          mensen die wel willen profiteren van langetermijngroei, maar dan zonder
          dag en nacht de markten te volgen of zich druk te maken over
          instapmomenten. VanEck Direct maakt het mogelijk om volledig
          automatisch te beleggen, zonder in te leveren op controle: men kan
          altijd inleg aanpassen of pauzeren.
        </p>
        <QuoteBlock
          personName="Martijn Rozemuller"
          personTitle="CEO VanEck Europa"
          personPhoto={MARTINPHOTO}
          quote="Met VanEck Direct willen we de barrières voor beleggen wegnemen. Vooral voor de beginnende belegger maar ook als u al ervaring heeft, biedt de app een eenvoudige manier om de basis van de portefeuille in te richten. U hoeft niet meer na te denken over het juiste instapmoment of keuzes te maken wat betreft de asset allocatie."
        />

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Wat zijn de voordelen voor beginnende beleggers?
        </h2>
        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Automatisch beleggen, zonder emotie
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct haalt de emotie uit beleggen. Beleggers hoeven geen
          stressvolle beleggingsbeslissingen te nemen in tijden van
          marktturbulentie. Het beleggingsproces verloopt automatisch, met de
          mogelijkheid om op elk moment de inleg aan te passen of te stoppen.
        </p>
        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Expert in ETFs
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck is een pionier in de ETF-markt als eerste ETF-aanbieder in
          Nederland, met meer dan 15 jaar ervaring. Bij VanEck Direct profiteren
          beleggers van zorgvuldig samengestelde ETF-portefeuilles, beheerd door
          experts met een bewezen trackrecord in het aanbieden van betrouwbare
          en efficiënte beleggingsproducten.
        </p>
        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Geen dividendlekkage, meer rendement
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct voorkomt dividendlekkage door gebruik te maken van ETFs
          met de Fiscale BeleggingsInstelling (FBI) status. Dit stelt Nederlands
          belastingplichtige beleggers in staat om de ingehouden dividendbelasting
          terug te vragen of te verrekenen met hun Nederlandse belastingaangifte.
          Het voorkomen van dividendlekkage zorgt voor 0,45%<sup>2,3</sup> extra
          rendement per jaar op de aandelen-ETFs. Dit draagt aanzienlijk bij aan
          het totale rendement voor de VanEck Direct-belegger.
        </p>
        <QuoteBlock
          personName="Lies Oudemans"
          personTitle="Director VanEck Direct"
          personPhoto={LIESPHOTO}
          quote="Veel mensen van mijn leeftijd willen graag beginnen met beleggen. Maar na het openen van een rekening bij een broker worden ze al snel overweldigd door de hoeveelheid keuzes en het jargon. Dat voelde ik zelf ook, toen ik in 2017 mijn eigen beleggingen startte. Bij VanEck vond ik de kans om een app te ontwikkelen die juist deze drempels weghaalt, zodat ook beginners met een gerust hart kunnen starten."
        />
      </>
    ),
  },

  "goede-voornemens-financiele-gezondheid": {
    title: "Goede voornemens & financiële gezondheid",
    subtitle: "Beginnen met beleggen als goed voornemen",
    description:
      "Ontdek hoe beleggen als goed voornemen je financiële gezondheid op de lange termijn kan verbeteren.",
    relatedArticles: [
      {
        title: "Hoe kan je beginnen met beleggen zonder ervaring?",
        href: "/blog/hoe-beleggen-zonder-ervaring",
      },
      {
        title: "Beleggen: de gemiste kans van Nederland?",
        href: "/blog/beleggen-gemiste-kans-nederland",
      },
      {
        title: "Waarom zijn we VanEck Direct begonnen?",
        href: "/blog/waarom-van-eck-direct-begonnen",
      },
    ],
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          De feestdagen staan weer voor de deur. Gezellige diners, lichtjes in
          de boom, en &mdash; zoals elk jaar &mdash; de traditie van goede
          voornemens.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Misschien hebben je familieleden ze al verklapt: vaker sporten, meer
          tijd voor hobby&apos;s, of gezonder eten. Maar hoe zit het met een
          goede financiële gezondheid? Vaak blijft dat gesprek hangen bij de
          vraag wie de rekening voor het kerstdiner betaalt. Maar waarom niet
          een stapje verder gaan?
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Een goed voornemen met een groot lange termijn effect
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Het lijkt misschien een beetje gek om tijdens het dessert te beginnen
          over beleggen. Toch is het een perfect moment. Kerst draait immers om
          vooruitkijken en samen keuzes maken die het leven mooier maken.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Voor wie nog niet belegt, is het bespreekbaar maken van
          vermogensopbouw misschien wel een van de meest waardevolle voornemens.
          Het gaat niet om grootse plannen of direct diepe gesprekken over
          aandelen, maar om samen stilstaan bij hoe je met kleine stappen iets
          groots kunt bereiken.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Het mooie van beleggen is namelijk dat je door vroeg te beginnen kunt
          profiteren van het effect van tijd: een paar euro&apos;s per maand die
          je nu opzij zet, kunnen dankzij groei en rendement over jaren
          uitgroeien tot een flink bedrag. Het is een simpel idee, maar eentje
          met een enorme impact op de lange termijn.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Aangezien beleggen altijd risico&apos;s met zich meebrengt en je een
          (deel) van je inleg kunt verliezen, wordt er een persoonlijk profiel
          en risicoanalyse opgesteld. Hiermee zorgen we ervoor dat de strategie
          en het risiconiveau aansluiten bij jouw financiële situatie en doelen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          En wat is er mooier dan over tien, twintig of zelfs dertig jaar terug
          te kijken op je financiële doelen en te denken: &lsquo;Wat ben ik blij
          dat we toen dat gesprek aan tafel hebben gevoerd!&rsquo;
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Van droom naar plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een kleine knipoog van ons: mocht iemand op zoek zijn naar een simpele
          manier om te starten, zonder keuzestress, dan kennen wij wel een
          oplossing. Bij VanEck Direct helpen we je om beleggen eenvoudig te
          houden, zelfs als je er geen ervaring mee hebt. Het kan een mooie
          eerste stap zijn voor dat goede voornemen op financieel gebied.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dus, pak deze feestdagen het moment! Wie weet inspireer je een ander
          (of jezelf) om dit jaar écht werk te maken van financiële gezondheid.
          En eerlijk, dat klinkt toch beter dan een abonnement op de sportschool?
        </p>
        <p className="mt-8 text-sm italic text-[#4a5568]">
          Deze informatie is afkomstig uit de nieuwsbrief van VanEck Direct —
          December 2024.
        </p>
      </>
    ),
  },

  "beleggen-gemiste-kans-nederland": {
    title: "Beleggen: De gemiste kans van Nederland?",
    description:
      "Ontdek waarom de meeste Nederlanders nog steeds niet beleggen en wat de risico's zijn van níét beleggen.",
    relatedArticles: [
      {
        title: "Hoe kan je beginnen met beleggen zonder ervaring?",
        href: "/blog/hoe-beleggen-zonder-ervaring",
      },
      {
        title: "Goede voornemens & financiële gezondheid",
        href: "/blog/goede-voornemens-financiele-gezondheid",
      },
      {
        title: "Waarom zijn we VanEck Direct begonnen?",
        href: "/blog/waarom-van-eck-direct-begonnen",
      },
    ],
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Nederlanders hebben een recordbedrag van ruim 600 miljard euro op
          betaal- en spaarrekeningen staan. Terwijl dat spaargeld zekerheid
          biedt, verliest het tegelijkertijd koopkracht door inflatie en lage
          rentes. Beleggen wordt vaak gezien als ingewikkeld of risicovol, maar
          uit onderzoek van DUFAS blijkt dat 73% van de Nederlanders erkent dat
          beleggen op lange termijn meer oplevert dan sparen. Toch zet een grote
          groep de stap niet.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Waarom blijft Nederland sparen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Nederlanders zijn van oudsher spaarders. Veiligheid en controle spelen
          hierin een grote rol. Het idee dat geld altijd direct beschikbaar is,
          voelt geruststellend. Maar er zit een keerzijde aan deze spaardrang.
          Door de lage rente en inflatie wordt spaargeld elk jaar minder waard.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Uit het onderzoek blijkt dat bijna de helft van de Nederlanders denkt
          te weinig kennis te hebben om te beleggen. Dit weerhoudt hen ervan om
          hun geld voor zich te laten werken. Tegelijkertijd heeft ruim de helft
          van de huishoudens volgens de AFM voldoende buffer om verantwoord te
          kunnen beleggen. De drempel is dus niet financieel, maar zit vooral in
          onbekendheid en onzekerheid.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          De risico&apos;s van níét beleggen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Vaak wordt er veel nadruk gelegd op de risico&apos;s van beleggen,
          maar er is ook een risico verbonden aan niet-beleggen: je spaargeld
          verliest waarde. In tijden van hoge inflatie wordt dit effect nog
          sterker. Door een deel van je geld slim te beleggen, kun je het juist
          laten groeien in plaats van zien verdampen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Het goede nieuws? Je hoeft niet in één keer een groot bedrag te
          beleggen. Met maandelijks beleggen, zelfs met een klein bedrag, kun je
          al starten, zonder dat je direct grote risico&apos;s neemt. Zo bouw je
          op een verantwoorde manier vermogen op.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Jongeren en beleggen: grote interesse, weinig kennis
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Opvallend is dat jongeren steeds meer interesse tonen in beleggen. Zij
          zien het als een manier om financieel sterker te staan en vermogen op
          te bouwen voor de toekomst. Maar hier schuilt een risico: veel
          jongeren halen hun kennis bij finfluencers of investeren in risicovolle
          producten zoals crypto.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Hoewel beleggen op de lange termijn een effectieve manier is om
          vermogen te laten groeien, is het belangrijk om te weten hoe je dat op
          een verantwoorde manier doet. DUFAS pleit daarom voor betere
          financiële educatie, zodat jongeren (en volwassenen) met meer kennis
          en vertrouwen kunnen starten.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Van sparen naar beleggen, zonder keuzestress
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Voor wie de overstap wil maken van sparen naar beleggen, maar niet
          goed weet hoe, biedt VanEck Direct een eenvoudige oplossing. Onze app
          neemt het beleggingsproces uit handen en helpt je met een breed
          gespreide ETF-portefeuille. Je hoeft geen expert te zijn of dagelijks
          de beurs te volgen. Gewoon beginnen, zonder keuzestress.
        </p>
        <p className="mt-8 text-sm italic text-[#4a5568]">
          Deze informatie is afkomstig uit de nieuwsbrief van VanEck Direct —
          Februari 2025.
        </p>
      </>
    ),
  },

  "hoe-beleggen-zonder-ervaring": {
    title: "Hoe kan je beginnen met beleggen zonder ervaring",
    subtitle: "Beginnen met beleggen zonder ervaring: VanEck Direct uitgelegd",
    description:
      "Ontdek hoe VanEck Direct beleggen toegankelijk maakt voor beginners, zonder ingewikkelde keuzes.",
    footnotes: [
      "Rabobank: https://www.rabobank.nl/kennis/d011495324-jongeren-beleggen-vaker-dan-ouderen-26-beleggers-heeft-cryptos",
    ],
    relatedArticles: [
      {
        title: "Beleggen: de gemiste kans van Nederland?",
        href: "/blog/beleggen-gemiste-kans-nederland",
      },
      {
        title: "Goede voornemens & financiële gezondheid",
        href: "/blog/goede-voornemens-financiele-gezondheid",
      },
      {
        title: "Waarom zijn we VanEck Direct begonnen?",
        href: "/blog/waarom-van-eck-direct-begonnen",
      },
    ],
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Met VanEck Direct hebben we een vermogensbeheerapp ontwikkeld waarmee
          we beleggen toegankelijk maken voor een hele nieuwe doelgroep: de
          spaarder die wel iets met zijn geld wil doen, maar de stap naar
          beleggen spannend vindt. Beleggen is anders dan sparen: het kent meer
          risico&apos;s (je kan een deel van je inzet verliezen), maar ook
          groeipotentieel. VanEck Direct helpt klanten om die stap verantwoord
          te zetten.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Beleggen toegankelijk maken voor nieuwe beleggers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Daarom hebben we gekozen voor een eenvoudige aanpak: breed en gespreid
          beleggen, zonder ingewikkelde keuzes of de beurs dagelijks te hoeven
          volgen. Ons doel is dat klanten laagdrempelig kennis kunnen maken met
          beleggen en zich daar stap voor stap comfortabel bij voelen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          VanEck Direct: beleggen voor de niet-beleggende belegger
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Onze doelgroep noemen wij de{" "}
          <em>niet-beleggende beleggers</em>: mensen die wél willen profiteren
          van de kracht van de lange termijn, maar zonder dagelijks de beurs te
          volgen of zich zorgen te maken over instapmomenten.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Uit een recent onderzoek<sup>1</sup> blijkt dat bijna de helft van de
          Nederlanders niet belegt, omdat zij het te ingewikkeld vinden.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct helpt drempels tot beleggen te verlagen &mdash; voor
          iedereen die méér wil doen met zijn geld, maar het ingewikkeld vindt
          om te beginnen. Wij beleggen automatisch voor u in een breed
          gespreide portefeuille van vier door ons zorgvuldig geselecteerde ETFs
          (Exchange Traded Funds). Zo bouwt u stap voor stap vermogen op, zonder
          moeilijke keuzes te hoeven maken of de markt te timen.
        </p>
        <QuoteBlock
          personName="Martijn Rozemuller"
          personTitle="CEO Europa"
          personPhoto={MARTINPHOTO}
          quote="Met VanEck Direct nemen we barrières voor beleggen weg. U hoeft niet meer te twijfelen over het juiste moment om te beginnen of hoe u uw geld moet verdelen – wij beleggen automatisch gespreid voor u."
        />

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Stabiliteit boven spanning
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          In de portefeuilles van VanEck Direct vindt u een evenwichtige mix van
          vier brede ETFs die beleggen in aandelen, obligaties en beursgenoteerd
          vastgoed. Deze samenstelling zorgt voor spreiding en een goede balans
          tussen risico en rendement. Spreiding verkleint risico&apos;s, maar
          sluit verliezen in mindere marktperiodes niet uit.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bewust níet opgenomen zijn meer thematische ETFs. Zulke beleggingen
          zijn doorgaans volatieler en afhankelijker van marktsentiment of
          geopolitieke gebeurtenissen. Die vinden wij beter passen bij de
          ervaren belegger die actief keuzes maakt, en niet bij de eerste stap
          die wij met VanEck Direct faciliteren.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Voor uzelf of iemand in uw omgeving
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Misschien bent u zelf al een actieve belegger die graag zijn eigen
          ETFs kiest. Dan is VanEck Direct waarschijnlijk minder relevant voor u.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Toch merken we dat veel ervaren beleggers in hun omgeving mensen hebben
          die interesse tonen, maar de stap naar beleggen spannend vinden. Voor
          hen kan VanEck Direct een laagdrempelige manier zijn om kennis te maken
          met beleggen &mdash; eenvoudig, gespreid en zonder ingewikkelde keuzes.
          Zo helpt u anderen op weg, zonder dat zij zich direct in alle details
          hoeven te verdiepen.
        </p>
      </>
    ),
  },

  "schenk-financiele-rust": {
    title: "Schenk jezelf financiële rust - en de kans op rendement",
    description:
      "Ontdek hoe je jezelf financiële rust kunt schenken door slim en gespreid te beleggen met VanEck Direct.",
    relatedArticles: [
      {
        title: "Hoe kan je beginnen met beleggen zonder ervaring?",
        href: "/blog/hoe-beleggen-zonder-ervaring",
      },
      {
        title: "Beleggen: de gemiste kans van Nederland?",
        href: "/blog/beleggen-gemiste-kans-nederland",
      },
      {
        title: "Goede voornemens & financiële gezondheid",
        href: "/blog/goede-voornemens-financiele-gezondheid",
      },
    ],
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          De mooiste cadeaus passen niet onder de kerstboom. Soms zijn ze niet
          tastbaar, maar voelbaar. Rust, zekerheid, toekomst. En juist in een
          maand waarin we veel geven aan anderen, vergeten we dat we ook iets aan
          onszelf mogen schenken &mdash; iets wat langer meegaat dan het
          inpakpapier en de kerstkransjes.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Een cadeau dat groeit met de tijd
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Financiële rust komt niet van vandaag op morgen. Het groeit, net als
          een traditie of een goed gesprek aan de eettafel, langzaam, met
          aandacht en consistentie. Beleggen is daar een mooi voorbeeld van.
          Niet omdat het spannend is, maar juist omdat het op de achtergrond kan
          werken, jaar na jaar.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct geloven we dat vermogen opbouwen niet ingewikkeld
          hoeft te zijn en dat iedereen die stap kan zetten. Met onze gespreide
          ETFs (Exchange Traded Funds) investeer je automatisch in honderden
          bedrijven en sectoren wereldwijd, zonder dat je er dagelijks naar
          hoeft om te kijken.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Door maandelijks te beleggen maak je gebruik van wat misschien wel de
          krachtigste factor in beleggen is: tijd. Wie vroeg begint en consistent
          blijft, vergroot de kans dat zijn geld op de lange termijn kan
          meegroeien met de markt &mdash; stap voor stap, in eigen tempo.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Rust in plaats van ruis
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          In een wereld die steeds sneller draait, is het prettig om te weten
          dat sommige dingen juist beter werken als je even niets doet. Passief
          beleggen voor de lange termijn vraagt geen continue actie, maar
          vertrouwen in de weg die je bewandelt. Dat is wat VanEck Direct
          mogelijk maakt: eenvoudig en gespreid beleggen met een
          langetermijnvisie, zonder keuzestress of verborgen complexiteit.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Je hoeft niet de markt te timen. Je hoeft niet alles te weten. Je
          hoeft alleen te beginnen &mdash; en vol te houden.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Financiële rust als goed voornemen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dus terwijl je nadenkt over cadeaus, plannen en goede voornemens: denk
          ook aan jezelf. Misschien is dit hét moment om te beginnen met bouwen
          aan iets wat er écht toe doet &mdash; jouw financiële toekomst.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct helpt je daarbij, met gespreide ETFs, lage kosten en de
          overtuiging dat beleggen een marathon is, geen sprint.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Want uiteindelijk is rust misschien wel het mooiste rendement dat er is.
        </p>
        <p className="mt-8 text-sm italic text-[#4a5568]">
          Deze informatie is afkomstig uit de nieuwsbrief van VanEck Direct —
          December 2025.
        </p>
      </>
    ),
  },

  "4-dingen-startende-belegger": {
    title: "4 dingen die elke startende belegger zou moeten begrijpen",
    subtitle: "Starten met beleggen? Onze app VanEck Direct maakt dat eenvoudig!",
    description:
      "4 essentiële beleggingsprincipes voor elke startende belegger, van spreiding tot risicoprofielen.",
    relatedArticles: [
      {
        title: "Schenk jezelf financiële rust & de kans op rendement",
        href: "/blog/schenk-financiele-rust",
      },
      {
        title: "Hoe kan je beginnen met beleggen zonder ervaring?",
        href: "/blog/hoe-beleggen-zonder-ervaring",
      },
      {
        title: "Beleggen: de gemiste kans van Nederland?",
        href: "/blog/beleggen-gemiste-kans-nederland",
      },
    ],
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Januari staat vaak in het teken van goede voornemens. Misschien wil je
          meer bewegen, gezonder eten of minder schermtijd. Maar hoe zit het met
          je financiële gezondheid?
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Veel mensen willen &lsquo;ooit nog eens&rsquo; beginnen met beleggen,
          maar schuiven het telkens voor zich uit. Geen tijd, geen kennis, of
          simpelweg keuzestress. Herkenbaar? Misschien voor jou, of voor iemand
          in je omgeving die wel wil beginnen met beleggen, maar niet goed weet
          hoe.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct geloven we dat eenvoudig beleggen mogelijk is en
          geen ingewikkelde of stressvolle ervaring hoeft te zijn. Juist door het
          simpel te houden en automatisch te laten beleggen via een
          vermogensbeheerapp, wordt het ineens wél haalbaar, ook als je er weinig
          tijd of ervaring mee hebt.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          4 dingen die elke startende belegger zou moeten begrijpen
        </h2>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          1. Gespreid beleggen is je beste vriend
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Beleggen is altijd een afweging tussen het risico dat je neemt en het
          rendement dat je nastreeft. Door je geld te spreiden over meerdere
          bedrijven, sectoren en regio&apos;s verklein je de afhankelijkheid van
          de prestaties van één specifieke belegging of markt. Spreiding in je
          beleggingen verkleint de impact van bijvoorbeeld economische of
          geopolitieke tegenvallers, maar neemt deze risico&apos;s nooit helemaal
          weg. Hoewel spreiding de kans op grote verliezen verkleint, dempt het
          ook uitzonderlijk hoge rendementen. Een eenvoudige en effectieve manier
          om te spreiden is via ETFs (Exchange Traded Funds).
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          2. Tijd werkt voor je, niet tegen je
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Beleggen is geen sprint, maar een marathon. Door beleggingen zoals ETFs
          langere tijd vast te houden, kunnen het rente-op-rente-effect én
          mogelijk marktherstel na dalingen meewerken aan de groei van je
          vermogen. Een langere beleggingshorizon vergroot de kans dat tijdelijke
          schommelingen worden opgevangen. Niet voor niets zeggen we: hoe langer
          je belegt, hoe groter de kans op een positief rendement.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          3. Consistentie en emotie
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Regelmatig beleggen, bijvoorbeeld door maandelijks een vast bedrag in
          te leggen, brengt structuur in je beleggingsaanpak, ook wanneer markten
          schommelen. Door vooraf een plan te maken en je daaraan te houden,
          verklein je de kans dat emoties op korte termijn je beslissingen
          bepalen. Automatisch inleggen kan daarbij helpen, maar is vooral een
          praktisch hulpmiddel om consistent te blijven.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          4. Jouw risicoprofiel is persoonlijk
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Iedereen kijkt anders naar risico. Waar de één prima slaapt tijdens
          marktschommelingen, voelt de ander zich daar juist onrustig bij.
          Daarom is het belangrijk om vooraf na te denken over hoeveel risico jij
          prettig vindt en wat past bij je financiële doelen en mogelijkheden.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Hoe hoger het verwachte rendement, hoe groter vaak ook de kans op
          tussentijdse dalingen. Door een aanpak te kiezen die aansluit bij jouw
          risicoprofiel, vergroot je de kans dat je met meer vertrouwen belegt en
          deze aanpak langer volhoudt.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          De makkelijkste weg naar je eerste belegging
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Voor veel mensen voelt de stap naar beleggen groter dan hij hoeft te
          zijn. Niet iedereen wil zich verdiepen in beursontwikkelingen of
          financiële producten: maar dat hóéft ook niet.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct kun je laagdrempelig aan de slag, op een manier die
          past bij jouw situatie:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>
            — Je begint met het bepalen van je risicoprofiel, zodat de
            beleggingsaanpak aansluit bij wat jij comfortabel vindt.
          </li>
          <li>
            — Vervolgens kies je zelf je maandelijkse inleg of een eenmalige
            inleg. Je inleg is op elk moment flexibel en aanpasbaar.
          </li>
          <li>
            — Daarna beleggen wij automatisch in een gespreide mix van ETFs.
            Jij hoeft dus geen keuzes te maken tussen losse aandelen of fondsen.
          </li>
          <li>
            — En misschien wel het belangrijkste: je behoudt de controle.
            Pauzeren, stoppen of aanpassen kan altijd.
          </li>
        </ul>
      </>
    ),
  },

  "rendement-berekenen": {
    title: "Rendement berekenen",
    subtitle: "Bereken eenvoudig het verwachte rendement van beleggen",
    description:
      "Lees meer over hoe je beleggingsrendement berekent en ontdek de kracht van samengestelde rente.",
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Wanneer je belegt, is het vaak verleidelijk om vooral naar de korte
          termijn te kijken: hoe presteert de markt vandaag of deze maand? Toch
          zit de echte kracht van beleggen juist in de lange termijn. Door
          middel van samengestelde rente groeit niet alleen je oorspronkelijke
          inleg, maar ook het rendement dat je in eerdere jaren hebt opgebouwd.
          Hoe langer je de tijd hebt, hoe groter dit sneeuwbaleffect wordt.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een relatief bescheiden maandelijkse inleg kan na tien, twintig of
          dertig jaar uitgroeien tot een aanzienlijk vermogen. Dat geeft inzicht
          en helpt je om bewuster keuzes te maken voor jouw financiële toekomst.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Veelgestelde vragen over rendement
        </h2>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Wat betekent beleggingsrendement?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Je beleggingsrendement is het resultaat (winst of verlies) op je
          beleggingen, vaak uitgedrukt in %. Het is het verschil tussen de
          huidige waarde van je beleggingen en de aankoopwaarde. Je kunt
          rendement ook over een periode berekenen: eindwaarde minus beginwaarde,
          gedeeld door de beginwaarde.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Welk percentage vul ik in?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Het verwachte rendement (%) is afhankelijk van het risico dat je neemt
          &mdash; hoger risico kan op lange termijn een hoger, maar ook
          onzekerder, rendement opleveren. Er is dus geen &lsquo;juist&rsquo;
          getal. Reken met drie scenario&apos;s (ongunstig, verwacht, gunstig)
          om het mogelijke resultaatbereik te zien.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Welke beleggingen hebben het hoogste rendement?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Rendement, risico en kosten horen bij elkaar. In het algemeen geldt:
          hoger verwacht rendement = meer risico. Welke keuze je ook maakt,
          beleggen is nooit zonder risico; je kunt (een deel van) je inleg
          verliezen.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Welke invloed hebben kosten op je rendement?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Kosten worden jaarlijks op je vermogen ingehouden en verlagen het netto
          rendement. Door het samengestelde rente-effect werken kosten ook
          cumulatief: ze drukken niet alleen dit jaar op je rendement, maar ook
          op de toekomstige rendementen die over dat vermogen worden behaald.
          Kleine procentuele verschillen kunnen op lange termijn groot uitpakken.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Wat zijn de risico&apos;s van beleggen?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Koersen schommelen en er is geen garantie op winst. Risico verklein je
          door te spreiden over meerdere beleggingen, een langere
          beleggingshorizon aan te houden en periodiek in te leggen. Maar
          beleggen blijft altijd risico&apos;s met zich meebrengen.
        </p>

        <h3 className="font-heading mb-3 mt-6 text-xl font-semibold text-[#211f54]">
          Kun je ook beleggen met kleine bedragen?
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Ja, via automatisch maandelijks inleggen kun je ook met kleine bedragen
          beleggen. Kosten zijn daarbij nog steeds van toepassing en kunnen
          relatief zwaarder wegen bij kleine bedragen. Consistent inleggen helpt
          om richting een gewenst doelbedrag te groeien.
        </p>
      </>
    ),
  },

  "wat-is-een-etf": {
    title: "Wat is een ETF",
    description:
      "Alles over Exchange Traded Funds (ETFs): hoe ze werken, de voordelen en waarom ze geschikt zijn voor beleggers.",
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een ETF (Exchange Traded Fund) is eigenlijk een slimme mix van
          beleggingen. Denk aan aandelen, obligaties of andere
          beleggingsproducten, die samen in één pakket zitten. In plaats van dat
          je zelf allemaal losse aandelen kiest, koop je via een ETF een klein
          stukje van die hele mix. Je hoeft dus niet zelf te puzzelen en omdat
          een ETF op de beurs verhandeld wordt, kun je hem net als een aandeel
          kopen of verkopen, gewoon via een beleggingsplatform.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Hoe werkt een ETF
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Stel je voor dat je een ETF koopt, gaat het gemiddeld goed met die
          bedrijven? Dan stijgt de waarde van jouw ETF mee. Gaat het minder? Dan
          daalt je ETF. Wat prettig is: je hoeft niet zelf uit te zoeken welk
          bedrijf goed presteert. De ETF regelt automatisch de spreiding voor je.
          Daardoor is het risico meestal kleiner dan wanneer je in één bedrijf
          zou beleggen. Echter, onthoudt dat ook ETF-beleggen risico&apos;s met
          zich mee brengt.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Verschil tussen ETFs en aandelen
        </h2>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>
            — <strong>Aandeel:</strong> je koopt een klein stukje van één bedrijf
          </li>
          <li>
            — <strong>ETF:</strong> je koopt een klein stukje van een hele groep
            bedrijven of beleggingen
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij een los aandeel ben je afhankelijk van het succes of falen van dat
          ene bedrijf. Bij een ETF spreid je je kansen én je risico over meerdere
          bedrijven tegelijk. Dat zorgt vaak voor minder schommelingen en daarbij
          kun je meer rust ervaren in het beleggen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Waarom kiezen voor ETF beleggen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          ETFs kunnen handig zijn als je wil starten met beleggen op een
          eenvoudige en overzichtelijke manier.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Voor- en nadelen van ETFs
        </h2>
        <p className="mt-4 font-semibold text-[#211f54]">Voordelen</p>
        <ul className="mt-2 space-y-1 text-base leading-relaxed text-[#4a5568]">
          <li>— Brede spreiding in één product</li>
          <li>— Lage kosten ten opzichte van actief beheerde fondsen</li>
          <li>— Transparant: je weet altijd waarin je belegt</li>
          <li>— Verhandelbaar op de beurs gedurende de dag</li>
        </ul>
        <p className="mt-4 font-semibold text-[#211f54]">Nadelen</p>
        <ul className="mt-2 space-y-1 text-base leading-relaxed text-[#4a5568]">
          <li>— Beperkt uitzonderlijk hoge rendementen door spreiding</li>
          <li>— Je volgt de index, je verslaat hem niet</li>
          <li>— Koersschommelingen zijn altijd mogelijk</li>
        </ul>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Zijn ETFs veilig?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Geen enkele belegging is geheel zonder risico, maar ETFs worden vaak
          als relatief veilig gezien vanwege de spreiding en transparantie. Let
          op: de waarde van een ETF kan schommelen, zeker op de korte termijn.
          Maar hoe langer je belegt, hoe groter de kans dat je tijdelijke dalingen
          weer ziet herstellen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Kan ik ook met kleine bedragen beginnen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Jazeker! En dat is juist een van de grote voordelen. Je hoeft geen
          duizenden euro&apos;s klaar te hebben staan. Je kunt bijvoorbeeld al
          beginnen met 50 euro per maand. Door regelmatig te beleggen, bouw je zo
          op een rustige manier vermogen op. Dat heet ook wel &lsquo;periodiek
          beleggen&rsquo;. Dit zorgt ervoor dat je automatisch mee beweegt met de
          markt, zonder zelf te hoeven timen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Voor wie is een ETF geschikt
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          ETFs zijn er voor mensen die willen beleggen zonder er dagelijks mee
          bezig te zijn. Ze zijn geschikt voor iedereen die gespreid, rustig en
          op de lange termijn wil beleggen. Dus als jij denkt: &lsquo;Ik wil
          starten met beleggen, maar niet elke dag koersen checken. Ik wil
          opbouwen met overzicht en zonder gedoe. Beleggen voor de toekomst is
          geen sprint maar een marathon&rsquo;, dan is een ETF een mooie eerste
          stap!
        </p>
      </>
    ),
  },

  "etf-kopen-2": {
    title: "ETF kopen",
    description:
      "Ontdek hoe je eenvoudig een ETF koopt, waar je op moet letten en hoe je kunt beginnen via een beleggingsplatform.",
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een ETF kopen klinkt misschien als iets ingewikkelds, maar dat valt
          reuze mee! In dit artikel leg ik je rustig uit hoe je een ETF koopt,
          waar je op moet letten en hoe je eenvoudig een eerste stap zet via een
          beleggingsplatform, bijvoorbeeld zoals VanEck Direct.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Wat is een ETF ook alweer?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een ETF is eigenlijk een slimme mix van beleggingen. Denk aan aandelen,
          obligaties of andere beleggingsproducten, die samen in één pakket
          zitten. In plaats van dat je zelf allemaal losse aandelen kiest, koop
          je via een ETF een klein stukje van die hele mix. Je hoeft dus niet
          zelf te puzzelen en omdat een ETF op de beurs verhandeld wordt, kun je
          hem net als een aandeel kopen of verkopen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Waar kun je ETFs kopen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een ETF koop je gewoon via een beleggingsplatform of beleggingsapp, net
          als een aandeel. Belangrijk is dat je een platform kiest dat bij jou
          past:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>— Vind je het prettig als alles overzichtelijk is?</li>
          <li>— Wil je automatisch kunnen beleggen?</li>
          <li>— Let je op kosten?</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Check altijd of het platform betrouwbaar is en of de ETFs die jij wilt
          kopen beschikbaar zijn.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Waar moet je op letten als je een ETF koopt?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Hoewel het technisch vrij simpel is, zijn er een paar dingen die handig
          zijn om te weten voordat je een ETF koopt:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>
            — <strong>Kosten:</strong> ETFs zijn meestal goedkoop, maar let op
            transactiekosten of servicekosten van het platform
          </li>
          <li>
            — <strong>Spreiding:</strong> Hoe breder de ETF gespreid is, hoe
            stabieler je belegging meestal is
          </li>
          <li>
            — <strong>Valuta:</strong> Sommige ETFs noteren in dollars of andere
            valuta, dat kan invloed hebben op je rendement
          </li>
          <li>
            — <strong>Dividend:</strong> Kijk of de ETF dividend uitkeert, en
            misschien zelfs herbelegt, of juist niet
          </li>
        </ul>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Wanneer koop je een ETF?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Goede vraag! Veel mensen willen precies het juiste moment kiezen. Maar
          om heel eerlijk te zijn, is dat bijna onmogelijk. Daarom kiezen veel
          beleggers ervoor om regelmatig kleine bedragen te investeren,
          bijvoorbeeld elke maand. Zo spreid je het risico over de tijd. Soms
          koop je wat duurder, soms goedkoper, maar gemiddeld stap je gunstiger
          in. En nee, je hoeft echt niet te wachten op &lsquo;de perfecte
          dip&rsquo;. Begin liever rustig en consistent.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Zelf kopen of automatisch beleggen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Er zijn twee veelgebruikte methodes om aan ETFs te komen:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>
            — <strong>Zelf kopen:</strong> je logt jezelf in bij je broker, kiest
            de ETF die je wil en plaatst daarvan een order
          </li>
          <li>
            — <strong>Automatisch beleggen:</strong> je stelt een keer een
            maandelijkse inleg in en het systeem doet de rest voor je
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Voor wie overzicht en gemak wil, is automatisch beleggen een fijne
          keuze. Je bouwt zonder moeite aan je vermogen en voorkomt dat je op
          emotie gaat handelen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Kan ik ook ETFs kopen met een klein bedrag?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Ja, dat kan zeker! Bij veel platforms kun je al starten vanaf ongeveer
          €50. Het belangrijkste is niet het bedrag zelf, maar dat je consistent
          belegt.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Kan een ETF ook minder waard worden?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Ja, dat zou kunnen. Net als andere soorten beleggingen, kan de waarde
          van een ETF schommelen. Als de markt waarin jouw ETF zit daalt, daalt
          jouw ETF mee. Beleggen brengt altijd risico&apos;s met zich mee. Bij
          een goed gediversifieerde ETF is het specifieke risico kleiner dan bij
          losse aandelen door de mix van sectoren die de ETF bezit.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Moet ik elke dag bijhouden hoe mijn ETF het doet?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Nee hoor, juist niet eigenlijk! ETFs zijn bedoeld voor rust en eenvoud.
          Als je elke dag koersen gaat checken, maak je het jezelf onnodig
          moeilijker. Kies liever voor een heldere strategie, beleg maandelijks
          een vast bedrag, en laat het zo veel mogelijk met rust.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Nieuwsgierig geworden?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Neem vooral een kijkje in de VanEck Direct app. Daar maken we beleggen
          niet spannend, maar juist begrijpelijk en passend bij jouw tempo.
        </p>
      </>
    ),
  },

  "automatisch-maandelijks-beleggen": {
    title: "Automatisch maandelijks beleggen",
    description:
      "Ontdek wat automatisch beleggen is, hoe het werkt bij ETFs en of het iets is voor jouw situatie.",
    content: (
      <>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Wil je starten met beleggen, maar liever niet elke maand zelf inloggen,
          kiezen en klikken? Dan is automatisch beleggen misschien wel wat voor
          jou. In dit artikel leggen we je rustig uit wat automatisch beleggen
          is, hoe het werkt bij ETFs en of het iets is dat bij jouw situatie past.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Wat is automatisch beleggen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Automatisch beleggen betekent dat je elke maand automatisch een bedrag
          investeert, bijvoorbeeld €50 of €100 &mdash; zonder dat je daar steeds
          een handeling voor hoeft uit te voeren. Het werkt eigenlijk net als een
          automatisch incasso. Je stelt het één keer in en vanaf dat moment wordt
          er maandelijks belegd in een ETF die jij van tevoren hebt gekozen. Zo
          kun je vermogen opbouwen zonder dat je steeds hoeft na te denken of je
          &lsquo;nu het juiste moment&rsquo; hebt gekozen.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Hoe werkt automatisch beleggen (bij ETFs)?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Je belegt automatisch in één of meerdere ETFs. Je kiest zelf:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>
            — <strong>Hoeveel</strong> je per maand inlegt
          </li>
          <li>
            — In <strong>welke ETFs</strong> je belegt
          </li>
          <li>
            — Op <strong>welke datum</strong> je wilt dat de inleg plaatsvindt
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Vervolgens gaat alles vanzelf. Je hoeft niet meer te timen en geen
          keuzes meer te maken &mdash; je laat het systeem gewoon voor je
          werken! En omdat je maandelijks belegt koop je soms wat duurder en
          soms wat goedkoper. Dit haalt de scherpe randjes van koersschommelingen
          af!
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Voor- en nadelen automatisch beleggen
        </h2>
        <p className="mt-4 font-semibold text-[#211f54]">Voordelen:</p>
        <ul className="mt-2 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>— Je bouwt discipline op, zonder er steeds over na te hoeven denken</li>
          <li>
            — Je voorkomt emotionele beslissingen, zoals verkopen als de beurs
            even tegenzit
          </li>
          <li>
            — Je profiteert van koersschommelingen door gemiddeld in te stappen
          </li>
          <li>— Je maakt beleggen een gewoonte, net als sparen</li>
        </ul>
        <p className="mt-4 font-semibold text-[#211f54]">Nadelen:</p>
        <ul className="mt-2 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>— Je hebt iets minder controle over het moment van aankoop</li>
          <li>
            — Minder geschikt voor mensen die graag actief willen beleggen of
            zelf willen bijsturen
          </li>
        </ul>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Is automatisch beleggen iets voor jou?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Stel jezelf de volgende vragen:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>
            — Wil ik op de <strong>lange termijn iets opbouwen</strong>?
          </li>
          <li>
            — Wil ik <strong>niet telkens bezig</strong> zijn met wanneer ik moet
            kopen en verkopen?
          </li>
          <li>
            — Wil ik <strong>rustig en gespreid</strong> beginnen met beleggen?
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Als je bij al deze vragen &lsquo;ja&rsquo; denkt, dan is automatisch
          beleggen heel geschikt voor jou! Ook met een klein bedrag kun je
          beginnen, bijvoorbeeld al met €50 per maand. Het gaat er niet om hoeveel
          je hebt, maar dat je consistent bouwt aan je toekomst.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Wat gebeurt er als de beurs daalt?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dit is een veelgestelde vraag: wat gebeurt er nou als je automatisch
          belegt en de koersen zakken ineens? Het korte antwoord is: je koopt dan
          juist méér voor hetzelfde bedrag. Als de ETF die je automatisch koopt
          daalt in waarde, koop je automatisch meer stukjes van die ETF. Dit wordt
          ook wel &lsquo;gemiddeld goedkoper instappen&rsquo; genoemd. Op de
          lange termijn kan zo&apos;n beursdaling dus voordelig uitpakken, mits
          je niet halverwege uitstapt.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dit is nou precies de reden waarom we bij VanEck Direct zeggen:{" "}
          <strong>beleggen doe je voor de lange termijn, niet voor het moment.</strong>
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Kan ik altijd stoppen met automatisch beleggen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Ja, absoluut! Je zit nergens aan vast. Automatisch beleggen is geen
          abonnement met een opzegtermijn. Je kunt op elk moment pauzeren, stoppen
          of je maandelijkse bedrag aanpassen. Het geeft rust en structuur, maar
          wél op jouw voorwaarden.
        </p>

        <h2 className="font-heading mb-4 mt-10 text-2xl font-bold text-[#211f54]">
          Wat is een goed bedrag om mee te beginnen?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Er is geen &lsquo;magisch bedrag&rsquo; waarmee je moet starten. Wat
          voor jou goed voelt, is het juiste begin. Dat kan bijvoorbeeld zijn:
        </p>
        <ul className="mt-4 space-y-2 text-base leading-relaxed text-[#4a5568]">
          <li>— €50 per maand, om het uit te proberen en eraan te wennen</li>
          <li>— €100 per maand, om echt op te bouwen</li>
          <li>— €250 of meer per maand als je wat extra ruimte hebt</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Regelmaat</strong> is belangrijker dan het bedrag. Door elke
          maand te beleggen, bouw je een gewoonte op die op de lange termijn
          effect heeft.
        </p>
      </>
    ),
  },
};
