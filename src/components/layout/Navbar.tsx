"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <header
      className="
        relative
        bg-white
        border-b border-zinc-200
      "
    >
      <nav
        className="
          max-w-7xl mx-auto
          px-4 md:px-12
          h-14 md:h-16
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-sm md:text-base text-zinc-900"
        >
          BBM | Desarrollo de software a la medida
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/#servicios" },
            { label: "Proyectos", href: "/#proyectos" },
            { label: "Nosotros", href: "/#nosotros" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contacto"
            className="
              ml-2 px-4 py-2
              rounded-full
              text-sm font-medium
              bg-zinc-900 text-white
              transition-all
              hover:bg-zinc-800
            "
          >
            Contáctanos
          </Link>
        </div>
      </nav>
    </header>
  )
}
