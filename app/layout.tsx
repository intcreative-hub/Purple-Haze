import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

// Typography System - Three-Tier Hierarchy
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "600", "700", "800"],
});

// Note: Using Outfit as fallback for Roc Grotesk (similar geometric sans-serif)
// Roc Grotesk not available in next/font/google, so we'll use Outfit for headlines too
const rocGrotesk = outfit; // Using Outfit as Roc Grotesk alternative

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}. Located in Brunswick, Ohio. Visit us for premium cigars, vapes, and smoking accessories.`,
  keywords: ["smoke shop", "Brunswick Ohio", "vapes", "cigars", "tobacco", "smoking accessories", "glass", "vape mods"],
  authors: [{ name: SITE_CONFIG.name }],
  creator: "INT Creative",
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purplehazesmokeshop.com",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: `${SITE_CONFIG.tagline}. Visit us in Brunswick, Ohio for all your smoking needs.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Brunswick, Ohio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.tagline,
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code", // TODO: Add actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${rocGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Fonts - Backup for any missing fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TobaccoStore",
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.tagline,
              telephone: SITE_CONFIG.phone,
              email: SITE_CONFIG.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St",
                addressLocality: "Brunswick",
                addressRegion: "OH",
                postalCode: "44212",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "41.2381",
                longitude: "-81.8412",
              },
              url: "https://purplehazesmokeshop.com",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "19:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
