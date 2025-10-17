'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaDesktop,
} from 'react-icons/fa';

// Small inline TechBadge component
const TechBadge: React.FC<{ icon: React.ReactNode; label: string; theme: 'light' | 'dark' }> = ({ icon, label, theme }) => {
  const base = `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium border`;
  const light = `${base} bg-white shadow-sm text-gray-700 border-gray-100`;
  const dark = `${base} bg-gray-800/30 text-gray-100 border-gray-700`;
  return (
    <div className={theme === 'dark' ? dark : light}>
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

const About = () => {
  const { theme } = useTheme();

  const sectionBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const cardBg = theme === 'dark' ? 'bg-gray-700' : 'bg-white';
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

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
      id="about"
      className={`py-16 ${sectionBg}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-5xl font-bold text-center mb-8 ${textPrimary}`}
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <motion.p
            className={`text-lg font-semibold leading-relaxed mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}
            variants={itemVariants}
          >
            I'm a Frontend-focused Full Stack Developer from India with 1+ years of experience building high-performance, scalable web applications. I specialize in React, Node.js, and TypeScript, with a passion for clean UI/UX and impactful digital products.
          </motion.p>
            <div className="flex flex-col md:flex-row gap-8 mt-16">
              <motion.div
                className="md:w-1/2 flex flex-col items-center md:items-start gap-4"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative md:block hidden">
                  <motion.img
                    src="/2.png"
                    alt="Framed Image 1"
                    className="w-72 h-72 object-cover rounded-lg shadow-2xl border-8 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-white p-2"
                    style={{ transform: 'translateX(-100px)' }}
                  />
                  <div className="absolute inset-0 rounded-lg border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 pointer-events-none" style={{ transform: 'translateX(-100px)' }}></div>
                </div>
                <div className="relative md:hidden">
                  <motion.img
                    src="/2.png"
                    alt="Framed Image 1"
                    className="w-64 h-64 object-cover rounded-lg shadow-2xl border-8 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-white p-2 mx-auto"
                  />
                  <div className="absolute inset-0 rounded-lg border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 pointer-events-none mx-auto"></div>
                </div>
                <div className="relative md:block hidden">
                  <motion.img
                    src="/3.png"
                    alt="Framed Image 2"
                    className="w-72 h-72 object-cover rounded-lg shadow-2xl border-8 border-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-white p-2"
                    style={{ transform: 'translateX(60px)' }}
                  />
                  <div className="absolute inset-0 rounded-lg border-4 border-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 pointer-events-none" style={{ transform: 'translateX(60px)' }}></div>
                </div>
                <div className="relative md:hidden">
                  <motion.img
                    src="/3.jpg"
                    alt="Framed Image 2"
                    className="w-64 h-64 object-cover rounded-lg shadow-2xl border-8 border-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-white p-2 mx-auto"
                  />
                  <div className="absolute inset-0 rounded-lg border-4 border-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 pointer-events-none mx-auto"></div>
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2 text-center md:text-left"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className={`text-3xl font-bold mb-6 ${textPrimary}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  My Journey
                </motion.h3>
                <motion.p
                  className={`${textSecondary} leading-relaxed text-lg mb-8`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My journey in web development began during my college years when I built my first website. What started as curiosity soon turned into a passion for creating digital experiences that solve real-world problems.
                  <br /><br />
                  Over the years, I’ve had the opportunity to work with startups, agencies, and established companies, helping them build robust web applications and mobile solutions. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices.
                  <br /><br />
                  When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </motion.p>
                <div className="flex gap-4 mt-6">
                  <motion.div
                    className={`${cardBg} p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600`}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className={`${textPrimary} text-center text-lg font-semibold`}>🧩 6+<br />Projects Completed</p>
                  </motion.div>
                  <motion.div
                    className={`${cardBg} p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600`}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className={`${textPrimary} text-center text-lg font-semibold`}>⏳ 3+<br />Years Experience</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
        </div>
        {/* Tech Stack Section */}
        <motion.section className="mt-20" variants={itemVariants}>
          <motion.h3 className={`text-3xl font-bold text-center mb-4 ${textPrimary}`}>
            Tech Stack
          </motion.h3>
          <p className={`text-center mb-8 ${textSecondary}`}>Here are the tools and technologies I use to bring ideas to life</p>

          {/* Tech stack data */}
          {/** Define a small TechBadge component for consistent rendering */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/** Left column groups */}
            <div className="space-y-6">
              <div className={`${cardBg} p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-600 shadow-none' : 'border-gray-100 shadow-sm'} transition-shadow hover:shadow-md` }>
                <h4 className={`font-semibold mb-4 ${textPrimary}`}>Frontend</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaHtml5 className="w-4 h-4 text-orange-500" />} label="HTML" theme={theme} />
                  <TechBadge icon={<FaCss3Alt className="w-4 h-4 text-blue-500" />} label="CSS" theme={theme} />
                  <TechBadge icon={<FaJsSquare className="w-4 h-4 text-yellow-400" />} label="JavaScript" theme={theme} />
                  <TechBadge icon={<FaReact className="w-4 h-4 text-sky-400" />} label="ReactJS" theme={theme} />
                  <TechBadge icon={<FaJsSquare className="w-4 h-4 text-blue-600" />} label="TypeScript" theme={theme} />
                  <TechBadge icon={<FaTools className="w-4 h-4 text-orange-300" />} label="MUI" theme={theme} />
                </div>
              </div>

              <div className={`${cardBg} p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-600 shadow-none' : 'border-gray-100 shadow-sm'} transition-shadow hover:shadow-md` }>
                <h4 className={`font-semibold mb-4 ${textPrimary}`}>Database & Cloud</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaDatabase className="text-indigo-400" />} label="GraphQL" theme={theme} />
                  <TechBadge icon={<FaDatabase className="text-green-400" />} label="MongoDB" theme={theme} />
                  <TechBadge icon={<FaDatabase className="text-blue-400" />} label="MySQL" theme={theme} />
                  <TechBadge icon={<FaServer className="text-pink-400" />} label="Kafka" theme={theme} />
                </div>
              </div>
            </div>

            {/** Center column groups */}
            <div className="space-y-6">
              <div className={`${cardBg} p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-600 shadow-none' : 'border-gray-100 shadow-sm'} transition-shadow hover:shadow-md` }>
                <h4 className={`font-semibold mb-4 ${textPrimary}`}>State Management</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaTools className="text-violet-400" />} label="Redux" theme={theme} />
                  <TechBadge icon={<FaTools className="text-sky-400" />} label="React Query" theme={theme} />
                  <TechBadge icon={<FaTools className="text-amber-400" />} label="Formik" theme={theme} />
                  <TechBadge icon={<FaTools className="text-green-300" />} label="Yup" theme={theme} />
                </div>
              </div>

              <div className={`${cardBg} p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-600 shadow-none' : 'border-gray-100 shadow-sm'} transition-shadow hover:shadow-md` }>
                <h4 className={`font-semibold mb-4 ${textPrimary}`}>DevOps & Tools</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaDocker className="text-sky-500" />} label="Docker" theme={theme} />
                  <TechBadge icon={<FaAws className="text-amber-400" />} label="AWS Lambda" theme={theme} />
                  <TechBadge icon={<FaGitAlt className="text-red-500" />} label="Git" theme={theme} />
                  <TechBadge icon={<FaTools className="text-indigo-400" />} label="VS Code" theme={theme} />
                </div>
              </div>
            </div>

            {/** Right column groups */}
            <div className="space-y-6">
              <div className={`${cardBg} p-6 rounded-xl border ${theme === 'dark' ? 'border-gray-600 shadow-none' : 'border-gray-100 shadow-sm'} transition-shadow hover:shadow-md` }>
                <h4 className={`font-semibold mb-4 ${textPrimary}`}>Backend & Mobile</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaNodeJs className="text-green-500" />} label="NodeJS" theme={theme} />
                  <TechBadge icon={<FaServer className="text-pink-400" />} label="Express.JS" theme={theme} />
                  <TechBadge icon={<FaDesktop className="text-indigo-400" />} label="ElectronJS" theme={theme} />
                  <TechBadge icon={<FaMobileAlt className="text-blue-400" />} label="React Native" theme={theme} />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.section>
  );
};

export default About;