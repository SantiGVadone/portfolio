import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Journey } from './components/Journey/Journey'
import { Projects } from './components/Projects/Projects'
import { Stack } from './components/Stack/Stack'
import { Blog } from './components/Blog/Blog'
import { NotFound } from './components/NotFound/NotFound'
import { Footer } from './components/Footer/Footer'
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
