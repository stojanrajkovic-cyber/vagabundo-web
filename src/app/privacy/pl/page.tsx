import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyPL() {
  return (
    <>
      <SiteHeader locale={"pl"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
        Polityka Prywatności
        </h1>

        <p className="mb-4">
        Vagabundo („my”, „nas”, „nasze”) szanuje Twoją prywatność.
        Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób
        informacje są zbierane, wykorzystywane i chronione podczas
        korzystania z aplikacji mobilnej Vagabundo oraz strony internetowej.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Informacje, które zbieramy
        </h2>

        <p className="mb-4">
        Vagabundo zbiera minimalną ilość informacji potrzebnych
        do świadczenia usługi. Mogą one obejmować:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Informacje o koncie (adres e-mail lub dostawca logowania)</li>
        <li>Preferencje podróżnicze i wybrane miejsca docelowe</li>
        <li>Wygenerowane plany podróży</li>
        <li>Anonimowe dane analityczne dotyczące korzystania z aplikacji</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Przejrzystość sztucznej inteligencji
        </h2>

        <p className="mb-4">
        Vagabundo wykorzystuje sztuczną inteligencję do generowania
        planów podróży. Sugestie w aplikacji są automatycznie
        tworzone na podstawie danych podanych przez użytkownika,
        takich jak miasto, długość podróży oraz preferencje podróżne.
        </p>

        <p className="mb-4">
        Treści generowane przez sztuczną inteligencję mogą czasami
        zawierać nieścisłości, nieaktualne informacje lub miejsca,
        które już nie istnieją. Użytkownicy powinni samodzielnie
        sprawdzać ważne informacje podróżne, takie jak godziny
        otwarcia, dostępność czy bezpieczeństwo przed odwiedzeniem
        danego miejsca.
        </p>

        <p className="mb-4">
        Vagabundo nie świadczy profesjonalnych porad podróżniczych,
        prawnych ani dotyczących bezpieczeństwa. Generowane plany
        podróży mają wyłącznie charakter informacyjny i inspiracyjny.
        </p>

        <p className="mb-4">
        Dane wprowadzone przez użytkownika, takie jak wybrane
        miasto i preferencje podróży, mogą być wysyłane do
        dostawców usług sztucznej inteligencji w celu wygenerowania
        planu podróży.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Usługi stron trzecich
        </h2>

        <p className="mb-4">
        Vagabundo korzysta z następujących zaufanych usług stron trzecich:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – generowanie planów podróży przez AI</li>
        <li>Firebase – uwierzytelnianie i przechowywanie danych</li>
        <li>Apple / Google – logowanie użytkownika</li>
        <li>Usługi map – wyświetlanie lokalizacji podróży</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Przechowywanie danych
        </h2>

        <p className="mb-4">
        Dane kont użytkowników oraz zapisane plany podróży
        są przechowywane tak długo, jak użytkownik posiada
        aktywne konto. Po usunięciu konta wszystkie powiązane
        dane zostaną trwale usunięte z naszych systemów
        w rozsądnym czasie.
        </p>

        <p className="mb-4">
        Plany podróży i dane kont użytkowników mogą być
        przechowywane w bezpiecznej infrastrukturze chmurowej,
        aby umożliwić zapisywanie i synchronizację podróży
        między urządzeniami.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analityka
        </h2>

        <p className="mb-4">
        Anonimowe dane dotyczące korzystania z aplikacji mogą
        być zbierane w celu poprawy działania i funkcjonalności
        aplikacji.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Bezpieczeństwo
        </h2>

        <p className="mb-4">
        Podejmujemy rozsądne środki w celu ochrony danych
        użytkowników, stosując nowoczesne praktyki bezpieczeństwa
        oraz zaufaną infrastrukturę chmurową. Jednak żadna usługa
        internetowa nie może być w pełni gwarantowana jako
        całkowicie bezpieczna.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Usuwanie konta
        </h2>

        <p className="mb-4">
        Użytkownicy mogą trwale usunąć swoje konto z poziomu
        aplikacji. Po usunięciu konta wszystkie powiązane
        dane użytkownika zostaną usunięte.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Zmiany w tej polityce
        </h2>

        <p className="mb-4">
        Niniejsza Polityka Prywatności może być okresowo
        aktualizowana w celu odzwierciedlenia zmian w aplikacji
        lub wymogów prawnych.
        </p>

        <p className="mb-4">
        W zależności od regionu możesz mieć dodatkowe prawa
        dotyczące Twoich danych osobowych na podstawie
        obowiązujących przepisów o ochronie prywatności.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Kontakt
        </h2>

        <p>
        Jeśli masz pytania dotyczące tej Polityki Prywatności,
        skontaktuj się z nami pod adresem:
        <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Data wejścia w życie: Marzec 2026
        </p>

      </main>
    </>
  );
}