import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyIT() {
  return (
    <>
      <SiteHeader locale={"it"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
        Informativa sulla Privacy
        </h1>

        <p className="mb-4">
        Vagabundo ("noi", "nostro", "ci") rispetta la tua privacy. Questa
        Informativa sulla Privacy spiega come le informazioni vengono raccolte,
        utilizzate e protette quando si utilizza l'applicazione mobile e il sito
        web di Vagabundo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Informazioni che raccogliamo
        </h2>

        <p className="mb-4">
        Vagabundo raccoglie solo le informazioni minime necessarie per
        gestire il servizio. Questo può includere:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Informazioni sull'account (email o provider di autenticazione)</li>
        <li>Preferenze di viaggio e destinazioni selezionate</li>
        <li>Itinerari di viaggio generati</li>
        <li>Analisi di utilizzo anonime</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Trasparenza sull'Intelligenza Artificiale
        </h2>

        <p className="mb-4">
        Vagabundo utilizza l'intelligenza artificiale per generare itinerari di
        viaggio. I suggerimenti forniti dall'applicazione vengono generati
        automaticamente in base agli input dell'utente, come la città,
        la durata del viaggio e le preferenze.
        </p>

        <p className="mb-4">
        I contenuti generati dall'intelligenza artificiale possono
        occasionalmente contenere imprecisioni, informazioni obsolete
        o luoghi non disponibili. Gli utenti dovrebbero verificare
        autonomamente informazioni di viaggio importanti come orari di
        apertura, disponibilità e condizioni di sicurezza prima di
        visitare qualsiasi luogo.
        </p>

        <p className="mb-4">
        Vagabundo non fornisce consulenza professionale di viaggio,
        legale o sulla sicurezza. Gli itinerari generati sono destinati
        solo a scopi informativi e di ispirazione.
        </p>

        <p className="mb-4">
        Gli input dell'utente, come la città selezionata e le preferenze
        di viaggio, possono essere inviati ai provider di IA per
        generare piani di viaggio.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Servizi di Terze Parti
        </h2>

        <p className="mb-4">
        Vagabundo si affida a servizi di terze parti affidabili, tra cui:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – generazione di itinerari tramite IA</li>
        <li>Firebase – autenticazione e archiviazione dei dati</li>
        <li>Apple / Google – autenticazione di accesso</li>
        <li>Servizi di mappe – visualizzazione delle località di viaggio</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Conservazione dei Dati
        </h2>

        <p className="mb-4">
        I dati dell'account utente e i piani di viaggio salvati vengono
        conservati solo per il tempo in cui l'utente mantiene un account
        attivo. Quando un utente elimina il proprio account, tutti i dati
        associati vengono rimossi permanentemente dai nostri sistemi
        entro un periodo di tempo ragionevole.
        </p>

        <p className="mb-4">
        I piani di viaggio e i dati dell'account utente possono essere
        archiviati in modo sicuro in infrastrutture cloud per consentire
        il salvataggio e la sincronizzazione dei viaggi tra dispositivi.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analisi
        </h2>

        <p className="mb-4">
        Possono essere raccolti dati analitici anonimi sull'utilizzo per
        migliorare le prestazioni dell'applicazione e le sue funzionalità.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Sicurezza
        </h2>

        <p className="mb-4">
        Adottiamo misure ragionevoli per proteggere le informazioni
        degli utenti utilizzando pratiche di sicurezza moderne e
        infrastrutture cloud affidabili. Tuttavia, nessun servizio
        internet può essere garantito come completamente sicuro.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Eliminazione dell'Account
        </h2>

        <p className="mb-4">
        Gli utenti possono eliminare permanentemente il proprio account
        direttamente dall'applicazione. Quando un account viene eliminato,
        tutti i dati associati all'utente vengono rimossi.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Modifiche a questa Informativa
        </h2>

        <p className="mb-4">
        Questa Informativa sulla Privacy può essere aggiornata di tanto
        in tanto per riflettere miglioramenti dell'applicazione o
        requisiti legali.
        </p>

        <p className="mb-4">
        A seconda della tua regione potresti avere diritti aggiuntivi
        riguardo ai tuoi dati personali secondo le leggi sulla privacy
        applicabili.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Contatti
        </h2>

        <p>
        Se hai domande su questa Informativa sulla Privacy contattaci
        all'indirizzo:
        <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Data di entrata in vigore: marzo 2026
        </p>

      </main>
    </>
  );
}