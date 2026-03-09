"use client";

import { theme } from "@/lib/theme";

export default function SiteFooter() {
  return (
    <footer
      className="mt-24 border-t px-6 py-10"
      style={{
        borderColor: theme.border,
        backgroundColor: theme.surfaceSoft
      }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p
          className="text-sm"
          style={{ color: theme.textSecondary }}
        >
          © {new Date().getFullYear()} Vagabundo. All rights reserved.
        </p>

        <div
          className="mt-3 flex justify-center gap-6 text-sm"
          style={{ color: theme.textSecondary }}
        >
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:underline">
            Terms
          </a>

          <a
            href="https://apps.apple.com/ba/app/vagabundo/id6754535676"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Vagabundo iOS
          </a>
        </div>
      </div>
    </footer>
  );
}