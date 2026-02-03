"use client"

export default function PrivacyPolicy() {
  return (
    <section className="bg-zinc-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Política de Privacidad
          </h1>

          <p className="text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            La presente Política de Privacidad describe cómo
            <strong> BBM Solutions</strong> recopila, utiliza y protege la
            información personal proporcionada por los usuarios a través de
            este sitio web.
          </p>
        </header>

        {/* Documento */}
        <div className="space-y-12 text-zinc-700 leading-relaxed">
          {[
            {
              title: "1. Responsable del tratamiento de datos",
              text:
                "El responsable del tratamiento de los datos personales recabados a través de este sitio web es BBM Solutions, empresa dedicada al diseño y desarrollo de soluciones de software a la medida.",
            },
            {
              title: "2. Datos personales que recopilamos",
              text:
                "A través de nuestros formularios de contacto podemos recopilar, de manera directa, los siguientes datos personales:",
              list: [
                "Nombre.",
                "Correo electrónico.",
                "Mensaje o información relacionada con el proyecto o servicio que deseas consultar o adquirir.",
              ],
            },
            {
              title: "3. Finalidad del tratamiento",
              text:
                "Los datos personales recabados serán utilizados exclusivamente para las siguientes finalidades:",
              list: [
                "Atender solicitudes de contacto o información.",
                "Dar seguimiento a comunicaciones comerciales.",
                "Evaluar la viabilidad de proyectos solicitados.",
              ],
            },
            {
              title: "4. Protección y almacenamiento de la información",
              text:
                "BBM Solutions implementa medidas de seguridad administrativas, técnicas y organizativas razonables para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado o divulgación.",
            },
            {
              title: "5. Compartición de datos",
              text:
                "Los datos personales no serán compartidos con terceros, salvo cuando sea necesario para el funcionamiento del sitio, el cumplimiento de obligaciones legales o con proveedores de servicios que actúen bajo nuestras instrucciones.",
            },
            {
              title: "6. Derechos del titular de los datos",
              text:
                "El titular de los datos personales tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos (derechos ARCO), conforme a la legislación aplicable. Para ejercer estos derechos, puede contactarnos a través de nuestros medios oficiales.",
            },
            {
              title: "7. Uso de cookies",
              text:
                "Este sitio web puede utilizar cookies técnicas y de análisis con el fin de mejorar la experiencia del usuario. El uso de cookies no permite identificar personalmente al usuario.",
            },
            {
              title: "8. Cambios a la política de privacidad",
              text:
                "BBM Solutions se reserva el derecho de modificar la presente Política de Privacidad en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en este sitio web.",
            },
            {
              title: "9. Legislación aplicable",
              text:
                "Esta Política de Privacidad se rige por las leyes vigentes en los Estados Unidos Mexicanos y será interpretada conforme a las mismas.",
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

              {item.list && (
                <ul className="mt-4 space-y-2 text-zinc-700">
                  {item.list.map((li) => (
                    <li key={li}>• {li}</li>
                  ))}
                </ul>
              )}
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
