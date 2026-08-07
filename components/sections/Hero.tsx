"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import heroDesktop from "@/public/Assets/Hero/hero-desktop.webp";
import heroDesktopAvif from "@/public/Assets/Hero/hero-desktop.avif";
import heroTablet from "@/public/Assets/Hero/hero-tablet.webp";
import heroTabletAvif from "@/public/Assets/Hero/hero-tablet.avif";
import heroMobile from "@/public/Assets/Hero/hero-mobile.webp";
import heroMobileAvif from "@/public/Assets/Hero/hero-mobile.avif";
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
            únicamente su propio crop, en AVIF con fallback a WebP, sin
            descargar los otros. Los tres crops (desktop 1535x1024, tablet
            1365x1024 4:3, mobile 819x1024 4:5) se derivan de la misma
            fuente editorial, centrados en la franja isla/jarrón/colgantes/
            ventana. El crop Mobile ya viene recortado a 4:5, por lo que el
            object-position solo actúa como red de seguridad. El crop
            Desktop usa object-position 30/55 para priorizar la isla y
            recortar el frigorífico cuando el contenedor es más estrecho
            que la imagen.
          */}
          <picture>
            <source
              media="(min-width: 1024px)"
              type="image/avif"
              srcSet={heroDesktopAvif.src}
            />
            <source
              media="(min-width: 1024px)"
              type="image/webp"
              srcSet={heroDesktop.src}
            />
            <source
              media="(min-width: 768px)"
              type="image/avif"
              srcSet={heroTabletAvif.src}
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet={heroTablet.src}
            />
            <source type="image/avif" srcSet={heroMobileAvif.src} />
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
