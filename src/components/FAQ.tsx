"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import DecryptText from "./DecryptText";

const faqs = [
  {
    question: "Qui est derrière TOLEM ?",
    answer:
      "TOLEM est née de la rencontre de deux héritages familiaux. Mon père travaille dans l'industrie depuis 40 ans, il fabrique des vannes haute pression. Mon grand-père était bijoutier, il a réalisé des pièces pour le roi du Maroc. J'ai voulu réunir ces deux mondes dans une montre.",
  },
  {
    question: "Où sont fabriquées vos montres ?",
    answer:
      "Chaque montre est conçue, assemblée et contrôlée en France, dans notre atelier de Besançon. Les composants d'habillage proviennent de Hong Kong, le cuir des bracelets vient d'Italie.",
  },
  {
    question: "Pourquoi passer par Kickstarter ?",
    answer:
      "Kickstarter nous permet de lancer la production sans intermédiaire et de proposer un prix juste aux premiers soutiens. C'est aussi une façon de construire une communauté dès le départ.",
  },
  {
    question: "Quelle est la garantie ?",
    answer:
      "Chaque montre TOLEM est accompagnée d'une garantie à vie sur le mouvement.",
  },
  {
    question: "Quand vais-je recevoir ma montre ?",
    answer: "Les premières livraisons sont prévues pour le Q4 2026.",
  },
];

export default function FAQ() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F5F5F5]"
      style={{ padding: "80px 40px" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-[28px] lg:text-[36px] text-[#181818] mb-16"
        >
          <DecryptText text="Questions fréquentes" delay={100} />
        </motion.h2>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              className="border-t border-[#D8D8D8]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-8 lg:py-10 text-left group"
              >
                <span className="font-display text-[16px] lg:text-[20px] text-[#181818] group-hover:text-[#555] transition-colors pr-8">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[#D8D8D8] text-[#181818] transition-all duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] lg:text-[15px] text-[#555] leading-[1.9] max-w-[680px] pb-10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-[#D8D8D8]" />
        </div>
      </div>
    </section>
  );
}
