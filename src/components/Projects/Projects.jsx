import { ProjectCard } from './ProjectCard'
import './Projects.css'

export const Projects = () => {
  return (
    <section className='projects section' id='projects'>
      <h2 className='section-title'>Proyectos</h2>

      <div className='projects-grid'>
        <div className='parent'>
          <div className='div1'>
            <ProjectCard
              key={'salonmanager-api'}
              title={'SalonManagement API'}
              description={
                'REST API para la gestión de una peluquería. Gestiona Usuarios, Roles, Turnos, Historial de clientes y catálogos de servicios.'
              }
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
              title={'Inventory Hub'}
              description={
                'Aplicación mobile de gestión de inventario. Infraestructura desplegada en un servidor Linux propio.'
              }
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
              title={'HomeServer Setup'}
              description={
                'Infraestructura de despliegue construida en un servidor Linux dedicado. Con acceso remoto por SSH, control de versiones con GitHub y aislamiento de servicios mediante Docker.'
              }
              technologies={['Linux', 'Docker', 'SSH', 'Cloudflare']}
              image={'./img/linux.webp'}
              demo={
                'https://www.linkedin.com/feed/update/urn:li:activity:7460084449108455424/'
              }
            />{' '}
          </div>
          {/* <div className='div4'>
            {' '}
            <ProjectCard
              key={'salonmanager-api'}
              title={'SalonManager API'}
              description={
                'REST API para la gestión de una peluquería. Gestiona Usuarios, Roles, Turnos, Historial de clientes y catálogos de servicios.'
              }
              technologies={[
                'Node.js',
                'TypeScript',
                'Express',
                'PostgreSQL',
                'JWT',
                'Zod',
                'bcrypt',
              ]}
              image={'./img/api-appointments.jpg'}
              github={'https://github.com/SantiGVadone/Proyecto-Peluqueria'}
            />
          </div> */}
        </div>
        {/* {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            github={project.github}
            demo={project.demo}
          />
        ))} */}
      </div>
    </section>
  )
}
