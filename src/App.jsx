import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Journey } from './components/Journey/Journey'
import { Projects } from './components/Projects/Projects'
import { Stack } from './components/Stack/Stack'
import { Reviews } from './components/Reviews/Reviews'
import { NotFound } from './components/NotFound/NotFound'
import { Footer } from './components/Footer/Footer'
import { LanguageProvider } from './context/LanguageContext'
import './App.css'

function Portfolio() {
  return (
    <main className='portfolio'>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Stack />
    </main>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
