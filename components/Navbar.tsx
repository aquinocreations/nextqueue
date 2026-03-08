"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#experts", label: "Experts" },
  { href: "#sample", label: "Sample" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <span className="font-display text-2xl font-extrabold tracking-tight text-gray-900">
              Next<span className="text-teal-brand">Queue</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-teal-brand transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="bg-teal-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-dark transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 bg-teal-brand text-white text-center rounded-lg text-sm font-semibold"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
