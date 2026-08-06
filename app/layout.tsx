import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
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
  metadataBase: new URL("https://your-domain.com"), // 🔁 Update with your actual domain
  title: {
    default: "Shreyash Talele — Full-Stack Developer",
    template: "%s | Shreyash Talele",
  },
  description:
    "Full-stack developer specializing in React, Next.js, and Node.js. Built production dashboards handling 500+ row CSV imports with real-time analytics.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "TypeScript",
    "MERN Stack",
    "Software Engineer",
    "Web Developer",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
  ],
  authors: [{ name: "Shreyash Talele" }],
  creator: "Shreyash Talele",
  publisher: "Shreyash Talele",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // 🔁 Update with your actual domain
    title: "Shreyash Talele — Full-Stack Developer",
    description:
      "Building full-stack solutions that solve real problems. Explore my work in shipment management, agri-tech, and more.",
    siteName: "Shreyash Talele Portfolio",
    images: [
      {
        url: "/og-image.png", // 📸 Create this in your public folder
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
  alternates: {
    canonical: "https://your-domain.com", // 🔁 Update with your actual domain
  },
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
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      {/* 
         FIX: Removed "scroll-smooth" from the html tag.
         Why? Native CSS scroll-smooth on the <html> tag can conflict 
         with your custom smooth scrolling in the Header component. 
         It is safer to handle scrolling via your JS or Tailwind utility classes.
      */}
      <body className="bg-bg text-ink font-body text-base leading-relaxed antialiased">
        {children}
      </body>
    </html>
  );
}
