"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";

const steps = [
  {
    number: "01",
    title: "Escucha",
    description:
      "Entendemos cómo vives, no solo cómo quieres que se vea tu casa.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Desarrollamos el proyecto con una metodología clara y documentada.",
  },
  {
    number: "03",
    title: "Materialización",
    description:
      "Acompañamos la ejecución en obra para que el diseño se cumpla sin desviaciones.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Un espacio terminado, coherente con la idea inicial y contigo.",
  },
];

export default function Methodology() {
  return (
    <Section id="proceso" surface="warm">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <h2 className="mb-xl text-h2 font-light">Metodología</h2>

        {/*
          Comportamiento responsive explícito:
          móvil = 1 columna apilada · tablet (md) = 2x2 · desktop (lg) = fila de 4
        */}
        <ol className="grid grid-cols-1 gap-lg md:grid-cols-2 md:gap-xl lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-xs border-t border-neutral-300 pt-lg"
            >
              <span className="text-small text-neutral-500">
                {step.number}
              </span>
              <h3 className="text-h3 font-normal">{step.title}</h3>
              <p className="text-body text-neutral-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
