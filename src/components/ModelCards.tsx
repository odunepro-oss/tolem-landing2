"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

// Images portrait des 3 modèles. Placeholders temporaires en attendant
// les visuels portrait définitifs (TLM-01 fond noir, TLM-02 gris, TLM-03 marron).
const modelImages = [
  "/model-tlm-01.webp",
  "/model-tlm-02.webp",
  "/model-tlm-03.webp",
];

export default function ModelCards() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const models = t.decouvrir.models;

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
      {models.map((model, index) => (
        <motion.div
          key={model.name}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
          className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-[#181818]"
        >
          <img
            src={modelImages[index]}
            alt={`TOLEM ${model.name} — ${model.variant}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />

          {/* Dégradé pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/70" />

          {/* Titre + sous-titre en bas à gauche, en blanc */}
          <div className="absolute bottom-0 left-0 p-5 lg:p-6">
            <span className="block text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/60 mb-1.5">
              {model.variant}
            </span>
            <span className="block text-[18px] lg:text-[20px] tracking-[0.02em] text-white">
              {model.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
