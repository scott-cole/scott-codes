"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20">
      <div className="h-full bg-midnight/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full overflow-hidden">
            <Link href="/" className="flex items-center h-full">
              <Image
                src="/logo-white.webp"
                alt="Scott.Codes"
                width={322}
                height={215}
                className="h-[215px] w-auto flex-shrink-0"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-slate-300 hover:text-caribbean transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-slate-300 hover:text-caribbean transition-colors font-medium"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-slate-300 hover:text-caribbean transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-caribbean transition-colors font-medium"
              >
                Contact
              </Link>

              <a
                href="mailto:scott.codes.dev@gmail.com"
                className="button button-primary shine-effect flex items-center gap-2"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-charcoal text-white hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 top-0 z-40 bg-midnight md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex flex-col items-center h-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pt-28 mb-14">
              <Image
                src="/logo-icon-white.webp"
                alt="Scott.Codes"
                width={240}
                height={160}
                className="w-60 h-auto"
              />
            </div>
            <div className="flex flex-col items-center gap-10">
              <Link
                href="/"
                className="text-3xl text-slate-300 hover:text-caribbean transition-colors font-display font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-3xl text-slate-300 hover:text-caribbean transition-colors font-display font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-3xl text-slate-300 hover:text-caribbean transition-colors font-display font-semibold"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-3xl text-slate-300 hover:text-caribbean transition-colors font-display font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="mt-auto pb-16">
              <a
                href="mailto:scott.codes.dev@gmail.com"
                className="button button-primary shine-effect inline-flex items-center gap-2 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
