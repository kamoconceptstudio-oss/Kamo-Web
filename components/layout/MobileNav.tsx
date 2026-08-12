"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/navLinks";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`block h-px w-6 bg-neutral-900 transition-transform ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-neutral-900 transition-transform ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Navegación principal"
          className="fixed inset-x-0 top-[var(--header-height)] z-40 border-b border-neutral-200 bg-neutral-50 px-sm py-md"
        >
          <ul className="flex flex-col gap-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-body text-neutral-700 hover:text-neutral-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
