import { useState, useCallback } from 'react'
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from '../icons/Icons'
import { socialLinks } from '../../data/links'
import './Header.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Studies', href: '#studies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className='header'>
      <nav className='header-nav'>
        <a href='#' className='header-logo'>
          <span className='header-logo-icon' />
          VadoneDev<span>.</span>
        </a>

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
            <a href={'#blog'} className='header-link'>
              Blog
            </a>
          </div>
          <div className='header-right-container'>
            <a
              href={socialLinks.github}
              target='_blank'
              rel='noopener noreferrer'
              className='header-social-link'
              aria-label='GitHub'
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='header-social-link'
              aria-label='LinkedIn'
            >
              <LinkedinIcon size={20} />
            </a>
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
          <a
            href={socialLinks.github}
            target='_blank'
            rel='noopener noreferrer'
            onClick={closeMenu}
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            onClick={closeMenu}
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  )
}
