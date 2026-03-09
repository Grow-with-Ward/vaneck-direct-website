export interface HelpArticleData {
  title: string;
  description: string;
  content: React.ReactNode;
}

const CONTACT_FALLBACK = (
  <>
    <p className="text-base leading-relaxed text-[#4a5568]">
      Heb je een vraag over dit onderwerp? Neem dan gerust contact met ons op.
    </p>
    <div className="mt-6 rounded-xl bg-[#f7f9ff] p-6">
      <p className="font-semibold text-[#0e3065]">Neem contact op</p>
      <p className="mt-2 text-[#4a5568]">
        E-mail:{" "}
        <a
          href="mailto:direct@vaneck.com"
          className="text-[#17468f] underline hover:opacity-80"
        >
          direct@vaneck.com
        </a>
      </p>
      <p className="text-[#4a5568]">Telefoon: +31 (0)20 808 5543</p>
    </div>
  </>
);

export const helpArticles: Record<string, HelpArticleData> = {
  "biedt-vaneck-direct-ook-pensioenrekeningen-aan": {
    title: "Biedt VanEck Direct ook pensioenrekeningen aan?",
    description:
      "Informatie over pensioenrekeningen bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "gunstige-verwachte-ongunstige-scenarios": {
    title: "Gunstige, verwachte & ongunstige scenario's",
    description:
      "Wat betekenen de gunstige, verwachte en ongunstige scenario's in de VanEck Direct app? Leer hoe deze worden berekend.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Wanneer je jouw beleggingsplan in de VanEck Direct app bekijkt, zie je
          verschillende scenario&apos;s voor je verwachte vermogen. Je ziet een
          gunstig scenario, een ongunstig scenario, en een verwacht scenario.
          Maar wat betekenen deze precies? En hoe kunnen ze zich in de praktijk
          ontwikkelen?
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Hoe worden deze scenario&apos;s berekend?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De scenario&apos;s worden gebaseerd op historische marktgegevens en
          geven een schatting van mogelijke uitkomsten op basis van verschillende
          economische situaties. Ze houden rekening met marktgroei, inflatie en
          mogelijke schommelingen.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#4a5568]">
          <li>
            <strong>Gunstig scenario:</strong> Dit laat zien hoe je vermogen kan
            groeien in een periode waarin de markten zich beter dan gemiddeld
            ontwikkelen. Dit betekent dat er minder crises zijn en dat
            economische groei hoger uitvalt dan verwacht.
          </li>
          <li>
            <strong>Ongunstig scenario:</strong> Dit houdt rekening met
            slechtere marktjaren. Er kunnen economische tegenslagen zijn, zoals
            een recessie, beursdalingen of onverwachte inflatie.
          </li>
          <li>
            <strong>Meest waarschijnlijk scenario:</strong> Dit is een
            berekende schatting van hoe je vermogen zich naar verwachting
            ontwikkelt, uitgaande van een gematigde groei en normale
            marktfluctuaties.
          </li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Waarom is dit belangrijk?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Door deze scenario&apos;s te bekijken, krijg je inzicht in de
          mogelijke schommelingen van je beleggingen. Beleggen is altijd
          verbonden met risico&apos;s: markten gaan omhoog én omlaag. Door
          voorbereid te zijn op minder gunstige periodes, zorg je ervoor dat je
          een realistische verwachting hebt van je lange termijn rendement.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Langetermijnbeleggen loont: Des te langer en consistenter je belegt,
          des te beter voor je vermogen. De markten fluctueren, maar door een
          lange beleggingshorizon te hanteren, geef je de markt de tijd om zich
          te herstellen en door te groeien.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat als de markt slechter presteert dan verwacht?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Een veelgestelde vraag is: wat als mijn beleggingen in het ongunstige
          scenario belanden? Dit betekent niet dat je direct verlies lijdt, maar
          wel dat de waarde van je beleggingen lager kan uitvallen dan verwacht.
          Dit is een normaal onderdeel van beleggen.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#4a5568]">
          <li>
            <strong>Houd vast aan je strategie</strong> – Markten kennen
            periodes van stijgingen en dalingen, maar historisch gezien
            herstellen ze zich vaak over de lange termijn.
          </li>
          <li>
            <strong>Spreiding helpt risico&apos;s te beperken</strong> – Door
            te beleggen in ETFs investeer je in een brede mix van bedrijven en
            sectoren, waardoor je minder afhankelijk bent van de prestaties van
            één specifieke markt.
          </li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat kan je zelf doen?
        </h3>
        <ul className="mt-4 list-none space-y-2 text-base text-[#4a5568]">
          <li>
            ✔ <strong>Blijf gefocust op de lange termijn</strong> – Beleggen is
            geen sprint, maar een marathon.
          </li>
          <li>
            ✔ <strong>Overweeg periodiek inleggen</strong> – Door onze
            automatische maandelijkse inleg in te stellen, koop je op
            verschillende momenten in, waardoor je minder afhankelijk bent van
            marktschommelingen.
          </li>
          <li>
            ✔ <strong>Blijf rustig bij dalingen</strong> – De markt beweegt
            altijd op en neer, maar historisch gezien hebben beleggingen op de
            lange termijn vaak een positief rendement.
          </li>
        </ul>
      </>
    ),
  },

  "heeft-vaneck-direct-een-afm-vergunning": {
    title: "Heeft VanEck Direct een AFM vergunning?",
    description:
      "Meer informatie over de AFM vergunning van VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "hoe-kijkt-vaneck-direct-naar-duurzaamheid": {
    title: "Hoe kijkt VanEck Direct naar duurzaamheid?",
    description:
      "Informatie over de duurzaamheidsvisie van VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "hoe-maak-ik-een-account-aan-bij-vaneck-direct": {
    title: "Hoe maak ik een account aan bij VanEck Direct?",
    description:
      "Stap voor stap uitleg over hoe je een account aanmaakt bij VanEck Direct via de mobiele app.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Klaar om automatisch en serieus te gaan beleggen? Beleggen bij VanEck
          Direct begint met het aanmaken van een account via onze mobiele app.
          In een paar duidelijke stappen begeleidt de app je door het hele
          proces – van registratie tot het instellen van jouw
          beleggingsprofiel.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          1. Download de VanEck Direct app
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Om een account aan te maken, heb je de VanEck Direct app nodig:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>App Store (iOS)</li>
          <li>Google Play (Android)</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Zorg ervoor dat je een recente versie van je besturingssysteem hebt
          voor de beste ervaring.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          2. Start met je registratie
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Open de app en vul je naam en e-mailadres in. Hiermee begin je het
          onboarding proces.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          3. Doorloop de 7 stappen van het onboardingproces
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De app begeleidt je stap voor stap. Het onboarding proces bestaat uit
          de volgende onderdelen:
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 1: Kennismaking</strong>
          <br />
          We leggen kort aan je uit wat je kunt verwachten van beleggen via
          VanEck Direct.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 2: Kennis en ervaring</strong>
          <br />
          Je beantwoordt vragen over je ervaring met beleggen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 3: Financiële informatie</strong>
          <br />
          Je geeft een indicatie van je inkomsten en spaargeld.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 4: Duurzaamheidsvoorkeur</strong>
          <br />
          Je geeft aan in hoeverre duurzaamheid een rol speelt in jouw
          beleggingskeuzes.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 5: Risicobereidheid</strong>
          <br />
          Aan de hand van scenario&apos;s bepalen we samen hoeveel risico je
          bereid bent te nemen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 6: Jouw strategie</strong>
          <br />
          Op basis van je antwoorden doen we een voorstel voor een
          beleggingsstrategie die bij jou past.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>Stap 7: Account aanmaken</strong>
          <br />
          Aan het einde van het onboardingproces rond je je registratie af in
          een paar belangrijke stappen:
        </p>

        <p className="mt-4 text-base font-semibold text-[#211f54]">
          Identiteitscontrole
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Upload een duidelijke foto van je paspoort, ID-kaart of rijbewijs.
          Vervolgens neem je een korte selfievideo op, waarmee we je identiteit
          veilig kunnen verifiëren.
        </p>

        <p className="mt-4 text-base font-semibold text-[#211f54]">
          Bankrekening koppelen
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Koppel je persoonlijke IBAN-rekening aan je account. We controleren
          of je bankrekening overeenkomt met je identiteitsgegevens. Dit
          veiligheidsproces duurt maximaal 1 tot 2 werkdagen. Zodra dit gelukt
          is, ontvang je een melding en kun je verder.
        </p>

        <p className="mt-4 text-base font-semibold text-[#211f54]">
          Contract ondertekenen
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Je tekent twee overeenkomsten digitaal in de app:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Het beleggingscontract met VanEck Direct</li>
          <li>
            Een contract met ABN AMRO voor het gebruik van ID &amp; pay, het
            platform dat zorgt voor veilige betalingen.
          </li>
        </ul>

        <p className="mt-4 text-base font-semibold text-[#211f54]">
          Maandelijkse inleg instellen (optioneel)
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Je kunt ervoor kiezen om direct een maandelijkse automatische inleg in
          te stellen als je periodiek een bedrag wilt inleggen. Dit is optioneel
          en kun je altijd later wijzigen of stopzetten.
        </p>

        <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
          Zodra al deze stappen zijn afgerond, is je account geactiveerd en ben
          je klaar om te starten met beleggen via VanEck Direct.
        </p>
      </>
    ),
  },

  "hoe-risicovol-is-beleggen-bij-vaneck-direct-en-hoe-wordt-daarmee-omgegaan": {
    title:
      "Hoe risicovol is beleggen bij VanEck Direct en hoe wordt daarmee omgegaan?",
    description:
      "Meer informatie over de risico's van beleggen bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "hoe-werkt-beleggen-bij-vaneck-direct": {
    title: "Hoe werkt beleggen bij VanEck Direct?",
    description:
      "Uitleg over hoe beleggen bij VanEck Direct werkt.",
    content: CONTACT_FALLBACK,
  },

  "hoe-werkt-de-maandelijkse-inleg-bij-vaneck-direct": {
    title: "Hoe werkt de maandelijkse inleg bij VanEck Direct?",
    description:
      "Informatie over de maandelijkse automatische inleg bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "hoe-wordt-mijn-rendement-berekend": {
    title: "Hoe wordt mijn rendement berekend?",
    description:
      "Uitleg over hoe VanEck Direct het tijdgewogen rendement berekent dat je in de app ziet.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Het rendement dat je in de app ziet is tijdgewogen rendement. Dit
          betekent dat we laten zien hoe goed je beleggingen hebben gepresteerd,
          zonder rekening te houden met het moment waarop je geld hebt
          toegevoegd of opgenomen. Het geeft een eerlijk beeld van de
          &lsquo;pure groei&rsquo; van je beleggingen over tijd.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Voorbeeldberekening tijdgewogen rendement
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Stel, je begint met beleggen bij VanEck Direct en je investeert
          €1.000. Op de eerste dag stijgt je belegging met 2%, waardoor je
          belegging nu €1.020 waard is. Op dag twee voeg je €500 toe, waardoor
          je portefeuille totaal nu €1.520 waard is. Maar die dag daalt de
          markt met 1%, waardoor je portefeuille nu €1.504 waard is.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Met tijdgewogen rendement kijken we puur naar hoe de belegging zelf
          presteert, zonder dat jouw storting hierin meespeelt. Dus we berekenen
          eerst het rendement van de eerste dag (+2%) en de tweede dag (-1%) en
          combineren deze over de periode. Hierdoor krijg je een realistisch
          beeld van hoe goed je belegging zich ontwikkelt, onafhankelijk van
          wanneer je geld hebt gestort.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Tijdgewogen rendement wordt per dag berekend en vervolgens over de
          periode samengevoegd. Dit doen we met de volgende formule:
        </p>
        <div className="mt-4 rounded-lg bg-[#f7f9ff] p-4 font-mono text-sm text-[#211f54]">
          Totaal rendement = (1 + rendement dag 1) × (1 + rendement dag 2) ×
          … × (1 + rendement dag n) − 1
        </div>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Een voorbeeld:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Op dag 1 groeit je portefeuille met 2%.</li>
          <li>Op dag 2 daalt je portefeuille met 1%.</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Het totale rendement over deze twee dagen is dan:
          <br />
          <span className="font-mono">(1 + 2%) × (1 − 1%) − 1 = 0,99%</span>
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Waarom deze methode?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Omdat tijdgewogen rendement je prestaties meet zonder dat stortingen
          of opnames het resultaat beïnvloeden. Zowel de absolute cijfers
          (euro&apos;s) als de percentages (%) in jouw overzicht laten dus de
          echte prestaties van jouw beleggingen zien, ongeacht wanneer je geld
          hebt bijgestort.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Beleggen brengt risico&apos;s met zich mee. Rendementen kunnen
          fluctueren door marktontwikkelingen en economische omstandigheden.
        </p>
      </>
    ),
  },

  "ik-heb-al-een-account-bij-vaneck-direct-en-ik-wil-er-nog-een-openen-hoe-kan-ik-dit-doen":
    {
      title:
        "Ik heb al een account bij VanEck Direct en ik wil er nog een openen. Hoe kan ik dit doen?",
      description:
        "Informatie over het openen van een extra account bij VanEck Direct.",
      content: CONTACT_FALLBACK,
    },

  "ik-heb-een-klacht-over-vaneck-direct-waar-kan-ik-deze-indienen": {
    title: "Ik heb een klacht over VanEck Direct. Waar kan ik deze indienen?",
    description:
      "Informatie over het indienen van een klacht bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "ik-krijg-tijdens-het-downloaden-installeren-van-de-app-een-foutmelding-wat-moet-ik-nu-doen":
    {
      title:
        "Ik krijg tijdens het downloaden/installeren van de app een foutmelding. Wat moet ik nu doen?",
      description:
        "Hulp bij foutmeldingen tijdens het downloaden of installeren van de VanEck Direct app.",
      content: CONTACT_FALLBACK,
    },

  "is-de-app-ook-te-gebruiken-voor-mensen-met-een-visuele-of-auditieve-handicap":
    {
      title:
        "Is de app ook te gebruiken voor mensen met een visuele of auditieve handicap?",
      description:
        "Informatie over de toegankelijkheid van de VanEck Direct app.",
      content: CONTACT_FALLBACK,
    },

  "is-de-vaneck-direct-app-ook-beschikbaar-in-andere-landen-of-talen": {
    title: "Is de VanEck Direct app ook beschikbaar in andere landen of talen?",
    description:
      "Informatie over de beschikbaarheid van de VanEck Direct app in andere landen en talen.",
    content: CONTACT_FALLBACK,
  },

  "is-er-een-minimumbedrag-nodig-om-te-kunnen-beginnen-via-de-app": {
    title: "Is er een minimumbedrag nodig om te kunnen beginnen via de app?",
    description:
      "Informatie over het minimumbedrag om te beginnen met beleggen via de VanEck Direct app.",
    content: CONTACT_FALLBACK,
  },

  "kan-ik-bij-vaneck-direct-beleggen-op-naam-van-mijn-kind": {
    title: "Kan ik bij VanEck Direct beleggen op naam van mijn kind?",
    description:
      "Informatie over beleggen op naam van een kind via VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "kan-ik-mijn-account-ook-pauzeren": {
    title: "Kan ik mijn account ook pauzeren?",
    description:
      "Informatie over het pauzeren van je VanEck Direct account.",
    content: CONTACT_FALLBACK,
  },

  "kan-ik-mijn-bestaande-beleggersrekening-of-beleggingsportefeuille-gebruiken-voor-vaneck-direct":
    {
      title:
        "Kan ik mijn bestaande beleggersrekening of beleggingsportefeuille gebruiken voor VanEck Direct?",
      description:
        "Informatie over het gebruik van een bestaande beleggersrekening bij VanEck Direct.",
      content: CONTACT_FALLBACK,
    },

  "kan-ik-mijn-geld-tussentijds-opnemen-bij-vaneck-direct": {
    title: "Kan ik mijn geld tussentijds opnemen bij VanEck Direct?",
    description:
      "Informatie over tussentijdse opnames bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "kan-ik-mijn-maandelijkse-inleg-aanpassen-of-pauzeren": {
    title: "Kan ik mijn maandelijkse inleg aanpassen of pauzeren?",
    description:
      "Informatie over het aanpassen of pauzeren van je maandelijkse inleg bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "kan-ik-op-ieder-gewenst-moment-verkopen-en-volledig-stoppen-met-het-gebruik-van-de-app":
    {
      title:
        "Kan ik op ieder gewenst moment verkopen en volledig stoppen met het gebruik van de app?",
      description:
        "Informatie over stoppen met beleggen en het gebruik van de VanEck Direct app.",
      content: CONTACT_FALLBACK,
    },

  "kan-ik-vaneck-direct-ook-gebruiken-via-een-webversie-of-online-portaal": {
    title:
      "Kan ik VanEck Direct ook gebruiken via een webversie of online portaal?",
    description:
      "Informatie over het gebruik van VanEck Direct via een webversie of online portaal.",
    content: CONTACT_FALLBACK,
  },

  "krijg-ik-dividend-bij-vaneck-direct-en-wat-gebeurt-daarmee": {
    title: "Krijg ik dividend bij VanEck Direct en wat gebeurt daarmee?",
    description:
      "Uitleg over dividend bij VanEck Direct en hoe het wordt verwerkt.",
    content: CONTACT_FALLBACK,
  },

  "maandelijkse-inleg": {
    title: "Maandelijkse inleg",
    description:
      "Waarom een maandelijkse inleg slim is en hoe je het instelt bij VanEck Direct.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Veel beleggers vragen zich af: is het slimmer om in één keer een groot
          bedrag te investeren of juist maandelijks een vast bedrag in te
          leggen? Er is geen eenduidig antwoord, want beide strategieën hebben
          hun voordelen. Maar een maandelijkse inleg kan het beleggen een stuk
          eenvoudiger maken en helpt om er een vaste gewoonte van te maken.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct kun je je inleg eenvoudig automatiseren. Je kiest
          zelf hoeveel je elke maand belegt en op welke dag, zodat het aansluit
          bij je financiële planning. Maar waarom zou je hiervoor kiezen? Hier
          zijn de pluspunten:
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          1. Je hoeft niet het &lsquo;perfecte moment&rsquo; te timen
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De markt schommelt. Soms flink. Het kan verleidelijk zijn om te
          wachten op een &lsquo;goed&rsquo; moment om extra in te leggen, maar
          in de praktijk is dat lastig te voorspellen. Met een maandelijkse
          inleg koop je automatisch in op verschillende momenten. Zo voorkom je
          dat je per ongeluk net op een piek instapt.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          2. Je voorkomt emotioneel beleggen
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Beleggen brengt emoties met zich mee, zeker wanneer markten dalen.
          Door je inleg te automatiseren, haal je de emotie eruit: je legt
          gewoon elke maand in, ongeacht hoe de markt beweegt. Dat helpt om
          rustig en rationeel te blijven.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          3. Je bouwt discipline op
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Een maandelijkse inleg maakt beleggen tot een gewoonte. Net als een
          sportabonnement dat je elke maand betaalt: het zorgt ervoor dat je
          consistent blijft, ook als je het even druk hebt.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          4. Je vermogen groeit automatisch
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Één van de krachtigste effecten van langetermijnbeleggen is het
          rente-op-rente-effect. Door elke maand in te leggen, laat je je
          beleggingen automatisch groeien en profiteer je van de tijd. Hoe
          eerder je begint, hoe meer tijd je beleggingen hebben om te groeien.
          Een maandelijkse inleg helpt je om je beleggingen te automatiseren.
          Dit zorgt ervoor dat je vermogen blijft groeien zonder dat je er
          dagelijks over hoeft na te denken. Beleggen wordt zo een vast
          onderdeel van je financiële planning.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          5. Je houdt flexibiliteit
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Door stapsgewijs in te leggen, heb je de vrijheid om je inleg aan te
          passen als dat nodig is. Je kunt bijvoorbeeld een maand overslaan of
          juist wat extra inleggen als je financiële situatie verandert.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Hoe stel je een maandelijkse inleg in bij VanEck Direct?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Wil je ook maandelijks beleggen? Dit regel je eenvoudig in de VanEck
          Direct app:
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-6 text-base text-[#4a5568]">
          <li>Open de app en klik op de donkerblauwe plusknop.</li>
          <li>
            Ga naar &lsquo;Maandelijks&rsquo; en klik op &lsquo;Inleg
            aanpassen&rsquo;.
          </li>
          <li>
            Bepaal het bedrag en de datum waarop je wilt inleggen.
          </li>
        </ol>
      </>
    ),
  },

  "moet-ik-periodiek-blijven-inleggen-en-zo-ja-wat-is-daarvoor-het-minimumbedrag":
    {
      title:
        "Moet ik periodiek blijven inleggen? En zo ja, wat is daarvoor het minimumbedrag?",
      description:
        "Informatie over de verplichting tot periodiek inleggen en het minimumbedrag bij VanEck Direct.",
      content: CONTACT_FALLBACK,
    },

  "speel-met-je-beleggingsplan-en-ontdek-de-mogelijkheden": {
    title: "Speel met je beleggingsplan en ontdek de mogelijkheden",
    description:
      "Ontdek hoe je in de VanEck Direct app kunt spelen met je beleggingsplan om de impact van verschillende keuzes te zien.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          In de VanEck Direct app kun je eenvoudig zien wat er gebeurt als je
          je beleggingsplan aanpast. Of je nu overweegt om meer in te leggen, je
          risicoprofiel aan te passen of je looptijd te verlengen — alles is
          visueel en interactief te ontdekken.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Hoe werkt het?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Met de interactieve functie in de app kun je jouw plan aanpassen en
          direct zien wat de mogelijke impact is op je toekomstige vermogen. Dit
          helpt je om beter inzicht te krijgen in de lange termijn effecten van
          je keuzes, zonder direct wijzigingen door te voeren.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat kun je aanpassen?
        </h3>
        <p className="mt-2 text-base font-semibold text-[#211f54]">
          1. Looptijd van je beleggingen
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Wat als je langer belegt? Of juist eerder wilt stoppen? Pas de
          beleggingsperiode aan en zie hoe tijd een cruciale factor is voor je
          eindbedrag. Hoe langer je belegt, hoe groter de kans dat je vermogen
          groeit. Dit komt doordat je langer profiteert van eventuele rendementen
          en het rente-op-rente-effect, waarbij eerder behaalde winsten weer
          nieuwe winsten kunnen opleveren.
        </p>
        <p className="mt-2 text-base font-semibold text-[#211f54]">
          2. Eenmalige inleg
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Voeg een extra bedrag toe en zie hoe dit je verwachte eindbedrag
          beïnvloedt. Eenmalige inleggen kan helpen om sneller vermogen op te
          bouwen.
        </p>
        <p className="mt-2 text-base font-semibold text-[#211f54]">
          3. Maandelijkse inleg
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Pas eenvoudig aan hoeveel je elke maand investeert en ontdek wat dit
          betekent voor je beleggingsdoelen. Door maandelijks te beleggen, koop
          je op verschillende momenten in, zowel bij hogere als lagere koersen.
          Hierdoor wordt je inleg automatisch gespreid over de tijd, wat het
          effect van marktbewegingen kan dempen.
        </p>
        <p className="mt-2 text-base font-semibold text-[#211f54]">
          4. Risicoprofiel (op basis van jouw gegevens)
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Jouw beschikbare risicoprofielen zijn gebaseerd op de informatie die
          je eerder hebt ingevuld over je financiële situatie en
          risicobereidheid. Je kunt alleen kiezen uit profielen die passen bij
          jouw persoonlijke situatie. Wil je een hoger of lager risicoprofiel?
          Dan kun je de onboarding opnieuw doorlopen om je situatie opnieuw in
          te schatten.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Waarom is dit handig?
        </h3>
        <ul className="mt-4 list-none space-y-2 text-base text-[#4a5568]">
          <li>
            ✅ <strong>Geen verplichtingen</strong> – Spelen met je plan heeft
            geen directe gevolgen. Alleen als je daadwerkelijk op &ldquo;plan
            aanpassen&rdquo; klikt, worden wijzigingen doorgevoerd.
          </li>
          <li>
            ✅ <strong>Inzicht in de toekomst</strong> – Door te spelen met je
            plan, begrijp je beter hoe je keuzes bijdragen aan je financiële
            doelen.
          </li>
          <li>
            ✅ <strong>Realistisch beeld van beleggen</strong> – Beleggen gaat
            met ups en downs, en deze tool helpt je om een breder perspectief
            te krijgen.
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Wil je een wijziging echt doorvoeren? Dat kan eenvoudig in de app als
          je klikt op &ldquo;plan aanpassen&rdquo; in de app zodat je een
          scenario hebt gevonden dat bij jou past.
        </p>
      </>
    ),
  },

  "vallen-mijn-investeringen-in-de-app-onder-het-deposito-garantiestelsel": {
    title:
      "Vallen mijn investeringen in de app onder het deposito garantiestelsel?",
    description:
      "Informatie over het depositogarantiestelsel en VanEck Direct beleggingen.",
    content: CONTACT_FALLBACK,
  },

  "verschil-vaneck-vaneckdirect": {
    title: "Het verschil tussen VanEck & VanEck Direct",
    description:
      "Wat is het verschil tussen VanEck Beheerd Indexbeleggen en VanEck Direct? Ontdek welke optie het beste bij jou past.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          VanEck is een familiebedrijf dat al bijna 70 jaar actief is in de
          wereld van beleggen en een pionier is op het gebied van ETFs. VanEck
          biedt twee verschillende manieren om te beleggen: VanEck Beheerd
          Indexbeleggen &amp; VanEck Direct. Hieronder leggen we de
          belangrijkste verschillen uit, zodat je kunt bepalen welke optie het
          beste bij jou past.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Voor wie?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          VanEck Beheerd Indexbeleggen is bedoeld voor particuliere beleggers
          met een vermogen vanaf €50.000 en voor ondernemingen die willen
          beleggen vanuit een BV, bijvoorbeeld een pensioen-BV.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct is speciaal ontwikkeld voor particuliere beleggers die
          willen starten met beleggen vanaf een minimale inleg van €100.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Hoe werkt de intake?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Beheerd Indexbeleggen start je met een kosteloos
          oriëntatiegesprek om te bepalen of beleggen geschikt is en of deze
          vorm van vermogensbeheer aansluit bij je situatie en doelen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct doorloop je een onboarding in de app waarin je je
          financiële situatie, risicobereidheid en investeringsdoelen invult. Op
          basis hiervan wordt automatisch een passend beleggingsprofiel
          vastgesteld.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Hoe wordt je beleggingsplan bepaald?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Beheerd Indexbeleggen vindt een uitgebreide inventarisatie
          plaats. Hierin worden je wensen, doelen, financiële situatie en
          risicobereidheid besproken. Op basis hiervan wordt een op maat gemaakt
          beleggingsplan opgesteld.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct wordt de portefeuille automatisch samengesteld na
          een persoonlijke onboarding op basis van je risicoprofiel, zonder dat
          je zelf keuzes hoeft te maken.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Ondertekening en beheer
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Bij beide opties onderteken je digitaal de benodigde documenten.
          VanEck Beheerd Indexbeleggen biedt jaarlijkse evaluatiegesprekken.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct ontvang je regelmatige updates via de app en per
          e-mail, zonder persoonlijk gesprek.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat zijn de kosten?
        </h3>
        <p className="text-base font-semibold text-[#211f54]">
          Vermogensbeheer:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>
            VanEck Beheerd Indexbeleggen: 0,55% per jaar, met een minimum van
            €395 en een maximum van €2.420 voor particulieren (voor
            ondernemingen max. €2.958 incl. btw).
          </li>
          <li>
            VanEck Direct: 0,5% per jaar over het beheerde vermogen.
          </li>
        </ul>
        <p className="mt-4 text-base font-semibold text-[#211f54]">
          Fondskosten:
        </p>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De fondskosten zijn afhankelijk van het gekozen risicoprofiel en
          liggen voor beide opties in een vergelijkbaar bereik.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct betaal je €1 bij opname voordat je beleggingsdoel
          is bereikt, maar er zijn geen kosten voor openen of opzeggen, en je
          kunt flexibel bijstorten zonder extra kosten.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Aanbod
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Wil je meer weten over de specifieke ETFs en risicoprofielen binnen
          VanEck Beheerd Indexbeleggen en VanEck Direct? Bezoek dan de websites
          van beide diensten voor meer informatie.
        </p>
      </>
    ),
  },

  "waarom-vraagt-vaneck-direct-om-persoonlijke-gegevens": {
    title: "Waarom vraagt VanEck Direct om persoonlijke gegevens?",
    description:
      "Uitleg over waarom VanEck Direct om persoonlijke gegevens vraagt en hoe ze worden gebruikt.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Bij het openen van een beleggingsaccount via VanEck Direct vragen we
          om een aantal persoonlijke gegevens, waaronder je naam, adres,
          identiteitsbewijs, en je Burgerservicenummer (BSN). VanEck Direct is
          wettelijk verplicht om deze gegevens te verzamelen. We begrijpen dat
          dit gevoelig kan aanvoelen, en leggen je hier graag uit waarom dit
          nodig is.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wettelijke verplichtingen
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          VanEck Direct is een gereguleerde financiële dienstverlener en is
          verplicht om te voldoen aan wet- en regelgeving, waaronder:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>De Wet op het financieel toezicht (Wft)</li>
          <li>Anti-witwasrichtlijnen (WWFT)</li>
          <li>Europese MiFID II-regels</li>
          <li>Fiscale rapportageverplichtingen</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Deze regels zijn bedoeld om financiële criminaliteit tegen te gaan én
          om beleggingen transparant en veilig te houden.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Waarom vragen we om je BSN?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          We zijn wettelijk verplicht om jouw beleggingen jaarlijks door te
          geven aan de Belastingdienst, dit heet het renseigneringproces. Dit
          geldt voor alle financiële instellingen in Nederland. Hiervoor is je
          BSN (Burgerservicenummer) nodig. Dankzij het renseigneringproces
          koppelen wij je beleggingen aan je persoonlijke belastingaangifte,
          zodat jouw fiscale situatie volledig en correct geregistreerd wordt.
          Je hoeft je beleggingen dan meestal niet meer handmatig aan te geven.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          TIN Nummer
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Als je buiten Nederland belastingplichtig bent, kunnen we ook vragen
          naar je TIN-nummer (Tax Identification Number). Dit is onderdeel van
          internationale fiscale rapportageverplichtingen.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Hoe gaan we om met je gegevens?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          We behandelen jouw gegevens met de hoogste zorg:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>
            We gebruiken ze alleen voor wettelijke verplichtingen en
            dienstverlening
          </li>
          <li>Je gegevens worden versleuteld opgeslagen</li>
          <li>Alleen geautoriseerd personeel heeft toegang</li>
          <li>
            We delen niets met derden zonder jouw toestemming, behalve waar
            wettelijk vereist
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          VanEck Direct voldoet aan de Algemene Verordening Gegevensbescherming
          (AVG) en valt onder toezicht van de Autoriteit Financiële Markten
          (AFM).
        </p>
      </>
    ),
  },

  "wanneer-en-waarom-is-het-geen-goed-idee-om-te-gaan-beleggen": {
    title: "Wanneer en waarom is het geen goed idee om te gaan beleggen?",
    description:
      "Informatie over wanneer beleggen mogelijk niet geschikt voor je is.",
    content: CONTACT_FALLBACK,
  },

  "wanneer-zie-ik-mijn-maandelijkse-inleg-terug-in-de-app": {
    title: "Wanneer zie ik mijn maandelijkse inleg terug in de app?",
    description:
      "Informatie over wanneer je maandelijkse inleg zichtbaar wordt in de VanEck Direct app.",
    content: CONTACT_FALLBACK,
  },

  "wat-betekent-het-als-mijn-storting-vertraagd-of-geweigerd-is": {
    title: "Wat betekent het als mijn storting vertraagd of geweigerd is?",
    description:
      "Uitleg over wat te doen als je storting bij VanEck Direct vertraagd of geweigerd is.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Heb je geld overgemaakt naar VanEck Direct, maar zie je het bedrag nog
          niet in je account?
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed text-[#211f54]">
          Allereerst: geen zorgen.
        </p>
        <p className="mt-2 text-base leading-relaxed text-[#4a5568]">
          In de meeste gevallen is een vertraagde of geweigerde storting
          tijdelijk. Je geld is dan ook niet verdwenen, vaak is er sprake van
          een controle, een naamverschil of een kleine vertraging in de
          verwerking.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          In dit artikel leggen we uit wat mogelijke oorzaken zijn van een
          vertraagde of geweigerde storting en wat je zelf kunt doen.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          1. Verwerkingstijd van betaalmethodes bij VanEck Direct
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          <strong>iDEAL:</strong> Bij een storting via iDEAL is het bedrag
          direct zichtbaar in de app. We beleggen dit bedrag vervolgens binnen 1
          tot 2 werkdagen, op handelsdagen. Dit gebeurt automatisch — je hoeft
          hier zelf niets voor te doen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          <strong>SEPA-incasso (automatische maandelijkse inleg):</strong>{" "}
          Wanneer je kiest voor een maandelijkse automatische incasso, wordt het
          bedrag diezelfde dag zichtbaar in de app op de dag van afschrijving.
          Door het incassoproces kan de definitieve verwerking 1 tot 3 werkdagen
          duren.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          2. Veelvoorkomende oorzaken van vertragingen of weigeringen
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-[#4a5568]">
          <li>
            <strong>
              Naamverschil tussen bankrekening en identiteitsbewijs
            </strong>{" "}
            → Zorg dat de naam op je bankrekening exact overeenkomt met de naam
            op je identiteitsdocument.
          </li>
          <li>
            <strong>Storting vanaf een niet-gekoppelde rekening</strong> → Je
            kunt alleen storten vanaf de IBAN die je hebt gekoppeld bij de
            registratie.
          </li>
          <li>
            <strong>Account nog niet volledig geverifieerd</strong> → Je eerste
            storting wordt pas verwerkt zodra je identiteit én bankrekening zijn
            goedgekeurd.
          </li>
          <li>
            <strong>
              Technische storing bij je bank of tussenpartij
            </strong>{" "}
            → Soms is er sprake van een tijdelijke storing in het
            betalingsverkeer. Je geld raakt hierbij niet kwijt, maar de
            verwerking kan vertraagd zijn.
          </li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          3. Wat kun je zelf doen?
        </h3>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>
            Controleer of je storting is afgeschreven van je bankrekening
          </li>
          <li>
            Kijk in de app of je accountstatus &lsquo;volledig
            geverifieerd&rsquo; is
          </li>
          <li>
            Wacht bij een eerste storting minimaal 1-2 werkdagen voor
            zichtbaarheid
          </li>
          <li>Zorg dat je altijd stort vanaf de gekoppelde IBAN</li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          4. Wanneer contact opnemen?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Staat je storting na 2 werkdagen nog steeds niet in je account, of is
          het bedrag teruggestort? Neem dan contact met ons op via{" "}
          <a
            href="mailto:direct@vaneck.com"
            className="text-[#17468f] underline hover:opacity-80"
          >
            direct@vaneck.com
          </a>
          .
        </p>
      </>
    ),
  },

  "wat-gebeurt-er-als-jullie-failliet-gaan": {
    title: "Wat gebeurt er als jullie failliet gaan?",
    description:
      "Informatie over de bescherming van je beleggingen bij een faillissement van VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "wat-is-beleggen": {
    title: "Wat is beleggen?",
    description:
      "Een uitleg over wat beleggen is en hoe het werkt.",
    content: CONTACT_FALLBACK,
  },

  "wat-is-dividend-en-waarom-is-het-belangrijk-voor-je-rendement": {
    title: "Wat is dividend en waarom is het belangrijk voor je rendement?",
    description:
      "Uitleg over dividend en het belang ervan voor je beleggingsrendement.",
    content: CONTACT_FALLBACK,
  },

  "wat-is-dividendlekkage": {
    title: "Wat is dividendlekkage?",
    description:
      "Uitleg over dividendlekkage en hoe dit van invloed is op je beleggingsrendement bij ETFs.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De meeste landen houden bronbelasting in op dividenden die bij hen
          gevestigde bedrijven uitkeren. Veelal ligt dit percentage tussen de
          15% en 30% op het uitgekeerde bruto dividend. Om dubbele belasting te
          voorkomen zijn er fiscale conventies afgesloten die het veelal mogelijk
          maken (een deel) van de bronbelasting terug te vragen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Bij ETFs (en actieve beleggingsfondsen) speelt deze problematiek ook.
          Complicatie hierbij is dat de belegger die aandelen niet meer zelf in
          bezit heeft, maar dat de beleggingsinstelling dit doet. Je bent dan
          afhankelijk van de beleggingsinstelling om de bronbelasting terug te
          vragen. In de praktijk is dat meestal niet mogelijk, waardoor de
          bronbelasting weglekt; de zgn. dividendlekkage.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Nederland biedt Nederlands belastingplichtigen een oplossing: Bij ETFs
          (en actieve beleggingsfondsen) die de zgn. FBI (Fiscale
          BeleggingsInstelling) status hebben, kunnen Nederlands
          belastingplichtige beleggers de dividend bronbelasting terugvragen of
          verrekenen met hun Nederlandse belastingaangifte.
        </p>
        <p className="mt-4 text-sm text-[#4a5568]">
          Fiscale informatie is primair bedoeld voor beleggers die Nederlands
          belastingplichtig zijn. Deze informatie betreft geen fiscaal advies.
          Raadpleeg waar nodig een fiscaal adviseur.
        </p>
      </>
    ),
  },

  "wat-is-een-risicoprofiel-en-hoe-wordt-dit-bepaald-bij-vaneck-direct": {
    title:
      "Wat is een risicoprofiel en hoe wordt dit bepaald bij VanEck Direct",
    description:
      "Informatie over risicoprofielen en hoe VanEck Direct jouw profiel bepaalt.",
    content: CONTACT_FALLBACK,
  },

  "wat-is-id-pay-en-waarom-moet-ik-hiervoor-tekenen": {
    title: "Wat is ID & pay en waarom moet ik hiervoor tekenen?",
    description:
      "Uitleg over ID & pay van ABN AMRO en waarom je hiervoor een contract tekent bij VanEck Direct.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          ID &amp; pay is het officiële betaal- en identificatieplatform achter
          VanEck Direct en is onderdeel van ABN AMRO.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Tijdens het aanmaken van je account teken je twee contracten:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Een beleggingscontract met VanEck</li>
          <li>
            Een contract met ABN AMRO voor het gebruik van ID &amp; pay
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Hieronder leggen we uit wat ID &amp; pay precies is, en waarom dit
          nodig is.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat is ID &amp; pay?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          ID &amp; pay is een dienst van ABN AMRO die VanEck Direct gebruikt om:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Je identiteit veilig te koppelen aan je bankrekening</li>
          <li>
            Geldverkeer op een gecontroleerde en betrouwbare manier te
            verwerken
          </li>
          <li>
            Zeker te weten dat alleen jij toegang hebt tot je
            beleggingsrekening
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          ID &amp; pay zorgt er ook voor dat jouw geld strikt gescheiden blijft
          van VanEck zelf en op jouw naam blijft staan.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Waarom moet ik hiervoor tekenen?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Je ondertekent een overeenkomst met ABN AMRO zodat:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>
            Je gebruik kunt maken van VanEck Direct volgens de geldende wet- en
            regelgeving
          </li>
          <li>
            De identificatie en koppeling met je bankrekening juridisch correct
            is geregeld
          </li>
          <li>
            Je geld wordt beheerd via een apart cliëntenplatform van ABN AMRO
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dit is wettelijk en technisch noodzakelijk om de app te kunnen
          gebruiken.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Is dit veilig?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Ja. Zowel VanEck als ABN AMRO staan onder toezicht van de AFM en De
          Nederlandsche Bank (DNB) en voldoen aan alle Europese regelgeving,
          zoals MiFID II en de AVG. Je gegevens worden uitsluitend gebruikt voor
          jouw beleggingsrekening en nooit zonder toestemming gedeeld met
          derden.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Vragen?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Heb je nog vragen over ID &amp; pay of de contracten? Neem dan gerust
          contact met ons op via{" "}
          <a
            href="mailto:direct@vaneck.com"
            className="text-[#17468f] underline hover:opacity-80"
          >
            direct@vaneck.com
          </a>
          .
        </p>
      </>
    ),
  },

  "wat-voor-bedrijf-is-vaneck": {
    title: "Wat voor bedrijf is VanEck?",
    description:
      "Meer informatie over VanEck als bedrijf en zijn geschiedenis.",
    content: CONTACT_FALLBACK,
  },

  "wat-zijn-de-historische-rendementen-van-vaneck-direct": {
    title: "Wat zijn de historische rendementen van VanEck Direct?",
    description:
      "Informatie over de historische rendementen van VanEck Direct.",
    content: CONTACT_FALLBACK,
  },

  "wat-zijn-de-kosten": {
    title: "Wat zijn de kosten",
    description:
      "Overzicht van de kosten bij VanEck Direct, inclusief beheerkosten, fondskosten en opnamekosten.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct willen we beleggen toegankelijk en betaalbaar maken.
          Daarom hanteren we transparante en lage kosten. Hieronder vind je een
          overzicht van de kosten die van toepassing zijn op je beleggingen bij
          VanEck Direct.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat zijn beheerkosten?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Beheerkosten zijn de kosten die je betaalt voor het beheer van je
          beleggingen. Dit is een percentage van je belegd vermogen en wordt
          jaarlijks in rekening gebracht. Bij VanEck Direct bedragen de
          beheerkosten <strong>0,5% per jaar</strong>.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Waarom betaal je beheerkosten? De beheerkosten worden gebruikt voor:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>
            <strong>Het beheer van je beleggingen</strong> – VanEck Direct
            zorgt ervoor dat je portefeuille up-to-date blijft en goed aansluit
            bij je risicoprofiel.
          </li>
          <li>
            <strong>Onderzoek en analyse</strong> – Experts monitoren de markt
            en passen strategieën aan om je rendement te optimaliseren.
          </li>
          <li>
            <strong>Technologie en platformkosten</strong> – Dit omvat het
            onderhoud en de ontwikkeling van het platform waarmee je gemakkelijk
            kunt beleggen.
          </li>
          <li>
            <strong>Klantenservice</strong> – Ondersteuning door experts die je
            vragen kunnen beantwoorden.
          </li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat zijn fondskosten (TER)?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De TER (Total Expense Ratio) is de jaarlijkse kostenratio van het
          beleggingsfonds zelf. Dit percentage varieert afhankelijk van je
          risicoprofiel en ligt tussen ca.{" "}
          <strong>0,14% en 0,20% per jaar</strong>, afhankelijk van je
          risicoprofiel.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Dit percentage dekt de kosten binnen het fonds, zoals het beheer van
          de ETF&apos;s en de spread op de beurs. De spread is het verschil
          tussen de bied en de laatprijs als de ETF wordt verhandeld. Dit wordt
          bepaald door de markt en zijn eigenlijk de transactiekosten.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Het intern beheren van het beleggingsfonds</li>
          <li>
            Kosten voor het aankopen, verkopen en herbalanceren van de
            beleggingen binnen het fonds
          </li>
          <li>Operationele kosten</li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Opnamekosten
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Wanneer je een deel van je beleggingen opneemt, betaal je{" "}
          <strong>€1 per opname</strong>.
        </p>
      </>
    ),
  },

  "welke-documenten-heb-ik-nodig-voor-de-verificatie": {
    title: "Welke documenten heb ik nodig voor de verificatie?",
    description:
      "Overzicht van de benodigde documenten voor de verificatie bij het aanmaken van een VanEck Direct account.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De laatste stap van het onboarding proces is het daadwerkelijk
          aanmaken van je account. Dit bevat enkele belangrijke verificaties om
          jouw gegevens veilig en correct vast te leggen.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          E-mailverificatie
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Na het invoeren van je e-mailadres ontvang je een bevestigingsmail.
          Klik op de link om je e-mailadres te verifiëren.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Identiteitsverificatie
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Je wordt gevraagd om één van de volgende documenten te uploaden:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Paspoort</li>
          <li>ID</li>
          <li>Rijbewijs</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Daarna maak je een korte selfievideo, zodat we kunnen controleren of
          jij overeenkomt met het identiteitsdocument.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Belastinginformatie
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Je beantwoordt enkele vragen over waar je belastingplichtig bent en
          voert je TIN-nummer (Tax Identification Number) in. Daarnaast vragen
          we je om ook je BSN-nummer (Burgerservicenummer) op te geven, zoals
          vereist voor financiële identificatie binnen Nederland.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Bankrekening koppelen
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Koppel je persoonlijke IBAN-bankrekening door een eerste storting te
          doen via deze rekening. Dit is nodig om te bevestigen dat de rekening
          op jouw naam staat en dat je toegang hebt tot deze bankrekening.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Contracten ondertekenen
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Je ondertekent twee overeenkomsten digitaal in de app:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Het beleggingscontract met VanEck Direct</li>
          <li>
            Een contract met ABN AMRO voor het gebruik van ID&amp;Pay, ons
            betalingsplatform voor veilige en gecontroleerde transacties.
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Na deze stap is je account volledig geactiveerd en kun je beginnen met
          beleggen.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Heb je vragen tijdens het verificatieproces? Neem gerust contact op
          via{" "}
          <a
            href="mailto:direct@vaneck.com"
            className="text-[#17468f] underline hover:opacity-80"
          >
            direct@vaneck.com
          </a>
          .
        </p>
      </>
    ),
  },

  "welke-gevolgen-kan-het-gebruik-van-de-app-hebben-voor-mijn-belastingaangifte":
    {
      title:
        "Welke gevolgen kan het gebruik van de app hebben voor mijn belastingaangifte?",
      description:
        "Informatie over de fiscale gevolgen van beleggen via de VanEck Direct app.",
      content: CONTACT_FALLBACK,
    },

  "welke-kosten-komen-er-kijken-bij-het-gebruik-van-de-app": {
    title: "Welke kosten komen er kijken bij het gebruik van de app?",
    description:
      "Overzicht van alle kosten bij het gebruik van de VanEck Direct app.",
    content: (
      <>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Bij VanEck Direct willen we beleggen toegankelijk en betaalbaar maken.
          Daarom hanteren we transparante en lage kosten. Hieronder vind je een
          overzicht van de kosten die van toepassing zijn op je beleggingen bij
          VanEck Direct.
        </p>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat zijn beheerkosten?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Beheerkosten zijn de kosten die je betaalt voor het beheer van je
          beleggingen. Dit is een percentage van je belegd vermogen en wordt
          jaarlijks in rekening gebracht. Bij VanEck Direct bedragen de
          beheerkosten <strong>0,5% per jaar</strong>.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
          Waarom betaal je beheerkosten? De beheerkosten worden gebruikt voor:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>
            <strong>Het beheer van je beleggingen</strong> – VanEck Direct
            zorgt ervoor dat je portefeuille up-to-date blijft en goed aansluit
            bij je risicoprofiel.
          </li>
          <li>
            <strong>Onderzoek en analyse</strong> – Experts monitoren de markt
            en passen strategieën aan om je rendement te optimaliseren.
          </li>
          <li>
            <strong>Technologie en platformkosten</strong> – Dit omvat het
            onderhoud en de ontwikkeling van het platform waarmee je gemakkelijk
            kunt beleggen.
          </li>
          <li>
            <strong>Klantenservice</strong> – Ondersteuning door experts die je
            vragen kunnen beantwoorden.
          </li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Wat zijn fondskosten (TER)?
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          De TER (Total Expense Ratio) is de jaarlijkse kostenratio van het
          beleggingsfonds zelf. Dit percentage varieert afhankelijk van je
          risicoprofiel en ligt tussen ca.{" "}
          <strong>0,14% en 0,20% per jaar</strong>, afhankelijk van je
          risicoprofiel.
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-base text-[#4a5568]">
          <li>Het intern beheren van het beleggingsfonds</li>
          <li>
            Kosten voor het aankopen, verkopen en herbalanceren van de
            beleggingen binnen het fonds
          </li>
          <li>Operationele kosten</li>
        </ul>

        <h3 className="font-heading mb-3 mt-8 text-xl font-semibold text-[#211f54]">
          Opnamekosten
        </h3>
        <p className="text-base leading-relaxed text-[#4a5568]">
          Wanneer je een deel van je beleggingen opneemt, betaal je{" "}
          <strong>€1 per opname</strong>.
        </p>
      </>
    ),
  },

  "welke-kosten-zitten-er-verbonden-aan-storten-of-opnemen": {
    title: "Welke kosten zitten er verbonden aan storten of opnemen?",
    description:
      "Informatie over de kosten voor storten en opnemen bij VanEck Direct.",
    content: CONTACT_FALLBACK,
  },
};
