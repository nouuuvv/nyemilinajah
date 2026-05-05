"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function SocialProof() {
  // Video sesuai file di public/images
  const videos = [
    "kupng-gajah.mp4",
    "untir.mp4",
    "kg2.mp4",
    "untir2.mp4"
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-beige mb-4"
          >
            Viral di TikTok!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-beige/70 text-lg max-w-xl"
          >
            Ikuti keseruan kami dan lihat ribuan orang yang udah ketagihan sama
            nyemilinajah.id.
          </motion.p>
        </div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="https://www.tiktok.com/@nyemilinajah.id"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 rounded-full font-medium hover:bg-[#00f2fe]/20 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          Follow @nyemilinajah.id
        </motion.a>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex gap-6 px-6 md:px-12 w-max justify-center mx-auto"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative w-64 md:w-72 aspect-[9/16] bg-brand-dark-card rounded-2xl overflow-hidden border border-brand-beige/10 group cursor-pointer shrink-0 shadow-lg"
            >
              {/* VIDEO */}
              <video
                src={`/images/${video}`}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10" />

              {/* Play icon (visual only) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play
                    className="text-white ml-1"
                    fill="currentColor"
                    size={24}
                  />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-4 z-30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-brand-golden flex items-center justify-center text-brand-dark font-bold text-xs">
                    N
                  </div>
                  <span className="text-white font-medium text-sm">
                    @nyemilinajah.id
                  </span>
                </div>
                <p className="text-white/80 text-xs line-clamp-2">
                  Video {index + 1} - #nyemilinajah #snacklokal
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
}