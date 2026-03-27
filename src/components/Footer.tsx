"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";

const footerLinks = {
  collection: [
    { label: "Manifeste", href: "#manifeste" },
    { label: "Savoir-faire", href: "#savoirfaire" },
    { label: "Ressources", href: "#ressources" },
  ],
  maison: [
    { label: "Pourquoi TOLEM", href: "#manifeste" },
    { label: "Notre promesse", href: "#newsletter" },
    { label: "FAQ", href: "#faq" },
  ],
  service: [
    { label: "Accès prioritaire", href: "#newsletter" },
    { label: "Kickstarter", href: "#newsletter" },
    { label: "Contact", href: "mailto:contact@tolem.fr" },
  ],
};

export default function Footer() {
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
            <p className="text-[13px] text-[#666] leading-[1.8] max-w-[300px]">Nous ne cherchons pas la perfection. Nous l'exigeons.</p>
          </motion.div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">Collection</h3>
              <ul className="space-y-3">
                {footerLinks.collection.map((link, i) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">{link.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">La Maison</h3>
              <ul className="space-y-3">
                {footerLinks.maison.map((link, i) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">{link.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">Service</h3>
              <ul className="space-y-3">
                {footerLinks.service.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">{link.label}</a>
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
            <span className="text-[11px] tracking-[0.1em] text-[#444]">Besançon, France</span>
            <span className="text-[11px] tracking-[0.1em] text-[#444]">Horlogerie Française</span>
          </div>

          <div className="flex items-center gap-8">
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
          className="absolute left-0 right-0 overflow-hidden pointer-events-none px-6 lg:px-10"
          style={{ bottom: '-20px' }}
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
