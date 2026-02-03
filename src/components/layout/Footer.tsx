import Link from "next/link"
import { Instagram, Facebook, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-6
          grid grid-cols-1 md:grid-cols-3
          gap-6
          items-center
        "
      >
        {/* Izquierda — Horarios */}
        <div className="text-sm text-white text-center md:text-left">
          <p className="font-medium text-white">Horarios y días de atención:</p>
          <p className="mt-2">Lunes – Viernes: 10 a.m - 5 p.m.</p>
        </div>

        {/* Centro — Legal */}
        <div className="text-center text-sm text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <Link
              href="/terminos-y-condiciones"
              className="hover:text-white transition-colors"
            >
              Términos y Condiciones
            </Link>

            <span className="hidden md:inline text-white">•</span>

            <Link
              href="/politicas-de-privacidad"
              className="hover:text-white transition-colors"
            >
              Políticas de Privacidad
            </Link>
          </div>

          <p className="mt-3 text-white">
            © {new Date().getFullYear()} BBM MÉXICO | Soluciones de software a la medida.
          </p>
        </div>

        {/* Derecha — Redes sociales */}
        <div className="flex items-center justify-center md:justify-end gap-4">
          <p className="text-sm font-medium text-white whitespace-nowrap">
            ¡Nuestras redes!
          </p>

          <div className="flex items-center gap-4 text-white">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram size={18} />
            </Link>

            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook size={18} />
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <Github size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
