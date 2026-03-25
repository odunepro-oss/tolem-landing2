"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Newsletter() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const n = t.newsletter;

  return (
    <section
      id="newsletter"
      ref={containerRef}
      className="relative bg-[#F5F5F5] px-6 py-20 sm:px-8 lg:px-10 lg:py-[120px]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-8"
            >
              {n.kickstarterLabel}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title text-[#181818] mb-8"
            >
              {n.title1}
              <br />
              <span className="text-[#888888]">{n.title2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[14px] lg:text-[15px] text-[#666] leading-[1.8] max-w-[400px] mb-12"
            >
              {n.description}
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
                placeholder={n.emailPlaceholder}
                className="flex-1 bg-transparent border border-[#C8C8C8] px-5 py-4 text-[14px] text-[#181818] placeholder:text-[#999] focus:outline-none focus:border-[#181818] transition-colors"
              />
              <button className="bg-[#181818] text-white px-8 py-4 text-[12px] tracking-[0.1em] uppercase hover:bg-[#333] transition-colors">
                {n.subscribe}
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] text-[#999] mt-4"
            >
              {n.consent}
            </motion.p>
          </div>

          {/* Right - Stats & Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center gap-10"
          >
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">{n.editionLabel}</div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">{n.editionValue}</div>
                <div className="text-[12px] text-[#666] mt-1">{n.editionUnit}</div>
              </div>

              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">{n.retailLabel}</div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">{n.retailValue}</div>
                <div className="text-[12px] text-[#666] mt-1">{n.retailUnit}</div>
              </div>

              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">{n.deliveryLabel}</div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">{n.deliveryValue}</div>
                <div className="text-[12px] text-[#666] mt-1">{n.deliveryUnit}</div>
              </div>

              <div className="border-l border-[#C8C8C8] pl-6">
                <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-3">{n.warrantyLabel}</div>
                <div className="font-display text-[32px] lg:text-[42px] text-[#181818]">{n.warrantyValue}</div>
                <div className="text-[12px] text-[#666] mt-1">{n.warrantyUnit}</div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="border-t border-[#D8D8D8] pt-8">
              <div className="text-[11px] tracking-[0.12em] text-[#999] uppercase mb-5">{n.pricingTitle}</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#181818]">{n.superEarlyBird.label}</span>
                  <span className="font-display text-[18px] lg:text-[22px] text-[#181818]">{n.superEarlyBird.price}</span>
                </div>
                <div className="h-px bg-[#E8E8E8]" />
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#181818]">{n.earlyBird.label}</span>
                  <span className="font-display text-[18px] lg:text-[22px] text-[#181818]">{n.earlyBird.price}</span>
                </div>
                <div className="h-px bg-[#E8E8E8]" />
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#181818]">{n.kickstarterPrice.label}</span>
                  <span className="font-display text-[18px] lg:text-[22px] text-[#181818]">{n.kickstarterPrice.price}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
