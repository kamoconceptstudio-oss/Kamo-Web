import type { Transition, Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUpTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};
