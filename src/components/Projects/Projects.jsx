import { useTranslation } from '../../hooks/useTranslation'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export const Projects = () => {
  const { t } = useTranslation()

  return (
    <section className='projects section' id='projects'>
      <h2 className='section-title'>{t('projects.title')}</h2>

      <div className='projects-grid'>
        <div className='parent'>
          <div className='div1'>
            <ProjectCard
              key={'salonmanager-api'}
              title={t('projects.salonmanager.title')}
              description={t('projects.salonmanager.description')}
              technologies={[
                'Node.js',
                'TypeScript',
                'Express',
                'PostgreSQL',
                'JWT',
                'Zod',
                'bcrypt',
              ]}
              image={'./img/salonManagementAPI.webp'}
              github={'https://github.com/SantiGVadone/Proyecto-Peluqueria'}
            />
          </div>
          <div className='div2'>
            <ProjectCard
              key={'inventory-hub'}
              title={t('projects.inventory.title')}
              description={t('projects.inventory.description')}
              technologies={[
                'React Native',
                'TypeScript',
                'Node.js',
                'PostgreSQL',
                'Docker',
              ]}
              image={'./img/stockApp.webp'}
              github={'https://github.com/SantiGVadone/stock-frontend'}
            />
          </div>
          <div className='div3'>
            <ProjectCard
              key={'homeserver'}
              title={t('projects.homeserver.title')}
              description={t('projects.homeserver.description')}
              technologies={['Linux', 'Docker', 'SSH', 'Cloudflare']}
              image={'./img/linux.webp'}
              demo={
                'https://www.linkedin.com/feed/update/urn:li:activity:7460084449108455424/'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
