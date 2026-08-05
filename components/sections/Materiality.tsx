"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";

export default function Materiality() {
  return (
    <Section className="border-b border-neutral-200 text-right">
      <motion.p
        className="ml-auto max-w-[42rem] text-h2 font-light italic leading-relaxed text-neutral-700 md:max-w-3xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        Luz natural. Texturas honestas. Materiales que envejecen con
        carácter. Cada elección responde a un propósito, nunca a una
        tendencia.
      </motion.p>
    </Section>
  );
}
