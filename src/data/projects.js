export const projects = [
  {
    id: 'salonmanager-api',
    title: 'SalonManager API',
    description:
      'REST API for hair salon management. Handles Users, Roles, Appointments, Client History, and service catalogs.',
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
      'Mobile-first inventory management app with real-time stock updates. Powered by a REST API. Infrastructure deployed on a self-hosted Linux server.',
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
      'Deployment infrastructure built on a dedicated Linux server. With remote SSH access, GitHub version control, and service isolation via Docker.',
    technologies: ['Linux', 'Docker', 'SSH', 'Cloudflare'],
    image: '/img/project-3.webp',
    github: null,
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7460084449108455424/',
  },
]
