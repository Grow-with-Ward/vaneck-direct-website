"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Over VanEck Direct",
    items: [
      {
        question: "Hoe werkt beleggen bij VanEck Direct?",
        answer:
          "Bij VanEck Direct wordt automatisch en passief voor je belegd in vier vaste VanEck ETFs: één aandelen-ETF, één beursgenoteerde vastgoed-ETF en twee obligatie-ETFs. Deze mandjes zijn goed gespreid en bevatten samen zo'n 350 aandelen en 65 obligaties. Je kunt niet zelf kiezen waarin je belegt of losse aandelen kopen. Na het downloaden van de app vul je een korte vragenlijst in over je financiële situatie. Op basis daarvan bepalen wij jouw risicoprofiel en beleggen we automatisch je gestorte bedrag. Bij elke storting of maandelijkse inleg kopen wij de ETFs aan en houden we je portefeuille in balans (herbalanceren). Beleggen bij VanEck Direct is passief: de ETFs volgen een index en we richten ons op lange termijn groei. Er is geen actief kopen of verkopen van losse aandelen nodig. We raden aan om regelmatig bij te storten en alleen te verkopen als je beleggingsdoel is bereikt. We houden een klein bedrag in cash aan om kosten te dekken en koersfluctuaties op te vangen bij transacties, zodat we geen stukken uit je portefeuille hoeven te verkopen.",
      },
      {
        question: "Heeft VanEck Direct een AFM vergunning?",
        answer:
          "Goed dat je je dit afvraagt! Het antwoord is ja, VanEck heeft een AFM vergunning, waarmee de VanEck ETFs kunnen worden beheerd en welke via banken en brokers mogen worden aangeboden. Daarnaast kan VanEck onder haar vergunning via de VanEck Direct app jou rechtstreeks helpen om vermogen op te bouwen.",
      },
      {
        question: "Wat voor bedrijf is VanEck?",
        answer:
          "VanEck is een internationaal familiebedrijf dat sinds 1955 innovatieve beleggingsoplossingen biedt. Het bedrijf streeft ernaar om het rendement en risico van portefeuilles te optimaliseren, met de belangen van klanten altijd voorop. VanEck Direct is een merknaam van VanEck Asset Management BV. Voor de werking van de app werken we samen met ID & pay (onderdeel van ABN AMRO) voor identificatie en betalingen, en met VI Company voor de administratieve afhandeling. Alle communicatie verloopt via de VanEck Direct app of onze supportafdeling.",
      },
      {
        question: "Hoe kijkt VanEck Direct naar duurzaamheid?",
        answer:
          "Duurzaamheid staat centraal bij VanEck Direct. Wij beleggen volgens ESG-criteria, waarbij we kijken naar de impact op milieu (E), maatschappij (S) en goed bestuur (G). Dit betekent dat we verder kijken dan alleen financiële prestaties. Voor de selectie van aandelen, vastgoed en bedrijfsobligaties hanteren we een streng uitsluitingsbeleid. Zo investeren we niet in bedrijven die betrokken zijn bij controversiële wapens, dierproeven, intensieve veehouderij of nucleaire energie. Ook worden bedrijven beoordeeld op transparantie en duurzaamheidsbeleid, zodat jouw beleggingen zoveel mogelijk verantwoord en toekomstgericht zijn.",
      },
    ],
  },
  {
    title: "Beleggen & Dividend",
    items: [
      {
        question: "Wat is beleggen?",
        answer:
          "Beleggen is het investeren van geld met als doel dit op de lange termijn te laten groeien. In plaats van te sparen, steek je je geld in bijvoorbeeld aandelen, obligaties of vastgoed. Dit brengt risico's met zich mee, maar kan ook helpen om financiële doelen te bereiken, zoals pensioenopbouw of vermogensgroei. Bij VanEck Direct beleg je automatisch in ETFs (Exchange Traded Funds). Dit zijn mandjes van wereldwijd gespreide aandelen, obligaties of vastgoed. Met één ETF beleg je dus meteen in tientallen tot honderden bedrijven of leningen. ETFs worden op de beurs verhandeld en zijn een toegankelijke, efficiënte manier om gespreid te beleggen. Aandelen zijn stukjes eigendom van een bedrijf. Als je een aandeel koopt, word je mede-eigenaar en profiteer je van mogelijke koersstijgingen of winstuitkeringen. Obligaties zijn daarentegen leningen aan een bedrijf of overheid, waarbij je rente ontvangt en aan het einde je inleg terugkrijgt. Door in ETFs te beleggen, profiteer je van de voordelen van zowel aandelen als obligaties, met een goede spreiding en lagere kosten.",
      },
      {
        question:
          "Wat is dividend en waarom is het belangrijk voor je rendement?",
        answer:
          "Dividend is een deel van de winst dat bedrijven uitkeren aan aandeelhouders, als een soort beloning voor het bezit van aandelen. Je ontvangt dit meestal periodiek, zonder dat je er iets voor hoeft te doen. Dividenden vormen een belangrijke bijdrage aan je totale rendement. Naast een mogelijke waardestijging van je aandelen, ontvang je ook extra inkomsten die je kunt herinvesteren of vrij besteden. Ze bieden bovendien een vorm van stabiliteit, omdat je er zelfs tijdens beursdalingen van kunt profiteren.",
      },
      {
        question: "Krijg ik dividend bij VanEck Direct en wat gebeurt daarmee?",
        answer:
          "Ja, je ontvangt dividend bij VanEck Direct. Dit is een uitkering van winst door bedrijven waarin je via de ETFs belegt. Hoeveel dividend je krijgt, hangt af van de winst van de bedrijven en jouw belegde bedrag. Bij VanEck Direct wordt dividend automatisch opnieuw belegd. Zo vergroot je je beleggingskapitaal en profiteer je van het effect van samengestelde groei—dividend op dividend—wat op de lange termijn kan zorgen voor een hoger rendement. Wil je toch liever dividend laten uitbetalen? Dan kun je via de app een bedrag naar keuze opnemen. We verkopen dan automatisch een deel van je beleggingen. Houd hierbij wel rekening met eventuele opnamekosten, te vinden op onze kostenpagina.",
      },
      {
        question: "Wat is dividendlekkage?",
        answer:
          "Dividendlekkage ontstaat wanneer bronbelasting op dividend niet kan worden teruggevraagd. Dit gebeurt vaak bij ETFs, omdat je de aandelen niet zelf bezit. Beleg je via een fonds met FBI-status en ben je in Nederland belastingplichtig, dan is verrekening meestal wél mogelijk.",
      },
      {
        question:
          "Wat is een risicoprofiel en hoe wordt dit bepaald bij VanEck Direct",
        answer:
          "Een risicoprofiel geeft aan hoeveel risico je bereid bent te nemen met je beleggingen. Bij VanEck Direct stellen we jouw risicoprofiel vast aan de hand van een aantal vragen tijdens de onboarding. We kijken onder andere naar je financiële situatie, je ervaring met beleggen, hoeveel risico je aankan én hoe lang je van plan bent te beleggen. Op basis van jouw antwoorden krijg je een profiel toegewezen dat past bij jouw situatie. Zo zorgen we ervoor dat je op een verantwoorde manier belegt, zonder dat je je zorgen hoeft te maken of het risico wel aansluit bij jouw wensen. Bij VanEck Direct werken we met vijf risicoprofielen: Zeer defensief, Defensief, Neutraal, Offensief en Zeer offensief. Hoe hoger het risicoprofiel, hoe groter het gedeelte aandelen en vastgoed in je portefeuille – en dus ook hoe groter de kans op koersschommelingen. Je kunt je risicoprofiel later altijd aanpassen via de app via de knop 'plan wijzigen', mocht je situatie of voorkeur veranderen.",
      },
      {
        question: "Wat zijn de historische rendementen van VanEck Direct?",
        answer:
          "Bij VanEck Direct tonen we gesimuleerde netto rendementen voor alle vijf risicoprofielen: zeer defensief, defensief, neutraal, offensief en zeer offensief. De rendementen zijn gebaseerd op de prestaties van de vier VanEck ETFs waarin we beleggen, en gaan vijf jaar terug in de tijd. Ze geven een goed beeld van hoe jouw portefeuille zich in het verleden zou hebben ontwikkeld – inclusief alle kosten. In de rendementen zijn verwerkt: 0,5% beheerkosten, fondskosten (verwerkt in de ETF-prijzen) en handelskosten bij het aankopen/herbalanceren van de ETFs. Let op: dit zijn gesimuleerde resultaten en vormen geen betrouwbare voorspeller voor toekomstige prestaties. Ook zijn tussentijdse stortingen of opnames niet meegenomen, waardoor jouw persoonlijke rendement kan afwijken.",
      },
    ],
  },
  {
    title: "Account aanmaken",
    items: [
      {
        question:
          "Is er een minimumbedrag nodig om te kunnen beginnen via de app?",
        answer: "Ja, dat is \u20ac100.",
      },
      {
        question:
          "Moet ik periodiek blijven inleggen? En zo ja, wat is daarvoor het minimumbedrag?",
        answer:
          "Dit is niet verplicht, maar wel wenselijk om op de lange termijn het meeste uit je beleggingen te halen. Als je ervoor kiest om maandelijks/periodiek in te leggen dan kan dat met een minimum van \u20ac50.",
      },
      {
        question:
          "Kan ik mijn bestaande beleggersrekening of beleggingsportefeuille gebruiken voor VanEck Direct?",
        answer:
          "Nee, dat is niet mogelijk. VanEck Direct werkt met een eigen beleggingsstrategie en vaste portefeuilleopbouw. Daarom moet je een nieuw account aanmaken via onze app en een korte vragenlijst invullen, zodat we je als klant goed leren kennen. Je kunt je bestaande beleggingen dus niet overboeken naar VanEck Direct. Wel kun je je huidige portefeuille verkopen en het vrijgekomen bedrag storten op je VanEck Direct account, zodat we voor jou kunnen gaan beleggen volgens onze aanpak.",
      },
      {
        question:
          "Ik heb al een account bij VanEck Direct en ik wil er nog een openen. Hoe kan ik dit doen?",
        answer:
          "Op dit moment kun je nog maar één rekening openen bij VanEck Direct. In de toekomst willen we het wel graag mogelijk maken om meerdere accounts voor je te openen.",
      },
      {
        question: "Welke kosten komen er kijken bij het gebruik van de app?",
        answer:
          "Bij VanEck Direct betaal je (afhankelijk van je risicoprofiel) maximaal 0,72% per jaar op het totaalbedrag van beleggingen. Dat percentage bestaat uit fondskosten en beheerkosten. De fondskosten zijn de kosten voor de ETFs (tussen de 0,18% en 0,22%). De beheerkosten zijn kosten voor de service daaromheen (altijd 0,5%). Als je bijvoorbeeld met \u20ac5.000 in het neutrale risicoprofiel belegt, dan betaal je 0,7% per jaar aan kosten over je beleggingen, wat neerkomt op \u20ac35,- per jaar. Daarnaast, als je geld opneemt voordat je jouw beleggingsdoel hebt bereikt, rekenen we \u20ac1,- opnamekosten.",
      },
      {
        question: "Kan ik mijn account ook pauzeren?",
        answer:
          "Op dit moment is het niet mogelijk om je account te pauzeren. Wij geloven in beleggen op de lange termijn. Dit omdat we gezien hebben in het verleden dat frequent in- en uitstappen tot minder goede resultaten leidt. Mocht je je doel bereikt hebben of niet meer willen beleggen dan gaan we jouw beleggingen verkopen en je account voor je opzeggen. Bedenk altijd goed of je wel al wil uitstappen, het kan zijn dat je met verlies verkoopt. Iets langer belegd blijven kan vaak dat verlies goedmaken. Uiteraard kun je er wel voor kiezen om je maandelijkse inleg voor een tijdje te pauzeren. Je blijft dan nog wel klant bij VanEck Direct en je opgebouwde beleggingen blijven staan. Je kan op ieder moment ervoor kiezen om de maandelijkse inleg aan of uit te zetten.",
      },
      {
        question: "Kan ik bij VanEck Direct beleggen op naam van mijn kind?",
        answer:
          "Op dit moment is het helaas nog niet mogelijk om een rekening te openen op naam van je kind. VanEck Direct ondersteunt momenteel alleen particuliere beleggingsrekeningen op eigen naam. We begrijpen dat veel ouders graag willen beleggen voor hun kinderen, en daarom staat de ontwikkeling van kindrekeningen wel op onze planning voor de toekomst. Zodra deze functie beschikbaar is, zullen we dit uiteraard breed communiceren via de app en nieuwsbrief.",
      },
      {
        question: "Biedt VanEck Direct ook pensioenrekeningen aan?",
        answer:
          "Nee, op dit moment biedt VanEck Direct nog geen fiscaal voordelige pensioenrekeningen aan (zoals lijfrente- of derde pijleroplossingen). Je kunt via de app wel een reguliere beleggingsrekening openen en beleggen met een langetermijndoel, zoals pensioenopbouw. Maar het gaat dan om een gewone beleggingsrekening, zonder fiscale voordelen.",
      },
    ],
  },
  {
    title: "Storten & Opnemen",
    items: [
      {
        question: "Kan ik mijn geld tussentijds opnemen bij VanEck Direct?",
        answer:
          "Ja, je kunt op elk moment (een deel van) je belegde geld opnemen via de app. Dit doe je eenvoudig via de grote blauwe plus-knop op het homescreen. Zodra je een opnameverzoek indient, verkopen wij automatisch een deel van je ETFs en maken we het bijbehorende bedrag over naar je gekoppelde bankrekening. De verwerking duurt doorgaans enkele werkdagen, met een maximum van 7 werkdagen. Het geld moet namelijk eerst worden vrijgemaakt door de verkoop van beleggingen, voordat het kan worden overgemaakt. Let op: als je een opname doet voordat je jouw beleggingsdoel hebt bereikt, rekenen we een symbolisch bedrag van \u20ac1 aan opnamekosten. Dit doen we om je te helpen beleggen met een langetermijnvisie.",
      },
      {
        question: "Welke kosten zitten er verbonden aan storten of opnemen?",
        answer:
          "Storten op je VanEck Direct account is volledig kosteloos. Wil je geld opnemen voordat je jouw beleggingsdoel hebt bereikt? Dan brengen we een symbolisch bedrag van \u20ac1 in rekening. Dit moedigt aan om goed na te denken over tussentijdse opnames, want hoe langer je belegt, hoe groter de kans dat je jouw doel behaalt.",
      },
      {
        question:
          "Kan ik op ieder gewenst moment verkopen en volledig stoppen met het gebruik van de app?",
        answer:
          "Ja dat kan. Onder 'account' in de app kun je zelf je account opzeggen zonder daarvoor eerst met iemand van de klantenservice te hebben gesproken. Voor het opzeggen van de account worden geen kosten gerekend. Vanaf dat moment kun je niet meer je account heractiveren. Je zal opnieuw door alle vragen heen moeten als je toch besluit weer te beginnen met beleggen bij VanEck Direct.",
      },
      {
        question: "Hoe werkt de maandelijkse inleg bij VanEck Direct?",
        answer:
          "Als je kiest voor een maandelijkse inleg, wordt het opgegeven bedrag automatisch via een SEPA-incasso van je bankrekening afgeschreven. Je hoeft hier zelf niets meer voor te doen. De incasso wordt verwerkt door onze partner ID & pay (onderdeel van ABN AMRO). Na verwerking beleggen we het bedrag automatisch in jouw bestaande portefeuille, volgens je risicoprofiel. Je hoeft zelf geen transacties uit te voeren – alles gebeurt op de achtergrond.",
      },
      {
        question: "Wanneer zie ik mijn maandelijkse inleg terug in de app?",
        answer:
          "Na afschrijving van je bankrekening is het bedrag direct zichtbaar in de app. Het kan echter tot 5 werkdagen duren voordat het geld verwerkt is en belegd kan worden. Dit komt door het incassoproces via ID & pay (ABN AMRO) en de verwerkingstijd bij banken. Zodra het bedrag is verwerkt, wordt het automatisch belegd en zie je dit terug op je transactiepagina. In sommige gevallen kan het in drukke periodes iets langer duren, zoals rond feestdagen of weekenden.",
      },
      {
        question: "Kan ik mijn maandelijkse inleg aanpassen of pauzeren?",
        answer:
          "Ja, je kunt je maandelijkse inleg op elk moment aanpassen of pauzeren via de app. Dit doe je via de grote blauwe knop onderin het scherm. Daar kies je voor het aanpassen van je maandelijkse inlegbedrag. Je kunt het bedrag verhogen, verlagen of tijdelijk op \u20ac0 zetten. Ook de dag waarop de inleg plaatsvindt kun je aanpassen – dit doe je via de accountpagina in de app. Er zijn geen kosten verbonden aan het wijzigen van je maandelijkse inleg. Je blijft gewoon klant, ook als je tijdelijk even niets inlegt. Je opgebouwde beleggingen blijven dan gewoon staan.",
      },
    ],
  },
  {
    title: "Risico\u2019s & Veiligheid",
    items: [
      {
        question:
          "Hoe risicovol is beleggen bij VanEck Direct en hoe wordt daarmee omgegaan?",
        answer:
          "Beleggen brengt altijd risico met zich mee. De waarde van je beleggingen kan stijgen, maar ook dalen. Je kunt (een deel van) je inleg verliezen, bijvoorbeeld door marktschommelingen, economische ontwikkelingen of bedrijfsspecifieke gebeurtenissen. De kans dat je je volledige inleg kwijtraakt is bij VanEck Direct echter zeer beperkt, omdat je belegt in honderden bedrijven via gespreide ETFs. Bij VanEck Direct helpen we je het risico te beheersen door: breed te spreiden over sectoren, regio\u2019s en bedrijven; een strategische verhouding aan te houden tussen aandelen en obligaties; alleen te beleggen met geld dat je voor langere tijd kunt missen; en regelmatig te herbalanceren om je portefeuille in lijn te houden met je profiel. Hoewel we risico\u2019s niet kunnen uitsluiten, zorgen we er w\u00e9l voor dat je nooit te risicovol belegt ten opzichte van jouw persoonlijke situatie.",
      },
      {
        question:
          "Ik heb een klacht over VanEck Direct. Waar kan ik deze indienen?",
        answer:
          "Op onze klachten procedure pagina vind je informatie over hoe je een klacht over VanEck Direct kan indienen.",
      },
      {
        question: "Wat gebeurt er als jullie failliet gaan?",
        answer:
          "Een eventueel faillissement van VanEck Asset Management B.V. heeft geen invloed op jouw bezit. De ETFs vormen namelijk een afgescheiden juridische entiteit, VanEck ETFs N.V. (de beleggingsmaatschappij). VanEck Asset Management B.V. (de beheerder) heeft alleen een beheerovereenkomst met die NV, er is dus geen eigendomsverhouding. De VanEck Sustainable World Equal Weight UCITS ETF heeft als onderliggende waarde 250 wereldwijde aandelen in bezit. Als eigenaar van de ETF ben je dus indirect eigenaar van deze onderliggende aandelen. Deze aandelen worden door het fonds aangehouden op een effectenrekening van de bewaarbank van het fonds (custodian). Bij een eventueel faillissement van deze bewaarbank vallen de aandelen buiten de boedel van de bank. Deze opzet is geheel in lijn met de wettelijke scheiding van beheer en bewaring, zoals ingesteld door de AFM via de Wet Financieel Toezicht (Wft). De structuur is zo ingericht dat een faillissement van VanEck Asset Management B.V. de waarde van beleggingen niet be\u00efnvloedt.",
      },
      {
        question:
          "Wanneer en waarom is het geen goed idee om te gaan beleggen?",
        answer:
          "Beleggen is niet voor iedereen en er zijn momenten en situaties waarin het geen goed idee is om te gaan beleggen. Geen buffer: het is belangrijk om een noodfonds op te bouwen voordat je gaat beleggen. Als je geen geld hebt voor onverwachte uitgaven, kan beleggen riskant zijn omdat je mogelijk gedwongen wordt om je beleggingen te verkopen bij ongunstige marktomstandigheden. Korte-termijn financiële doelen: als je geld nodig hebt op korte termijn (binnen de komende 1-3 jaar), is beleggen meestal niet geschikt. Onrealistische verwachtingen: als je beleggen ziet als een manier om snel rijk te worden, dan heb je mogelijk onrealistische verwachtingen. Beleggen brengt altijd risico's met zich mee en winsten zijn niet gegarandeerd. Emotionele onrust: als je snel in paniek raakt bij marktschommelingen, kan beleggen stressvol zijn. Bij VanEck Direct helpen we je om je financiële situatie, doelen en risicobereidheid zorgvuldig te evalueren voordat je besluit te gaan beleggen.",
      },
    ],
  },
  {
    title: "Overig",
    items: [
      {
        question:
          "Ik krijg tijdens het downloaden/installeren van de app een foutmelding. Wat moet ik nu doen?",
        answer:
          "Dan kun je het beste contact opnemen met onze service desk. Op de contactpagina staat het juiste nummer.",
      },
      {
        question:
          "Welke gevolgen kan het gebruik van de app hebben voor mijn belastingaangifte?",
        answer:
          "Als je bij VanEck Direct gaat beleggen betekent dit dat je vermogen gaat opbouwen in box 3. Deze beleggingen moeten worden opgegeven bij het invullen van je jaarlijkse inkomstenbelasting (IB) aangifte. Je hoeft dit meestal niet meer handmatig in te vullen, want VanEck Direct levert jaarlijks jouw beleggingsgegevens aan bij de Belastingdienst. Dit proces heet renseignering. Let op: je blijft altijd zelf verantwoordelijk voor het controleren van je belastingaangifte. Controleer dus goed of de vooraf ingevulde gegevens kloppen, en pas ze aan indien nodig. De ETFs waarin wordt belegd bij VanEck Direct zijn in Nederland geregistreerd en hebben een FBI-status, om die reden kun je jouw dividendbelasting terugvorderen bij je jaarlijkse inkomstenbelasting (IB) aangifte.",
      },
      {
        question:
          "Vallen mijn investeringen in de app onder het deposito garantiestelsel?",
        answer:
          "Beleggingen vallen niet onder het DGS, dit geldt alleen voor cash geld. Wij hebben de intentie om het gestorte bedrag voor 99,75% te beleggen. Er zal een kleine cash buffer overblijven, zodat we de benodigde transacties kunnen uitvoeren. De cashgelden die zich binnen het VanEck Direct ecosysteem bevinden vallen onder het Deposito Garantie Stelsel. Het maximum bedrag onder het Deposito Garantie Stelsel (t.b.v. gelden) is nu \u20ac100.000.",
      },
      {
        question:
          "Is de VanEck Direct app ook beschikbaar in andere landen of talen?",
        answer:
          "Op dit moment is de VanEck Direct app alleen beschikbaar voor mensen met een Nederlands adres, een Nederlands identiteitsbewijs en een Nederlandse bankrekening. De app is momenteel ook uitsluitend beschikbaar in het Nederlands. We voldoen op dit moment alleen aan de Nederlandse wetgeving rondom vermogensbeheer. We begrijpen dat er interesse is vanuit het buitenland, en daarom staat uitbreiding naar andere landen en talen op onze wensenlijst. Zodra daar nieuws over is, delen we dat via onze website en nieuwsbrief.",
      },
      {
        question:
          "Kan ik VanEck Direct ook gebruiken via een webversie of online portaal?",
        answer:
          "Nee, VanEck Direct is op dit moment alleen beschikbaar als mobiele app voor smartphones. Er is geen webversie of desktopportaal beschikbaar om je beleggingen te beheren. Alle functionaliteiten – zoals geld storten of opnemen, je plan aanpassen of je portefeuille bekijken – verlopen volledig via de app. We houden de wens voor een webversie in gedachten voor de toekomst. Als daar veranderingen in komen, laten we dat natuurlijk weten via onze nieuwsbrief of updates in de app.",
      },
      {
        question:
          "Is de app ook te gebruiken voor mensen met een visuele of auditieve handicap?",
        answer: "Nee op dit moment helaas nog niet.",
      },
    ],
  },
];

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(key: string) {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Left sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <ul className="space-y-1">
                {faqData.map((category) => (
                  <li key={category.title}>
                    <a
                      href={`#${slugify(category.title)}`}
                      className="block rounded-md px-3 py-1.5 text-sm text-[#4a5568] transition-colors hover:bg-[#f7f9ff] hover:text-[#0e3065]"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right: FAQ accordion */}
          <div>
            {faqData.map((category, categoryIndex) => (
              <div
                key={category.title}
                id={slugify(category.title)}
                className={categoryIndex > 0 ? "mt-12" : ""}
              >
                <h2 className="text-xl font-bold text-[#211f54]">
                  {category.title}
                </h2>
                <div className="mt-4">
                  {category.items.map((item, itemIndex) => {
                    const key = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItems[key] || false;

                    return (
                      <div key={key} className="border-b border-gray-200">
                        <button
                          onClick={() => toggleItem(key)}
                          className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-[#0e3065]"
                          aria-expanded={isOpen}
                        >
                          <span className="pr-4 text-sm font-medium text-[#211f54]">
                            {item.question}
                          </span>
                          <span className="shrink-0 text-lg font-light leading-none text-[#211f54]">
                            {isOpen ? "\u2212" : "+"}
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-[600px] pb-5" : "max-h-0"
                          }`}
                        >
                          <p className="text-sm leading-relaxed text-[#4a5568]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
