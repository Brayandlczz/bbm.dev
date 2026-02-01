import Hero from "@/src/components/sections/Home"
import Services from "@/src/components/sections/Servicios"
import Projects from "@/src/components/sections/Proyectos"
import About from "@/src/components/sections/About"
import CTA from "@/src/components/sections/Contacto"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <CTA />
    </>
  )
}
