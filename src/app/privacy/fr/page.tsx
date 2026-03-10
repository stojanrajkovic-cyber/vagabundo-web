import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyFR() {
  return (
    <>
      <SiteHeader locale={"fr"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
          Politique de confidentialité
        </h1>

        <p className="mb-4">
        Vagabundo (« nous », « notre », « nos ») respecte votre vie privée. Cette politique de confidentialité explique comment les informations sont collectées, utilisées et protégées lors de l'utilisation de l'application mobile et du site web Vagabundo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Informations collectées
        </h2>

        <p className="mb-4">
        Vagabundo collecte uniquement les informations minimales nécessaires au fonctionnement du service. Cela peut inclure :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Informations de compte (email ou fournisseur d’authentification)</li>
        <li>Préférences de voyage et destinations sélectionnées</li>
        <li>Itinéraires de voyage générés</li>
        <li>Analyses anonymes d’utilisation</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Transparence de l’intelligence artificielle
        </h2>

        <p className="mb-4">
        Vagabundo utilise l’intelligence artificielle pour générer des itinéraires de voyage. Les suggestions sont automatiquement générées à partir des informations fournies par l’utilisateur telles que la ville, la durée du voyage et les préférences.
        </p>

        <p className="mb-4">
        Le contenu généré par l’IA peut parfois contenir des inexactitudes, des informations obsolètes ou des lieux indisponibles. Les utilisateurs doivent vérifier indépendamment les informations importantes avant de visiter un lieu.
        </p>

        <p className="mb-4">
        Vagabundo ne fournit pas de conseils professionnels de voyage, juridiques ou de sécurité. Les itinéraires générés sont destinés uniquement à des fins informatives et d’inspiration.
        </p>

        <p className="mb-4">
        Les données saisies par l’utilisateur peuvent être envoyées à des fournisseurs d’IA afin de générer les plans de voyage.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Services tiers
        </h2>

        <p className="mb-4">
        Vagabundo utilise des services tiers de confiance, notamment :
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – génération d’itinéraires par IA</li>
        <li>Firebase – authentification et stockage des données</li>
        <li>Apple / Google – authentification de connexion</li>
        <li>Services de cartographie – affichage des lieux</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Conservation des données
        </h2>

        <p className="mb-4">
        Les données de compte et les voyages enregistrés sont conservés uniquement tant que l’utilisateur possède un compte actif. Lorsque le compte est supprimé, toutes les données associées sont supprimées dans un délai raisonnable.
        </p>

        <p className="mb-4">
        Les données peuvent être stockées de manière sécurisée dans une infrastructure cloud afin de permettre la synchronisation entre appareils.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analyse
        </h2>

        <p className="mb-4">
        Des analyses anonymes peuvent être collectées afin d’améliorer les performances et les fonctionnalités de l’application.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Sécurité
        </h2>

        <p className="mb-4">
        Nous prenons des mesures raisonnables pour protéger les informations des utilisateurs à l’aide de pratiques de sécurité modernes. Toutefois aucun service internet ne peut être totalement sécurisé.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Suppression du compte
        </h2>

        <p className="mb-4">
        Les utilisateurs peuvent supprimer définitivement leur compte depuis l’application. Toutes les données associées seront alors supprimées.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Modifications de cette politique
        </h2>

        <p className="mb-4">
        Cette politique de confidentialité peut être mise à jour afin de refléter les améliorations de l’application ou les exigences légales.
        </p>

        <p className="mb-4">
        Selon votre région, vous pouvez disposer de droits supplémentaires concernant vos données personnelles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Contact
        </h2>

        <p>
        Si vous avez des questions concernant cette politique de confidentialité, contactez-nous à : <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Date d’entrée en vigueur : mars 2026
        </p>

      </main>
    </>
  );
}