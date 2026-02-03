"use client"

export default function TermsAndConditions() {
  return (
    <section className="bg-zinc-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Términos y Condiciones
          </h1>

          <p className="text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Estos Términos y Condiciones regulan el acceso y uso del sitio web de
            <strong> BBM Solutions</strong>. Al navegar por este sitio, aceptas
            cumplir con las condiciones aquí descritas.
          </p>
        </header>

        {/* Documento */}
        <div className="space-y-12 text-zinc-700 leading-relaxed">
          {[
            {
              title: "1. Identidad del responsable",
              text:
                "Este sitio web es operado por BBM Solutions, empresa dedicada al diseño y desarrollo de soluciones de software a la medida. Para cualquier consulta relacionada con estos términos, puedes contactarnos a través de nuestros canales oficiales.",
            },
            {
              title: "2. Objeto del sitio",
              text:
                "El propósito de este sitio es proporcionar información sobre nuestros servicios, presentar casos de uso y facilitar el contacto comercial con potenciales clientes. El contenido tiene carácter informativo y no constituye una oferta contractual vinculante.",
            },
            {
              title: "3. Uso del sitio",
              text:
                "El usuario se compromete a utilizar este sitio de forma lícita, ética y respetuosa. Queda prohibido cualquier uso que pueda dañar, inutilizar o sobrecargar el sitio, así como intentar acceder sin autorización a sistemas o datos restringidos.",
            },
            {
              title: "4. Propiedad intelectual",
              text:
                "Todos los contenidos de este sitio, incluyendo textos, diseños, logotipos, código fuente, gráficos y elementos visuales, son propiedad de BBM Solutions o cuentan con las licencias necesarias para su uso. Queda prohibida su reproducción o distribución sin autorización expresa.",
            },
            {
              title: "5. Limitación de responsabilidad",
              text:
                "BBM Solutions no garantiza la disponibilidad continua del sitio ni la ausencia de errores técnicos. No nos hacemos responsables por daños directos o indirectos derivados del uso o imposibilidad de uso del sitio web.",
            },
            {
              title: "6. Enlaces a terceros",
              text:
                "Este sitio puede contener enlaces a sitios web de terceros. BBM Solutions no tiene control sobre dichos sitios y no asume responsabilidad alguna por su contenido, políticas o prácticas.",
            },
            {
              title: "7. Modificaciones",
              text:
                "Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en este sitio.",
            },
            {
              title: "8. Legislación aplicable",
              text:
                "Estos Términos y Condiciones se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Cualquier controversia será sometida a los tribunales competentes conforme a dicha legislación.",
            },
          ].map((item) => (
            <section
              key={item.title}
              className="pl-6 border-l border-zinc-200"
            >
              <h2 className="text-xl font-semibold text-zinc-900 mb-3">
                {item.title}
              </h2>
              <p>{item.text}</p>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-zinc-200 text-center">
          <p className="text-sm text-zinc-500">
              Última actualización:{" "}
              {new Date()
                .toLocaleDateString("es-MX", {
                  month: "long",
                  year: "numeric",
                })
                .replace(/^\w/, (c) => c.toUpperCase())}
            </p>
        </footer>
      </div>
    </section>
  )
}
