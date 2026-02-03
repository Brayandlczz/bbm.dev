type HeroBackground =
  | "solid"
  | "liquid"
  | "tech"
  | "glow"
  | "noise"

const HERO_BG: HeroBackground = "tech"

export default function Home() {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center px-6 text-white ${getHeroBg(
        HERO_BG
      )}`}
    >
      {/* Overlays especiales */}
      {HERO_BG === "noise" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]"
        />
      )}

      {HERO_BG === "glow" && (
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.08),_transparent_60%)]
          "
        />
      )}

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="mb-4 text-sm uppercase tracking-wide text-white/50">
          Soluciones de software a la medida
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Construimos el núcleo
          <br />
          <span className="text-white/80">digital de tu empresa.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          Diseñamos y desarrollamos tecnologías que resuelven problemas
          de operación, crecimiento y control empresarial.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/#contacto"
            className="
              px-6 py-3
              rounded-xl
              bg-white
              text-black
              font-medium
              transition
              hover:bg-white/90
            "
          >
            Contáctanos
          </a>

          <a
            href="/#servicios"
            className="
              px-6 py-3
              rounded-xl
              text-white/80
              hover:text-white
              transition
            "
          >
            Ver servicios →
          </a>
        </div>
      </div>
    </section>
  )
}

/* =========================
   Backgrounds disponibles
   ========================= */

function getHeroBg(type: HeroBackground) {
  switch (type) {
    // Negro sólido
    case "solid":
      return "bg-black"

    // Estilo Apple / Stripe
    case "liquid":
      return "bg-[radial-gradient(ellipse_at_top,_#1a1a1a,_#000)]"

    // SaaS / Tech (recomendado para BBM)
    case "tech":
      return "bg-[radial-gradient(ellipse_at_top,_#111827,_#000)]"

    // Glow se maneja por overlay
    case "glow":
      return "bg-black"

    // Noise se maneja por overlay
    case "noise":
      return "bg-black"

    default:
      return "bg-black"
  }
}
