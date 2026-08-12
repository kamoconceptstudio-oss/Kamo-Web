"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";
import ContactForm from "../contact/ContactForm";
import { CONTACT_WHATSAPP } from "@/lib/site";

function getWhatsAppHref() {
  const number = CONTACT_WHATSAPP.replace(/^\+/, "");
  const text = encodeURIComponent(
    "Hola Kamo Concept, me gustaría más información sobre un proyecto."
  );
  return `https://wa.me/${number}?text=${text}`;
}

export default function Cta() {
  return (
    <Section id="contacto" width="wide" surface="contrast">
      <motion.div
        className="md:flex md:gap-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <div className="md:w-2/5 md:flex-shrink-0">
          <h2 className="mb-md text-h1 font-light leading-tight">
            Hablemos de tu proyecto
          </h2>
          <p className="max-w-[28rem] text-body text-neutral-600">
            Cuéntanos cómo quieres vivir tu espacio y te acompañamos desde la
            primera idea. Trabajamos tanto de forma presencial como a
            distancia, adaptándonos al lugar y a las necesidades de cada
            cliente.
          </p>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-sm inline-block text-small uppercase tracking-[0.15em] text-neutral-500 hover:text-neutral-900"
          >
            Escríbenos por WhatsApp →
          </a>
        </div>

        <div className="mt-xl flex-1 md:mt-md">
          <ContactForm />
        </div>
      </motion.div>
    </Section>
  );
}
