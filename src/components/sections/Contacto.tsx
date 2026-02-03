export default function CTA() {
  return (
    <section
      id="contacto"
      className="min-h-screen relative px-6 py-40 bg-zinc-50"
    >
      {/* Fondo sutil */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white"
      />

      <div className="relative max-w-screen-xl mx-auto w-full grid gap-20 md:grid-cols-2 items-center">
        {/* Columna izquierda — Mensaje */}
        <div className="max-w-xl">
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-zinc-500">
            ¿Listo para dar el siguiente paso?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6">
            Cuéntanos sobre tu idea o proyecto.
            <br />
          </h2>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Analizamos cada propuesta con criterio y visión de negocio.
            Si tiene sentido, te proponemos el mejor camino para hacerlo realidad.
          </p>
        </div>

        {/* Columna derecha — Form */}
        <div>
          <div
            className="
              rounded-3xl
              border border-zinc-200
              bg-white
              p-10
              shadow-sm
            "
          >
            <form className="grid gap-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="cta-name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Nombre
                </label>
                <input
                  id="cta-name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className="
                    w-full rounded-xl
                    border border-zinc-300
                    bg-white px-4 py-3
                    text-zinc-900 placeholder:text-zinc-400
                    outline-none transition
                    focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="cta-email"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="cta-email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  className="
                    w-full rounded-xl
                    border border-zinc-300
                    bg-white px-4 py-3
                    text-zinc-900 placeholder:text-zinc-400
                    outline-none transition
                    focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900
                  "
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="cta-message"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="cta-message"
                  rows={4}
                  placeholder="Cuéntanos sobre tus necesidades o inquietudes…"
                  className="
                    w-full resize-none rounded-xl
                    border border-zinc-300
                    bg-white px-4 py-3
                    text-zinc-900 placeholder:text-zinc-400
                    outline-none transition
                    focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900
                  "
                />
              </div>

              {/* CTA */}
              <div>
                <button
                  type="submit"
                  className="
                    w-full inline-flex items-center justify-center gap-2
                    rounded-full bg-zinc-900 px-8 py-3
                    font-semibold text-white
                    transition-all
                    hover:-translate-y-0.5 hover:shadow-lg
                  "
                >
                  Enviar mensaje
                  <span>→</span>
                </button>

                <p className="mt-6 text-center text-sm text-zinc-500">
                  Normalmente respondemos en menos de 24 horas.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
