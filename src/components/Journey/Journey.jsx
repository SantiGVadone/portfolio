import { experience } from '../../data/experience'
import './Journey.css'

export const Journey = () => {
  return (
    <section className='journey section' id='journey'>
      <h2 className='section-title'>Studies</h2>

      <div className='journey-list'>
        {experience.map((item) => (
          <article key={item.id} className='journey-item'>
            <div className='journey-header'>
              <h3 className='journey-title'>{item.title}</h3>
              {item.institution && (
                <>
                  <span className='journey-separator'>-</span>
                  <span className='journey-institution'>
                    {item.institution}
                  </span>
                </>
              )}
            </div>
            <time className='journey-period'>{item.period}</time>
            <p className='journey-description'>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
