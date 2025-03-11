import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Achievements from "./components/Achievements"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
}

