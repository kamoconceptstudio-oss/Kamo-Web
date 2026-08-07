"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";

export default function Manifesto() {
  return (
    <Section className="border-b border-neutral-200">
      <div className="md:flex md:gap-2xl">
        <div aria-hidden="true" className="md:w-40 md:flex-shrink-0" />
        <motion.p
          className="max-w-3xl text-h2 font-light leading-relaxed tracking-tight text-neutral-800"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeInUpTransition}
        >
          Diseñamos viviendas donde cada espacio refleja la personalidad de
          quienes lo habitan. Combinamos creatividad, funcionalidad y una
          selección cuidada de materiales con una metodología de trabajo
          organizada y transparente.
        </motion.p>
      </div>
    </Section>
  );
}
