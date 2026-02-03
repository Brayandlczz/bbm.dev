const services = [
  {
    title: "Sistemas a la Medida",
    description:
      "Plataformas diseñadas para optimizar procesos operativos, centralizar información y escalar junto a tu empresa.",
    stack: "Automatización de procesos · Integración de áreas · Escalabilidad",
  },
  {
    title: "Sitios Web",
    description:
      "Desarrollo de sitios web modernos, rápidos y escalables orientados a conectar con tus clientes.",
    stack:
      "Presencia digital · Experiencia de usuario clara · Preparado para crecer",
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Acompañamiento estratégico para definir, auditar y optimizar decisiones técnicas clave.",
    stack:
      "Análisis técnico · Visión de negocio · Decisiones sostenibles",
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="px-6 py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full grid gap-16 md:grid-cols-2">
        
        {/* Columna izquierda — Texto */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nuestros Servicios
          </h2>

          <p className="text-black/70 leading-relaxed">
            Diseñamos y desarrollamos soluciones digitales con enfoque técnico y
            estratégico, orientadas a resolver problemas reales de operación y
            crecimiento.
          </p>
        </div>

        {/* Columna derecha — Servicios */}
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                p-8
                rounded-2xl
                border
                border-black/10
                bg-white
                transition-all
                duration-300
                hover:border-black/30
                hover:shadow-sm
              "
            >
              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>

              <p className="mt-3 text-black/70 leading-relaxed">
                {service.description}
              </p>

              <p className="mt-4 text-sm text-black/50">
                {service.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
