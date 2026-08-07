"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";
import Button from "../ui/Button";

export default function Cta() {
  return (
    <Section id="contacto" width="wide" surface="contrast" className="text-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <h2 className="mb-md text-h1 font-light leading-tight">
          Hablemos de tu proyecto
        </h2>
        <p className="mx-auto mb-lg max-w-[28rem] text-body text-neutral-600">
          Cuéntanos cómo quieres vivir tu espacio y te acompañamos desde la
          primera idea.
        </p>
        <Button variant="primary" className="px-xl py-sm text-h3">
          Reservar consulta
        </Button>
      </motion.div>
    </Section>
  );
}
