"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Ressources() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const resourceImages = [
    "/DSC06659-Modifier-2.webp",
    "/DSC06500.webp",
    "/DSC06562.webp",
    "/DSC07073.webp",
  ];

  const resources = t.ressources.items.map((item, i) => ({
    ...item,
    label: `0${i + 1}`,
    image: resourceImages[i],
  }));

  return (
    <section
      id="ressources"
      ref={containerRef}
      className="relative bg-white py-16 lg:py-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title text-[#181818] mb-12 px-6 lg:px-10"
        >
          {t.ressources.title}
        </motion.h2>

        {/* Mobile */}
        <div className="space-y-4 px-6 lg:hidden">
          {resources.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="aspect-[4/3] bg-[#E8E8E8] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-[14px] text-[#181818] mb-1">{item.title}</h3>
                <p className="text-[12px] text-[#888]">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-[6px] px-10">
          {resources.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group block"
            >
              <div className="aspect-[3/4] bg-[#E8E8E8] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-5">
                <h3 className="text-[15px] text-[#181818] mb-1">{item.title}</h3>
                <p className="text-[13px] text-[#888]">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
