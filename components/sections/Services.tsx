"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";

const services = [
  {
    number: "01",
    title: "Diseño de interiores",
    description:
      "Proyectos residenciales pensados desde la vivencia del espacio, no solo desde la estética.",
  },
  {
    number: "02",
    title: "Reformas integrales",
    description:
      "Coordinación completa del proyecto, de la idea inicial a la última pieza de mobiliario.",
  },
  {
    number: "03",
    title: "Dirección de obra",
    description:
      "Seguimiento riguroso para que cada decisión de diseño se ejecute con precisión.",
  },
  {
    number: "04",
    title: "Selección de materiales",
    description: "Materialidad y luz como protagonistas de cada ambiente.",
  },
];

export default function Services() {
  return (
    <Section id="servicios" className="border-b border-neutral-200">
      <motion.div
        className="md:flex md:gap-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <h2 className="mb-lg text-h3 font-normal uppercase tracking-[0.15em] text-neutral-500 md:mb-0 md:w-40 md:flex-shrink-0">
          Servicios
        </h2>

        <div className="flex-1 space-y-lg">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex items-start gap-md border-t border-neutral-200 pt-md md:gap-lg"
            >
              <span className="text-numeral font-light leading-none tracking-tight text-neutral-200 md:text-display">
                {service.number}
              </span>
              <div className="pt-xs">
                <h3 className="mb-xs text-h3 font-normal">
                  {service.title}
                </h3>
                <p className="text-body text-neutral-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
