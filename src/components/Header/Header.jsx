import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, CloseIcon } from '../icons/Icons'
import './Header.css'

const navItems = [
  { label: 'Sobre Mi', href: '/#about' },
  { label: 'Estudios', href: '/#studies' },
  { label: 'Proyectos', href: '/#projects' },
  { label: 'Stack', href: '/#stack' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className='header'>
      <nav className='header-nav'>
        <Link to='/' className='header-logo'>
          <span className='header-logo-icon' />
          VadoneDev<strong>.</strong>
        </Link>

        <ul className='header-links'>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className='header-link'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='header-right-container'>
          <div>
            <Link to='/blog' className='header-link'>
              Blog
            </Link>
          </div>
        </div>

        <button
          className='mobile-toggle'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <nav
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-label='Menú de navegación'
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className='mobile-menu-link'
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <div className='mobile-menu-social'>
          <Link to='/blog' onClick={closeMenu}>
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}
