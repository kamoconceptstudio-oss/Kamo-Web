@AGENTS.md

# Kamo Concept — Contexto del proyecto

Kamo Concept es un estudio de interiorismo residencial contemporáneo con
base en Barcelona, que desarrolla proyectos tanto presenciales como a
distancia para clientes de cualquier lugar. Esta web es su principal
herramienta comercial y de posicionamiento — no una landing genérica ni
una plantilla.

**Identidad**: elegancia, materialidad, luz, calma, precisión, calidad.
Contemporáneo con carácter, base visual neutra; nunca "tech" ni ostentoso.

**Prioridades, en este orden**: experiencia de usuario > diseño >
rendimiento > SEO > código. Nunca sacrificar diseño por velocidad de
entrega.

**Stack**: Next.js (App Router) + TypeScript + Tailwind CSS 4 (tokens en
`app/globals.css`, sin `tailwind.config.js`) + Framer Motion.

**Reglas de trabajo**:
- Trabajar por fases, una fase cerrada antes de empezar la siguiente
  (ver `docs/prompt_maestro.md.docx`).
- Componentes reutilizables, arquitectura escalable, código limpio.
- No improvisar decisiones de marca: si hay duda de diseño o alcance,
  preguntar antes de implementar.
- Enfoque iterativo: la documentación evoluciona junto con el código;
  no bloquear el desarrollo para completar documentación exhaustiva.

**Fuente de verdad ampliada**: `docs/` (readme, claude, contecto,
prompt_maestro, todo, changelog — en formato `.docx`).
