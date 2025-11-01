'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { FaExternalLinkAlt, FaCode, FaCalendarAlt } from 'react-icons/fa';

const Projects = () => {
  const { theme } = useTheme();

  const sectionBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const titleText = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const descText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React and Node.js',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      year: 2025,
      repo: '#',
      demo: '#',
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with payment integration',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      year: 2025,
      repo: '#',
      demo: '#',
    },
    {
      title: 'Project 3',
      description: 'Mobile-responsive portfolio website',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      year: 2024,
      repo: '#',
      demo: '#',
    },
     {
      title: 'Project 4',
      description: 'Mobile-responsive portfolio website',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      year: 2024,
      repo: '#',
      demo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="projects"
      className={`py-16 ${sectionBg}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-5xl font-bold text-center mb-12 ${titleText}`}
          variants={itemVariants}
        >
          My Projects
        </motion.h2>
        <motion.p
          className={`text-center mb-8 text-lg ${descText}`}
          variants={itemVariants}
        >
          Here's a collection of projects I've worked on, ranging from web applications to mobile apps.<br />
          Each project represents a unique challenge and learning experience.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className={`${cardBg} rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              {/* image / hero area */}
              <div className="relative h-44 md:h-56 w-full bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 overflow-hidden group">
                {/* subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                </div>
                {/* grey overlay on hover */}
                <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* overlay icons (center) - decorative - appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-xl border border-white/20"
                    initial={{ scale: 0.8, y: 10 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    🔍
                  </motion.div>
                  <motion.div
                    className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-xl border border-white/20"
                    initial={{ scale: 0.8, y: 10 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    🖼️
                  </motion.div>
                </div>
                {/* animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${titleText} leading-tight`}>{project.title}</h3>
                  <div className={`text-sm ${descText} flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full`}>
                    <FaCalendarAlt className="inline-block" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className={`${descText} mt-2 mb-6 leading-relaxed`}>{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-r from-sky-900 to-blue-900 text-sky-200 shadow-lg' : 'bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 shadow-md'}`}>
                      <span className="w-2 h-2 bg-current rounded-full"></span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode className="text-lg" /> <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-lg" /> <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        {/* CTA section: Let's Build Something Amazing */}
        <motion.div className={`mt-20 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' : 'bg-gradient-to-br from-slate-50 to-white border border-gray-200'} py-20 shadow-2xl relative overflow-hidden`} variants={itemVariants}>
          {/* background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:30px_30px]"></div>
          </div>
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <motion.h3 className={`text-4xl sm:text-5xl font-extrabold mb-6 ${titleText} leading-tight`} variants={itemVariants}>
              Let's Build Something Amazing
            </motion.h3>
            <motion.p className={`text-lg mb-10 ${descText} max-w-2xl mx-auto leading-relaxed`} variants={itemVariants}>
              I'm always excited to work on new projects and bring innovative ideas to life.
              Let's discuss your next project!
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg shadow-lg font-medium transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Start a Project"
              >
                Start a Project
              </motion.a>

              <motion.a
                href="https://github.com/swtmohit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-8 py-4 rounded-lg shadow-lg font-medium transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(107, 114, 128, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="View GitHub"
              >
                View GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;