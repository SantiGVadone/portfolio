export const projects = [
  {
    id: 'salonmanager-api',
    title: 'SalonManager API',
    description:
      'REST API para la gestión de una peluquería. Gestiona Usuarios, Roles, Turnos, Historial de clientes y catálogos de servicios.',
    technologies: [
      'Node.js',
      'TypeScript',
      'Express',
      'PostgreSQL',
      'JWT',
      'Zod',
      'bcrypt',
    ],
    image: './img/api-appointments.jpg',
    github: 'https://github.com/SantiGVadone/Proyecto-Peluqueria',
    demo: null,
  },
  {
    id: 'inventory-hub',
    title: 'Inventory Hub',
    description:
      'Aplicación mobile-first de gestión de inventario con actualizaciones de stock en tiempo real. Desarrollada y potenciada por una API REST. Infraestructura desplegada en un servidor Linux propio.',
    technologies: [
      'React Native',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Docker',
    ],
    image: './img/app-stock.png',
    github: 'https://github.com/SantiGVadone/stock-frontend',
    demo: null,
  },
  {
    id: 'homeserver',
    title: 'HomeServer Setup',
    description:
      'Infraestructura de despliegue construida en un servidor Linux dedicado. Con acceso remoto por SSH, control de versiones con GitHub y aislamiento de servicios mediante Docker.',
    technologies: ['Linux', 'Docker', 'SSH', 'Cloudflare'],
    image: '/img/project-3.webp',
    github: null,
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7460084449108455424/',
  },
]
