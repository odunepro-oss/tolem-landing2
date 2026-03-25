"use client";

import { motion } from "framer-motion";
import DecryptText from "./DecryptText";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full bg-[#F5F5F5] overflow-hidden">
      {/* H1 - Centered, slightly towards top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-[28%] lg:top-[14%] z-20 text-center px-6"
      >
        <h1 className="font-display text-[28px] lg:text-[48px] xl:text-[60px] text-[#181818] leading-[0.92] tracking-[-0.03em]">
          <DecryptText text={t.hero.title1} delay={300} speed={40} />
          <br />
          <DecryptText text={t.hero.title2} delay={500} speed={40} />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 lg:mt-6 text-[11px] lg:text-[13px] tracking-[0.2em] text-[#181818]/50 uppercase"
        >
          <DecryptText text={t.hero.subtitle} delay={800} speed={20} />
        </motion.p>
      </motion.div>

      {/* Specs Bar - Bottom, clean horizontal layout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-20 lg:bottom-24 inset-x-0 z-20 px-6 lg:px-16"
      >
        <div className="flex items-center justify-center gap-4 lg:gap-8 font-mono text-[8px] lg:text-[10px] text-[#181818]/40 tracking-wider">
          <span>ACIER 316L</span>
          <span className="text-[#181818]/20">·</span>
          <span>41MM</span>
          <span className="text-[#181818]/20">·</span>
          <span>MIYOTA 82S5</span>
          <span className="text-[#181818]/20">·</span>
          <span>SAPHIR</span>
          <span className="text-[#181818]/20">·</span>
          <span>10ATM</span>
        </div>
        <p className="text-center mt-2 font-mono text-[7px] lg:text-[9px] text-[#181818]/30 tracking-wider">
          {t.hero.specNote}
        </p>
      </motion.div>

      {/* Image - Desktop: full cover, Mobile: centered */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-0 lg:inset-0">
        <img
          src="/montre2.png"
          alt="TOLEM Watch"
          className="w-full h-auto lg:h-full object-cover object-center"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[8px] lg:text-[9px] tracking-[0.2em] text-[#181818]/40 uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#181818]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
