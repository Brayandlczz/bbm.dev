"use client"

export default function PrivacyPolicy() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
            Política de Privacidad
          </h1>
          <p className="mx-auto text-justify text-zinc-600 leading-relaxed">
            La presente Política de Privacidad describe cómo BBM Solutions
            recopila, utiliza y protege la información personal proporcionada
            por los usuarios a través de este sitio web.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-zinc-700 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              1. Responsable del tratamiento de datos
            </h2>
            <p>
              El responsable del tratamiento de los datos personales recabados
              a través de este sitio web es <strong>BBM Solutions</strong>,
              empresa dedicada al diseño y desarrollo de soluciones de software
              a la medida.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              2. Datos personales que recopilamos
            </h2>
            <p>
              A través de nuestros formularios de contacto podemos recopilar,
              de manera directa, los siguientes datos personales:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Nombre.</li>
              <li>Correo electrónico.</li>
              <li>Mensaje o información relacionada con el proyecto o servicio que deseas consultar/adquirir.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Los datos personales recabados serán utilizados exclusivamente
              para las siguientes finalidades:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Atender solicitudes de contacto o información.</li>
              <li>Dar seguimiento a comunicaciones comerciales.</li>
              <li>Evaluar la viabilidad de proyectos solicitados.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              4. Protección y almacenamiento de la información
            </h2>
            <p>
              BBM Solutions implementa medidas de seguridad administrativas,
              técnicas y organizativas razonables para proteger los datos
              personales contra pérdida, uso indebido, acceso no autorizado
              o divulgación.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              5. Compartición de datos
            </h2>
            <p>
              Los datos personales no serán compartidos con terceros, salvo
              cuando sea necesario para el funcionamiento del sitio o el
              cumplimiento de obligaciones legales, o con proveedores de
              servicios que actúen bajo nuestras instrucciones.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              6. Derechos del titular de los datos
            </h2>
            <p>
              El titular de los datos personales tiene derecho a acceder,
              rectificar, cancelar u oponerse al tratamiento de sus datos
              (derechos ARCO), conforme a la legislación aplicable. Para ejercer
              estos derechos, puede contactarnos a través de nuestros medios
              oficiales.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              7. Uso de cookies
            </h2>
            <p>
              Este sitio web puede utilizar cookies técnicas y de análisis
              con el fin de mejorar la experiencia del usuario. El uso de
              cookies no permite identificar personalmente al usuario.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              8. Cambios a la política de privacidad
            </h2>
            <p>
              BBM Solutions se reserva el derecho de modificar la presente
              Política de Privacidad en cualquier momento. Las modificaciones
              entrarán en vigor desde su publicación en este sitio web.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              9. Legislación aplicable
            </h2>
            <p>
              Esta Política de Privacidad se rige por las leyes vigentes en los
              Estados Unidos Mexicanos y será interpretada conforme a las
              mismas.
            </p>
          </section>
        </div>

        {/* Footer note */}
        <footer className="mt-20 border-t border-zinc-200 pt-8">
          <p className="text-center text-sm text-zinc-500">
            Última actualización: {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  )
}
