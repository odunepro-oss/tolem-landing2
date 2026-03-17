"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";

const items = [
  {
    title: "Mouvement Manufacture",
    description:
      "La TLM-01 est équipée du calibre Miyota 82S5, assemblé dans notre atelier de Besançon. Verre saphir traité anti-reflet, fond clipsé, 42 heures de réserve de marche.",
  },
  {
    title: "Garantie à Vie",
    description:
      "Chaque montre TOLEM est accompagnée d'une garantie à vie sur le mouvement. Notre engagement envers l'excellence ne connaît pas de date d'expiration.",
  },
  {
    title: "Service & Révision",
    description:
      "Notre atelier assure l'entretien et la révision de chaque pièce. Un service personnalisé pour préserver la précision de votre montre.",
  },
];

export default function Decouvrir() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F5F5F5]"
      style={{ padding: "80px 40px" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-[28px] lg:text-[36px] text-[#181818] mb-16"
        >
          <DecryptText text="Découvrir" delay={100} />
        </motion.h2>

        {/* List */}
        <div>
          {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-12 border-t border-[#D8D8D8]"
          >
            {/* Title */}
            <div className="lg:col-span-3">
              <h3 className="text-[15px] lg:text-[16px] text-[#181818]">
                <DecryptText text={item.title} delay={150 + index * 100} speed={30} />
              </h3>
            </div>

            {/* Description */}
            <div className="lg:col-span-6">
              <p className="text-[14px] text-[#555] leading-[1.8]">
                <DecryptText text={item.description} delay={200 + index * 100} speed={1} />
              </p>
            </div>

            {/* Link */}
            <div className="lg:col-span-3 lg:text-right">
              <span className="inline-block text-[13px] text-[#181818] underline underline-offset-4 cursor-pointer hover:text-[#888] transition-colors">
                <DecryptText text="En savoir plus" delay={300 + index * 100} speed={30} />
              </span>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
