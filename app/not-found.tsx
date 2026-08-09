import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="flex min-h-[calc(100vh-72px)] items-center border-b border-line"
      >
        <div className="mx-auto max-w-wrap px-6 py-24 text-center sm:px-8">
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            404
          </div>
          <h1 className="mt-4 font-display text-[clamp(32px,4.5vw,48px)] font-normal">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-[46ch] text-base text-muted">
            The page you're looking for doesn't exist — it may have moved, or
            the link might be out of date.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
