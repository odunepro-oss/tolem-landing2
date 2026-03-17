"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Qui est derrière TOLEM ?",
    answer: "TOLEM est née de la rencontre de deux héritages familiaux. Mon père travaille dans l'industrie depuis 40 ans, il fabrique des vannes haute pression. Mon grand-père était bijoutier, il a réalisé des pièces pour le roi du Maroc. J'ai voulu réunir ces deux mondes dans une montre.",
  },
  {
    question: "Où sont fabriquées vos montres ?",
    answer: "Chaque montre est conçue, assemblée et contrôlée en France, dans notre atelier de Besançon. Les composants d'habillage proviennent de Hong Kong, le cuir des bracelets vient d'Italie.",
  },
  {
    question: "Pourquoi passer par Kickstarter ?",
    answer: "Kickstarter nous permet de lancer la production sans intermédiaire et de proposer un prix juste aux premiers soutiens. C'est aussi une façon de construire une communauté dès le départ.",
  },
  {
    question: "Quelle est la garantie ?",
    answer: "Chaque montre TOLEM est accompagnée d'une garantie à vie sur le mouvement.",
  },
  {
    question: "Quand vais-je recevoir ma montre ?",
    answer: "Les premières livraisons sont prévues pour le Q4 2026.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 lg:px-16 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

        {/* Left */}
        <div>
          <p className="text-[11px] tracking-[0.2em] text-[#181818]/40 uppercase mb-6">FAQ</p>
          <p className="text-[15px] text-[#181818] leading-[1.6] mb-10">
            Les questions les plus fréquentes sur TOLEM, nos montres et notre campagne Kickstarter.
          </p>
          <a
            href="mailto:contact@tolem.fr"
            className="inline-block border border-[#181818] text-[#181818] text-[11px] tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#181818] hover:text-white transition-colors duration-200"
          >
            Nous contacter
          </a>
        </div>

        {/* Right */}
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-[#E8E8E8]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-baseline py-5 text-left gap-8"
              >
                <span className="text-[14px] text-[#181818]">{faq.question}</span>
                <span className="text-[#181818] text-[18px] font-light shrink-0 leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden text-[13px] text-[#181818]/50 leading-[1.8] pb-5"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-[#E8E8E8]" />
        </div>

      </div>
    </section>
  );
}
