"use client"

export default function TermsAndConditions() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Términos y Condiciones
          </h1>
            <p className="mx-auto text-justify text-zinc-600 leading-relaxed">
            Estos Términos y Condiciones regulan el acceso y uso del sitio web de
            BBM | Desarrollo de software a la medida. Al navegar por este sitio,
            aceptas cumplir con las condiciones aquí descritas.
            </p>
        </header>

        {/* Content */}
        <div className="space-y-14 text-zinc-700 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              1. Identidad del responsable
            </h2>
            <p>
              Este sitio web es operado por <strong>BBM Solutions</strong>,
              empresa dedicada al diseño y desarrollo de soluciones de software a
              la medida. Para cualquier consulta relacionada con estos términos,
              puedes contactarnos a través de nuestros canales oficiales.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              2. Objeto del sitio
            </h2>
            <p>
              El propósito de este sitio es proporcionar información sobre
              nuestros servicios, presentar casos de uso y facilitar el contacto
              comercial con potenciales clientes. El contenido tiene carácter
              informativo y no constituye una oferta contractual vinculante.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              3. Uso del sitio
            </h2>
            <p>
              El usuario se compromete a utilizar este sitio de forma lícita,
              ética y respetuosa. Queda prohibido cualquier uso que pueda dañar,
              inutilizar o sobrecargar el sitio, así como intentar acceder sin
              autorización a sistemas, datos o funcionalidades restringidas.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              4. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos de este sitio, incluyendo textos, diseños,
              logotipos, código fuente, gráficos y elementos visuales, son
              propiedad de BBM Solutions o cuentan con las licencias necesarias
              para su uso. Queda prohibida su reproducción, distribución o
              modificación sin autorización expresa.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              5. Limitación de responsabilidad
            </h2>
            <p>
              BBM Solutions no garantiza la disponibilidad continua del sitio ni
              la ausencia de errores técnicos. No nos hacemos responsables por
              daños directos o indirectos derivados del uso o imposibilidad de
              uso del sitio web.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              6. Enlaces a terceros
            </h2>
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. BBM
              Solutions no tiene control sobre dichos sitios y no asume
              responsabilidad alguna por su contenido, políticas o prácticas.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              7. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos y Condiciones
              en cualquier momento. Las modificaciones entrarán en vigor desde
              su publicación en este sitio.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              8. Legislación aplicable
            </h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes vigentes en los
              Estados Unidos Mexicanos. Cualquier controversia será sometida a
              los tribunales competentes conforme a dicha legislación.
            </p>
          </section>
        </div>

        {/* Footer note */}
        <footer className="mt-20 border-t border-zinc-400 pt-8">
          <p className="text-center text-sm text-zinc-500">
            Última actualización: {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  )
}
