"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-bg text-ink">
      <div className="mx-auto max-w-wrap px-6 py-24 text-center sm:px-8">
        <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          Error
        </div>

        <h1 className="mt-4 font-display text-[clamp(32px,4.5vw,48px)] font-normal">
          Something went wrong
        </h1>

        <p className="mx-auto mt-4 max-w-[46ch] text-base text-muted">
          An unexpected error occurred. You can try again, or head back to the
          homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
          >
            Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
