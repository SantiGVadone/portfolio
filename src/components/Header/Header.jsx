import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, CloseIcon } from '../icons/Icons'
import { useTranslation } from '../../hooks/useTranslation'
import './Header.css'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, language, setLanguage } = useTranslation()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const navItems = [
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.studies'), href: '/#studies' },
    { label: t('nav.projects'), href: '/#projects' },
    { label: t('nav.stack'), href: '/#stack' },
  ]

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    closeMenu()
  }

  const cvPdf = t(language === 'es' ? 'cv.esp' : 'cv.eng')

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
          <div className='header-lang-switcher'>
            {language === 'es' ? (
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-label='English'
                aria-pressed={language === 'en'}
              >
                ING
              </button>
            ) : (
              <button
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-label='Español'
                aria-pressed={language === 'es'}
              >
                ESP
              </button>
            )}
          </div>
          <div>
            <a
              href={cvPdf}
              className='header-link'
              target='_blank'
              rel='noreferrer'
            >
              {t('nav.cv')}
            </a>
            <Link to='/blog' className='header-link'>
              {t('nav.blog')}
            </Link>
          </div>
        </div>

        <button
          className='mobile-toggle'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <nav
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-label={t('nav.ariaMenu')}
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
            {t('nav.blog')}
          </Link>
          <a
            href={cvPdf}
            className='header-link'
            target='_blank'
            rel='noreferrer'
            onClick={closeMenu}
          >
            {t('nav.cv')}
          </a>
          {language === 'es' ? (
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
              aria-label='English'
              aria-pressed={language === 'en'}
            >
              ING
            </button>
          ) : (
            <button
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('es')}
              aria-label='Español'
              aria-pressed={language === 'es'}
            >
              ESP
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
