import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/components/data";
import { SITE_URL } from "@/lib/config";
import ScrollProgress from "@/components/ScrollProgress";
import "@/app/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shreyash Talele — Full-Stack Developer",
    template: "%s | Shreyash Talele",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Built production dashboards handling 500+ row CSV imports with real-time analytics.",
  authors: [{ name: "Shreyash Talele" }],
  creator: "Shreyash Talele",
  publisher: "Shreyash Talele",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Shreyash Talele — Full-Stack Developer",
    description:
      "Building full-stack solutions that solve real problems. Explore my work in shipment management, agri-tech, and more.",
    siteName: "Shreyash Talele Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shreyash Talele - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyash Talele — Full-Stack Developer",
    description:
      "Building full-stack solutions that solve real problems. Explore my work.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="bg-bg text-ink font-body text-base leading-relaxed antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
