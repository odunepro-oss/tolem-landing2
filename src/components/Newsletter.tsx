"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";

export default function Newsletter() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="newsletter"
      ref={containerRef}
      className="relative bg-[#F5F5F5]"
      style={{ padding: "120px 40px" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-8"
            >
              <DecryptText text="Kickstarter — Mars 2026" delay={100} speed={20} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title text-[#181818] mb-8"
            >
              <DecryptText text="Soyez les premiers" delay={200} speed={25} />
              <br />
              <span className="text-[#888888]">
                <DecryptText text="à découvrir TOLEM." delay={350} speed={25} />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[14px] lg:text-[15px] text-[#666] leading-[1.8] max-w-[400px] mb-12"
            >
              <DecryptText
                text="Inscrivez-vous pour recevoir un accès prioritaire à notre campagne Kickstarter et bénéficier d'un tarif exclusif réservé aux premiers soutiens."
                delay={400}
                speed={1}
              />
            </motion.p>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-transparent border border-[#C8C8C8] px-5 py-4 text-[14px] text-[#181818] placeholder:text-[#999] focus:outline-none focus:border-[#181818] transition-colors"
              />
              <button className="bg-[#181818] text-white px-8 py-4 text-[12px] tracking-[0.1em] uppercase hover:bg-[#333] transition-colors">
                <DecryptText text="S'inscrire" delay={500} speed={30} />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] text-[#999] mt-4"
            >
              <DecryptText text="En vous inscrivant, vous acceptez de recevoir nos communications." delay={600} speed={2} />
            </motion.p>
          </div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">
                  <DecryptText text="Objectif" delay={500} speed={30} />
                </div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818] flex items-center gap-1.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="h-[14px] w-[14px] lg:h-[18px] lg:w-[18px] shrink-0"
                  >
                    <line x1="6" y1="1.5" x2="6" y2="10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    <line x1="1.5" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                  <DecryptText text="300" delay={600} speed={40} />
                </div>
                <div className="text-[12px] text-[#666] mt-1">
                  <DecryptText text="pièces" delay={650} speed={30} />
                </div>
              </div>

              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">
                  <DecryptText text="Remise" delay={550} speed={30} />
                </div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">
                  <DecryptText text="-33%" delay={650} speed={40} />
                </div>
                <div className="text-[12px] text-[#666] mt-1">
                  <DecryptText text="pour les 100 premiers" delay={700} speed={2} />
                </div>
              </div>

              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">
                  <DecryptText text="Livraison" delay={600} speed={30} />
                </div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">
                  <DecryptText text="3M" delay={700} speed={40} />
                </div>
                <div className="text-[12px] text-[#666] mt-1">
                  <DecryptText text="2026" delay={750} speed={30} />
                </div>
              </div>

              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">
                  <DecryptText text="Garantie" delay={650} speed={30} />
                </div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">
                  <DecryptText text="∞" delay={750} speed={40} />
                </div>
                <div className="text-[12px] text-[#666] mt-1">
                  <DecryptText text="à vie" delay={800} speed={30} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
