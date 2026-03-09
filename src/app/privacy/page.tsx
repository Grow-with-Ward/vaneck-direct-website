import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import AppScreenshots from "@/components/AppScreenshots";

export const metadata: Metadata = {
  title: "Privacybeleid | Jouw Gegevens Veilig bij VanEck Direct",
  description:
    "Lees het privacybeleid van VanEck Direct en hoe wij omgaan met uw persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f0f2f8] to-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-[#0e3065] md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Privacy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Intro */}
          <h2 className="font-heading text-2xl font-bold text-[#0e3065]">
            Privacy Policy van VanEck Direct
          </h2>

          <p className="mt-6 text-base font-bold leading-relaxed text-[#4a5568]">
            In dit document is het privacybeleid van VanEck Direct neergelegd (Privacy Policy).
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
            Wij zijn VanEck Asset Management B.V., een bedrijf dat in Nederland bij de Kamer van
            Koophandel is geregistreerd onder nummer 34314095 met geregistreerd kantoor aan de
            Barbara Strozzilaan 310, 1083 HN Amsterdam, Nederland (VanEck, we, wij, ons of onze).
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
            VanEck doet er alles aan om de privacy en vertrouwelijkheid te beschermen van de
            persoonsgegevens die u aan ons toevertrouwt. Deze Privacy Policy heeft betrekking op
            de verwerking van persoonsgegevens door VanEck. Het gaat hierbij om persoonsgegevens
            van bezoekers, gebruikers en rekeninghouders die via de VanEck Direct-app (de{" "}
            <strong>App</strong>) en in het kader van de beleggingsdiensten van VanEck aan zijn
            klanten, worden verzameld via en in verband met de App (de{" "}
            <strong>Diensten</strong>).
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
            In dit Privacy Policy geven we aan hoe we onze belofte aan u waarmaken.
          </p>

          <div className="mt-12 space-y-12">
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">1. Verantwoordelijkheid</h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                We hanteren strikte beleidsregels en procedures voor de verwerking van uw
                persoonsgegevens. Al onze medewerkers hebben de verantwoordelijkheid om de
                persoonsgegevens waartoe zij toegang hebben, te respecteren en te beschermen.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Ons management ziet toe op privacybeheer. Privacybeheer omvat beleid,
                geschillenbeslechting, training, communicatieactiviteiten en rapportage aan onze
                Raad van Bestuur in verband met privacykwesties. Zie &apos;Contact opnemen&apos;
                voor meer informatie.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                2. Persoonsgegevens die wij verzamelen
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Persoonsgegevens zijn gegevens over een identificeerbare persoon. Deze gegevens
                omvatten informatie die u aan ons heeft verstrekt of die door ons via andere
                bronnen is verzameld. Deze informatie kan bestaan uit gegevens zoals uw naam en
                adres, leeftijd en geslacht, persoonlijke financiële documenten,
                identificatienummers en persoonlijke referenties, voor zover dit is toegestaan op
                grond van lokale wetgeving. We verzamelen uitsluitend de persoonsgegevens waarvan
                we hebben vastgesteld dat deze vereist zijn voor de doeleinden die worden
                beschreven in paragraaf 3 (&apos;Hoe wij uw persoonsgegevens gebruiken&apos;).
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                We kunnen gegevens verzamelen die rechtstreeks van u afkomstig zijn, doordat u uw
                persoonsgegevens aan ons heeft verstrekt en doordat u gebruikmaakt van de App en
                de Diensten. Voorbeelden:
              </p>
              <ul className="mt-4 space-y-4 text-base leading-relaxed text-[#4a5568]">
                <li>
                  <strong>Contactgegevens en algemene informatie:</strong> bijvoorbeeld naam,
                  adres, geboortedatum, telefoonnummer en e-mailadres.
                </li>
                <li>
                  <strong>Financiële gegevens:</strong> bijvoorbeeld informatie over
                  bankrekeningen, en uw beleggings- en risicoprofiel op basis van de beleggings-
                  en risicovoorkeuren die u heeft verstrekt in het kader van de
                  registratieprocedure in de App.
                </li>
                <li>
                  <strong>Informatie in verband met misdaad- en fraudepreventie:</strong>{" "}
                  bijvoorbeeld informatie met betrekking tot uw financiële situatie, uw
                  kredietwaardigheid of eventuele criminele of frauduleuze activiteiten die door u
                  of derden aan ons zijn verstrekt, waaronder identificerende informatie, zoals
                  paspoorten en/of andere officiële documenten (waaronder pincodes en
                  documentnummers); informatie over transacties, kredietratings van
                  kredietregistratiebureaus of informatie-uitwisselingsgroepen; informatie met
                  betrekking tot fraude of misdrijven die u heeft gepleegd of verdachte
                  transacties die u heeft uitgevoerd; informatie waaruit blijkt dat uw gegevens in
                  lijsten met politiek prominente personen of in sanctielijsten zijn opgenomen.
                </li>
                <li>
                  <strong>Informatie of feedback die u ons geeft:</strong> bijvoorbeeld wanneer u
                  het contactformulier gebruikt of wanneer u op andere wijze contact met ons
                  opneemt, doordat wij onze correspondentie en andere inhoud die u eventueel naar
                  uw account uploadt, registreren.
                </li>
                <li>
                  <strong>Informatie over marketingvoorkeuren:</strong> details over uw
                  marketingvoorkeuren (bijvoorbeeld communicatievoorkeuren) en informatie op basis
                  waarvan wij u passende producten en diensten kunnen aanbieden.
                </li>
              </ul>

              <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
                Wanneer u van de App of de Diensten gebruikmaakt kunnen we persoonsgegevens ook
                automatisch verzamelen. Voorbeelden:
              </p>
              <ul className="mt-4 space-y-4 text-base leading-relaxed text-[#4a5568]">
                <li>
                  <strong>Apparaatgegevens:</strong> bijvoorbeeld informatie over uw
                  besturingssysteem, browser, software, IP-adres, geolocatie, beveiligingsstatus
                  en andere apparaatgegevens om uw gebruikerservaring te verbeteren, bescherming
                  tegen fraude te bieden en risico&apos;s te beheren.
                </li>
                <li>
                  <strong>Uw transacties en posities:</strong> details van transacties die u via
                  ons uitvoert of posities die u via ons inneemt.
                </li>
                <li>
                  <strong>
                    Gegevens over het gebruik van de App en van communicatiemiddelen:
                  </strong>{" "}
                  details van uw bezoeken aan en gebruik van de App en gegevens die worden
                  verzameld via cookies en andere traceringstechnologieën, waaronder uw IP-adres,
                  uw browserversie en besturingssysteem, dataverkeersgegevens, locatiegegevens,
                  weblogbestanden en andere communicatiegegevens, alsmede de bronnen die u
                  raadpleegt.
                </li>
              </ul>

              <p className="mt-6 text-base leading-relaxed text-[#4a5568]">
                We verzamelen geen bijzondere categorieën persoonsgegevens over u.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                De diensten van VanEck zijn niet bedoeld voor personen jonger dan 18 jaar. VanEck
                verzamelt niet bewust persoonsgegevens van kinderen jonger dan 13 jaar. Als we
                vaststellen dat we zonder ouderlijke toestemming persoonsgegevens hebben verzameld
                of ontvangen van een kind jonger dan 13 jaar, verwijderen we deze gegevens. Wij
                verzoeken u ons daar zo nodig op te wijzen.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                3. Hoe wij uw persoonsgegevens gebruiken
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als wij uw persoonsgegevens verzamelen, kunnen we deze gebruiken of bekendmaken
                voor de volgende specifieke doeleinden. Uitleg over de reikwijdte van de
                &apos;rechtsgronden&apos; vindt u in bijlage A. Wij bewaren uw persoonsgegevens
                niet langer dan redelijkerwijs nodig is in verband met de specifieke doeleinden
                waarvoor we de gegevens hebben verzameld. Daarom geven we ook een lijst met de
                bewaartermijnen die voor de specifieke doeleinden van toepassing zijn. Wanneer we
                uw persoonsgegevens niet langer nodig hebben voor een specifiek doel, kan deze
                informatie zo nodig nog steeds worden verwerkt omdat we de gegevens ook voor een
                ander doel hebben verzameld (bijvoorbeeld om te voldoen aan een wettelijke
                verplichting).
              </p>

              {/* Purpose items */}
              <div className="mt-6 space-y-8">
                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Om u te informeren over producten en diensten</strong> waarin u
                    mogelijk bent geïnteresseerd. Om u updates en aanbiedingen te sturen in geval
                    u ervoor heeft gekozen om deze te ontvangen. Wij kunnen uw gegevens ook
                    gebruiken voor de marketing via e-mail of telefoon van onze eigen producten en
                    diensten en van die van onze geselecteerde zakelijke partners. Indien wettelijk
                    verplicht vragen we uw toestemming op het moment dat we uw gegevens voor deze
                    soorten marketing verzamelen. We bieden u de mogelijkheid om u af te melden of
                    uit te schrijven voor aanvullende elektronische marketingberichten die aan u
                    worden verzonden. U kunt dit ook regelen door contact met ons op te nemen. Zie
                    &apos;Contact opnemen&apos;.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Om uw klantprofiel te maken.</strong> We kunnen uw persoonsgegevens
                    verwerken wanneer dat nodig is om binnen de App uw klantprofiel te maken en te
                    onderhouden. Dit betreft alle gegevens die nodig zijn om uw identiteit te
                    verifiëren en onze Diensten aan u te kunnen leveren.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Voor effectieve communicatie en bedrijfsvoering.</strong> Om onze
                    activiteiten uit te voeren, zoals het beantwoorden van uw vragen, anderszins
                    met u te communiceren of aan de verplichtingen te voldoen die voortvloeien uit
                    overeenkomsten die zijn aangegaan tussen u en ons.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>
                      Om inzicht in onze klanten te verkrijgen en om onze Producten en Diensten te
                      ontwikkelen en te personaliseren.
                    </strong>{" "}
                    Wij, of externe dienstverleners namens ons, kunnen de persoonsgegevens waarover
                    we beschikken, analyseren om meer inzicht te verkrijgen in onze bedrijfsvoering
                    en om onze producten en Diensten te ontwikkelen.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Om Producten en Diensten te leveren en te beheren.</strong> Om onze
                    Diensten te beheren, zoals het uitvoeren van onze verplichtingen die
                    voortvloeien uit onze overeenkomsten met u of uw bedrijf, of om u op de hoogte
                    te stellen van wijzigingen in onze Diensten en producten.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>
                      Om uw identiteit te controleren, om bescherming tegen fraude te bieden en om
                      risico&apos;s te beheren.
                    </strong>{" "}
                    Wij en andere organisaties hebben te allen tijde toegang tot bepaalde informatie
                    om fraude, witwassen en terrorisme te voorkomen, indien dit wordt vereist op
                    grond van wet- en regelgeving of best practices.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Om een beleggingsprofiel op te stellen.</strong> Om een
                    beleggingsprofiel voor u op te kunnen stellen, kunnen wij informatie over uw
                    financiële situatie verwerken, zoals informatie over uw bankrekening en
                    informatie over uw beleggingsvoorkeuren. Dit doen wij om de kwaliteit van onze
                    Diensten te waarborgen en om te voldoen aan verplichtingen die voortvloeien uit
                    financiële wetgeving.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>
                      Om te voldoen aan wettelijke verplichtingen of wanneer dit anderszins
                      wettelijk is toegestaan.
                    </strong>{" "}
                    Wij kunnen uw persoonsgegevens verwerken om te voldoen aan regelgeving, te
                    overleggen met regelgevende instanties, ons te verweren tegen vorderingen of
                    vorderingen in te dienen waarbij uw persoonsgegevens kunnen worden doorgegeven
                    aan derden, de rechtbank, regelgevende instanties en/of
                    wetshandhavingsdiensten.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Om u te informeren over wijzigingen.</strong> Om u te informeren over
                    wijzigingen in onze Diensten en producten.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>Om bepaalde activiteiten te bewaken.</strong> Informatieaanvragen en
                    transacties bewaken om zorg te dragen voor servicekwaliteit, naleving van
                    procedures en fraudebestrijding.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>
                      Om problemen met onze App te registreren en diagnosticeren.
                    </strong>{" "}
                    Om ons bedrijf te beschermen of om problemen op te lossen, kunnen we gegevens
                    over uw apparaat en het gebruik van onze Diensten verwerken.
                  </p>
                </div>

                <div className="border-l-2 border-[#f0f2f8] pl-4">
                  <p className="text-base leading-relaxed text-[#4a5568]">
                    <strong>
                      Om onze activiteiten te reorganiseren of te wijzigen.
                    </strong>{" "}
                    Indien wij betrokken zijn bij onderhandelingen over de verkoop van onze
                    activiteiten of een deel daarvan aan een derde, worden verkocht aan een derde
                    of een reorganisatie ondergaan, moeten wij mogelijk enige of alle
                    persoonsgegevens doorgeven aan de betrokken derde als onderdeel van
                    duediligenceprocedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                4. Toestemming en uw keuzes
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                De verwerking van uw persoonsgegevens is grotendeels toegestaan op basis van
                &apos;rechtsgronden&apos; en is niet afhankelijk van uw toestemming (zie artikel 3
                hierboven). Met betrekking tot direct marketing vragen wij, indien we daartoe
                verplicht zijn, om uw toestemming voordat we uw persoonsgegevens voor dit doel
                gebruiken. Direct marketing is onze communicatie met u via het e-mailadres dat bij
                uw contactgegevens wordt vermeld, om u te informeren over producten en diensten
                waarvan we menen dat deze interessant en waardevol voor u zijn.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als u onze directmarketingberichten niet wilt ontvangen, kunt u uw toestemming te
                allen tijde intrekken en uw naam laten verwijderen uit onze verzendlijsten voor
                direct marketing en/of voor gedeelde informatie. Als u uw privacyvoorkeuren wilt
                wijzigen, kunt u contact met ons opnemen. Zie &apos;Contact opnemen&apos;.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                5. Uw persoonsgegevens delen (en overdragen naar andere landen)
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                We zullen uw persoonsgegevens uitsluitend gebruiken of bekendmaken voor de
                doeleinden waarvoor deze zijn verzameld of anderszins zoals wordt beschreven in
                deze Privacy Policy.
              </p>
              <ul className="mt-4 space-y-4 text-base leading-relaxed text-[#4a5568]">
                <li>
                  <strong>Persoonsgegevens delen binnen de VanEck-groep.</strong> We kunnen uw
                  persoonsgegevens delen binnen de VanEck-groep voor marketingdoeleinden, voor
                  juridische en regelgevingsdoeleinden, voor het beheren van krediet- en andere
                  bedrijfsrisico&apos;s, om te zorgen dat we beschikken over correcte en actuele
                  informatie over u, en om uw relatie met ons beter te beheren.
                </li>
                <li>
                  <strong>Uitwisseling buiten de VanEck-groep:</strong> Persoonsgegevens kunnen
                  worden verstrekt aan derden, waaronder fraudebestrijdingsorganisaties,
                  juridische, regelgevende of wetshandhavingsinstanties, bij vermoedens van
                  criminele activiteiten of wetsovertredingen, om fraude op te sporen of te
                  voorkomen, of om te voldoen aan juridische of regelgevingsvereisten.
                </li>
                <li>
                  <strong>Verkopen van bedrijfsactiviteiten of reorganisatie:</strong> in de loop
                  van de tijd kunnen we bedrijven overnemen of een deel van onze activiteiten
                  afstoten. De persoonsgegevens die zijn gekoppeld aan rekeningen, producten of
                  diensten van het bedrijf dat wordt overgenomen of verkocht, worden geëvalueerd
                  in het kader van een duediligenceonderzoek en worden vervolgens als
                  bedrijfsactiva overgedragen aan de nieuwe eigenaar.
                </li>
                <li>
                  <strong>Subcontractanten en tussenpersonen:</strong> we kunnen gelieerde of
                  andere bedrijven inzetten, waaronder externe dienstverleners zoals ID &amp; Pay,
                  VI Company, Flynck, LexisNexis en Risk Narrative, om namens ons diensten te
                  leveren, zoals gegevensverwerking, rekeningbeheer, identificatie,
                  ondersteuning, fraudebestrijding en -opsporing, en marketing.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                6. Bewaren van persoonsgegevens
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                De bewaartermijnen voor uw persoonsgegevens zijn gebaseerd op onze zakelijke
                behoeften en op wettelijke vereisten. We bewaren uw persoonsgegevens zolang dat
                nodig is voor de verwerkingsdoeleinden waarvoor de gegevens zijn verzameld, en
                voor andere toegestane, gerelateerde doelen, zoals het voldoen aan juridische of
                boekhoudkundige vereisten.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wanneer persoonsgegevens niet langer nodig zijn voor de verwerkingsdoeleinden
                waarvoor ze zijn verzameld, is het ons beleid om ze onomkeerbaar te anonimiseren
                (zodat we de geanonimiseerde gegevens voor later gebruik kunnen bewaren) of om ze
                op veilige wijze te vernietigen.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                7. Nauwkeurigheid en veiligheid van uw persoonsgegevens
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Wij streven ernaar de nauwkeurigheid van uw persoonsgegevens te beschermen en
                ervoor te zorgen dat deze volledig en actueel zijn. Als u onjuistheden constateert
                in onze documenten of als uw persoonsgegevens veranderen, moet u dit onmiddellijk
                aan ons melden, zodat wij de vereiste wijzigingen kunnen aanbrengen.
              </p>
              <p className="mt-4 text-base font-bold leading-relaxed text-[#4a5568]">
                Uw persoonsgegevens beschermen.
              </p>
              <p className="mt-2 text-base leading-relaxed text-[#4a5568]">
                Wij nemen fysieke, elektronische en procedurele maatregelen om de
                persoonsgegevens die wij van u bezitten of beheren, te beschermen tegen
                ongeoorloofd gebruik en tegen toegang, wijziging, vernietiging, bekendmaking,
                verlies of diefstal.
              </p>
              <p className="mt-4 text-base font-bold leading-relaxed text-[#4a5568]">
                Internetveiligheid
              </p>
              <p className="mt-2 text-base leading-relaxed text-[#4a5568]">
                Het is onmogelijk om gegevensoverdracht via internet of de App volledig te
                beveiligen. Wij treffen echter commercieel verantwoorde fysieke, elektronische en
                procedurele maatregelen om uw persoonsgegevens te beschermen in overeenstemming
                met de wettelijke vereisten voor gegevensbescherming.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                8. Wijzigingen in deze Privacy Policy
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Deze Privacy Policy kan van tijd tot tijd worden gewijzigd. De laatste
                revisiedatum van deze Privacy Policy wordt onder aan deze pagina vermeld.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Neem contact met ons op als u vragen heeft over onze Privacy Policy. Zie
                &apos;Contact opnemen&apos;.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">9. Uw rechten</h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als u vragen heeft over het gebruik van uw persoonsgegevens, neem dan eerst
                contact met ons op zoals hieronder beschreven in de paragraaf &apos;Contact
                opnemen&apos;.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Overeenkomstig toepasselijke wetgeving heeft u mogelijk het recht om ons tot het
                volgende te verplichten:
              </p>
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>
                  - u aanvullende informatie te verstrekken over de wijze waarop wij uw gegevens
                  gebruiken;
                </li>
                <li>
                  - u een afschrift te verstrekken van de informatie die u ons heeft gegeven;
                </li>
                <li>
                  - onjuistheden te verbeteren in uw persoonsgegevens waarover wij beschikken;
                </li>
                <li>
                  - persoonsgegevens te verwijderen als er geen rechtsgrond meer is om deze te
                  gebruiken of te bewaren;
                </li>
                <li>
                  - te stoppen met de verwerking van uw persoonsgegevens wanneer deze verwerking
                  is gebaseerd op uw toestemming;
                </li>
                <li>
                  - de verwerking op grond van legitieme belangen te staken, tenzij onze redenen
                  voor deze verwerking zwaarder wegen dan de inbreuk op uw rechten ten aanzien van
                  gegevensbescherming; en
                </li>
                <li>
                  - de wijze waarop wij uw gegevens gebruiken te beperken gedurende een onderzoek
                  naar een klacht.
                </li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                U kunt van uw rechten gebruikmaken door uw verzoek per e-mail te sturen naar{" "}
                <a
                  href="mailto:privacy@vaneck.com"
                  className="font-semibold text-[#17468f] hover:underline"
                >
                  privacy@vaneck.com
                </a>
                . Wij streven ernaar om binnen één maand na ontvangst uw verzoek te beantwoorden.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                10. Gegevens verzamelen
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                VanEck of zijn dienstverleners kunnen webserverlogbestanden, web beacons of andere
                elektronische hulpmiddelen gebruiken voor het verzamelen van gegevens die
                betrekking hebben op u, maar waarmee u niet kunt worden geïdentificeerd, zoals:
              </p>
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>- IP-adres;</li>
                <li>- browsertype;</li>
                <li>- besturingssysteem;</li>
                <li>- computerplatform;</li>
                <li>- gegevens over uw mobiele apparaat;</li>
                <li>- geolocatiegegevens; en</li>
                <li>- de staat of het land van waaruit u de App opent.</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Een cookie is een tekstbestandje dat op uw apparaat wordt geplaatst. Hiermee
                verzamelen wij gegevens over bezoekers en gebruikers van onze App. Dat doen wij
                om de App te updaten en te verbeteren en om onze bezoekers en gebruikers zo goed
                mogelijk ten dienste te staan. We hebben uw toestemming nodig voor het plaatsen
                van cookies, behalve wanneer het gaat om functionele of analytische cookies
                waarmee niet-persoonsgegevens worden verzameld.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">11. Contact opnemen</h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Neem contact met ons op als u vragen of zorgen heeft over onze privacyprocedures
                of over de bescherming van uw persoonsgegevens.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als u geen marketingmateriaal meer van ons wilt ontvangen, volg dan de
                aanwijzingen die u onder aan de e-mail vindt die u van ons heeft ontvangen. U
                kunt ook op de volgende manieren contact met ons opnemen:
              </p>
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[#4a5568]">
                <li>
                  - Stuur een e-mail naar{" "}
                  <a
                    href="mailto:privacy@vaneck.com"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    privacy@vaneck.com
                  </a>
                </li>
                <li>- gebruik de contactsectie in de App.</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Als u na overleg met ons het gevoel heeft dat wij uw zorgen over de manier waarop
                we uw persoonsgegevens verwerken niet adequaat hebben weggenomen, kunt u een
                klacht indienen bij de Nederlandse toezichthouder inzake gegevensbescherming
                (Autoriteit persoonsgegevens) of bij de toezichthouder inzake
                gegevensbescherming in het land waar u woonachtig bent.
              </p>
            </div>

            {/* Bijlage A */}
            <div>
              <h3 className="text-xl font-bold text-[#0ab400]">
                BIJLAGE A: Tabel met rechtsgronden
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Het gebruik van persoonsgegevens moet onder de EU-wetten inzake
                gegevensbescherming worden gerechtvaardigd op basis van een aantal rechtsgronden.
                Wij zijn verplicht om in dit beleid aan te geven welke rechtsgrond voor elk
                gebruik van toepassing is.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
                Dit zijn de belangrijkste rechtsgronden die het gebruik van uw gegevens
                rechtvaardigen:
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#4a5568]">
                <li>
                  <strong>Toestemming:</strong> waar u toestemming heeft verleend voor het gebruik
                  van uw gegevens (u kunt uw toestemming intrekken door de instructies te volgen
                  onder aan de e-mail die u hebt ontvangen of door contact op te nemen met{" "}
                  <a
                    href="mailto:privacy@vaneck.com"
                    className="font-semibold text-[#17468f] hover:underline"
                  >
                    privacy@vaneck.com
                  </a>
                  ).
                </li>
                <li>
                  <strong>Uitvoering van contracten:</strong> waar uw gegevens nodig zijn om een
                  contract met u aan te gaan of uit te voeren.
                </li>
                <li>
                  <strong>Wettelijke verplichting:</strong> waar we uw gegevens moeten gebruiken
                  om te voldoen aan onze wettelijke verplichtingen.
                </li>
                <li>
                  <strong>Legitieme belangen:</strong> waar we uw gegevens gebruiken met het oog
                  op een legitiem belang en onze redenen voor het gebruik zwaarder wegen dan de
                  inbreuk op uw rechten op gegevensbescherming.
                </li>
                <li>
                  <strong>Rechtsvorderingen:</strong> waar uw gegevens vereist zijn om ons te
                  verdedigen tegen een vordering tegen ons, of om een vordering in te dienen tegen
                  u of een derde.
                </li>
                <li>
                  <strong>Zwaarwegend algemeen belang:</strong> waar wij persoonsgegevens over
                  criminele veroordelingen of politieke overtuigingen gebruiken voor een doel dat
                  uitdrukkelijk een zwaarwegend algemeen belang heeft, waaronder begrepen de
                  bestrijding of opsporing van misdaad of fraude.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <AppScreenshots />
    </>
  );
}
