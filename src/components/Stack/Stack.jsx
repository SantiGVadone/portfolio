import { technologies } from '../../data/technologies'
import './Stack.css'

export const Stack = () => {
  const allTechs = Object.values(technologies).flat()

  return (
    <section className='stack section' id='stack'>
      <h2 className='section-title'>Stack</h2>

      {/* Grilla unificada de tecnologías */}
      <div className='stack-grid'>
        {allTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className='stack-item'
            style={{ '--glow-color': tech.color || '#3b82f6' }}
          >
            {/* Tooltip estilizado con color de la tecnología */}
            <span className='stack-tooltip'>{tech.name}</span>

            {tech.icon ? (
              <img
                src={tech.icon}
                alt={tech.name}
                className='stack-item-icon'
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            ) : (
              <span className='stack-item-name'>{tech.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
