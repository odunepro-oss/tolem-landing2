"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import DecryptText from "./DecryptText";

export default function EarlyAccessButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bouton fixe en bas de l'écran */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#181818] text-white px-8 py-4 text-[11px] tracking-[0.15em] uppercase hover:bg-[#333] transition-colors whitespace-nowrap"
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
              className="fixed bottom-0 left-0 right-0 lg:bottom-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:max-w-[800px] lg:w-full z-[70] bg-[#F5F5F5]"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-[#181818]/40 hover:text-[#181818] transition-colors text-lg"
              >
                ×
              </button>

              <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left - Content */}
                <div>
                  <div className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">
                    <DecryptText text="Kickstarter — Mars 2026" delay={50} speed={20} />
                  </div>

                  <h2 className="font-display text-[28px] lg:text-[38px] text-[#181818] leading-[1.1] mb-6">
                    <DecryptText text="Soyez les premiers" delay={100} speed={25} />
                    <br />
                    <span className="text-[#888]">
                      <DecryptText text="à découvrir TOLEM." delay={220} speed={25} />
                    </span>
                  </h2>

                  <p className="text-[13px] lg:text-[14px] text-[#666] leading-[1.8] mb-8 max-w-[360px]">
                    <DecryptText
                      text="Inscrivez-vous pour recevoir un accès prioritaire à notre campagne Kickstarter et bénéficier d'un tarif exclusif réservé aux premiers soutiens."
                      delay={300}
                      speed={1}
                    />
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
                    { label: "Objectif", value: "500", sub: "pièces" },
                    { label: "Early Bird", value: "-30%", sub: "pour les 100 premiers" },
                    { label: "Livraison", value: "Q4", sub: "2026" },
                    { label: "Garantie", value: "∞", sub: "à vie" },
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
