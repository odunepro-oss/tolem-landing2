"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import DecryptText from "./DecryptText";
import { campaignStats } from "@/lib/landingContent";

export default function EarlyAccessButton() {
  const [open, setOpen] = useState(false);
  const [isHeroOffset, setIsHeroOffset] = useState(true);

  useEffect(() => {
    const updateButtonPosition = () => {
      const heroThreshold = window.innerHeight * 0.35;
      setIsHeroOffset(window.scrollY <= heroThreshold);
    };

    updateButtonPosition();
    window.addEventListener("scroll", updateButtonPosition, { passive: true });
    window.addEventListener("resize", updateButtonPosition);

    return () => {
      window.removeEventListener("scroll", updateButtonPosition);
      window.removeEventListener("resize", updateButtonPosition);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Bouton fixe en bas de l'écran */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          bottom: isHeroOffset ? 84 : 24,
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.9 },
          y: { duration: 0.8, delay: 0.9 },
          bottom: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        }}
        onClick={() => setOpen(true)}
        className="fixed left-1/2 z-50 w-[calc(100vw-2rem)] max-w-max -translate-x-1/2 bg-[#181818] px-6 py-4 text-center text-[11px] tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#333] sm:w-auto sm:max-w-[calc(100vw-3rem)]"
      >
        Accès en avant-première
      </motion.button>

      {/* Modale */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="early-access-title"
              className="fixed bottom-0 left-0 right-0 z-[70] bg-[#F5F5F5] max-h-[90vh] overflow-y-auto lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:w-full lg:max-w-[800px] lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-[#181818]/40 hover:text-[#181818] transition-colors text-lg"
              >
                ×
              </button>

              <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
                {/* Left - Content */}
                <div>
                  <div className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">
                    Kickstarter — Mars 2026
                  </div>

                  <h2 id="early-access-title" className="font-display text-[28px] lg:text-[38px] text-[#181818] leading-[1.1] mb-6">
                    <DecryptText text="Soyez les premiers" delay={100} speed={25} />
                    <br />
                    <span className="text-[#888]">
                      <DecryptText text="à découvrir TOLEM." delay={220} speed={25} />
                    </span>
                  </h2>

                  <p className="text-[13px] lg:text-[14px] text-[#666] leading-[1.8] mb-8 max-w-[360px]">
                    Inscrivez-vous pour recevoir un accès prioritaire à notre campagne Kickstarter et bénéficier d'un tarif exclusif réservé aux premiers soutiens.
                  </p>

                  {/* Email Input */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="flex-1 bg-transparent border border-[#C8C8C8] px-4 py-3 text-[13px] text-[#181818] placeholder:text-[#999] focus:outline-none focus:border-[#181818] transition-colors"
                    />
                    <button className="bg-[#181818] text-white px-6 py-3 text-[11px] tracking-[0.1em] uppercase hover:bg-[#333] transition-colors">
                      S'inscrire
                    </button>
                  </div>

                  <p className="text-[10px] text-[#999] mt-3">
                    En vous inscrivant, vous acceptez de recevoir nos communications.
                  </p>
                </div>

                {/* Right - Stats */}
                <div className="grid grid-cols-2 gap-6 content-center">
                  {[
                    { label: campaignStats.objectiveLabel, value: `${campaignStats.objectiveValue}+`, sub: campaignStats.objectiveUnit },
                    { label: campaignStats.discountLabel, value: campaignStats.discountValue, sub: campaignStats.discountUnit },
                    { label: campaignStats.deliveryLabel, value: campaignStats.deliveryValue, sub: campaignStats.deliveryUnit },
                    { label: campaignStats.warrantyLabel, value: campaignStats.warrantyValue, sub: campaignStats.warrantyUnit },
                  ].map((stat) => (
                    <div key={stat.label} className="border-l border-[#C8C8C8] pl-5">
                      <div className="text-[10px] tracking-[0.12em] text-[#999] uppercase mb-2">
                        {stat.label}
                      </div>
                      <div className="font-display text-[28px] lg:text-[36px] text-[#181818]">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#666] mt-0.5">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
