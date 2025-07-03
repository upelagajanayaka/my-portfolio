'use client'

import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import CircleSkillBars from '@/components/CircleSkillBars'
import Projects from '@/components/Projects'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import SectionWrapper from '@/components/SectionWrapper'

export default function Home() {
  return (
    <main className="bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-300 scroll-smooth snap-y snap-mandatory">
      <ScrollProgress />
      <Navbar />

      <section id="hero" className="snap-start min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section id="about" className="snap-start py-24 px-6">
        <About />
      </section>

      <section id="techstack" className="snap-start py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <TechStack />
      </section>

      <section id="skills" className="snap-start py-24 px-6">
        <CircleSkillBars />
      </section>

      <section id="projects" className="snap-start py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <Projects />
      </section>

      <section id="contact" className="snap-start py-24 px-6">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}
