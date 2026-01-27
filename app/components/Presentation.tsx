import Image from "next/image";

export default function Presentation() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
        {/* Section Header - Séparation */}
        <div className="mb-10 md:mb-12 flex items-center gap-4">
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            01
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            À propos
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image */}
          <div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait de Callixte"
                fill
                className="object-cover grayscale transition-[filter] duration-1000 ease-in-out hover:grayscale-0"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2
              className="mb-6 text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Le mouvement
              <br />
              <span className="italic">comme langage</span>
            </h2>

            <div
              className="space-y-4 text-base font-light leading-relaxed text-neutral-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                Danseuse et chorégraphe contemporaine depuis plus de dix ans,
                j&apos;explore les territoires du mouvement à la croisée de la
                danse, de la performance et de l&apos;installation.
              </p>
              <p>
                Formée au Conservatoire National Supérieur de Danse de Paris,
                j&apos;ai collaboré avec des chorégraphes tels que Anne Teresa De
                Keersmaeker, Sidi Larbi Cherkaoui et Ohad Naharin avant de
                développer mes propres créations.
              </p>
              <p>
                Chaque projet est une invitation à questionner notre rapport au
                corps, à l&apos;espace et au temps. Une recherche permanente de
                l&apos;authenticité du geste.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
              <div>
                <span
                  className="text-2xl font-light md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  10+
                </span>
                <p
                  className="mt-1 text-[10px] font-light tracking-wider text-neutral-500 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Années d&apos;exp.
                </p>
              </div>
              <div>
                <span
                  className="text-2xl font-light md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  15
                </span>
                <p
                  className="mt-1 text-[10px] font-light tracking-wider text-neutral-500 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Créations
                </p>
              </div>
              <div>
                <span
                  className="text-2xl font-light md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  8
                </span>
                <p
                  className="mt-1 text-[10px] font-light tracking-wider text-neutral-500 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Pays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
