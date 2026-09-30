import { useTranslation } from '../../hooks/useTranslation'
import './Hero.css'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className='hero'>
      <article className='hero-content'>
        <h1 className='hero-name'>Santiago Vadone</h1>
        <h2 className='hero-role'>{t('hero.role')}</h2>
        <p className='hero-description'>{t('hero.description')}</p>
      </article>
    </section>
  )
}
