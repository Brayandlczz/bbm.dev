const projects = [
  {
    name: "Plataforma Educativa",
    description:
      "Sistema integral para la gestión académica, administrativa y financiera.",
  },
  {
    name: "Dashboard Financiero",
    description:
      "Visualización de métricas clave y control de operaciones en tiempo real.",
  },
  {
    name: "Sistema Interno Empresarial",
    description:
      "Automatización de procesos internos para mejorar eficiencia operativa.",
  },
]

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="min-h-screen flex items-center px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos
          </h2>
          <p className="text-white/70 leading-relaxed">
            Casos seleccionados de plataformas y sistemas desarrollados
            para empresas que requieren soluciones sólidas y escalables.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-10 space-y-20">
          
          {/* Línea vertical */}
          <span
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-px bg-white/10"
          />

          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group relative"
            >
              {/* Punto + índice */}
              <div className="absolute -left-[3.25rem] top-1 flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-white" />
                <span className="text-white/30 font-mono text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Contenido */}
              <div className="
                max-w-3xl
                transition-transform
                duration-300
                group-hover:translate-x-2
              ">
                <h3 className="text-3xl font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-8">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-3
                      text-sm
                      font-medium
                      text-white/70
                      group-hover:text-white
                      transition-colors
                    "
                  >
                    Ver caso
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
