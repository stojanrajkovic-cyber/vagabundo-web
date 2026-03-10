import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyDE() {
  return (
    <>
      <SiteHeader locale={"de"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
          Datenschutzrichtlinie
        </h1>

        <p className="mb-4">
        Vagabundo ("wir", "uns", "unser") respektiert Ihre Privatsphäre. Diese Datenschutzrichtlinie erklärt, wie Informationen gesammelt, verwendet und geschützt werden, wenn Sie die Vagabundo-Mobile-App oder Website nutzen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Welche Informationen wir sammeln
        </h2>

        <p className="mb-4">
        Vagabundo sammelt nur die minimalen Informationen, die für den Betrieb des Dienstes erforderlich sind. Dazu gehören:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Kontoinformationen (E-Mail oder Authentifizierungsanbieter)</li>
        <li>Reisepräferenzen und ausgewählte Reiseziele</li>
        <li>Generierte Reisepläne</li>
        <li>Anonyme Nutzungsanalysen</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Transparenz künstlicher Intelligenz
        </h2>

        <p className="mb-4">
        Vagabundo verwendet künstliche Intelligenz zur Erstellung von Reiseplänen. Die Vorschläge werden automatisch auf Grundlage von Benutzereingaben wie Stadt, Reisedauer und Präferenzen generiert.
        </p>

        <p className="mb-4">
        KI-generierte Inhalte können gelegentlich Ungenauigkeiten, veraltete Informationen oder nicht verfügbare Orte enthalten. Nutzer sollten wichtige Reiseinformationen wie Öffnungszeiten, Verfügbarkeit und Sicherheitsbedingungen eigenständig überprüfen.
        </p>

        <p className="mb-4">
        Vagabundo bietet keine professionelle Reise-, Rechts- oder Sicherheitsberatung. Die generierten Reisepläne dienen ausschließlich Informations- und Inspirationszwecken.
        </p>

        <p className="mb-4">
        Benutzereingaben wie ausgewählte Stadt und Reisepräferenzen können an KI-Anbieter gesendet werden, um Reisepläne zu generieren.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Drittanbieter-Dienste
        </h2>

        <p className="mb-4">
        Vagabundo nutzt vertrauenswürdige Drittanbieter, darunter:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – KI-Generierung von Reiseplänen</li>
        <li>Firebase – Authentifizierung und Datenspeicherung</li>
        <li>Apple / Google – Login-Authentifizierung</li>
        <li>Kartendienste – Anzeige von Reisezielen</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Datenspeicherung
        </h2>

        <p className="mb-4">
        Kontodaten und gespeicherte Reisepläne werden nur so lange gespeichert, wie ein Benutzer ein aktives Konto besitzt. Wenn ein Konto gelöscht wird, werden alle zugehörigen Daten innerhalb eines angemessenen Zeitraums dauerhaft entfernt.
        </p>

        <p className="mb-4">
        Reisepläne und Kontodaten können sicher in einer Cloud-Infrastruktur gespeichert werden, um das Speichern und Synchronisieren zwischen Geräten zu ermöglichen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analyse
        </h2>

        <p className="mb-4">
        Anonyme Nutzungsanalysen können gesammelt werden, um die Leistung und Funktionen der Anwendung zu verbessern.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Sicherheit
        </h2>

        <p className="mb-4">
        Wir treffen angemessene Maßnahmen zum Schutz der Benutzerinformationen unter Verwendung moderner Sicherheitspraktiken und vertrauenswürdiger Cloud-Infrastruktur. Dennoch kann kein Internetdienst vollständig sicher sein.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Kontolöschung
        </h2>

        <p className="mb-4">
        Benutzer können ihr Konto dauerhaft innerhalb der Anwendung löschen. Dabei werden alle zugehörigen Daten entfernt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Änderungen dieser Richtlinie
        </h2>

        <p className="mb-4">
        Diese Datenschutzrichtlinie kann von Zeit zu Zeit aktualisiert werden, um Verbesserungen der Anwendung oder gesetzliche Anforderungen widerzuspiegeln.
        </p>

        <p className="mb-4">
        Abhängig von Ihrer Region können Ihnen zusätzliche Rechte bezüglich Ihrer personenbezogenen Daten zustehen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Kontakt
        </h2>

        <p>
        Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter: <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Gültig ab: März 2026
        </p>

      </main>
    </>
  );
}