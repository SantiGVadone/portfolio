import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Journey } from './components/Journey/Journey'
import { Projects } from './components/Projects/Projects'
import { Stack } from './components/Stack/Stack'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="portfolio">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
