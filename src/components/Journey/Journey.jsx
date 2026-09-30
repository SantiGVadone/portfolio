import { useTranslation } from '../../hooks/useTranslation'
import './Journey.css'

export const Journey = () => {
  const { t } = useTranslation()

  const experienceItems = [
    {
      id: 'utn',
      title: 'University Degree in Programming',
      institution: 'National Technological University',
      period: '2025 - Present',
      highlightsKey: 'experience.utn.highlights',
    },
    {
      id: 'utn-python',
      title: 'University Python Course',
      institution: 'National Technological University',
      period: '2021 - 2021',
      highlightsKey: 'experience.utn-python.highlights',
    },
    {
      id: 'electronics',
      title: 'Electronics Technician',
      institution: 'Technical School Nº1 Merlo',
      period: '2015 - 2021',
      highlightsKey: 'experience.electronics.highlights',
    },
  ]

  return (
    <section className='journey section' id='studies'>
      <h2 className='section-title' style={{ marginBottom: '1em' }}>
        {t('journey.title')}
      </h2>

      <div className='journey-list'>
        {experienceItems.map((item) => {
          const highlights = t(item.highlightsKey)
          return (
            <article key={item.id} className='border-card'>
              <div className='border-card-content'>
                <div className='journey-header'>
                  <h3 className='journey-title'>{item.title}</h3>
                  <span className='journey-institution'>{item.institution}</span>
                </div>
                <time className='journey-period'>{item.period}</time>
                <ul className='journey-highlights'>
                  {Array.isArray(highlights) && highlights.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
