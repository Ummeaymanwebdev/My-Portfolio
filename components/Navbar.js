"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import { site } from "@/data/site";

const links = [
  { label: "Home", href: "/#Home" },
  { label: "About", href: "/#About" },
  { label: "Skills", href: "/#Skills" },
  { label: "Experience", href: "/#Experience" },
  { label: "Education", href: "/#Education" },
  { label: "Projects", href: "/#Projects" },
  { label: "Contact", href: "/#Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          {site.logo}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-7 font-mono text-sm text-mute lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-[#06202e] sm:block"
          >
            Let’s Talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-accent lg:hidden"
          >
            {open ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line/60 px-6 py-2 lg:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-mute hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}