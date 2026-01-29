"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-white lg:h-screen lg:overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isMenuOpen ? "mix-blend-normal" : ""}`}>
        <div className="mx-6 flex items-center justify-between py-5 md:mx-12 md:py-6 lg:mx-16 xl:mx-24">
          <Link
            href="/"
            className={`text-sm font-light tracking-[0.3em] uppercase transition-colors hover:opacity-60 z-50 ${
              isMenuOpen ? "text-white" : "text-black"
            }`}
            onClick={closeMenu}
          >
            Callixte
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#projets"
              className="text-xs font-light tracking-[0.2em] uppercase text-black hover:opacity-60 transition-colors"
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/company"
              className="text-xs font-light tracking-[0.2em] uppercase text-black hover:opacity-60 transition-colors"
            >
              {t.nav.company}
            </Link>
            <LanguageSwitcher className="text-black" />
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
                isMenuOpen ? "bg-white rotate-45 translate-y-[9px]" : "bg-black"
              }`}
            />
            <span
              className={`block h-[1px] w-full transition-all duration-300 ${
                isMenuOpen ? "bg-white opacity-0" : "bg-black"
              }`}
            />
            <span
              className={`block h-[1px] w-full transition-all duration-300 origin-center ${
                isMenuOpen ? "bg-white -rotate-45 -translate-y-[9px]" : "bg-black"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/#projets"
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

      <main className="min-h-full px-6 pt-24 pb-12 md:px-12 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:pt-0 lg:pb-0 xl:px-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left: Header + Form */}
          <div>
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <span
                className="mb-2 block text-xs font-light tracking-[0.3em] text-black/50 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.contact.section}
              </span>
              <h1
                className="text-3xl font-light tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t.contact.title}{" "}
                <span className="italic">{t.contact.titleItalic}</span>
              </h1>
            </div>

            {/* Contact Form */}
            {status === "success" ? (
              <div className="rounded-lg border border-black/10 bg-black/5 p-6 text-center">
                <p
                  className="text-base font-light text-black"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.contact.successMessage}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-light tracking-[0.2em] uppercase text-black/60 hover:text-black transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b border-black/20 bg-transparent py-2 text-base font-light text-black outline-none transition-colors focus:border-black"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-black/20 bg-transparent py-2 text-base font-light text-black outline-none transition-colors focus:border-black"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1 block text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border-b border-black/20 bg-transparent py-2 text-base font-light text-black outline-none transition-colors focus:border-black"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none border-b border-black/20 bg-transparent py-2 text-base font-light text-black outline-none transition-colors focus:border-black"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600" style={{ fontFamily: "var(--font-body)" }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-3 border border-black bg-black px-6 py-3 text-xs font-light tracking-[0.2em] uppercase text-white transition-all hover:bg-transparent hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {status === "loading" ? t.contact.form.sending : t.contact.form.send}
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col justify-center lg:pl-8">
            <p
              className="mb-8 max-w-md text-base font-light leading-relaxed text-black/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.contact.description}
            </p>

            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              <div>
                <h3
                  className="mb-2 text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:iungcallixte@gmail.com"
                  className="text-base font-light text-black transition-colors hover:opacity-60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  iungcallixte@gmail.com
                </a>
              </div>

              <div>
                <h3
                  className="mb-2 text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.contact.social}
                </h3>
                <div className="flex gap-4 lg:flex-col lg:gap-1">
                  <a
                    href="https://www.instagram.com/calliiiixte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-light text-black transition-colors hover:opacity-60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-light text-black transition-colors hover:opacity-60"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Vimeo
                  </a>
                </div>
              </div>

              <div>
                <h3
                  className="mb-2 text-xs font-light tracking-[0.2em] text-black/50 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.contact.location}
                </h3>
                <p
                  className="text-base font-light text-black"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
