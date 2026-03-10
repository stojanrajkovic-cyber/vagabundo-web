import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyHR() {
  return (
    <>
      <SiteHeader locale={"hr"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
          Politika privatnosti
        </h1>

        <p className="mb-4">
        Vagabundo ("mi", "naš") poštuje vašu privatnost. Ova Politika privatnosti objašnjava kako se informacije prikupljaju, koriste i štite prilikom korištenja mobilne aplikacije i web stranice Vagabundo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Informacije koje prikupljamo
        </h2>

        <p className="mb-4">
        Vagabundo prikuplja samo minimalne informacije potrebne za funkcionisanje usluge. To može uključivati:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Informacije o nalogu (email ili autentifikacijski provajder)</li>
        <li>Preferencije putovanja i odabrane destinacije</li>
        <li>Generisane planove putovanja</li>
        <li>Anonimne analitičke podatke o korištenju</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Transparentnost umjetne inteligencije
        </h2>

        <p className="mb-4">
        Vagabundo koristi umjetnu inteligenciju za generisanje planova putovanja. Prijedlozi koje aplikacija pruža automatski se generišu na osnovu korisničkih unosa kao što su grad, trajanje putovanja i preferencije.
        </p>

        <p className="mb-4">
        Sadržaj generisan umjetnom inteligencijom ponekad može sadržavati netačne ili zastarjele informacije ili lokacije koje nisu dostupne. Korisnici bi trebali samostalno provjeriti važne informacije o putovanju kao što su radno vrijeme, dostupnost i sigurnosni uslovi prije posjete bilo kojoj lokaciji.
        </p>

        <p className="mb-4">
        Vagabundo ne pruža profesionalne savjete o putovanju, pravne savjete niti sigurnosne preporuke. Generisani planovi putovanja služe isključivo u informativne i inspirativne svrhe.
        </p>

        <p className="mb-4">
        Korisnički unosi poput odabranog grada i preferencija putovanja mogu biti poslani AI provajderima radi generisanja planova putovanja.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Usluge trećih strana
        </h2>

        <p className="mb-4">
        Vagabundo koristi pouzdane usluge trećih strana uključujući:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – generisanje planova putovanja</li>
        <li>Firebase – autentifikacija i pohrana podataka</li>
        <li>Apple / Google – prijava korisnika</li>
        <li>Map servisi – prikaz lokacija</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Zadržavanje podataka
        </h2>

        <p className="mb-4">
        Podaci korisničkog naloga i sačuvani planovi putovanja čuvaju se samo dok korisnik ima aktivan nalog. Kada korisnik obriše nalog svi povezani podaci se trajno brišu u razumnom vremenskom periodu.
        </p>

        <p className="mb-4">
        Planovi putovanja i korisnički podaci mogu se sigurno čuvati u cloud infrastrukturi kako bi se omogućilo spremanje i sinhronizacija između uređaja.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analitika
        </h2>

        <p className="mb-4">
        Anonimni analitički podaci mogu se prikupljati radi poboljšanja performansi aplikacije i funkcionalnosti.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Sigurnost
        </h2>

        <p className="mb-4">
        Poduzimamo razumne mjere zaštite korisničkih informacija koristeći moderne sigurnosne prakse i pouzdanu cloud infrastrukturu. Međutim, nijedna internet usluga ne može biti potpuno sigurna.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Brisanje naloga
        </h2>

        <p className="mb-4">
        Korisnici mogu trajno obrisati svoj nalog unutar aplikacije. Kada se nalog obriše svi povezani podaci se uklanjaju.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Izmjene ove politike
        </h2>

        <p className="mb-4">
        Ova Politika privatnosti može se povremeno ažurirati kako bi odražavala poboljšanja aplikacije ili zakonske zahtjeve.
        </p>

        <p className="mb-4">
        U zavisnosti od vaše regije možete imati dodatna prava u vezi sa vašim ličnim podacima prema važećim zakonima o privatnosti.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Kontakt
        </h2>

        <p>
        Ako imate pitanja o ovoj Politici privatnosti kontaktirajte nas na: <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Datum stupanja na snagu: mart 2026
        </p>

      </main>
    </>
  );
}