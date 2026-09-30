import { useTranslation } from '../../hooks/useTranslation'
import { socialLinks } from '../../data/links'
import './Contact.css'

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">{t('contact.title')}</h2>

      <div className="contact-content">
        <p className="contact-text">
          {t('contact.text')}
        </p>

        <div className="contact-links">
          <a
            href={socialLinks.email}
            className="contact-link"
          >
            {t('contact.email')}
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {t('contact.github')}
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {t('contact.linkedin')}
          </a>
        </div>
      </div>
    </section>
  )
}
