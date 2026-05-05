"use client";

import { motion } from "framer-motion";
import { Sparkles, Cookie, Flame } from "lucide-react";

const highlights = [
  {
    icon: Flame,
    title: "Renyah Tahan Lama",
    desc: "Tekstur garing yang awet, nggak gampang mlempem.",
  },
  {
    icon: Cookie,
    title: "Manis Pas, Gak Enek",
    desc: "Takaran gula yang seimbang, bikin pengen nambah terus.",
  },
  {
    icon: Sparkles,
    title: "Dibuat Fresh Harian",
    desc: "Selalu baru, selalu fresh, dikirim dalam kondisi terbaik.",
  },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-brand-dark-card border-y border-brand-golden/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="mb-4 text-brand-golden bg-brand-golden/10 p-4 rounded-full">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-brand-beige mb-2">{item.title}</h4>
                <p className="text-brand-beige/60 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
