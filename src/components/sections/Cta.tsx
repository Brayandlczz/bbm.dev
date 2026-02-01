export default function CTA() {
  return (
    <section className="relative min-h-screen px-6 bg-zinc-950 flex items-center">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <div className="relative max-w-screen-xl mx-auto w-full grid gap-24 md:grid-cols-2 items-center">
        {/* Columna izquierda — Mensaje */}
        <div className="max-w-xl">
          <span className="mb-6 inline-block text-sm uppercase tracking-widest text-zinc-400">
            ¿Listo para dar el siguiente paso?
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
            Cuéntanos sobre
            <br />
            tu proyecto
          </h2>

          <p className="text-lg text-zinc-400 leading-relaxed">
            Analizamos cada idea con criterio técnico y visión de negocio.
            Si tiene sentido, te proponemos el mejor camino para hacerla realidad.
          </p>
        </div>

        {/* Columna derecha — Form */}
        <div className="relative">
          <div
            className="
              rounded-3xl
              border border-zinc-800
              bg-zinc-900/70
              p-10
              shadow-xl
            "
          >
            <form className="grid gap-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="cta-name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Nombre
                </label>
                <input
                  id="cta-name"
                  type="text"
                  placeholder="Tu nombre"
                  className="
                    w-full rounded-xl
                    border border-zinc-700
                    bg-zinc-950 px-4 py-3
                    text-white placeholder:text-zinc-500
                    outline-none transition
                    focus:border-white
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="cta-email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Correo electrónico
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  className="
                    w-full rounded-xl
                    border border-zinc-700
                    bg-zinc-950 px-4 py-3
                    text-white placeholder:text-zinc-500
                    outline-none transition
                    focus:border-white
                  "
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="cta-message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="cta-message"
                  rows={4}
                  placeholder="Cuéntanos brevemente qué tienes en mente…"
                  className="
                    w-full resize-none rounded-xl
                    border border-zinc-700
                    bg-zinc-950 px-4 py-3
                    text-white placeholder:text-zinc-500
                    outline-none transition
                    focus:border-white
                  "
                />
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="
                    w-full inline-flex items-center justify-center gap-2
                    rounded-full bg-white px-8 py-3
                    font-semibold text-black
                    transition-all
                    hover:-translate-y-1 hover:shadow-xl
                  "
                >
                  Enviar mensaje
                  <span>→</span>
                </button>

                <p className="mt-4 text-center text-sm text-zinc-500">
                  Respondemos normalmente en menos de 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
