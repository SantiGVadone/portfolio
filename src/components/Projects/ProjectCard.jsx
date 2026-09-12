import { ExternalLinkIcon, GithubIcon } from '../icons/Icons'
import './Projects.css'

export const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}) => {
  return (
    <article className={'project-card'}>
      <div className='project-info'>
        <h3 className='project-title'>
          {title}
          <svg
            width='25'
            height='25'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20 4V8M20 4H16M20 4L14 10M18 11V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6H13'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </h3>
        <p className='project-description'>{description}</p>

        {technologies && technologies.length > 0 && (
          <div className='project-stack'>
            {technologies.map((tech) => (
              <span key={tech} className='project-tech'>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className='project-links'>
          {github && (
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
              aria-label={`Código fuente de ${title}`}
            >
              <GithubIcon size={20} />
              Código
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link'
              aria-label={`Demo de ${title}`}
            >
              <ExternalLinkIcon size={20} />
              Link
            </a>
          )}
        </div>
      </div>

      <div className='project-image'>
        {image ? (
          <img
            src={image}
            alt={`Captura del proyecto ${title}`}
            loading='lazy'
          />
        ) : (
          <div className='project-image-placeholder'>Sin imagen</div>
        )}
      </div>
    </article>
  )
}
