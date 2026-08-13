import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import MobileNav from "./MobileNav";
import { navLinks } from "@/lib/navLinks";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-header border-b border-neutral-100 bg-white md:static md:z-auto md:border-neutral-200 md:bg-transparent">
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

        <MobileNav />
      </Container>
    </header>
  );
}
