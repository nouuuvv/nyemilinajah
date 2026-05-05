"use client";

import { motion, Variants } from "framer-motion";
import { Coffee, Heart, Home } from "lucide-react";

export default function Story() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 px-6 bg-brand-dark relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-beige mb-6">
            Kenapa Nyemilinajah?
          </h2>
          <p className="text-brand-beige/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Lebih dari sekadar cemilan. Ini adalah rasa rindu pada jajanan masa
            kecil yang hangat, renyah, dan dibuat dengan cinta.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-caramel/20 flex items-center justify-center mb-6">
              <Heart className="text-brand-golden" size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-beige mb-3">
              Jajanan Tradisional
            </h3>
            <p className="text-brand-beige/70">
              Menghadirkan kembali cita rasa klasik yang sudah menemani dari
              generasi ke generasi.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-caramel/20 flex items-center justify-center mb-6">
              <Home className="text-brand-golden" size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-beige mb-3">
              Resep Rumahan
            </h3>
            <p className="text-brand-beige/70">
              Dibuat dengan bahan pilihan dan resep asli keluarga tanpa pengawet
              buatan.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-caramel/20 flex items-center justify-center mb-6">
              <Coffee className="text-brand-golden" size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-beige mb-3">
              Teman Ngopi
            </h3>
            <p className="text-brand-beige/70">
              Sangat cocok untuk menemani waktu santai, ngopi sore, atau kumpul
              bareng keluarga.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
