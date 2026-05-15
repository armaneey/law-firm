import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "../constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-serif text-3xl font-bold tracking-widest text-ink">
          LAW
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-none bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cream transition hover:bg-ink/85 md:inline-block"
        >
          Contact
        </a>

        <button
          aria-label="Toggle menu"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {open && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-64 transform bg-ink p-6 shadow-xl md:hidden">
            <div className="flex justify-end mb-6">
              <button
                aria-label="Close menu"
                className="text-cream"
                onClick={() => setOpen(false)}
              >
                <FiX size={26} />
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-cream/90 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block w-full bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-ink hover:bg-gold/90 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
