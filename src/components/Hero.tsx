"use client";

import { motion } from "framer-motion";
import FloatingCrumbs from "./FloatingCrumbs";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-caramel/20 via-brand-dark to-brand-dark"></div>
        <FloatingCrumbs />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full border border-brand-golden/30 bg-brand-dark-card/50 backdrop-blur-sm"
        >
          <span className="text-sm font-medium tracking-wider text-brand-golden uppercase">
            Resep Warisan Keluarga
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 text-brand-beige tracking-tight leading-tight"
        >
          Manisnya Tradisi dalam <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-golden to-brand-caramel-light">
            Setiap Gigitan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-brand-beige/80 mb-10 max-w-2xl"
        >
          Renyah. Legit. Bikin Ketagihan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://wa.me/6285335694802"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-brand-golden text-brand-dark font-bold text-lg rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(229,153,20,0.4)]"
          >
            <span className="relative z-10">Pesan Sekarang via WhatsApp</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
    </section>
  );
}
