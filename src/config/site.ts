export const SITE = {
  name: 'Editorial Intelligence',
  title: 'Editorial Intelligence — Knowledge that compounds',
  description: 'Editorial Intelligence is the discipline of turning organisational knowledge into strategic narratives that compound over time. Frameworks, methods and working examples.',
  author: 'Asavin Wattanajantra',
  url: 'https://www.editorialintelligence.co',
  nav: [
    { label: 'Editorial Intelligence', href: '/intelligence' },
    {
      label: 'EI OS',
      href: '/editorial-intelligence-os',
      children: [
        { label: 'Overview', href: '/editorial-intelligence-os', description: 'The operating system' },
        { label: 'Frameworks', href: '/frameworks', description: 'Models for thinking' },
        { label: 'Methods', href: '/methods', description: 'Repeatable ways of working' },
        { label: 'Guide', href: '/guide', description: 'How to begin' },
        { label: 'Assessment', href: '/assessment', description: 'Diagnose your capability' },
      ],
    },
    { label: 'Applications', href: '/applications' },
    { label: 'Field notes', href: '/writing' },
    { label: 'Work with me', href: '/work' },
    { label: 'About', href: '/about' },
  ],
} as const;
