const services = [
  {
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y escalables construidas con tecnologías actuales.",
  },
  {
    title: "Sistemas a la Medida",
    description:
      "Software diseñado específicamente para los procesos y necesidades de tu empresa.",
  },
  {
    title: "Consultoría Tecnológica",
    description:
      "Asesoría estratégica para tomar decisiones técnicas correctas desde el inicio.",
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="min-h-screen flex items-center px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full grid gap-16 md:grid-cols-2">
        
        {/* Columna izquierda – Texto */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Servicios
          </h2>

          <p className="text-black/70 leading-relaxed">
            Acompañamos a empresas en la creación de soluciones digitales
            eficientes, escalables y alineadas con sus objetivos de negocio.
            Nuestro enfoque combina tecnología, estrategia y experiencia.
          </p>
        </div>

        {/* Columna derecha – Servicios */}
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="
                group
                p-8
                rounded-2xl
                border
                border-black/10
                bg-white
                hover:bg-black
                transition-all
                duration-300
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  text-black
                  group-hover:text-white
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-3
                  text-black/70
                  group-hover:text-white/70
                "
              >
                {service.description}
              </p>

              <div className="mt-6">
                <span
                  className="
                    text-sm
                    font-medium
                    text-black
                    group-hover:text-white
                  "
                >
                  Conocer más →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
