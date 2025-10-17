'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  const sectionClass = theme === 'dark'
    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20'
    : 'bg-white text-gray-900 py-12 md:py-20';

  const viewWorkButtonClass = theme === 'dark'
    ? 'bg-white text-blue-600 px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300'
    : 'bg-blue-600 text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300';

  const downloadResumeButtonClass = theme === 'dark'
    ? 'bg-purple-600 text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300'
    : 'bg-green-600 text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300';

  const imageBorder = theme === 'dark' ? 'border-4 border-white' : 'border-4 border-gray-200';

  const nameClass = theme === 'dark' ? 'text-cyan-400' : 'text-blue-300';

  return (
    <section className={sectionClass}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="text-left max-w-2xl mb-8 md:mb-0 ml-0 md:ml-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-3xl md:text-5xl">Hi, I'm <span className={nameClass}>Mohit...</span></span><br />
            <span className="text-xl md:text-3xl mt-4">Full-Stack Developer from India</span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Aspiring Full Stack Developer passionate about creating responsive, user-friendly, and interactive web applications.<br />
            Proficient in HTML, CSS, JavaScript, React.js, and Node.js, with a solid understanding of modern web development tools, frameworks, and best practices.
          </motion.p>
          <div className="grid grid-cols-2 gap-2 justify-items-center md:flex md:flex-row md:justify-start">
            <motion.button
              className={`${viewWorkButtonClass} flex items-center gap-2`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View My Work
            </motion.button>
            <motion.button
              className={`${downloadResumeButtonClass} flex items-center gap-2`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'resume.pdf';
                link.click();
              }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.button>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-8">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="m12 8.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z"/>
                <circle cx="18.5" cy="5.5" r="1.5"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center md:flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative group w-48 h-48 md:w-72 md:h-72">
            {/* Outer rotating border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 pointer-events-none z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </motion.div>
            {/* Inner glow */}
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 pointer-events-none z-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
            {/* Image */}
            <motion.div
              className="absolute inset-2 rounded-full overflow-hidden z-50"
              style={{ willChange: 'transform' }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/1.jpg"
                alt="Your Picture"
                width={288}
                height={288}
                className={`rounded-full w-full h-full z-50 shadow-2xl object-cover ${imageBorder} hover:shadow-3xl pointer-events-auto`}
              />
            </motion.div>
            {/* Floating particles */}
            <motion.div
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-4 h-4 bg-cyan-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-3 h-3 bg-pink-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 -right-6 md:-right-8 w-2 h-2 bg-yellow-400 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="absolute top-1/4 -left-6 md:-left-8 w-3 h-3 bg-purple-400 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;