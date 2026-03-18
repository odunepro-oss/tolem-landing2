"use client";

import { motion } from "framer-motion";
import DecryptText from "./DecryptText";

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#F5F5F5] overflow-hidden">
      {/* H1 - Centered, slightly towards top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-[28%] lg:top-[18%] z-20 text-center px-6"
      >
        <h1 className="font-display font-medium text-[32px] lg:text-[40px] xl:text-[48px] text-[#181818] leading-[1.0] tracking-[-0.03em]">
          <DecryptText text="L'héritage ne se copie pas." delay={300} speed={40} />
          <br />
          <DecryptText text="Il se réinvente." delay={500} speed={40} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-3 lg:mt-4 text-[11px] lg:text-[12px] tracking-[0.15em] text-[#181818]/50 uppercase"
        >
          Deux générations. Une montre.
        </motion.p>
      </motion.div>

      {/* Micro Infos - Desktop only */}
      <div className="hidden lg:block absolute top-24 left-16 z-20 font-mono text-[10px] text-[#181818]/40 tracking-wider">
        <span>41MM</span>
        <span className="mx-2">—</span>
        <span>11,6MM</span>
      </div>

      <div className="hidden lg:block absolute top-24 right-16 z-20 font-mono text-[10px] text-[#181818]/40 tracking-wider text-right">
        <span>TITANIUM GR.5</span>
      </div>

      <div className="absolute top-1/2 left-16 z-20 font-mono text-[10px] text-[#181818]/40 tracking-wider -translate-y-1/2 hidden lg:block">
        <div>ASSEMBLÉ À</div>
        <div className="mt-1">Besançon</div>
      </div>

      <div className="absolute top-1/2 right-16 z-20 font-mono text-[10px] text-[#181818]/40 tracking-wider text-right -translate-y-1/2 hidden lg:block">
        <div>RÉSERVE DE MARCHE</div>
        <div className="mt-1">42H</div>
      </div>

      <div className="hidden lg:block absolute bottom-24 left-16 z-20 font-mono text-[10px] text-[#181818]/40 tracking-wider">
        <span>ÉTANCHÉITÉ</span>
        <span className="mx-2">·</span>
        <span>100M</span>
      </div>

      <div className="hidden lg:block absolute bottom-24 right-16 z-20 font-mono text-[10px] text-[#181818]/40 tracking-wider text-right">
        <span>REF. TLM-01</span>
      </div>

      {/* Image - Desktop: full cover, Mobile: centered full width */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-[62%] -translate-y-1/2 lg:translate-y-0 lg:top-0 lg:inset-0"
      >
        <img
          src="/montre2.png"
          alt="TOLEM Watch"
          className="w-full h-auto scale-[1.2] origin-center lg:h-full lg:scale-100 object-cover object-center"
        />
      </motion.div>

    </section>
  );
}
