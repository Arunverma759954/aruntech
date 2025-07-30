// src/App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Services/>
      <Contact />
      <About/>
      <Footer/>
       
    </>
  )
}

export default App
