'use client';

import {
  FaArrowLeft,
  FaCalendar,
  FaClock,
  FaUsers,
  FaCode,
  FaExternalLinkAlt,
  FaLock,
  FaGlobe,
} from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { ProjectType } from '@/types/project';
import { useState } from 'react';
import CustomModal from './CustomModal';
import PageShell from '@/components/PageShell';

const ease = [0.22, 1, 0.36, 1] as const;

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const reduceMotion = useReducedMotion();
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease },
    },
  };

  const techContainer = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  const techItem = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.35, ease },
    },
  };

  return (
    <>
      <PageShell>
        <div
          className={`relative z-10 min-h-screen ${isDark ? 'bg-slate-900/75' : 'bg-slate-50/85'} backdrop-blur-sm`}
        >
          <div className="container mx-auto px-4 py-6">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease }}
            >
              <Link
                href="/projects"
                className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-blue-400 hover:text-blue-300'
                    : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <FaArrowLeft className="shrink-0" />
                <span>Back to Projects</span>
              </Link>
            </motion.div>
          </div>

          <header className="container mx-auto px-4 pb-16">
            <motion.div
              className={`premium-card mx-auto max-w-4xl rounded-3xl p-6 md:p-8 ${
                isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200/80 bg-white/90'
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-3">
                {project.type && (
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm ${
                      isDark
                        ? 'bg-blue-900/80 text-blue-200'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {project.type}
                  </span>
                )}
                {project.type === 'Featured' && (
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm ${
                      isDark
                        ? 'bg-yellow-900/80 text-yellow-200'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    Featured
                  </span>
                )}
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className={`mb-6 text-4xl font-bold sm:text-5xl ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`mb-8 text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {project.longDescription || project.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                <div>
                  <div className="mb-1 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendar />
                    <span>Year</span>
                  </div>
                  <div
                    className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
                  >
                    {project.year}
                  </div>
                </div>

                {project.duration && (
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <FaClock />
                      <span>Duration</span>
                    </div>
                    <div
                      className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                      {project.duration}
                    </div>
                  </div>
                )}

                {project.teamSize && (
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <FaUsers />
                      <span>Team</span>
                    </div>
                    <div
                      className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                      {project.teamSize}
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  type="button"
                  onClick={() => setShowCodeModal(true)}
                  className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-colors ${
                    isDark
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-white text-gray-900 shadow-md ring-1 ring-slate-200 hover:bg-slate-50'
                  }`}
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <FaCode />
                  <span>View Code</span>
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setShowDemoModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition-colors hover:from-blue-500 hover:to-violet-500"
                  whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </motion.button>
              </motion.div>

              {project.technologies && project.technologies.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className={`mt-12 border-t pt-8 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
                >
                  <h2
                    className={`mb-6 text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                  >
                    Technologies Used
                  </h2>
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={techContainer}
                  >
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={techItem}
                        whileHover={
                          reduceMotion ? undefined : { y: -2, scale: 1.03 }
                        }
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${
                          isDark
                            ? 'border-slate-600 bg-slate-800/80 text-blue-300'
                            : 'border-blue-200 bg-blue-50 text-blue-700'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </header>
        </div>
      </PageShell>

      <CustomModal
        isOpen={showCodeModal}
        onClose={() => setShowCodeModal(false)}
        title="Private Repository"
        message="You do not have permission to view the code. This is a private repository. To access it, please contact the author, Mohit Singh."
        icon={<FaLock />}
      />

      <CustomModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        title="Production Project"
        message="This project is no longer available as a demo. It is now running in production. For the live URL, please contact the owner."
        icon={<FaGlobe />}
      />
    </>
  );
}
