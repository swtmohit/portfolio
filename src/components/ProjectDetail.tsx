'use client';

import { FaArrowLeft, FaCalendar, FaClock, FaUsers, FaCode, FaExternalLinkAlt, FaLock, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { ProjectType } from '@/types/project';
import { useState } from 'react';
import CustomModal from './CustomModal';

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Back to projects button */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/projects" className={`inline-flex items-center gap-2 text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero section */}
        <header className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Project type and Featured tags */}
            <div className="flex gap-3 mb-6">
              {project.type && (
                <span className={`inline-block px-3 py-1 text-sm rounded-full
                  ${isDark ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  {project.type}
                </span>
              )}
              {project.type === 'Featured' && (
                <span className={`inline-block px-3 py-1 text-sm rounded-full
                  ${isDark ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                  Featured
                </span>
              )}
            </div>

            {/* Project title */}
            <motion.h1
              className={`text-4xl sm:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>

            {/* Project description */}
            <motion.p
              className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.longDescription || project.description}
            </motion.p>

            {/* Project metadata */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <FaCalendar />
                  <span>Year</span>
                </div>
                <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.year}
                </div>
              </div>

              {project.duration && (
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <FaClock />
                    <span>Duration</span>
                  </div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.duration}
                  </div>
                </div>
              )}

              {project.teamSize && (
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <FaUsers />
                    <span>Team</span>
                  </div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.teamSize}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Action buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => setShowCodeModal(true)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  ${isDark ?
                    'bg-gray-800 text-white hover:bg-gray-700' :
                    'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } transition-colors`}
              >
                <FaCode />
                <span>View Code</span>
              </button>
              <button
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </button>
            </motion.div>

            {/* Technologies section */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div
                className="mt-12 pt-8 border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-sm font-medium
                        ${isDark ?
                          'bg-gray-800 text-blue-300 border border-gray-700' :
                          'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </header>
      </div>

      {/* Custom Modals */}
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