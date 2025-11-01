export type ProjectType = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  year: string;
  duration?: string;
  type?: string;
  teamSize?: string;
  repo: string;
  demo: string;
  image?: string;
};

export const projects: ProjectType[] = [
  {
    id: 'waste-management',
    title: 'MemeForge (AI Meme Generator)',
    description: 'A modern meme generator platform with AI-powered text-to-image generation.',
    longDescription: 'A modern meme generator platform with AI-powered text-to-image generation, trending templates, instant sharing, and community features.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI Integration', 'Node.js'],
    year: '2025',
    duration: '4-5 weeks',
    type: 'Full-Stack',
    teamSize: 'Solo',
    repo: 'https://github.com/yourusername/memeforge',
    demo: 'https://memeforge.demo',
    image: '/projects/memeforge/hero.png'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with real-time inventory and payments.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2025',
    repo: '#',
    demo: '#'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Responsive portfolio website with dark mode and animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    year: '2024',
    repo: '#',
    demo: '#'
  }
];