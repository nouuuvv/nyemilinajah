"use client";

import { motion } from "framer-motion";
import { Coffee, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-brand-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[400px] bg-brand-golden/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 rounded-[3rem] border border-brand-golden/20 relative overflow-hidden group"
        >
          {/* subtle animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-golden/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-brand-dark rounded-full border border-brand-golden/30">
              <Coffee className="text-brand-golden" size={40} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-brand-beige mb-6 leading-tight">
            Lagi Nyemil? Atau Lagi <br className="hidden md:block" />
            Butuh Temen Ngopi?
          </h2>
          
          <p className="text-xl text-brand-beige/80 mb-10 max-w-2xl mx-auto">
            Untir-untir & Kuping Gajah dari Nyemilinajah siap nemenin harimu. Jangan sampai kehabisan!
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6285335694802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-golden text-brand-dark font-bold text-lg rounded-full transition-all hover:shadow-[0_0_30px_rgba(229,153,20,0.5)]"
          >
            Pesan Sekarang via WhatsApp
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
