import SiteHeader from "@/components/SiteHeader";

export default function DeleteAccountPage() {
  return (
    <>
      <SiteHeader locale="en" />

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">
          Delete Your Account
        </h1>

        <p className="mb-4">
          You can permanently delete your Vagabundo account and all
          associated data directly from within the app, at any time.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          How to Delete Your Account
        </h2>

        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>Open the Vagabundo app and sign in.</li>
          <li>Go to the <strong>Profile</strong> tab.</li>
          <li>Scroll down and tap <strong>Delete account</strong>.</li>
          <li>
            Confirm your identity (you may be asked to re-enter your password
            or re-authenticate with Google, depending on how you signed in).
          </li>
          <li>Confirm the deletion when prompted.</li>
        </ol>

        <p className="mb-4">
          Your account and data are deleted immediately once you confirm —
          there is no waiting period and the action cannot be undone.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          What Gets Deleted
        </h2>

        <p className="mb-4">
          Deleting your account permanently removes:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Your account and sign-in credentials</li>
          <li>All saved and planned itineraries</li>
          <li>Your travel history and visited places</li>
          <li>Your achievements and travel statistics</li>
          <li>Your purchase history</li>
          <li>Any packing guides you generated</li>
          <li>Offline copies of your plans stored on your device</li>
        </ul>

        <p className="mb-4">
          No account data is retained after deletion. If you shared a public
          link to one of your itineraries before deleting your account, that
          shared link will also stop working.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Can&apos;t Access the App?
        </h2>

        <p className="mb-4">
          If you are unable to sign in to request deletion yourself, contact
          us at <strong>support@vagabundo.app</strong> from the email address
          associated with your account, and we will process the deletion
          request on your behalf.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Contact
        </h2>

        <p>
          For questions regarding account deletion please contact:
          <strong> support@vagabundo.app</strong>
        </p>
      </main>
    </>
  );
}
