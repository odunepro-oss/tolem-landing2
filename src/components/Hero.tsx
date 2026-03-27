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
        <h1 className="font-display text-[27px] lg:text-[42px] xl:text-[48px] text-[#181818] leading-[0.92] tracking-[-0.03em]">
          <DecryptText text={t.hero.title1} delay={300} speed={40} />
          <br />
          <DecryptText text={t.hero.title2} delay={500} speed={40} />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 lg:mt-6 text-[12px] lg:text-[13px] tracking-[0.2em] text-[#181818]/50 uppercase"
        >
          <DecryptText text={t.hero.subtitle} delay={800} speed={20} />
        </motion.p>

        <div className="mt-5 lg:mt-7 px-2">
          <div className="mx-auto flex max-w-[760px] flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:gap-x-8 font-mono text-[9px] lg:text-[10px] text-[#181818]/40 tracking-wider">
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
          <p className="mt-2 text-center font-mono text-[8px] lg:text-[9px] text-[#181818]/30 tracking-wider">
            {t.hero.specNote}
          </p>
        </div>
      </motion.div>

      {/* Image - Desktop: full cover, Mobile: centered */}
      <div className="absolute inset-x-0 top-[59%] -translate-y-1/2 lg:inset-x-0 lg:bottom-0 lg:top-[-3%] lg:translate-y-0">
        <img
          src="/montre2.png"
          alt="TOLEM Watch"
          className="w-full h-auto lg:h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
