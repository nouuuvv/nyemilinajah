"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MessageCircle,
  ShoppingBag,
  Share2,
  CheckCircle2,
  MapPin
} from "lucide-react";
import { useState } from "react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const links = [
  {
    id: "web",
    title: "Website Utama",
    subtitle: "Lihat menu & info lengkap",
    icon: Globe,
    url: "/web",
    highlight: true,
  },
  {
    id: "wa",
    title: "Pesan via WhatsApp",
    subtitle: "Fast response & ramah",
    icon: MessageCircle,
    url: "https://wa.me/6285335694802",
    highlight: false,
  },
  {
    id: "tiktok",
    title: "TikTok",
    subtitle: "@nyemilinajah.id",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
    url: "https://www.tiktok.com/@nyemilinajah.id",
    highlight: false,
  },
  // {
  //   id: "ig",
  //   title: "Instagram",
  //   subtitle: "Update & Promo",
  //   icon: () => (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
  //       <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
  //       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
  //       <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  //     </svg>
  //   ),
  //   url: "#",
  //   highlight: false,
  // },
  // {
  //   id: "shopee",
  //   title: "Shopee",
  //   subtitle: "Gratis ongkir ke seluruh Indonesia",
  //   icon: ShoppingBag,
  //   url: "#",
  //   highlight: false,
  // },
  {
    id: "tokped",
    title: "Tokopedia",
    subtitle: "Bebas ongkir & promo cashback",
    icon: ShoppingBag,
    url: "#",
    highlight: false,
  },
];

export default function OmnichannelPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Nyemilinajah | Link Bio",
      text: "Temukan semua channel resmi Nyemilinajah dalam satu tempat.",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback to copy URL
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-brand-dark flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[400px] bg-brand-caramel/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[300px] bg-brand-golden/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Share Button Group */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-[420px] flex justify-end mb-4 relative z-10"
      >
        <button
          onClick={handleShare}
          className="p-2.5 rounded-full bg-brand-dark-card border border-brand-golden/20 text-brand-beige/80 hover:text-brand-golden hover:border-brand-golden/40 transition-all flex items-center justify-center"
        >
          {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Share2 size={18} />}
        </button>
      </motion.div>

      <div className="w-full max-w-[420px] relative z-10 flex flex-col items-center">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-brand-caramel to-brand-golden mb-4 shadow-[0_0_30px_rgba(229,153,20,0.3)]">
            <div className="w-full h-full rounded-full bg-brand-dark-card border border-brand-dark flex items-center justify-center overflow-hidden">
              <img src="/images/icon-nyemilin.svg" alt="Logo Nyemilinajah - Jajanan Tradisional Premium Banyuwangi" className="w-full h-full object-cover" />            </div>
          </div>

          <h1 className="text-2xl font-bold text-brand-beige mb-1 tracking-tight">Nyemilinajah</h1>
          <p className="text-brand-golden font-medium text-sm mb-2">Jajanan Tradisional Premium</p>
          <p className="text-brand-beige/60 text-xs px-6 py-1.5 rounded-full border border-brand-beige/10 bg-brand-dark-card/50">
            Resep Warisan Keluarga
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="w-full flex flex-col gap-3.5 mb-12"
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target={link.url.startsWith("/") ? "_self" : "_blank"}
                rel={link.url.startsWith("/") ? "" : "noopener noreferrer"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex items-center p-4 rounded-2xl border transition-all duration-300 overflow-hidden ${link.highlight
                  ? "bg-brand-golden/10 border-brand-golden/40 hover:bg-brand-golden/20 hover:border-brand-golden hover:shadow-[0_0_20px_rgba(229,153,20,0.2)]"
                  : "glass-card border-brand-beige/10 hover:border-brand-golden/30 hover:bg-white/5"
                  }`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 ${link.highlight ? "bg-brand-golden text-brand-dark" : "bg-brand-caramel/20 text-brand-golden"
                  }`}>
                  <Icon />
                </div>

                <div className="flex-1 text-left">
                  <h2 className={`font-bold text-base mb-0.5 ${link.highlight ? "text-brand-golden" : "text-brand-beige"}`}>
                    {link.title}
                  </h2>
                  <p className="text-xs text-brand-beige/60 line-clamp-1">{link.subtitle}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-1.5 text-brand-beige/40 text-xs mb-2">
            <MapPin size={12} />
            <span>Indonesia</span>
          </div>
          <p className="text-[10px] text-brand-beige/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Nyemilinajah.id
          </p>
        </motion.div>
      </div>

      <FloatingWhatsApp />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </main>
  );
}
