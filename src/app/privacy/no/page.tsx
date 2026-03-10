import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyNO() {
  return (
    <>
      <SiteHeader locale={"no"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
        Personvernerklæring
        </h1>

        <p className="mb-4">
        Vagabundo ("vi", "oss", "vår") respekterer ditt personvern.
        Denne personvernerklæringen forklarer hvordan informasjon samles inn,
        brukes og beskyttes når du bruker Vagabundo mobilapplikasjon og nettsted.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Informasjon vi samler inn
        </h2>

        <p className="mb-4">
        Vagabundo samler kun inn den minimale informasjonen som er nødvendig
        for å drive tjenesten. Dette kan inkludere:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Kontoinformasjon (e-post eller autentiseringsleverandør)</li>
        <li>Reisepreferanser og valgte destinasjoner</li>
        <li>Genererte reiseplaner</li>
        <li>Anonym bruksanalyse</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        AI-transparens
        </h2>

        <p className="mb-4">
        Vagabundo bruker kunstig intelligens til å generere reiseplaner.
        Forslagene i appen genereres automatisk basert på brukerens input,
        som by, reisens varighet og preferanser.
        </p>

        <p className="mb-4">
        AI-generert innhold kan noen ganger inneholde unøyaktigheter,
        utdatert informasjon eller steder som ikke er tilgjengelige.
        Brukere bør selv verifisere viktige reiseopplysninger som
        åpningstider, tilgjengelighet og sikkerhetsforhold før de
        besøker noen steder.
        </p>

        <p className="mb-4">
        Vagabundo gir ikke profesjonelle reiseråd, juridiske råd
        eller sikkerhetsråd. Genererte reiseplaner er kun ment
        for informasjons- og inspirasjonsformål.
        </p>

        <p className="mb-4">
        Brukerinput som valgt by og reisepreferanser kan sendes
        til AI-leverandører for å generere reiseplaner.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Tredjepartstjenester
        </h2>

        <p className="mb-4">
        Vagabundo benytter pålitelige tredjepartstjenester, inkludert:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – generering av AI-reiseplaner</li>
        <li>Firebase – autentisering og datalagring</li>
        <li>Apple / Google – innloggingsautentisering</li>
        <li>Karttjenester – visning av reisesteder</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Datalagring
        </h2>

        <p className="mb-4">
        Brukerkontodata og lagrede reiseplaner beholdes kun så lenge
        brukeren har en aktiv konto. Når en bruker sletter kontoen sin,
        vil alle tilknyttede data bli permanent fjernet fra våre systemer
        innen rimelig tid.
        </p>

        <p className="mb-4">
        Reiseplaner og brukerkontodata kan lagres sikkert i
        skyinfrastruktur for å gjøre det mulig å lagre og synkronisere
        reiser mellom enheter.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analyse
        </h2>

        <p className="mb-4">
        Anonyme bruksdata kan samles inn for å forbedre appens
        ytelse og funksjonalitet.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Sikkerhet
        </h2>

        <p className="mb-4">
        Vi bruker rimelige tiltak for å beskytte brukerdata ved å
        benytte moderne sikkerhetspraksiser og pålitelig
        skyinfrastruktur. Ingen internettjeneste kan imidlertid
        garanteres å være helt sikker.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Sletting av konto
        </h2>

        <p className="mb-4">
        Brukere kan permanent slette kontoen sin direkte i
        applikasjonen. Når en konto slettes, fjernes alle
        tilknyttede brukerdata.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Endringer i denne erklæringen
        </h2>

        <p className="mb-4">
        Denne personvernerklæringen kan oppdateres fra tid til annen
        for å reflektere forbedringer i appen eller juridiske krav.
        </p>

        <p className="mb-4">
        Avhengig av din region kan du ha ytterligere rettigheter
        angående dine personopplysninger i henhold til gjeldende
        personvernlovgivning.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Kontakt
        </h2>

        <p>
        Hvis du har spørsmål om denne personvernerklæringen,
        kontakt oss på:
        <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Ikrafttredelsesdato: mars 2026
        </p>

      </main>
    </>
  );
}