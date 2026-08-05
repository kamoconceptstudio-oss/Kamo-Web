"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import heroDesktop from "@/public/Assets/Hero/hero-desktop.webp";
import heroTablet from "@/public/Assets/Hero/hero-tablet.webp";
import heroMobile from "@/public/Assets/Hero/hero-mobile.webp";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";

const HERO_ALT =
  "Cocina contemporánea de Kamo Concept: isla de piedra natural, mobiliario en madera oscura y luz natural entrando por un gran ventanal.";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-neutral-200 lg:min-h-[calc(100dvh-var(--header-height))]"
    >
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 lg:h-[calc(100dvh-var(--header-height))] lg:grid-cols-[48%_52%] xl:grid-cols-[45%_55%] 2xl:grid-cols-[42%_58%]">
        <motion.div
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="order-2 flex flex-col justify-center px-sm py-xl md:px-lg lg:order-1 lg:justify-center lg:pt-[1rem] lg:pb-[9rem]"
        >
          <p className="mb-lg text-small uppercase tracking-[0.2em] text-neutral-500">
            Estudio de interiorismo residencial · Barcelona
          </p>
          <h1
            id="hero-heading"
            className="text-[2.5rem] font-light leading-[0.95] tracking-tight lg:text-[3.25rem] xl:text-[4.25rem] 2xl:text-[5rem]"
          >
            Espacios con carácter, pensados para quienes los habitan.
          </h1>
          <p className="mt-lg max-w-[32rem] text-body text-neutral-600">
            Interiorismo residencial contemporáneo, desde la idea hasta el
            último detalle.
          </p>
          <div className="mt-md">
            <Button variant="primary">Reservar consulta</Button>
          </div>
        </motion.div>

        <figure className="relative order-1 aspect-[4/5] w-full overflow-hidden md:aspect-[4/3] lg:order-2 lg:aspect-auto lg:h-full">
          {/*
            Arte dirigido nativo (picture + source): cada breakpoint carga
            únicamente su propio crop, sin descargar los otros. El asset
            Mobile es un retrato muy alto (853x1844); mostrarlo entero
            dejaba la imagen ocupando casi el 100% del primer viewport sin
            texto visible, así que se recorta a 4:5 con el foco en la
            franja isla/jarrón/colgantes/ventana (se prioriza sobre techo y
            suelo). El crop Tablet viene ya compuesto en 4:3 por el
            estudio, centrado. El crop Desktop usa object-position 30/55
            para priorizar la isla y recortar el frigorífico.
          */}
          <picture>
            <source media="(min-width: 1024px)" srcSet={heroDesktop.src} />
            <source media="(min-width: 768px)" srcSet={heroTablet.src} />
            <img
              src={heroMobile.src}
              alt={HERO_ALT}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[50%_25%] md:object-center lg:object-[30%_55%]"
            />
          </picture>
        </figure>
      </div>
    </section>
  );
}
