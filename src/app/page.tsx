'use client'

import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import CircleSkillBars from '@/components/CircleSkillBars'
import Projects from '@/components/Projects'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <ScrollProgress />
      <Navbar />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="techstack" className="snap-start bg-gray-50 dark:bg-slate-900 py-20">
        <TechStack />
      </section>

      <section id="skills" className="snap-start py-20">
        <CircleSkillBars />
      </section>

      <section id="projects" className="snap-start bg-gray-50 dark:bg-slate-900 py-20">
        <Projects />
      </section>

      <section id="contact" className="snap-start py-20">
        <ContactSection />
      </section>
      <Footer />

      {/* Optional: Add a scroll to top button */}
    </main>
  )
}
