"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";

export default function FeaturedProject() {
  return (
    <Section id="portfolio" className="border-b border-neutral-200">
      <motion.div
        className="md:flex md:gap-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <h2 className="mb-lg text-h3 font-normal uppercase tracking-[0.15em] text-neutral-500 md:mb-0 md:w-40 md:flex-shrink-0">
          Portfolio
        </h2>

        <div className="flex-1">
          <div className="flex items-start gap-md border-t border-neutral-200 pt-md md:gap-lg">
            <span className="text-numeral font-light leading-none tracking-tight text-neutral-200 md:text-display">
              01
            </span>
            <div className="pt-xs">
              <p className="mb-xs text-small uppercase tracking-[0.2em] text-neutral-500">
                Proyecto destacado
              </p>
              <h3 className="mb-xs text-h3 font-normal">Próximamente</h3>
              <p className="max-w-[36rem] text-body text-neutral-600">
                Estamos documentando nuestro primer proyecto residencial
                para mostrarlo aquí con el nivel de detalle que merece.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
