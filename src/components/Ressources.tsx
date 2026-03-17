"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";

const resources = [
  {
    title: "Notre Vision",
    subtitle: "Manifeste",
    label: "01",
  },
  {
    title: "L'Atelier",
    subtitle: "Besançon",
    label: "02",
  },
  {
    title: "Le Mouvement",
    subtitle: "Miyota 82S5",
    label: "03",
  },
  {
    title: "La Promesse",
    subtitle: "Kickstarter",
    label: "04",
  },
];

export default function Ressources() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="ressources"
      ref={containerRef}
      className="relative bg-[#F5F5F5]"
      style={{ padding: "80px 0" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-[28px] lg:text-[36px] text-[#181818] mb-12 px-6 lg:px-10"
        >
          <DecryptText text="Ressources" delay={100} />
        </motion.h2>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide px-6">
          <div className="flex gap-3" style={{ width: "max-content" }}>
            {resources.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer flex-shrink-0"
                style={{ width: "70vw" }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-[#E8E8E8] flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#888] tracking-[0.15em] group-hover:text-[#181818] transition-colors">
                    {item.label}
                  </span>
                </div>

                {/* Info */}
                <div className="pt-4">
                  <h3 className="text-[14px] text-[#181818] mb-1">
                    <DecryptText text={item.title} delay={200 + index * 80} speed={30} />
                  </h3>
                  <p className="text-[12px] text-[#888]">
                    <DecryptText text={item.subtitle} delay={250 + index * 80} speed={30} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid with small gap */}
        <div className="hidden lg:grid grid-cols-4 gap-[6px] px-10">
          {resources.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group block cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-[#E8E8E8] flex items-center justify-center">
                <span className="font-mono text-[10px] text-[#888] tracking-[0.15em] group-hover:text-[#181818] transition-colors">
                  {item.label}
                </span>
              </div>

              {/* Info */}
              <div className="pt-5">
                <h3 className="text-[15px] text-[#181818] mb-1">
                  <DecryptText text={item.title} delay={200 + index * 80} speed={30} />
                </h3>
                <p className="text-[13px] text-[#888]">
                  <DecryptText text={item.subtitle} delay={250 + index * 80} speed={30} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
