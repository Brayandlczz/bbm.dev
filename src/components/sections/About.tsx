export default function About() {
  return (
    <section
      id="nosotros"
      className="relative min-h-screen px-6 bg-white flex items-center"
    >
      <div className="max-w-screen-xl mx-auto w-full grid gap-24 md:grid-cols-[1.4fr_1fr]">
        {/* Columna izquierda — Manifiesto */}
        <div>
          <span className="mb-8 inline-block text-sm uppercase tracking-widest text-zinc-500">
            Sobre BBM | Solutions
          </span>

          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.05] mb-8">
            No construimos software
            <br />
            por construir.
          </h2>

          <p className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-2xl">
            Diseñamos y desarrollamos soluciones tecnológicas pensadas para
            crecer, enfocadas en aportar valor real desde el primer día.
          </p>
        </div>

        {/* Columna derecha — Diferenciales */}
        <div className="space-y-16">
          <div className="border-l-2 border-zinc-200 pl-8">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Pensamiento antes que ejecución
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Analizamos tu problemática antes de proponer una solución tecnológica.
              Menos improvisación, producto más efectivo.
            </p>
          </div>

          <div className="border-l-2 border-zinc-200 pl-8">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Tecnología como herramienta, no como fin
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Elegimos el stack adecuado en función del proyecto.
              Priorizamos mantenibilidad, claridad y escalabilidad real.
            </p>
          </div>

          <div className="border-l-2 border-zinc-200 pl-8">
            <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
              Seguimiento a largo plazo
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Nos involucramos con tu propósito, acompañando la
              evolución del producto más allá de la entrega final.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
