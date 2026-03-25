"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Decouvrir() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const specs = t.decouvrir.specs;
  const specsList = [
    specs.boitier,
    specs.finitions,
    specs.verre,
    specs.dimensions,
    specs.cadrans,
    specs.mouvement,
    specs.reserve,
    specs.etancheite,
    specs.entreCorne,
  ];

  const items = [
    {
      title: specs.title,
      type: "specs" as const,
      specsList,
    },
    {
      title: t.decouvrir.garantie.title,
      type: "text" as const,
      description: t.decouvrir.garantie.description,
    },
    {
      title: t.decouvrir.livraison.title,
      type: "text" as const,
      description: t.decouvrir.livraison.description,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F5F5F5] px-6 py-16 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-[#181818] mb-16"
        >
          {t.decouvrir.title}
        </motion.h2>

        <div>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-12 border-t border-[#D8D8D8]"
            >
              <div className="lg:col-span-3">
                <h3 className="text-[15px] lg:text-[16px] text-[#181818]">{item.title}</h3>
              </div>

              <div className="lg:col-span-6">
                {item.type === "specs" ? (
                  <div className="space-y-3">
                    {item.specsList.map((spec) => (
                      <div key={spec.label} className="flex flex-col sm:flex-row sm:gap-4">
                        <span className="text-[12px] text-[#888] tracking-[0.05em] uppercase sm:w-[160px] flex-shrink-0">{spec.label}</span>
                        <span className="text-[14px] text-[#555] leading-[1.7]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[14px] text-[#555] leading-[1.8]">{item.description}</p>
                )}
              </div>

              <div className="lg:col-span-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
