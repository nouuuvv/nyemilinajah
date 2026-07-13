import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#E59914",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nyemilinajah.my.id"),
  title: {
    default: "Nyemilinajah | Oleh-Oleh Camilan & Jajanan Tradisional Banyuwangi",
    template: "%s | Nyemilinajah"
  },
  description: "Untir-Untir dan Kuping Gajah renyah dengan resep warisan keluarga. Cemilan tradisional premium khas Banyuwangi, Indonesia. Pesan sekarang!",
  keywords: [
    "untir untir",
    "untir untir banyuwangi",
    "kuping gajah",
    "kuping gajah banyuwangi",
    "jajanan tradisional",
    "jajanan tradisional banyuwangi",
    "cemilan tradisional",
    "snack rumahan banyuwangi",
    "cemilan renyah",
    "oleh oleh banyuwangi",
    "oleh-oleh khas banyuwangi",
    "snack banyuwangi",
    "nyemilinajah"
  ],
  authors: [{ name: "Nyemilinajah" }],
  creator: "Nyemilinajah",
  publisher: "Nyemilinajah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Nyemilinajah | Jajanan Tradisional Premium Banyuwangi",
    description: "Untir-Untir dan Kuping Gajah renyah dengan resep warisan keluarga. Cemilan tradisional premium khas Banyuwangi.",
    siteName: "Nyemilinajah",
    images: [
      {
        url: "/images/icon-nyemilin.svg",
        width: 1200,
        height: 630,
        alt: "Nyemilinajah Premium Snack Banyuwangi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyemilinajah | Jajanan Tradisional Premium",
    description: "Untir-Untir dan Kuping Gajah renyah dengan resep warisan keluarga. Cemilan tradisional khas Banyuwangi.",
    images: ["/images/icon-nyemilin.svg"],
    creator: "@nyemilinajah",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/icon-nyemilin.svg",
  },
  manifest: "/manifest.json",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.nyemilinajah.my.id/#organization",
        "name": "Nyemilinajah",
        "url": "https://www.nyemilinajah.my.id",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nyemilinajah.my.id/images/icon-nyemilin.svg"
        },
        "sameAs": [
          "https://www.instagram.com/nyemilinajah.id_placeholder",
          "https://www.tiktok.com/@nyemilinajah.id"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nyemilinajah.my.id/#website",
        "url": "https://www.nyemilinajah.my.id",
        "name": "Nyemilinajah",
        "description": "Jajanan Tradisional Premium khas Banyuwangi",
        "publisher": {
          "@id": "https://www.nyemilinajah.my.id/#organization"
        }
      },
      {
        "@type": ["LocalBusiness", "FoodEstablishment"],
        "@id": "https://www.nyemilinajah.my.id/#localbusiness",
        "name": "Nyemilinajah",
        "image": "https://www.nyemilinajah.my.id/images/icon-nyemilin.svg",
        "url": "https://www.nyemilinajah.my.id",
        "telephone": "+6285335694802",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Banyuwangi",
          "addressRegion": "Jawa Timur",
          "addressCountry": "ID"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        "priceRange": "Rp",
        "servesCuisine": "Indonesian Traditional Snack"
      }
    ]
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased selection:bg-brand-golden selection:text-brand-dark`}>
        {children}
      </body>
    </html>
  );
}
