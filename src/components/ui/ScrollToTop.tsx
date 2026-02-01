"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Volver arriba"
      className="
        fixed bottom-8 right-8 z-50
        group
        flex items-center justify-center
        h-11 w-11
        rounded-full
        bg-white
        text-zinc-900
        border border-zinc-200
        shadow-md
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:bg-zinc-900 hover:text-white
        focus:outline-none focus:ring-2
        focus:ring-zinc-900 focus:ring-offset-2
      "
    >
      <ArrowUp
        size={18}
        className="
          transition-transform duration-300
          group-hover:-translate-y-0.5
        "
      />
    </button>
  )
}
