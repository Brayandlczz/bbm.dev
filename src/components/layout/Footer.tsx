export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Legal */}
        <p className="text-sm text-black text-center">
          © {new Date().getFullYear()} BBM Solutions | Todos los derechos reservados.
        </p>

        {/* Cierre editorial */}
        <p className="mt-4 text-xs text-black text-center">
          Diseñado y desarrollado con enfoque en calidad, diseño y tecnología moderna.
        </p>

      </div>
    </footer>
  )
}
