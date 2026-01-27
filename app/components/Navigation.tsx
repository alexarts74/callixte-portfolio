"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling past the hero (100vh)
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "mix-blend-difference"
      }`}
    >
      <div className="mx-6 flex items-center justify-between py-5 md:mx-12 md:py-6 lg:mx-16 xl:mx-24">
        <Link
          href="/"
          className={`text-sm font-light tracking-[0.3em] uppercase transition-colors ${
            scrolled ? "text-black" : "text-white"
          } hover:opacity-60`}
        >
          Callixte
        </Link>
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="#projets"
            className={`text-xs font-light tracking-[0.2em] uppercase transition-colors ${
              scrolled ? "text-black" : "text-white"
            } hover:opacity-60`}
          >
            Projets
          </Link>
          <Link
            href="#about"
            className={`text-xs font-light tracking-[0.2em] uppercase transition-colors ${
              scrolled ? "text-black" : "text-white"
            } hover:opacity-60`}
          >
            À propos
          </Link>
          <a
            href="mailto:contact@callixte.com"
            className={`hidden text-xs font-light tracking-[0.2em] uppercase transition-colors md:block ${
              scrolled ? "text-black" : "text-white"
            } hover:opacity-60`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
