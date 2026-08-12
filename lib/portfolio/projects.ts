import type { PortfolioProjectInput } from "./types";

// Contenido editorial curado a mano. "folder" es el codename interno del
// cliente: solo identifica la carpeta privada en assets-source/, nunca debe
// llegar a una URL publica (usar siempre "slug" para rutas/assets servidos).
// "title"/"summary"/"description" son textos provisionales y neutros, sin
// datos de cliente. Los `id` de imagen deben existir en
// manifest.generated.json (se valida en index.ts) y van prefijados con el
// slug del proyecto para no filtrar el codename en las URLs de imagen.
export const projects: PortfolioProjectInput[] = [
  {
    slug: "bano-cocina-contemporaneos",
    folder: "Thijs",
    title: "Baño y cocina en clave contemporánea",
    status: "completado",
    summary:
      "Baño y cocina de una vivienda de obra nueva, resueltos en tonos neutros con grifería en cobre y mobiliario a medida, documentados desde la ejecución hasta el resultado final.",
    description:
      "Baño y cocina de una vivienda de nueva construcción, resueltos con tonos neutros, grifería en cobre y mobiliario a medida. El seguimiento fotográfico recoge la ejecución, la propuesta de cocina y el resultado final del baño.",
    featured: true,
    coverImageId: "bano-cocina-contemporaneos-hero-bano",
    images: [
      {
        id: "bano-cocina-contemporaneos-hero-bano",
        alt: "Baño con doble lavabo sobre encimera, grifería en tono cobre, espejo ovalado retroiluminado y ducha con mampara de cristal.",
      },
      {
        id: "bano-cocina-contemporaneos-bano",
        alt: "Zona de ducha con grifería en tono cobre, inodoro suspendido y suelo en tono grafito.",
      },
      {
        id: "bano-cocina-contemporaneos-bano-general",
        alt: "Baño con mueble de lavabo blanco, espejo retroiluminado y ducha con doble alcachofa en tono cobre.",
      },
      {
        id: "bano-cocina-contemporaneos-cocina",
        alt: "Detalle de zona de fregadero en cocina, con grifería negra, encimera de mármol y horno integrado.",
      },
      {
        id: "bano-cocina-contemporaneos-detalle-espejo",
        alt: "Rincón de baño con espejo ovalado retroiluminado, mueble de lavabo compacto e inodoro suspendido.",
      },
      {
        id: "bano-cocina-contemporaneos-detalle-lavabo",
        alt: "Detalle de doble lavabo sobrepuesto en cerámica blanca con grifería empotrada en tono cobre.",
      },
      {
        id: "bano-cocina-contemporaneos-render-cocina-hero",
        alt: "Cocina en tonos beige con isla en mármol, mueble bodeguero integrado y taburetes tapizados.",
      },
      {
        id: "bano-cocina-contemporaneos-render-cocina-frontal",
        alt: "Vista frontal de cocina en tonos beige con isla central, placa de inducción y mueble bodeguero.",
      },
      {
        id: "bano-cocina-contemporaneos-render-cocina-lateral",
        alt: "Vista lateral de cocina en tonos beige con isla en mármol, ventanal y planta de interior.",
      },
      {
        id: "bano-cocina-contemporaneos-obra-bano-instalaciones",
        alt: "Baño en fase de obra con instalación eléctrica y de fontanería vista antes del alicatado final.",
      },
      {
        id: "bano-cocina-contemporaneos-obra-bano-revestimientos",
        alt: "Baño en fase de obra con alicatado parcial, canaleta de desagüe y materiales de construcción en el suelo.",
      },
      {
        id: "bano-cocina-contemporaneos-obra-cocina-mobiliario",
        alt: "Instalación de mobiliario de cocina en curso, con puertas protegidas y encimera pendiente de montaje.",
      },
      {
        id: "bano-cocina-contemporaneos-obra-cocina-montaje",
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
      "Cocina en mármol blanco veteado y madera clara, resuelta en una vivienda de obra nueva bajo una luz natural muy presente.",
    description:
      "Interiorismo de cocina protagonizado por una isla central en mármol blanco veteado, frentes en madera clara y electrodomésticos integrados en negro. Se completa con un baño en madera oscura y azulejo en relieve, resuelto con la misma sobriedad.",
    featured: true,
    coverImageId: "cocina-marmol-madera-clara-hero-cocina",
    images: [
      {
        id: "cocina-marmol-madera-clara-hero-cocina",
        alt: "Cocina con isla de mármol blanco veteado, mobiliario en madera clara y taburetes negros.",
      },
      {
        id: "cocina-marmol-madera-clara-cocina-isla",
        alt: "Isla de cocina en mármol blanco con placa de inducción, frigorífico integrado en negro y ventanal al jardín.",
      },
      {
        id: "cocina-marmol-madera-clara-bano-general",
        alt: "Baño con mueble de lavabo en madera oscura, espejo circular con marco negro y ducha con mampara de cristal.",
      },
      {
        id: "cocina-marmol-madera-clara-detalle-bano",
        alt: "Detalle de baño con mueble de lavabo en madera oscura, grifería negra y pared alicatada en espiga.",
      },
    ],
  },
  {
    slug: "bano-clave-contemporanea",
    folder: "Andres",
    title: "Baño en clave contemporánea",
    status: "concepto",
    summary:
      "Un baño donde la textura cerámica en espiga y la luz rasante son las verdaderas protagonistas.",
    description:
      "Concepto de baño construido en torno al revestimiento cerámico en espiga y una iluminación rasante que realza su relieve. El mueble de lavabo en madera y una paleta en tonos cálidos completan el conjunto.",
    featured: false,
    coverImageId: "bano-clave-contemporanea-render-bano-perspectiva",
    images: [
      {
        id: "bano-clave-contemporanea-render-bano-perspectiva",
        alt: "Vista general de baño con revestimiento cerámico en espiga, iluminación rasante, ducha, inodoro y mueble de lavabo en madera.",
      },
      {
        id: "bano-clave-contemporanea-render-bano-general",
        alt: "Baño con revestimiento cerámico en espiga, espejo redondo, mueble de lavabo en madera y ducha con mampara de cristal.",
      },
      {
        id: "bano-clave-contemporanea-render-bano-detalle",
        alt: "Detalle de mueble de lavabo en madera con espejo redondo, sobre pared con revestimiento cerámico en espiga.",
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
    coverImageId: "cocina-tonos-terracota-render-cocina-hero",
    images: [
      {
        id: "cocina-tonos-terracota-render-cocina-hero",
        alt: "Cocina en tonos tierra con mobiliario azul grisáceo, isla en piedra clara y celosía de madera junto al ventanal.",
      },
      {
        id: "cocina-tonos-terracota-render-cocina-frontal",
        alt: "Vista frontal de cocina con mobiliario azul grisáceo, campana integrada y encimera de piedra clara.",
      },
      {
        id: "cocina-tonos-terracota-render-cocina-lateral",
        alt: "Vista lateral de cocina con isla en piedra clara, taburetes de madera y frigorífico integrado en madera oscura.",
      },
      {
        id: "cocina-tonos-terracota-render-bano-hero",
        alt: "Ducha con mampara de cristal fijo, pared alicatada en terracota, grifería y alcachofa en negro.",
      },
      {
        id: "cocina-tonos-terracota-render-bano-general",
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
    coverImageId: "bano-en-ejecucion-obra-bano",
    images: [
      {
        id: "bano-en-ejecucion-obra-bano",
        alt: "Baño en fase de obra, con alicatado en curso, instalaciones vistas y plato de ducha colocado.",
      },
    ],
  },
];
