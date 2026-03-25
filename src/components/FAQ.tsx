"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <h2 className="section-title text-[#181818] mb-6">{t.faq.title}</h2>
          <p className="text-[15px] text-[#181818] leading-[1.6] mb-10">{t.faq.subtitle}</p>
          <a
            href="mailto:maxime@tolemwatch.com"
            className="inline-block border border-[#181818] text-[#181818] text-[11px] tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#181818] hover:text-white transition-colors duration-200"
          >
            {t.faq.contact}
          </a>
        </div>

        {/* Right */}
        <div>
          {t.faq.items.map((faq, i) => (
            <div key={i} className="border-t border-[#E8E8E8]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex justify-between items-baseline py-5 text-left gap-8"
              >
                <span className="text-[14px] text-[#181818]">{faq.question}</span>
                <span className="text-[#181818] text-[18px] font-light shrink-0 leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  gridTemplateRows: open === i ? "1fr" : "0fr",
                  opacity: open === i ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid"
                id={`faq-panel-${i}`}
              >
                <div className="overflow-hidden">
                  <motion.p
                    initial={false}
                    animate={{ y: open === i ? 0 : -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="pb-5 text-[13px] leading-[1.8] text-[#181818]/50"
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            </div>
          ))}
          <div className="border-t border-[#E8E8E8]" />
        </div>
      </div>
    </section>
  );
}
