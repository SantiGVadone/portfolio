import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import './NotFound.css'

export const NotFound = () => {
  const { t } = useTranslation()

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
      <h1 className='notfound-title'>{t('notfound.title')}</h1>
      <p className='notfound-text'>
        {t('notfound.text')}
      </p>
      <Link to='/' className='notfound-btn'>
        {t('notfound.button')}
      </Link>
    </main>
  )
}