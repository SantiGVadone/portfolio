import { technologies } from '../../data/technologies'
import './Stack.css'

const categoryLabels = {
  backend: 'Backend',
  frontend: 'Frontend',
  database: 'Database',
  tools: 'Tools',
}

export const Stack = () => {
  return (
    <section className="stack section" id="stack">
      <h2 className="section-title">Stack</h2>

      <div className="stack-categories">
        {Object.entries(technologies).map(([key, techs]) => (
          <div key={key} className="stack-category">
            <h3 className="stack-category-title">{categoryLabels[key]}</h3>
            <div className="stack-items">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="stack-item"
                  style={{ '--glow-color': tech.color }}
                  title={tech.name}
                >
                  <span className="stack-item-glow" aria-hidden="true" />
                  <span className="stack-item-border" aria-hidden="true" />
                  {tech.icon ? (
                    <img src={tech.icon} alt="" className="stack-item-icon" />
                  ) : (
                    <span className="stack-item-name">{tech.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
