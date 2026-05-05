import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Highlights from "@/components/Highlights";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
