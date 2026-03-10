import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyCS() {
  return (
    <>
      <SiteHeader locale={"cs"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
        Zásady ochrany osobních údajů
        </h1>

        <p className="mb-4">
        Vagabundo ("my", "naše", "nás") respektuje vaše soukromí. Tyto zásady
        ochrany osobních údajů vysvětlují, jak jsou informace shromažďovány,
        používány a chráněny při používání mobilní aplikace a webové stránky
        Vagabundo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Informace, které shromažďujeme
        </h2>

        <p className="mb-4">
        Vagabundo shromažďuje pouze minimální množství informací potřebných
        k provozu služby. Může se jednat o:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Informace o účtu (e-mail nebo poskytovatel přihlášení)</li>
        <li>Cestovní preference a vybrané destinace</li>
        <li>Vygenerované cestovní itineráře</li>
        <li>Anonymní analytická data o používání</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Transparentnost umělé inteligence
        </h2>

        <p className="mb-4">
        Vagabundo používá umělou inteligenci k vytváření cestovních itinerářů.
        Návrhy poskytované aplikací jsou automaticky generovány na základě
        uživatelských vstupů, jako je město, délka cesty a preference.
        </p>

        <p className="mb-4">
        Obsah generovaný umělou inteligencí může občas obsahovat nepřesnosti,
        zastaralé informace nebo nedostupná místa. Uživatelé by měli
        samostatně ověřit důležité cestovní informace, jako jsou otevírací
        doby, dostupnost a bezpečnostní podmínky, před návštěvou jakéhokoli
        místa.
        </p>

        <p className="mb-4">
        Vagabundo neposkytuje profesionální cestovní, právní ani bezpečnostní
        poradenství. Vygenerované itineráře jsou určeny pouze pro informační
        a inspirační účely.
        </p>

        <p className="mb-4">
        Uživatelské vstupy, jako je vybrané město a cestovní preference,
        mohou být odesílány poskytovatelům AI za účelem generování cestovních
        plánů.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Služby třetích stran
        </h2>

        <p className="mb-4">
        Vagabundo využívá důvěryhodné služby třetích stran včetně:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – generování itinerářů pomocí AI</li>
        <li>Firebase – autentizace a ukládání dat</li>
        <li>Apple / Google – přihlašovací autentizace</li>
        <li>Mapové služby – zobrazování cestovních lokalit</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Uchovávání dat
        </h2>

        <p className="mb-4">
        Data uživatelského účtu a uložené cestovní plány jsou uchovávány pouze
        po dobu, kdy má uživatel aktivní účet. Jakmile uživatel svůj účet
        smaže, všechna související data jsou trvale odstraněna z našich
        systémů v přiměřené lhůtě.
        </p>

        <p className="mb-4">
        Cestovní plány a data uživatelského účtu mohou být bezpečně uložena
        v cloudové infrastruktuře, aby bylo možné ukládání a synchronizaci
        cest napříč zařízeními.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analytika
        </h2>

        <p className="mb-4">
        Anonymní analytická data o používání mohou být shromažďována za účelem
        zlepšení výkonu aplikace a jejích funkcí.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Bezpečnost
        </h2>

        <p className="mb-4">
        Přijímáme přiměřená opatření k ochraně informací uživatelů pomocí
        moderních bezpečnostních postupů a důvěryhodné cloudové infrastruktury.
        Žádná internetová služba však nemůže být zaručena jako zcela bezpečná.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Smazání účtu
        </h2>

        <p className="mb-4">
        Uživatelé mohou svůj účet trvale smazat přímo v aplikaci. Po smazání
        účtu budou všechna související data uživatele odstraněna.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Změny těchto zásad
        </h2>

        <p className="mb-4">
        Tyto zásady ochrany osobních údajů mohou být čas od času aktualizovány,
        aby odrážely vylepšení aplikace nebo právní požadavky.
        </p>

        <p className="mb-4">
        V závislosti na vašem regionu můžete mít další práva týkající se
        vašich osobních údajů podle platných zákonů o ochraně soukromí.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Kontakt
        </h2>

        <p>
        Pokud máte jakékoli dotazy týkající se těchto zásad ochrany osobních
        údajů, kontaktujte nás na: <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Datum účinnosti: březen 2026
        </p>

      </main>
    </>
  );
}