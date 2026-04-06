'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { motion, useReducedMotion } from 'framer-motion';
import PageShell from '@/components/PageShell';

const ease = [0.22, 1, 0.36, 1] as const;

const Projects = () => {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  const sectionBg =
    theme === 'dark'
      ? 'relative z-10 bg-slate-900/70 py-16 backdrop-blur-sm'
      : 'relative z-10 bg-white/80 py-16 backdrop-blur-sm';
  const cardBg =
    theme === 'dark'
      ? 'premium-card border border-white/10 bg-slate-800/55 shadow-xl shadow-black/20'
      : 'premium-card border border-slate-200/90 bg-white/95 shadow-xl shadow-slate-200/40';
  const titleText = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const descText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease },
    },
  };

  return (
    <PageShell>
      <section className={sectionBg}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.span
              variants={itemVariants}
              className="flex justify-center"
            >
              <span
                className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
                  theme === 'dark'
                    ? 'border-violet-500/35 bg-violet-500/10 text-violet-200'
                    : 'border-violet-200 bg-violet-50 text-violet-800'
                }`}
              >
                Portfolio
              </span>
            </motion.span>
            <motion.h2
              className={`mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl ${titleText}`}
              variants={itemVariants}
            >
              My Projects
            </motion.h2>

            <motion.p
              className={`mb-10 text-center text-lg leading-relaxed ${descText}`}
              variants={itemVariants}
            >
              Here&apos;s a collection of projects I&apos;ve worked on, ranging from web
              applications to mobile apps.
              <br />
              Each project represents a unique challenge and learning experience.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={gridVariants}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -10,
                          transition: { type: 'spring', stiffness: 380, damping: 22 },
                        }
                  }
                  className={`group/card overflow-hidden rounded-2xl ${cardBg}`}
                >
                  <Link href={`/projects/${project.id}`} className="block">
                    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 md:h-56">
                      {project.image ? (
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover"
                          whileHover={
                            reduceMotion ? undefined : { scale: 1.05 }
                          }
                          transition={{ duration: 0.45, ease }}
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
                          </div>
                          <div className="absolute inset-0 bg-gray-900/40 opacity-0 transition-opacity duration-300 md:group-hover/card:opacity-100" />
                          <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow backdrop-blur">
                              <span className="sr-only">View Project Details</span>
                              🔍
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="premium-card-content p-6">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <h3
                          className={`text-2xl font-bold leading-tight ${titleText}`}
                        >
                          {project.title}
                        </h3>
                        {project.type && (
                          <div
                            className={`shrink-0 rounded-full px-4 py-1 text-center text-xs font-medium ${
                              theme === 'dark'
                                ? 'bg-slate-700 text-gray-200'
                                : 'bg-slate-900 text-white'
                            }`}
                          >
                            {project.type}
                          </div>
                        )}
                      </div>

                      <p
                        className={`mb-6 mt-2 line-clamp-2 leading-relaxed ${descText}`}
                      >
                        {project.description}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-3">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                              theme === 'dark'
                                ? 'bg-gradient-to-r from-sky-900/80 to-blue-900/80 text-sky-200 shadow-md'
                                : 'bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 shadow-sm'
                            }`}
                          >
                            <span className="h-2 w-2 rounded-full bg-current" />
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span
                            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                              theme === 'dark'
                                ? 'bg-slate-700 text-gray-300'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <div
                          className={`flex items-center gap-2 text-sm ${descText}`}
                        >
                          <FaCalendarAlt className="text-blue-500" />
                          <span>{project.year}</span>
                        </div>
                        {project.duration && (
                          <div
                            className={`flex items-center gap-2 text-sm ${descText}`}
                          >
                            <span aria-hidden>•</span>
                            <span>{project.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={`relative mt-20 overflow-hidden rounded-2xl py-16 shadow-2xl md:py-20 ${
                theme === 'dark'
                  ? 'premium-card border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-950/80'
                  : 'premium-card border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white'
              }`}
              variants={itemVariants}
            >
              <div className="absolute inset-0 opacity-[0.07]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[length:30px_30px]" />
              </div>

              <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
                <motion.h3
                  className={`mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl ${titleText}`}
                  variants={itemVariants}
                >
                  Let&apos;s Build Something Amazing
                </motion.h3>

                <motion.p
                  className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed ${descText}`}
                  variants={itemVariants}
                >
                  I&apos;m always excited to work on new projects and bring innovative
                  ideas to life. Let&apos;s discuss your next project!
                </motion.p>

                <motion.div
                  className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                  variants={itemVariants}
                >
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-medium text-white shadow-lg shadow-blue-500/25 transition-colors hover:from-blue-500 hover:to-violet-500"
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.04, y: -2 }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    Start a Project
                  </motion.a>

                  <motion.a
                    href="https://github.com/swtmohit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 px-8 py-4 font-medium text-white shadow-lg transition-colors hover:from-slate-600 hover:to-slate-800"
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.04, y: -2 }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    View GitHub
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default Projects;
