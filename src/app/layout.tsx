import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nyemilinajah.my.id"),
  title: "Nyemilinajah | Jajanan Tradisional Premium",
  description: "Untir-Untir dan Kuping Gajah renyah dengan resep warisan keluarga. Cemilan tradisional premium khas Indonesia.",
  keywords: [
    "untir untir",
    "kuping gajah",
    "jajanan tradisional",
    "cemilan tradisional",
    "snack rumahan",
    "cemilan renyah",
    "oleh oleh",
    "nyemilinajah"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Nyemilinajah | Jajanan Tradisional Premium",
    description: "Untir-Untir dan Kuping Gajah renyah dengan resep warisan keluarga. Cemilan tradisional premium khas Indonesia.",
    siteName: "Nyemilinajah",
    images: [
      {
        url: "/images/icon-nyemilin.svg",
        width: 1200,
        height: 630,
        alt: "Nyemilinajah Premium Snack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyemilinajah | Jajanan Tradisional Premium",
    description: "Untir-Untir dan Kuping Gajah renyah dengan resep warisan keluarga. Cemilan tradisional premium khas Indonesia.",
    images: ["/images/icon-nyemilin.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nyemilinajah",
    url: "https://www.nyemilinajah.my.id",
    logo: "https://www.nyemilinajah.my.id/images/icon-nyemilin.svg",
    sameAs: [
      "https://www.instagram.com/nyemilinajah.id_placeholder",
      "https://www.tiktok.com/@nyemilinajah.id"
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
