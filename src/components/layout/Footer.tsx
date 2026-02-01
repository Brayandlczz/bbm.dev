import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Legal links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-zinc-700">
          <Link
            href="/terminos-y-condiciones"
            className="hover:text-zinc-900 transition-colors"
          >
            Términos y Condiciones
          </Link>

          <span className="hidden md:inline text-zinc-400">•</span>

          <Link
            href="/politicas-de-privacidad"
            className="hover:text-zinc-900 transition-colors"
          >
            Políticas de Privacidad
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-black text-center">
          © {new Date().getFullYear()} BBM Solutions | Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
