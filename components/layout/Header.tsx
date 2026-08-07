import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
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
        <Link href="/" aria-label="Kamo Concept">
          <Image
            src="/Assets/Brand/logo-horizontal.svg"
            alt="Kamo Concept"
            width={200}
            height={129}
            priority
            unoptimized
            className="h-9 w-auto"
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-lg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-neutral-700 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
