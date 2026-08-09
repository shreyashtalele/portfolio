/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// A pragmatic starting point, not a maximally locked-down policy. 'unsafe-inline' is
// needed for: React's inline `style={{}}` attributes (used throughout, e.g. the
// spotlight glow), the JSON-LD structured-data <script> in layout.tsx, and Next.js's
// own hydration bootstrap script. 'unsafe-eval' is added ONLY in development — Next's
// dev server uses eval()-based source maps for Hot Module Reloading, which a strict
// CSP blocks outright. Production builds don't need or get 'unsafe-eval'. Tightening
// this further (nonce-based CSP) is a reasonable next step, but is more involved and
// worth doing as its own pass — test thoroughly in the browser console after any CSP
// change, since violations fail silently in the UI and only show up as console warnings.
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      `connect-src 'self'${isDev ? " ws:" : ""}`,
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;