"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";

export default function FeaturedProject() {
  return (
    <Section className="border-b border-neutral-200">
      <motion.div
        className="mx-auto max-w-3xl border-y border-neutral-200 px-xl py-2xl text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <p className="mb-sm text-small uppercase tracking-[0.2em] text-neutral-500">
          Proyecto destacado
        </p>
        <h2 className="mb-sm text-h2 font-light">Próximamente</h2>
        <p className="text-body text-neutral-600">
          Estamos documentando nuestro primer proyecto residencial para
          mostrarlo aquí con el nivel de detalle que merece.
        </p>
      </motion.div>
    </Section>
  );
}
