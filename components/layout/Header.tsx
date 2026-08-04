import Container from "./Container";
import Button from "../ui/Button";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="h-header border-b border-neutral-200">
      <Container
        width="wide"
        className="flex h-full items-center justify-between"
      >
        <span className="text-h3 tracking-wide">Kamo Concept</span>

        <nav className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body text-neutral-700 hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="primary" size="sm" className="text-small">
          Reservar consulta
        </Button>
      </Container>
    </header>
  );
}
