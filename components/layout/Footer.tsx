import Link from "next/link";
import Container from "./Container";

const footerLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <Container
        width="wide"
        className="flex flex-col md:flex-row items-center justify-between gap-sm py-lg text-small text-neutral-600"
      >
        <span>
          © {new Date().getFullYear()} Kamo Concept. Todos los derechos
          reservados.
        </span>

        <nav aria-label="Navegación de pie de página" className="flex gap-md">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
