"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const sections = [
  { label: "Inicio", id: "home" },
  { label: "Servicios", id: "servicios" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Nosotros", id: "nosotros" },
]

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    const contacto = document.getElementById("contacto")
    if (contacto) observer.observe(contacto)

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  const isContactActive = active === "contacto"

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
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
          BBM Solutions | Desarrollo de software a la medida
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((item) => {
            const isActive = active === item.id

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  relative
                  px-1
                  transition-colors
                  cursor-pointer
                  ${
                    isActive
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }
                `}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900" />
                )}
              </button>
            )
          })}

          {/* CTA */}
          <button
            onClick={() => scrollTo("contacto")}
            className={`
              relative
              ml-2
              px-4 py-2
              rounded-full
              text-sm font-medium
              bg-zinc-900 text-white
              transition-all
              cursor-pointer
              hover:bg-zinc-800
            `}
          >
            <span className="relative z-10">Contáctanos</span>

            {isContactActive && (
              <span
                className="
                  absolute
                  left-4 right-4
                  bottom-2
                  h-px
                  bg-white
                "
              />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
