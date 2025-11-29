import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Livingseed Media Cut - Free YouTube Audio Extractor for Ministry Videos",
  description: "The official tool to extract audio snippets from Livingseed ministry videos. Download sermon clips, worship songs, and teachings from YouTube in MP3, WAV, or MP4 format. Fast, free, and easy to use.",
  keywords: [
    "YouTube audio extractor",
    "sermon audio download",
    "ministry video to audio",
    "Livingseed media",
    "church sermon clips",
    "worship music extractor",
    "YouTube to MP3",
    "Christian audio downloader",
    "ministry content tools",
    "sermon snippet creator",
    "audio trimming tool",
    "free YouTube downloader"
  ],
  authors: [{ name: "Livingseed Media Team" }],
  creator: "Livingseed Media Team",
  publisher: "Livingseed",
  applicationName: "Livingseed Media Cut",
  category: "Religion & Spirituality",
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Livingseed Media Cut - Free YouTube Audio Extractor",
    description: "Extract and download audio from Livingseed ministry videos. Perfect for sermon clips, worship songs, and teachings. MP3, WAV, and MP4 formats supported.",
    url: "https://livingseed.org",
    siteName: "Livingseed Media Cut",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://livingseed.org/wp-content/uploads/2023/05/LSeed-Logo-1.png",
        width: 1200,
        height: 630,
        alt: "Livingseed Media Cut - Audio Extraction Tool"
      }
    ]
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Livingseed Media Cut - Free YouTube Audio Extractor",
    description: "Extract audio from ministry videos. Download sermon clips and worship songs in MP3, WAV, or MP4.",
    images: ["https://livingseed.org/wp-content/uploads/2023/05/LSeed-Logo-1.png"],
    creator: "@livingseed"
  },
  
  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags (add your actual verification codes)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  
  // App metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Livingseed Media Cut',
  },
  
  // Icons and manifest
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Livingseed Media Cut",
              "description": "Free tool to extract audio from YouTube ministry videos. Download sermon clips and worship songs.",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Livingseed",
                "url": "https://livingseed.org",
                "logo": "https://livingseed.org/wp-content/uploads/2023/05/LSeed-Logo-1.png"
              },
              "featureList": [
                "Extract audio from YouTube videos",
                "Download in MP3, WAV, or MP4 format",
                "Trim audio to specific time ranges",
                "Full track extraction",
                "Custom metadata support",
                "Download history tracking"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
