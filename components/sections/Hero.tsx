"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import heroDesktop from "@/public/Assets/Hero/hero-desktop.webp";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";

/**
 * Punto focal fijado a partir del análisis del asset Desktop real:
 * conserva el destello de luz natural de la puerta, la isla con el
 * jarrón y el primer punto de luz colgante; recorta el frigorífico.
 * Único valor hasta disponer de crops dedicados por breakpoint.
 */
const HERO_IMAGE_OBJECT_POSITION = "30% 55%";

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

        <figure className="relative order-1 aspect-[4/3] w-full lg:order-2 lg:aspect-auto lg:h-full">
          <Image
            src={heroDesktop}
            alt="Cocina contemporánea de Kamo Concept: isla de piedra natural, mobiliario en madera oscura y luz natural entrando por un gran ventanal."
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1536px) 60vw, (min-width: 1280px) 58vw, (min-width: 1024px) 55vw, 100vw"
            style={{ objectFit: "cover", objectPosition: HERO_IMAGE_OBJECT_POSITION }}
          />
        </figure>
      </div>
    </section>
  );
}
