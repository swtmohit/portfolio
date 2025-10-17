'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

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
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Project 2',
      description: 'E-commerce platform with payment integration',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    },
    {
      title: 'Project 3',
      description: 'Mobile-responsive portfolio website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
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
          className={`text-3xl font-bold text-center mb-12 ${titleText}`}
          variants={itemVariants}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${cardBg} rounded-lg shadow-md p-6`}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 }
              }}
            >
              <h3 className={`text-xl font-semibold mb-3 ${titleText}`}>{project.title}</h3>
              <p className={`${descText} mb-4`}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className={`${theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;