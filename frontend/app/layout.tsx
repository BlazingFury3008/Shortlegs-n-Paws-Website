import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shortlegs-N-Paws | Cat Sitting Services",
    template: "%s | Shortlegs-N-Paws",
  },
  description:
    "Friendly and reliable cat sitting services. Home visits to keep your cat happy, fed, and comfortable while you're away. From £12 per day.",

  keywords: [
    "cat sitting",
    "pet sitting",
    "cat care",
    "home visits",
    "pet services",
    "local cat sitter",
  ],

  authors: [{ name: "Shortlegs-N-Paws" }],

  openGraph: {
    title: "Shortlegs-N-Paws | Cat Sitting Services",
    description:
      "Calm, caring home visits for cats. Keep your pet comfortable while you're away. From £12 per day.",
    url: "https://shortlegsnpaws.co.uk", // update when live
    siteName: "Shortlegs-N-Paws",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/cats/Floppy.jpg", // replace with best photo
        width: 1200,
        height: 630,
        alt: "Shortlegs-N-Paws cat sitting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shortlegs-N-Paws | Cat Sitting Services",
    description:
      "Friendly home visits for cats. Reliable, calm care while you're away.",
    images: ["/cats/Floppy.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://shortlegsnpaws.co.uk"), // update when live
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}