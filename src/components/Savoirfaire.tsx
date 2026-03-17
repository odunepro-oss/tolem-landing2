"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";

export default function Savoirfaire() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="savoirfaire"
      ref={containerRef}
      className="relative min-h-screen bg-[#F5F5F5]"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="space-y-8 lg:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-[12px] lg:text-[14px] text-[#181818]">
              <DecryptText text="Savoir-faire" delay={100} speed={30} />
            </span>
            <span className="text-[10px] lg:text-[11px] text-[#888] align-super">
              <DecryptText text="(02)" delay={150} speed={30} />
            </span>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-end lg:gap-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title text-[#181818]"
            >
              <DecryptText text="Précision Horlogère." delay={200} />
              <br />
              <DecryptText text="Excellence Française." delay={400} />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[340px] text-[13px] lg:text-[14px] text-[#555] leading-[1.7]"
            >
              <DecryptText
                text="Chaque garde-temps TOLEM est assemblé à la main dans notre atelier de Besançon, perpétuant un savoir-faire horloger français séculaire."
                delay={500}
                speed={1}
              />
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="my-10 py-8 lg:my-14 lg:py-10"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-end lg:gap-10">
            <div>
              <div className="text-[10px] tracking-[0.12em] text-[#888] uppercase mb-1">
                <DecryptText text="Étanchéité" delay={600} speed={30} />
              </div>
              <div className="text-[24px] lg:text-[28px] text-[#181818] font-display tracking-[-0.03em]">
                <DecryptText text="100M" delay={700} speed={30} />
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.12em] text-[#888] uppercase mb-1">
                <DecryptText text="Assemblé à" delay={650} speed={30} />
              </div>
              <div className="text-[24px] lg:text-[28px] text-[#181818] font-display tracking-[-0.03em]">
                <DecryptText text="Besançon" delay={750} speed={30} />
              </div>
            </div>

            <div>
              <div className="text-[10px] tracking-[0.12em] text-[#888] uppercase mb-1">
                <DecryptText text="Réserve de marche" delay={700} speed={30} />
              </div>
              <div className="text-[24px] lg:text-[28px] text-[#181818] font-display tracking-[-0.03em]">
                <DecryptText text="72H" delay={800} speed={30} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-[720px] text-[14px] lg:text-[15px] text-[#181818] leading-[1.85] text-left"
        >
          <DecryptText
            text="TOLEM incarne la convergence de deux héritages : l'excellence joaillière et l'ingénierie industrielle. Chaque mouvement est conçu, assemblé et contrôlé selon les standards les plus exigeants de l'horlogerie contemporaine."
            delay={900}
            speed={1}
          />
        </motion.p>
      </div>
    </section>
  );
}
