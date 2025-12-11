'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaExternalLinkAlt, FaCode, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
  const { theme } = useTheme();

  const sectionBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const titleText = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const descText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

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
    <section className={`py-16 ${sectionBg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-8"
        >
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`${cardBg} rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative h-44 md:h-56 w-full bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 overflow-hidden group">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                        </div>
                        <div className="absolute inset-0 bg-gray-900/40 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white shadow">
                            <span className="sr-only">View Project Details</span>
                            🔍
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`text-2xl font-bold ${titleText} leading-tight`}>{project.title}</h3>
                      {project.type && (
                        <div className={`text-xs text-center font-medium px-5 py-1 rounded-full ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-200'
                            : 'bg-slate-900 text-white'
                        }`}>
                          {project.type}
                        </div>
                      )}
                    </div>

                    <p className={`${descText} mt-2 mb-6 leading-relaxed line-clamp-2`}>{project.description}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          theme === 'dark' 
                            ? 'bg-gradient-to-r from-sky-900 to-blue-900 text-sky-200 shadow-lg' 
                            : 'bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 shadow-md'
                        }`}>
                          <span className="w-2 h-2 bg-current rounded-full"></span>
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={`text-sm ${descText} flex items-center gap-2`}>
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{project.year}</span>
                      </div>
                      {project.duration && (
                        <div className={`text-sm ${descText} flex items-center gap-2`}>
                          <span>•</span>
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className={`mt-20 rounded-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                : 'bg-gradient-to-br from-slate-50 to-white border border-gray-200'
            } py-20 shadow-2xl relative overflow-hidden`} 
            variants={itemVariants}
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:30px_30px]"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
              <motion.h3 
                className={`text-4xl sm:text-5xl font-extrabold mb-6 ${titleText} leading-tight`} 
                variants={itemVariants}
              >
                Let's Build Something Amazing
              </motion.h3>
              
              <motion.p 
                className={`text-lg mb-10 ${descText} max-w-2xl mx-auto leading-relaxed`} 
                variants={itemVariants}
              >
                I'm always excited to work on new projects and bring innovative ideas to life.
                Let's discuss your next project!
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg shadow-lg font-medium transition-all duration-200"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
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
                >
                  View GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;