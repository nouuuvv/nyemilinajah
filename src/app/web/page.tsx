import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Highlights from "@/components/Highlights";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Tradisional Snack",
  description: "Cemilan tradisional premium khas Banyuwangi. Untir-untir dan Kuping Gajah renyah, legit, bikin ketagihan. Resep warisan keluarga.",
  alternates: {
    canonical: "/web",
  },
  openGraph: {
    title: "Nyemilinajah | Premium Tradisional Snack Banyuwangi",
    description: "Cemilan tradisional premium khas Banyuwangi. Untir-untir dan Kuping Gajah renyah, legit, bikin ketagihan. Resep warisan keluarga.",
    url: "/web",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://www.nyemilinajah.my.id/web#product-untir",
        "name": "Untir-Untir Premium Nyemilinajah",
        "image": "https://www.nyemilinajah.my.id/images/icon-nyemilin.svg",
        "description": "Untir-Untir premium renyah khas Banyuwangi dengan resep warisan keluarga.",
        "brand": {
          "@type": "Brand",
          "name": "Nyemilinajah"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.nyemilinajah.my.id/web#product-kupinggajah",
        "name": "Kuping Gajah Premium Nyemilinajah",
        "image": "https://www.nyemilinajah.my.id/images/icon-nyemilin.svg",
        "description": "Kuping Gajah premium renyah khas Banyuwangi. Camilan tradisional gurih dan manis.",
        "brand": {
          "@type": "Brand",
          "name": "Nyemilinajah"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.nyemilinajah.my.id/web#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Apa itu Nyemilinajah?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nyemilinajah adalah produsen jajanan tradisional premium khas Banyuwangi yang berfokus pada camilan Untir-Untir dan Kuping Gajah dengan resep warisan keluarga."
            }
          },
          {
            "@type": "Question",
            "name": "Dimana lokasi Nyemilinajah?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nyemilinajah berlokasi di Banyuwangi, Jawa Timur. Anda bisa memesan secara online melalui WhatsApp atau marketplace."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah camilan Nyemilinajah tahan lama?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, camilan kami digoreng dengan teknik khusus dan dikemas dengan baik sehingga awet dan renyah dalam waktu yang lama."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.nyemilinajah.my.id/web#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://www.nyemilinajah.my.id/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Produk",
            "item": "https://www.nyemilinajah.my.id/web"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-brand-dark text-brand-beige overflow-x-hidden">
        <Hero />
        <Story />
        <Products />
        <Highlights />
        <SocialProof />
        <CTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
