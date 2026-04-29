import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://shortlegsnpaws.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Cat Sitting in Glasgow | Shortlegs N' Paws",
    template: "%s | Shortlegs N' Paws",
  },

  description:
    "Reliable and friendly cat sitting in Glasgow. Calm home visits to keep your cat fed, comfortable, and stress-free while you're away. From £14 per day.",

  keywords: [
    "cat sitting Glasgow",
    "cat sitter Glasgow",
    "home cat visits Glasgow",
    "pet sitting Glasgow",
    "cat care Glasgow",
  ],

  authors: [{ name: "Shortlegs N' Paws" }],
  creator: "Shortlegs N' Paws",
  publisher: "Shortlegs N' Paws",
  category: "Pet Services",
  applicationName: "Shortlegs N' Paws",

  alternates: {
    canonical: siteUrl,
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
    google: "SPxqfyxbTCJj6yaEJwsEe1c_ZTKZfnPRQClF6x66f64",
  },

  openGraph: {
    title: "Cat Sitting in Glasgow | Shortlegs N' Paws",
    description:
      "Calm, caring home visits for cats in Glasgow. Reliable cat sitting while you're away. From £14 per day.",
    url: siteUrl,
    siteName: "Shortlegs N' Paws",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${siteUrl}/cats/Image3.jpg`,
        width: 1200,
        height: 630,
        alt: "Cat sitting service in Glasgow - Shortlegs N' Paws",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cat Sitting in Glasgow | Shortlegs N' Paws",
    description:
      "Friendly home visits for cats in Glasgow. Reliable and calm care while you're away.",
    images: [`${siteUrl}/cats/Image3.jpg`],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PetSitting",
    name: "Shortlegs N' Paws",
    url: siteUrl,
    image: `${siteUrl}/cats/Image3.jpg`,
    description:
      "Reliable and friendly cat sitting in Glasgow. Calm home visits to keep your cat comfortable while you're away.",
    priceRange: "££",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Glasgow",
      addressCountry: "GB",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.8642",
      longitude: "-4.2518",
    },

    areaServed: {
      "@type": "City",
      name: "Glasgow",
    },

    serviceType: "Cat Sitting",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        {children}

        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}