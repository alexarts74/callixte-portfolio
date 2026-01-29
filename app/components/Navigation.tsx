"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "mix-blend-difference"
        } ${isMenuOpen ? "mix-blend-normal" : ""}`}
      >
        <div className="mx-6 flex items-center justify-between py-5 md:mx-12 md:py-6 lg:mx-16 xl:mx-24">
          <Link
            href="/"
            className={`text-sm font-light tracking-[0.3em] uppercase transition-colors ${
              isMenuOpen ? "text-white" : scrolled ? "text-black" : "text-white"
            } hover:opacity-60 z-50`}
            onClick={closeMenu}
          >
            Callixte
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#projets"
              className={`text-xs font-light tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-black" : "text-white"
              } hover:opacity-60`}
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/company"
              className={`text-xs font-light tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-black" : "text-white"
              } hover:opacity-60`}
            >
              {t.nav.company}
            </Link>
            <Link
              href="#about"
              className={`text-xs font-light tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-black" : "text-white"
              } hover:opacity-60`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className={`text-xs font-light tracking-[0.2em] uppercase transition-colors ${
                scrolled ? "text-black" : "text-white"
              } hover:opacity-60`}
            >
              {t.nav.contact}
            </Link>
            <LanguageSwitcher
              className={scrolled ? "text-black" : "text-white"}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative w-6 h-5 flex flex-col justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-[1px] w-full transition-all duration-300 origin-center ${
                isMenuOpen
                  ? "bg-white rotate-45 translate-y-[9px]"
                  : scrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-[1px] w-full transition-all duration-300 ${
                isMenuOpen
                  ? "bg-white opacity-0"
                  : scrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-[1px] w-full transition-all duration-300 origin-center ${
                isMenuOpen
                  ? "bg-white -rotate-45 -translate-y-[9px]"
                  : scrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="#projets"
            className="text-white text-2xl font-light tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
            onClick={closeMenu}
          >
            {t.nav.projects}
          </Link>
          <Link
            href="/company"
            className="text-white text-2xl font-light tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
            onClick={closeMenu}
          >
            {t.nav.company}
          </Link>
          <Link
            href="#about"
            className="text-white text-2xl font-light tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
            onClick={closeMenu}
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="text-white text-2xl font-light tracking-[0.3em] uppercase hover:opacity-60 transition-opacity"
            onClick={closeMenu}
          >
            {t.nav.contact}
          </Link>
          <div className="mt-8">
            <LanguageSwitcher className="text-white text-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
