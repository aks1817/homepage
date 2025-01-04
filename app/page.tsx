import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Skills from './components/Skills'
import Facts from './components/Facts'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Skills />
        <Facts />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

