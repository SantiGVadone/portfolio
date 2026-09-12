import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  return (
    <main className='notfound-page'>
      <p className='notfound-code' aria-hidden='true'>
        404
      </p>
      <h1 className='notfound-title'>Página no encontrada</h1>
      <p className='notfound-text'>
        La ruta que buscás no existe dentro del sitio.
      </p>
      <Link to='/' className='notfound-btn'>
        Volver al inicio
      </Link>
    </main>
  )
}