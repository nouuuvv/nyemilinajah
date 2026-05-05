"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: "untir-untir",
    name: "Untir-untir Original",
    description: "Tekstur renyah dengan bentuk plintiran khas yang bikin mulut nggak bisa berhenti mengunyah.",
    tags: ["Renyah", "Gurih", "Original"],
    color: "from-brand-caramel/40 to-transparent",
  },
  {
    id: "kuping-gajah",
    name: "Kuping Gajah Choco-Vanilla",
    description: "Layer coklat dan vanilla yang cantik, manisnya pas, dan tekstur crunchnya juara.",
    tags: ["Manis Pas", "Coklat", "Vanilla"],
    color: "from-[#8B4513]/40 to-transparent",
  },
];

export default function Products() {
  return (
    <section className="py-24 px-6 bg-brand-dark relative z-10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-golden/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-beige mb-4"
          >
            Menu Andalan Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-beige/70 text-lg"
          >
            Pilih favoritmu, atau langsung borong keduanya!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative z-10 glass-card rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(229,153,20,0.15)] group-hover:-translate-y-2">
                {/* Image Placeholder Skeleton */}
                <div
                  className={`relative w-full aspect-[4/5] bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}
                >
                  {/* Subtle placeholder pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

                  {/* Actual image tag for user to easily replace */}
                  <img
                    src={
                      product.id === "untir-untir"
                        ? "/images/untir.jpeg"
                        : "/images/kuping.jpeg"
                    }
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* <div className="z-10 text-brand-beige/50 font-medium text-lg border border-brand-beige/20 px-6 py-3 rounded-full backdrop-blur-sm">
                    [ Gambar {product.name} ]
                  </div> */}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-beige mb-3 group-hover:text-brand-golden transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-brand-beige/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-brand-caramel/20 text-brand-golden border border-brand-caramel/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
