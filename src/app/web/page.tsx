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
  title: "Nyemilinajah | Premium Tradisional Snack",
  description: "Manisnya tradisi dalam setiap gigitan. Untir-untir dan Kuping Gajah premium renyah, legit, bikin ketagihan.",
};

export default function Home() {
  return (
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
  );
}
