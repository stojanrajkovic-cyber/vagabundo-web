import SiteHeader from "@/components/SiteHeader";

export default function TermsPage() {
  return (
    <>
      <SiteHeader locale="en" />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">
          Terms of Service
        </h1>

        <p className="mb-4">
          By using the Vagabundo application or website you agree to the
          following Terms of Service.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Service Description
        </h2>

        <p className="mb-4">
          Vagabundo is an AI-powered travel planner that generates suggested
          travel itineraries based on user inputs such as destination, trip
          length and preferences.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          AI Limitations
        </h2>

        <p className="mb-4">
          Travel plans are generated using artificial intelligence and may
          contain inaccuracies. Users should verify opening hours, availability
          and travel conditions independently before traveling.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          User Responsibility
        </h2>

        <p className="mb-4">
          Vagabundo is provided as a planning tool only. Users are responsible
          for their travel decisions and arrangements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Limitation of Liability
        </h2>

        <p className="mb-4">
          Vagabundo is not liable for travel disruptions, incorrect information,
          financial losses, or damages resulting from the use of generated
          travel plans.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Changes to Terms
        </h2>

        <p className="mb-4">
          These terms may be updated periodically as the application evolves.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact
        </h2>

        <p>
          For questions regarding these terms please contact:
          <strong> support@vagabundo.app</strong>
        </p>
      </main>
    </>
  );
}