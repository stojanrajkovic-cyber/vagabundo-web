import SiteHeader from "@/components/SiteHeader";

export default function PrivacyPolicyEN() {
  return (
    <>
      <SiteHeader locale={"en"} />

      <main className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4">
        Vagabundo ("we", "our", "us") respects your privacy. This Privacy
        Policy explains how information is collected, used and protected when
        using the Vagabundo mobile application and website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Information We Collect
        </h2>

        <p className="mb-4">
        Vagabundo collects only the minimum information required to operate
        the service. This may include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>Account information (email or authentication provider)</li>
        <li>Travel preferences and selected destinations</li>
        <li>Generated travel itineraries</li>
        <li>Anonymous usage analytics</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Artificial Intelligence Transparency
        </h2>

        <p className="mb-4">
        Vagabundo uses artificial intelligence to generate travel itineraries.
        The suggestions provided by the application are automatically generated
        based on user inputs such as city, trip duration and preferences.
        </p>

        <p className="mb-4">
        AI-generated content may occasionally contain inaccuracies,
        outdated information or unavailable locations. Users should
        independently verify important travel information such as opening
        hours, availability, and safety conditions before visiting any
        location.
        </p>

        <p className="mb-4">
        Vagabundo does not provide professional travel, legal or safety
        advice. The generated itineraries are intended for informational
        and inspiration purposes only.
        </p>

        <p className="mb-4">
        User inputs such as selected city and travel preferences may be sent
        to AI providers to generate travel plans.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Third-Party Services
        </h2>

        <p className="mb-4">
        Vagabundo relies on trusted third-party services including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2">
        <li>OpenAI – AI itinerary generation</li>
        <li>Firebase – authentication and data storage</li>
        <li>Apple / Google – login authentication</li>
        <li>Map services – displaying travel locations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Data Retention
        </h2>

        <p className="mb-4">
        User account data and saved travel plans are stored only for as long
        as the user maintains an active account. When a user deletes their
        account all associated data is permanently removed from our systems
        within a reasonable time period.
        </p>

        <p className="mb-4">
        Travel plans and user account data may be stored securely in cloud
        infrastructure to enable saving and syncing trips across devices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Analytics
        </h2>

        <p className="mb-4">
        Anonymous usage analytics may be collected to improve application
        performance and features.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Security
        </h2>

        <p className="mb-4">
        We take reasonable measures to protect user information using
        modern security practices and trusted cloud infrastructure.
        However no internet service can be guaranteed to be completely
        secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Account Deletion
        </h2>

        <p className="mb-4">
        Users can permanently delete their account from within the application.
        When an account is deleted all associated user data is removed.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Changes to This Policy
        </h2>

        <p className="mb-4">
        This Privacy Policy may be updated from time to time to reflect
        improvements to the application or legal requirements.
        </p>

        <p className="mb-4">
        Depending on your region you may have additional rights regarding
        your personal data under applicable privacy laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
        Contact
        </h2>

        <p>
        If you have any questions about this Privacy Policy please contact us
        at: <strong>support@vagabundo.app</strong>
        </p>

        <p className="text-sm text-gray-500 mb-8">
        Effective date: March 2026
        </p>

      </main>
    </>
  );
}