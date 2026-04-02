"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";
import { useLanguage } from "@/lib/LanguageContext";

const footerHrefs = {
  collection: ["#manifeste", "#savoirfaire", "#ressources"],
  maison: ["#manifeste", "#newsletter", "#faq"],
  service: ["#newsletter", "#newsletter", "mailto:maxime@tolemwatch.com"],
};

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#0A0A0A] overflow-hidden"
      style={{ padding: "80px 24px 220px" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#222]">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-[48px] lg:text-[64px] text-white leading-[0.9] mb-6">
              <DecryptText text="Tolem" delay={100} speed={50} />
            </h2>
            <p className="text-[13px] text-[#666] leading-[1.8] max-w-[300px]">{f.tagline}</p>
          </motion.div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">{f.collectionTitle}</h3>
              <ul className="space-y-3">
                {f.collection.map((label, i) => (
                  <li key={label}>
                    <a href={footerHrefs.collection[i]} className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">{label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">{f.maisonTitle}</h3>
              <ul className="space-y-3">
                {f.maison.map((label, i) => (
                  <li key={label}>
                    <a href={footerHrefs.maison[i]} className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">{label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">{f.serviceTitle}</h3>
              <ul className="space-y-3">
                {f.service.map((label, i) => (
                  <li key={label}>
                    <a href={footerHrefs.service[i]} className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">{label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            <span className="text-[11px] tracking-[0.1em] text-[#444]">© 2026 TOLEM</span>
            <span className="text-[11px] tracking-[0.1em] text-[#444]">Paris, France</span>
            <span className="text-[11px] tracking-[0.1em] text-[#444]">{f.copyright}</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <span className="text-[11px] tracking-[0.1em] text-[#555] hover:text-white transition-colors cursor-pointer">Instagram</span>
            <a
              href="https://www.linkedin.com/company/tolemwatches/"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] tracking-[0.1em] text-[#555] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[11px] tracking-[0.1em] text-[#555] hover:text-white transition-colors cursor-pointer">Newsletter</span>
          </div>
        </motion.div>

        {/* Giant Watermark */}
        <div
          className="absolute left-0 right-0 overflow-hidden pointer-events-none px-6 lg:px-10 bottom-0 lg:-bottom-5"
        >
          <img
            src="/tolem-wordmark.svg"
            alt="TOLEM"
            className="w-full h-auto invert"
          />
        </div>
      </div>
    </footer>
  );
}
