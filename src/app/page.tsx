import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Career from '@/components/Career'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Career />
        <Services />
        <Skills />
        <Education />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
