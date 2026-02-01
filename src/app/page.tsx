import Hero from "@/src/components/sections/Hero"
import Services from "@/src/components/sections/Services"
import Projects from "@/src/components/sections/Projects"
import About from "@/src/components/sections/About"
import CTA from "@/src/components/sections/Cta"

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
