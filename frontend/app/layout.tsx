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
    default: "Shortlegs-N-Paws | Cat Sitting Services",
    template: "%s | Shortlegs-N-Paws",
  },

  description:
    "Friendly and reliable cat sitting services. Calm home visits to keep your cat happy, fed, and comfortable while you're away. From £14 per day.",

  keywords: [
    "cat sitting",
    "pet sitting",
    "cat care",
    "home visits",
    "pet services",
    "local cat sitter",
    "Shortlegs-N-Paws",
  ],

  authors: [{ name: "Shortlegs-N-Paws" }],
  creator: "Shortlegs-N-Paws",
  publisher: "Shortlegs-N-Paws",

  alternates: {
    canonical: siteUrl,
  },

  verification: {
    google: "SPxqfyxbTCJj6yaEJwsEe1c_ZTKZfnPRQClF6x66f64",
  },

  openGraph: {
    title: "Shortlegs-N-Paws | Cat Sitting Services",
    description:
      "Calm, caring home visits for cats. Reliable cat sitting while you're away. From £14 per day.",
    url: siteUrl,
    siteName: "Shortlegs-N-Paws",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/cats/Image3.jpg",
        width: 1200,
        height: 630,
        alt: "A cat being cared for by Shortlegs-N-Paws",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shortlegs-N-Paws | Cat Sitting Services",
    description:
      "Friendly home visits for cats. Reliable, calm care while you're away. From £14 per day.",
    images: ["/cats/Image3.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
