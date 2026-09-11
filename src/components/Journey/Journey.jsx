import { experience } from '../../data/experience'
import './Journey.css'

export const Journey = () => {
  return (
    <section className='journey section' id='studies'>
      <h2 className='section-title'>Studies</h2>

      <div className='journey-list'>
        {experience.map((item) => (
          <article key={item.id} className='border-card'>
            <div className='border-card-content'>
              <div className='journey-header'>
                <h3 className='journey-title'>{item.title}</h3>
                <span className='journey-institution'>{item.institution}</span>
              </div>
              <time className='journey-period'>{item.period}</time>
              <ul className='journey-highlights'>
                {item.highlights.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
