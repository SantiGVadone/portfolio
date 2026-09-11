export const projects = [
  {
    id: 'glowmanager-api',
    title: 'GlowManager API',
    description:
      'REST API para la gestión de una peluquería. Implementa arquitectura por capas (Controller-Service-Repository), autenticación JWT con roles (Admin, Boss, Employee), validación con Zod y manejo seguro de contraseñas con bcrypt. Gestiona turnos, historial de clientes, catálogos de servicios y cálculo de bonificaciones.',
    technologies: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'JWT', 'Zod', 'bcrypt'],
    image: '/img/project-1.webp',
    github: 'https://github.com/SantiGVadone/Proyecto-Peluqueria',
    demo: null,
    featured: true,
  },
  {
    id: 'inventory-hub',
    title: 'Inventory Hub',
    description:
      'Aplicación mobile-first de gestión de inventario con actualizaciones de stock en tiempo real. Desarrollada con React Native y TypeScript, potenciada por una API REST en Node.js y PostgreSQL. Infraestructura completamente containerizada con Docker Compose y desplegada en un servidor Linux propio mediante Cloudflare Tunnels.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/img/project-2.webp',
    github: 'https://github.com/SantiGVadone/stock-frontend',
    demo: null,
    featured: false,
  },
  {
    id: 'homeserver',
    title: 'HomeServer Setup',
    description:
      'Infraestructura de despliegue personal construida transformando un equipo viejo en un servidor Linux dedicado. Configuración de acceso remoto por SSH, control de versiones con GitHub, y aislamiento de servicios mediante Docker y Docker Compose con Cloudflare Tunnels para acceso externo seguro.',
    technologies: ['Linux', 'Docker', 'SSH', 'Cloudflare'],
    image: '/img/project-3.webp',
    github: null,
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7460084449108455424/',
    featured: false,
  },
]
