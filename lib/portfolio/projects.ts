import type { PortfolioProjectInput } from "./types";

// Contenido editorial curado a mano. "folder" es el nombre real de carpeta en
// disco (codename interno, nunca se muestra); "title"/"summary"/"description"
// son textos provisionales y neutros, sin datos de cliente. Los `id` de
// imagen deben existir en manifest.generated.json (se valida en index.ts).
export const projects: PortfolioProjectInput[] = [
  {
    slug: "bano-cocina-contemporaneos",
    folder: "Thijs",
    title: "Baño y cocina en clave contemporánea",
    status: "completado",
    summary:
      "Reforma integral de baño y cocina, documentada desde la fase de obra hasta el resultado final.",
    description:
      "Proyecto de reforma que abarca baño y cocina, con acabados en tonos neutros, grifería en tono cobre y mobiliario a medida. Se documenta el proceso completo: ejecución en obra, propuesta de cocina y fotografía final del baño.",
    featured: true,
    coverImageId: "thijs-hero-bano",
    images: [
      {
        id: "thijs-hero-bano",
        alt: "Baño con doble lavabo sobre encimera, grifería en tono cobre, espejo ovalado retroiluminado y ducha con mampara de cristal.",
      },
      {
        id: "thijs-bano",
        alt: "Zona de ducha con grifería en tono cobre, inodoro suspendido y suelo en tono grafito.",
      },
      {
        id: "thijs-bano-general",
        alt: "Baño con mueble de lavabo blanco, espejo retroiluminado y ducha con doble alcachofa en tono cobre.",
      },
      {
        id: "thijs-cocina",
        alt: "Detalle de zona de fregadero en cocina, con grifería negra, encimera de mármol y horno integrado.",
      },
      {
        id: "thijs-detalle-espejo",
        alt: "Rincón de baño con espejo ovalado retroiluminado, mueble de lavabo compacto e inodoro suspendido.",
      },
      {
        id: "thijs-detalle-lavabo",
        alt: "Detalle de doble lavabo sobrepuesto en cerámica blanca con grifería empotrada en tono cobre.",
      },
      {
        id: "thijs-render-cocina-hero",
        alt: "Cocina en tonos beige con isla en mármol, mueble bodeguero integrado y taburetes tapizados.",
      },
      {
        id: "thijs-render-cocina-frontal",
        alt: "Vista frontal de cocina en tonos beige con isla central, placa de inducción y mueble bodeguero.",
      },
      {
        id: "thijs-render-cocina-lateral",
        alt: "Vista lateral de cocina en tonos beige con isla en mármol, ventanal y planta de interior.",
      },
      {
        id: "thijs-obra-bano-instalaciones",
        alt: "Baño en fase de obra con instalación eléctrica y de fontanería vista antes del alicatado final.",
      },
      {
        id: "thijs-obra-bano-revestimientos",
        alt: "Baño en fase de obra con alicatado parcial, canaleta de desagüe y materiales de construcción en el suelo.",
      },
      {
        id: "thijs-obra-cocina-mobiliario",
        alt: "Instalación de mobiliario de cocina en curso, con puertas protegidas y encimera pendiente de montaje.",
      },
      {
        id: "thijs-obra-cocina-montaje",
        alt: "Montaje de mobiliario de cocina en curso, con módulos superiores colocados y material de instalación en la encimera.",
      },
    ],
  },
  {
    slug: "cocina-marmol-madera-clara",
    folder: "Julian",
    title: "Cocina en mármol y madera clara",
    status: "completado",
    summary:
      "Reforma de cocina con isla en mármol y mobiliario en madera clara, luz natural y acabados integrados.",
    description:
      "Cocina reformada con isla central en mármol blanco veteado, frentes en madera clara y electrodomésticos integrados en negro. El baño asociado combina mueble de lavabo en madera oscura con azulejo en relieve.",
    featured: true,
    coverImageId: "julian-hero-cocina",
    images: [
      {
        id: "julian-hero-cocina",
        alt: "Cocina con isla de mármol blanco veteado, mobiliario en madera clara y taburetes negros.",
      },
      {
        id: "julian-cocina-isla",
        alt: "Isla de cocina en mármol blanco con placa de inducción, frigorífico integrado en negro y ventanal al jardín.",
      },
      {
        id: "julian-bano-general",
        alt: "Baño con mueble de lavabo en madera oscura, espejo circular con marco negro y ducha con mampara de cristal.",
      },
      {
        id: "julian-detalle-bano",
        alt: "Detalle de baño con mueble de lavabo en madera oscura, grifería negra y pared alicatada en espiga.",
      },
    ],
  },
  {
    slug: "cocina-bano-tonos-calidos",
    folder: "Andres",
    title: "Cocina y baño en tonos cálidos",
    status: "concepto",
    summary:
      "Propuesta de cocina y baño con materiales cálidos: madera, piedra natural y acabados en terracota.",
    description:
      "Propuesta de diseño para cocina y baño con isla en madera oscura, encimera de piedra y detalles en terracota. El baño se presenta con dos alternativas de acabado en grifería, dorada y negra, sobre la misma distribución.",
    featured: false,
    coverImageId: "andres-render-bano-detalle",
    images: [
      {
        id: "andres-render-cocina-hero",
        alt: "Cocina en tonos cálidos con isla en madera oscura, encimera negra y hueco decorativo en terracota.",
      },
      {
        id: "andres-render-bano-detalle",
        alt: "Baño con espejo redondo de marco dorado, mueble de lavabo en madera y grifería dorada.",
      },
      {
        id: "andres-render-bano-general",
        alt: "Baño con espejo redondo de marco negro, mueble de lavabo en madera y grifería negra, ducha con mampara de cristal.",
      },
      {
        id: "andres-render-bano-perspectiva",
        alt: "Vista general de baño con ducha, inodoro, mueble de lavabo en madera y nicho alicatado en verde.",
      },
    ],
  },
  {
    slug: "cocina-tonos-terracota",
    folder: "Sjors",
    title: "Cocina en tonos terracota",
    status: "concepto",
    summary:
      "Propuesta de cocina en tonos terracota, con mobiliario en azul grisáceo y piedra natural.",
    description:
      "Propuesta de cocina con mobiliario en azul grisáceo, encimera e isla en piedra natural clara y pared de fondo en tono terracota, con celosía de madera como elemento divisorio. Incluye una propuesta de baño con los mismos tonos cálidos.",
    featured: false,
    coverImageId: "sjors-render-cocina-hero",
    images: [
      {
        id: "sjors-render-cocina-hero",
        alt: "Cocina en tonos tierra con mobiliario azul grisáceo, isla en piedra clara y celosía de madera junto al ventanal.",
      },
      {
        id: "sjors-render-cocina-frontal",
        alt: "Vista frontal de cocina con mobiliario azul grisáceo, campana integrada y encimera de piedra clara.",
      },
      {
        id: "sjors-render-cocina-lateral",
        alt: "Vista lateral de cocina con isla en piedra clara, taburetes de madera y frigorífico integrado en madera oscura.",
      },
      {
        id: "sjor-render-bano-hero",
        alt: "Ducha con mampara de cristal fijo, pared alicatada en terracota, grifería y alcachofa en negro.",
      },
      {
        id: "sjors-render-bano-general",
        alt: "Baño con lavabo de sobre en terracota, mueble a juego y grifería negra empotrada.",
      },
    ],
  },
  {
    slug: "bano-en-ejecucion",
    folder: "Mikaely",
    title: "Baño en proceso de ejecución",
    status: "en-obra",
    summary:
      "Proyecto de baño actualmente en fase de ejecución, con revestimiento cerámico e instalaciones en curso.",
    description:
      "Proyecto de baño actualmente en obra, con el alicatado en curso y las instalaciones eléctricas y de fontanería vistas antes del acabado final.",
    featured: false,
    coverImageId: "mikaely-obra-bano",
    images: [
      {
        id: "mikaely-obra-bano",
        alt: "Baño en fase de obra, con alicatado en curso, instalaciones vistas y plato de ducha colocado.",
      },
    ],
  },
];
