"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="w-full bg-black py-16 md:py-20 lg:py-24 text-white">
      <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3
              className="text-3xl font-light tracking-[0.1em] uppercase md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Callixte
            </h3>
            <p
              className="mt-4 max-w-md text-base font-light leading-relaxed text-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {locale === "en"
                ? "Contemporary dancer and choreographer based in Paris. Available for collaborations, residencies, and creations."
                : "Danseuse et chorégraphe contemporaine basée à Paris. Disponible pour collaborations, résidences et créations."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-4 text-sm font-light tracking-[0.2em] text-white/50 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-base font-light text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {locale === "en" ? "Home" : "Accueil"}
              </a>
              <a
                href="#projets"
                className="text-base font-light text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.footer.nav.projects}
              </a>
              <a
                href="#about"
                className="text-base font-light text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.footer.nav.about}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 text-sm font-light tracking-[0.2em] text-white/50 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.footer.nav.contact}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:iungcallixte@gmail.com"
                className="text-base font-light text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                iungcallixte@gmail.com
              </a>
              <a
                href="https://www.instagram.com/calliiiixte/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-light text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Instagram
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-light text-white/80 transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Vimeo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 md:flex-row">
          <p
            className="text-sm font-light text-white/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {new Date().getFullYear()} Callixte. {t.footer.rights}
          </p>
          <p
            className="text-sm font-light text-white/50"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Paris, France
          </p>
        </div>
      </div>
    </footer>
  );
}
