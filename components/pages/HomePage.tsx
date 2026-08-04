import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Services from "../sections/Services";
import Methodology from "../sections/Methodology";
import Materiality from "../sections/Materiality";
import FeaturedProject from "../sections/FeaturedProject";
import Cta from "../sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <Methodology />
      <Materiality />
      <FeaturedProject />
      <Cta />
    </>
  );
}
