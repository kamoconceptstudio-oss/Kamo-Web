"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpTransition } from "@/lib/motion";
import Section from "../layout/Section";
import ProjectCard from "../portfolio/ProjectCard";
import { getFeaturedProjects } from "@/lib/portfolio";

export default function FeaturedProject() {
  const projects = getFeaturedProjects();

  return (
    <Section id="portfolio" className="border-b border-neutral-200">
      <motion.div
        className="md:flex md:gap-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={fadeInUpTransition}
      >
        <h2 className="mb-lg text-h3 font-normal uppercase tracking-[0.15em] text-neutral-500 md:mb-0 md:w-40 md:flex-shrink-0">
          Portfolio
        </h2>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-xl border-t border-neutral-200 pt-lg sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link
            href="/portfolio"
            className="mt-lg inline-block text-small uppercase tracking-[0.15em] text-neutral-500 hover:text-neutral-900"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
