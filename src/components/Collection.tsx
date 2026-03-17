"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import DecryptText from "./DecryptText";

const models = [
  {
    id: "TLM-01",
    year: "2024",
    name: "Origine",
    description:
      "L'art de mesurer l'instant",
  },
  {
    id: "TLM-02",
    year: "2025",
    name: "Voyageur",
    description:
      "Double fuseau horaire pour les esprits nomades. Une complication GMT intégrée avec élégance, pour ceux qui vivent entre deux mondes.",
  },
];

const years = ["2024", "2025"];

export default function Collection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeModel = models[activeIndex];

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
          className="section-title text-[#181818] mb-16"
        >
          <DecryptText text="Collection" delay={100} />
        </motion.h2>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-20"
        >
          {/* Line */}
          <div className="absolute top-[10px] left-0 right-0 h-px bg-[#D8D8D8]" />

          {/* Years */}
          <div className="flex justify-between items-start">
            {years.map((year, index) => (
              <button
                key={year}
                onClick={() => index < models.length && setActiveIndex(index)}
                className={`relative flex flex-col items-center ${
                  index < models.length ? "cursor-pointer" : "cursor-default opacity-40"
                }`}
              >
                {/* Dot */}
                <div
                  className={`w-2 h-2 rounded-full mb-4 transition-colors ${
                    index === activeIndex ? "bg-[#181818]" : "bg-[#C8C8C8]"
                  }`}
                />
                {/* Year */}
                <span
                  className={`font-display transition-all ${
                    index === activeIndex
                      ? "text-[28px] lg:text-[48px] text-[#181818]"
                      : "text-[20px] lg:text-[36px] text-[#C8C8C8]"
                  }`}
                >
                  {year}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Model Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-0 border border-[#E0E0E0] bg-white"
        >
          {/* Left - Info */}
          <div className="p-10 lg:p-16 flex flex-col justify-between min-h-[350px] lg:min-h-[450px]">
            <div>
              <div className="text-[11px] tracking-[0.12em] text-[#888] uppercase mb-6">
                <DecryptText text={activeModel.id} delay={200} speed={30} />
              </div>
              <h3 className="font-display text-[26px] lg:text-[32px] text-[#181818] mb-8">
                <DecryptText text={activeModel.name} delay={300} speed={40} />
              </h3>
              <p className="text-[14px] lg:text-[15px] text-[#555] leading-[1.9] max-w-[420px]">
                <DecryptText text={activeModel.description} delay={400} speed={1} />
              </p>
            </div>

            <div className="mt-10">
              <span className="inline-block text-[13px] text-[#181818] underline underline-offset-4 cursor-pointer hover:text-[#888] transition-colors">
                <DecryptText text="Découvrir" delay={500} speed={30} />
              </span>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="bg-[#F0F0F0] min-h-[300px] lg:min-h-[450px] flex items-center justify-center">
            <span className="text-[11px] text-[#888] tracking-[0.12em] uppercase">
              <DecryptText text={`Image ${activeModel.id}`} delay={350} speed={30} />
            </span>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between mt-8"
        >
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              className="w-10 h-10 flex items-center justify-center border border-[#D8D8D8] text-[#181818] hover:bg-[#181818] hover:text-white hover:border-[#181818] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#181818]"
              disabled={activeIndex === 0}
            >
              ←
            </button>
            <button
              onClick={() => setActiveIndex(Math.min(models.length - 1, activeIndex + 1))}
              className="w-10 h-10 flex items-center justify-center border border-[#D8D8D8] text-[#181818] hover:bg-[#181818] hover:text-white hover:border-[#181818] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#181818]"
              disabled={activeIndex === models.length - 1}
            >
              →
            </button>
          </div>

          <span className="text-[14px] text-[#888]">
            {activeIndex + 1}/{models.length}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
