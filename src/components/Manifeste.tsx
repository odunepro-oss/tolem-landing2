"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import DecryptText from "./DecryptText";

const models = [
  { id: "TLM-01", year: "2024", name: "Origine", desc: "Le modèle fondateur" },
  { id: "TLM-02", year: "2025", name: "Voyageur", desc: "Double fuseau horaire" },
];

export default function Manifeste() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeYear, setActiveYear] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Image grows to full screen (no clip-path, just scale)
  const imageWidth = useTransform(scrollYProgress, [0, 0.25], ["40%", "100%"]);
  const imageHeight = useTransform(scrollYProgress, [0, 0.25], ["30%", "100%"]);

  // Parallax effects
  const textParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const specsParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const bottomParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  // Text fades out
  const textOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.95]);

  // Timeline appears
  const timelineOpacity = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);

  // Years scroll horizontally (desktop) - 2 years, each 200px wide = 400px total
  const yearX = useTransform(scrollYProgress, [0.32, 0.92], ["calc(50vw - 100px)", "calc(50vw - 300px)"]);

  // Years scroll vertically (mobile) - 2 years, each 80px tall = 160px total
  const yearY = useTransform(scrollYProgress, [0.32, 0.92], ["calc(50vh - 40px)", "calc(50vh - 120px)"]);


  // Track active year - changes when year reaches center
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.32) {
      // 0.32 to 0.92 = 0.6 range for 2 years (0.3 per year)
      const progress = (latest - 0.32) / 0.60;
      const index = Math.min(Math.round(progress * (models.length - 1)), models.length - 1);
      if (index !== activeYear) {
        setActiveYear(index);
      }
    }
  });


  // Touch/swipe handling for mobile
  const touchStartRef = useRef(0);

  function handleTouchStart(e: React.TouchEvent): void {
    touchStartRef.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent): void {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeYear < models.length - 1) {
        setActiveYear(prev => prev + 1);
      } else if (diff < 0 && activeYear > 0) {
        setActiveYear(prev => prev - 1);
      }
    }
  }

  return (
    <section
      id="manifeste"
      ref={containerRef}
      className="relative bg-[#F5F5F5]"
      style={{ height: "450vh" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Image Container - grows from center */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#E0E0E0] overflow-hidden"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        >
          {/* Crossfade Images */}
          <div className="relative w-full h-full bg-[#E0E0E0]">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Placeholder - replace with actual images */}
                <div className="text-center">
                  <span className="text-[11px] text-[#888]/60 tracking-[0.12em] uppercase block mb-2">
                    Image {models[activeYear]?.id}
                  </span>
                  <span className="text-[11px] text-[#888]/40 tracking-[0.1em]">
                    {models[activeYear]?.name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Subtle zoom on scroll */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10"
              style={{
                scale: useTransform(scrollYProgress, [0.3, 1], [1, 1.1]),
              }}
            />
          </div>
        </motion.div>

        {/* Initial Text - Parallax + Fade */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textParallaxY,
            scale: textScale,
          }}
          className="absolute left-8 lg:left-16 top-[8%] lg:top-[10%] z-20 pointer-events-none"
        >
          <h2
            className="section-title max-w-[calc(100vw-4rem)] text-[#181818] text-balance"
          >
            <DecryptText text="L'art de" delay={100} speed={30} />
            <br />
            <DecryptText text="mesurer l'instant" delay={200} speed={30} />
          </h2>
        </motion.div>

        {/* Specs - Parallax */}
        <motion.div
          style={{ opacity: textOpacity, y: specsParallaxY }}
          className="absolute right-8 lg:right-16 top-[38%] z-20 text-right hidden lg:block"
        >
          <div className="font-display font-light text-[#181818] leading-[1.1]" style={{ fontSize: "clamp(24px, 3.5vw, 42px)" }}>
            <DecryptText text="41mm" delay={400} speed={40} />
            <span className="text-[#C8C8C8] mx-3">—</span>
            <DecryptText text="11,6mm" delay={450} speed={40} />
          </div>
          <p className="text-[11px] text-[#888] mt-2 tracking-[0.05em]">
            <DecryptText text="Diamètre — Épaisseur" delay={500} speed={20} />
          </p>
        </motion.div>

        {/* Bottom Left - Parallax */}
        <motion.div
          style={{ opacity: textOpacity, y: bottomParallaxY }}
          className="absolute left-8 lg:left-16 bottom-[8%] z-20"
        >
          <div className="font-display font-light text-[24px] lg:text-[32px] text-[#181818] mb-2">
            <DecryptText text="2024" delay={500} speed={40} />
          </div>
          <p className="text-[11px] lg:text-[12px] text-[#666] leading-[1.7] max-w-[240px] lg:max-w-[280px]">
            <DecryptText
              text="2024 — TOLEM naît à Besançon, capitale historique de l'horlogerie française."
              delay={600}
              speed={1}
            />
          </p>
        </motion.div>

        {/* Bottom Right - Parallax */}
        <motion.div
          style={{ opacity: textOpacity, y: bottomParallaxY }}
          className="absolute right-8 lg:right-16 bottom-[8%] z-20 text-right hidden lg:block"
        >
          <div className="text-[12px] text-[#181818] mb-1">
            <DecryptText text="Besançon" delay={650} speed={30} />
          </div>
          <div className="text-[10px] text-[#C8C8C8] tracking-[0.05em]">
            <DecryptText text="47.2378° N, 6.0241° E" delay={700} speed={20} />
          </div>
        </motion.div>

        {/* Timeline - Desktop (Horizontal) */}
        <motion.div
          style={{ opacity: timelineOpacity }}
          className="absolute inset-x-0 bottom-[15%] z-30 hidden lg:block"
        >
          <div className="relative h-[180px]">
            {/* The line - full width */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />

            {/* Years container */}
            <motion.div
              style={{ x: yearX }}
              className="flex"
            >
              {models.map((model, index) => (
                <div
                  key={model.year}
                  className="relative flex-shrink-0 w-[200px]"
                >
                  {/* Dot ON the line */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 -top-[6px] w-3 h-3 rounded-full transition-all duration-500 ${
                      activeYear === index
                        ? "bg-white scale-125"
                        : index < activeYear
                          ? "bg-white/50"
                          : "bg-white/20"
                    }`}
                  />

                  {/* Year */}
                  <span
                    className={`block text-center font-display mt-8 transition-all duration-500 ${
                      activeYear === index
                        ? "text-white text-[64px]"
                        : "text-white/12 text-[38px]"
                    }`}
                  >
                    {model.year}
                  </span>

                  {/* Model name - only active */}
                  <div
                    className={`mt-4 text-center transition-all duration-300 ${
                      activeYear === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="text-[12px] tracking-[0.15em] text-white/70 uppercase">
                      {model.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline - Mobile (Vertical) */}
        <motion.div
          style={{ opacity: timelineOpacity }}
          className="absolute left-6 top-0 bottom-0 z-30 lg:hidden"
        >
          <div className="relative h-full">
            {/* The vertical line */}
            <div className="absolute left-[6px] top-0 bottom-0 w-[1px] bg-white/30" />

            {/* Years container */}
            <motion.div
              style={{ y: yearY }}
              className="flex flex-col"
            >
              {models.map((model, index) => (
                <div
                  key={model.year}
                  className="relative flex items-center h-[80px]"
                >
                  {/* Dot ON the line */}
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 flex-shrink-0 ${
                      activeYear === index
                        ? "bg-white scale-125"
                        : index < activeYear
                          ? "bg-white/50"
                          : "bg-white/20"
                    }`}
                  />

                  {/* Year + Model name */}
                  <div className="ml-6">
                    <span
                      className={`block font-display transition-all duration-500 ${
                        activeYear === index
                          ? "text-white text-[32px]"
                          : "text-white/15 text-[20px]"
                      }`}
                    >
                      {model.year}
                    </span>

                    {/* Model name - only active */}
                    <span
                      className={`block text-[10px] tracking-[0.12em] text-white/60 uppercase transition-all duration-300 ${
                        activeYear === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {model.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Collection Label - minimal (desktop only) */}
        <motion.div
          style={{ opacity: timelineOpacity }}
          className="absolute left-16 top-[8%] z-30 hidden lg:block"
        >
          <div className="text-[10px] tracking-[0.15em] text-white/40 uppercase">
            Collection
          </div>
        </motion.div>

        {/* Model Reference - minimal */}
        <motion.div
          style={{ opacity: timelineOpacity }}
          className="absolute right-6 lg:right-16 top-[8%] z-30 text-right"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[11px] lg:text-[12px] tracking-[0.1em] text-white/60 font-display"
            >
              {models[activeYear]?.id}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
