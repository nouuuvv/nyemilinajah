import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nyemilinajah | Premium Tradisional Snack",
  description: "Manisnya tradisi dalam setiap gigitan. Untir-untir dan Kuping Gajah premium renyah, legit, bikin ketagihan.",
  keywords: ["snack", "jajanan tradisional", "untir-untir", "kuping gajah", "nyemilinajah", "cemilan", "cemilan enak"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${outfit.variable} antialiased selection:bg-brand-golden selection:text-brand-dark`}>
        {children}
      </body>
    </html>
  );
}
