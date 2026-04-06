'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import PageShell from '@/components/PageShell';
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
  FaSearch,
  FaGem,
  FaComment,
  FaMousePointer,
  FaCode,
  FaHeart,
} from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1] as const;
const cardTransition = { duration: 0.55, ease };

const TechBadge: React.FC<{
  icon: React.ReactNode;
  label: string;
  theme: 'light' | 'dark';
  reduceMotion: boolean | null;
}> = ({ icon, label, theme, reduceMotion }) => {
  const base = `premium-card flex items-center gap-3 rounded-lg border px-4 py-2 text-sm font-medium`;
  const light = `${base} border-gray-100 bg-white text-gray-700 shadow-sm`;
  const dark = `${base} border-gray-700 bg-gray-800/30 text-gray-100`;
  return (
    <motion.div
      className={theme === 'dark' ? dark : light}
      whileHover={
        reduceMotion ? undefined : { scale: 1.02, y: -2 }
      }
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
    >
      <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
      <span>{label}</span>
    </motion.div>
  );
};

const About = () => {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  const sectionBg =
    theme === 'dark'
      ? 'relative z-10 bg-slate-900/75 py-16 backdrop-blur-sm'
      : 'relative z-10 bg-slate-50/85 py-16 backdrop-blur-sm';
  const cardBg =
    theme === 'dark'
      ? 'premium-card border border-white/10 bg-slate-800/60 shadow-lg shadow-black/15'
      : 'premium-card border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/40';
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

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
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : cardTransition,
    },
  };

  const gridReveal = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const gridItem = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : cardTransition,
    },
  };

  return (
    <PageShell>
      <motion.section
        id="about"
        className={sectionBg}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.span
            variants={itemVariants}
            className="mb-4 flex justify-center"
          >
            <span
              className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest ${
                theme === 'dark'
                  ? 'border-cyan-500/35 bg-cyan-500/10 text-cyan-300'
                  : 'border-blue-200 bg-blue-50 text-blue-700'
              }`}
            >
              About
            </span>
          </motion.span>
          <motion.h2
            className={`mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl ${textPrimary}`}
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <div className="mx-auto max-w-6xl">
            <motion.p
              className={`mb-6 text-center text-lg font-semibold leading-relaxed ${textSecondary}`}
              variants={itemVariants}
            >
              I&apos;m a Frontend-focused Full Stack Developer from India with 1+
              years of experience building high-performance, scalable web
              applications. I specialize in React, Node.js, and TypeScript, with a
              passion for clean UI/UX and impactful digital products.
            </motion.p>
            <div className="mt-16 flex flex-col gap-8 md:flex-row">
              <motion.div
                className="flex flex-col items-center gap-4 md:w-1/2 md:items-start"
                variants={itemVariants}
              >
                <div className="relative hidden md:block">
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-40 blur-lg transition-opacity duration-500"
                    style={{ transform: 'translateX(-100px)' }}
                  />
                  <motion.img
                    src="/2.png"
                    alt="Framed Image 1"
                    className="relative z-10 h-72 w-72 -translate-x-[100px] rounded-xl border border-white/20 object-cover shadow-2xl dark:border-slate-700/50"
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.02, rotate: -0.5 }
                    }
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  />
                </div>
                <div className="relative md:hidden">
                  <div className="absolute inset-0 mx-auto h-64 w-64 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-40 blur-lg transition-opacity duration-500" />
                  <motion.img
                    src="/2.png"
                    alt="Framed Image 1"
                    className="relative z-10 mx-auto h-64 w-64 rounded-xl border border-white/20 object-cover shadow-2xl dark:border-slate-700/50"
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  />
                </div>
                <div className="relative hidden md:block">
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-40 blur-lg transition-opacity duration-500"
                    style={{ transform: 'translateX(60px)' }}
                  />
                  <motion.img
                    src="/3.png"
                    alt="Framed Image 2"
                    className="relative z-10 h-72 w-72 translate-x-[60px] rounded-xl border border-white/20 object-cover shadow-2xl dark:border-slate-700/50"
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.02, rotate: 0.5 }
                    }
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  />
                </div>
                <div className="relative md:hidden">
                  <div className="absolute inset-0 mx-auto h-64 w-64 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-40 blur-lg transition-opacity duration-500" />
                  <motion.img
                    src="/3.png"
                    alt="Framed Image 2"
                    className="relative z-10 mx-auto h-64 w-64 rounded-xl border border-white/20 object-cover shadow-2xl dark:border-slate-700/50"
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="text-center md:w-1/2 md:text-left"
                variants={itemVariants}
                whileHover={
                  reduceMotion ? undefined : { x: 4 }
                }
                transition={{ type: 'spring', stiffness: 200, damping: 28 }}
              >
                <h3 className={`mb-6 text-3xl font-bold ${textPrimary}`}>
                  My Journey
                </h3>
                <p className={`mb-8 text-lg leading-relaxed ${textSecondary}`}>
                  My journey in web development began during my college years when
                  I built my first website. What started as curiosity soon turned
                  into a passion for creating digital experiences that solve
                  real-world problems.
                  <br />
                  <br />
                  Over the years, I&apos;ve had the opportunity to work with
                  startups, agencies, and established companies, helping them build
                  robust web applications and mobile solutions. I believe in
                  writing clean, maintainable code and staying up-to-date with the
                  latest technologies and best practices.
                  <br />
                  <br />
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
                <div className="mt-6 flex gap-4">
                  <motion.div
                    className={`rounded-xl border p-3 shadow-lg ${cardBg} ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                    }`}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 22 } }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <p className={`text-center text-lg font-semibold ${textPrimary}`}>
                      🧩 3+
                      <br />
                      Projects Completed
                    </p>
                  </motion.div>
                  <motion.div
                    className={`rounded-xl border p-3 shadow-lg ${cardBg} ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
                    }`}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 22 } }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <p className={`text-center text-lg font-semibold ${textPrimary}`}>
                      ⏳ 1+
                      <br />
                      Years Experience
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.section className="relative z-10 mt-20" variants={itemVariants}>
            <motion.h3
              className={`mb-4 text-center text-3xl font-bold ${textPrimary}`}
            >
              Tech Stack
            </motion.h3>
            <p className={`mb-10 text-center ${textSecondary}`}>
              Here are the tools and technologies I use to bring ideas to life
            </p>

            <motion.div
              className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={gridReveal}
            >
              <motion.div
                variants={gridItem}
                whileHover={
                  reduceMotion ? undefined : { y: -4 }
                }
                className={`rounded-2xl p-6 ${cardBg}`}
              >
                <h4 className={`mb-4 font-semibold ${textPrimary}`}>Frontend</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaHtml5 className="h-4 w-4 text-orange-500" />} label="HTML" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaCss3Alt className="h-4 w-4 text-blue-500" />} label="CSS" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaJsSquare className="h-4 w-4 text-yellow-400" />} label="JavaScript" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaReact className="h-4 w-4 text-sky-400" />} label="ReactJS" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaJsSquare className="h-4 w-4 text-blue-600" />} label="TypeScript" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaTools className="h-4 w-4 text-orange-300" />} label="MUI" theme={theme} reduceMotion={reduceMotion} />
                </div>
              </motion.div>

              <motion.div
                variants={gridItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`rounded-2xl p-6 ${cardBg}`}
              >
                <h4 className={`mb-4 font-semibold ${textPrimary}`}>State Management</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaTools className="text-violet-400" />} label="Redux" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaTools className="text-sky-400" />} label="React Query" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaTools className="text-amber-400" />} label="Formik" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaTools className="text-green-300" />} label="Yup" theme={theme} reduceMotion={reduceMotion} />
                </div>
              </motion.div>

              <motion.div
                variants={gridItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`rounded-2xl p-6 ${cardBg}`}
              >
                <h4 className={`mb-4 font-semibold ${textPrimary}`}>Backend & Mobile</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaNodeJs className="text-green-500" />} label="NodeJS" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaServer className="text-pink-400" />} label="Express.JS" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaDesktop className="text-indigo-400" />} label="ElectronJS" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaMobileAlt className="text-blue-400" />} label="React Native" theme={theme} reduceMotion={reduceMotion} />
                </div>
              </motion.div>

              <motion.div
                variants={gridItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`rounded-2xl p-6 ${cardBg}`}
              >
                <h4 className={`mb-4 font-semibold ${textPrimary}`}>Database & Cloud</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaDatabase className="text-green-400" />} label="MongoDB" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaDatabase className="text-blue-400" />} label="MySQL" theme={theme} reduceMotion={reduceMotion} />
                </div>
              </motion.div>

              <motion.div
                variants={gridItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`rounded-2xl p-6 ${cardBg}`}
              >
                <h4 className={`mb-4 font-semibold ${textPrimary}`}>DevOps & Tools</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaDocker className="text-sky-500" />} label="Docker" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaAws className="text-amber-400" />} label="AWS Lambda" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaGitAlt className="text-red-500" />} label="Git" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaTools className="text-indigo-400" />} label="VS Code" theme={theme} reduceMotion={reduceMotion} />
                </div>
              </motion.div>

              <motion.div
                variants={gridItem}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className={`rounded-2xl p-6 ${cardBg}`}
              >
                <h4 className={`mb-4 font-semibold ${textPrimary}`}>AI</h4>
                <div className="grid grid-cols-2 gap-3">
                  <TechBadge icon={<FaSearch className="text-purple-500" />} label="Perplexity AI" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaGem className="text-blue-500" />} label="Gemini AI" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaComment className="text-green-500" />} label="ChatGPT AI" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaMousePointer className="text-orange-500" />} label="Cursor AI" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaCode className="text-pink-500" />} label="Kilo AI" theme={theme} reduceMotion={reduceMotion} />
                  <TechBadge icon={<FaHeart className="text-indigo-500" />} label="Lovable AI" theme={theme} reduceMotion={reduceMotion} />
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section className="relative z-10 mt-20" variants={itemVariants}>
            <motion.h3 className={`mb-4 text-center text-3xl font-bold ${textPrimary}`}>
              Experience
            </motion.h3>
            <p className={`mb-6 text-center ${textSecondary}`}>
              Versatile software developer with proven experience working independently and collaboratively.
            </p>
            <p className={`mb-12 text-center ${textSecondary}`}>
              Leading teams in the absence of senior developers, and delivering scalable, high-performance web applications with clean, maintainable code.
            </p>

            <motion.div
              className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={gridReveal}
            >
              <motion.div
                variants={gridItem}
                className="flex justify-start md:col-span-3 md:justify-end"
              >
                <div className="inline-block rounded-full bg-blue-900/60 px-6 py-2 text-white">
                  July 2024 - December 2024
                </div>
              </motion.div>
              <motion.div variants={gridItem} className="md:col-span-9">
                <div className={`rounded-xl border p-6 shadow-md ${cardBg} ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
                  <h4 className={`text-xl font-bold ${textPrimary}`}>
                    Junior Full Stack Developer (Internship)
                  </h4>
                  <p className={`mb-3 text-sm ${theme === 'dark' ? 'text-cyan-300' : 'text-blue-600'}`}>
                    Technosters Technologies OPC Pvt. Ltd.
                  </p>
                  <p className={textSecondary}>
                    Contributed to the design and development of a fully functional e-commerce platform along with a dynamic admin panel using React.js, Material-UI, and Tailwind CSS. Independently delivered a responsive and intuitive user experience, optimizing frontend performance by 45%. Developed modular and reusable backend APIs, ensuring seamless integration between client and server for enhanced scalability and maintainability. Conducted thorough API testing using Postman and maintained backend services to guarantee reliability and efficiency.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={gridItem}
                className="flex justify-start md:col-span-3 md:justify-end"
              >
                <div className="inline-block rounded-full bg-blue-900/60 px-6 py-2 text-white">
                  Jan 2025 - Present
                </div>
              </motion.div>
              <motion.div variants={gridItem} className="md:col-span-9">
                <div className={`rounded-xl border p-6 shadow-md ${cardBg} ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
                  <h4 className={`text-xl font-bold ${textPrimary}`}>Full Stack Developer</h4>
                  <p className={`mb-3 text-sm ${theme === 'dark' ? 'text-cyan-300' : 'text-blue-600'}`}>
                    Technosters Technologies OPC Pvt. Ltd.
                  </p>
                  <p className={textSecondary}>
                    Played a key role in developing and optimizing internal tools by designing fully responsive and user-friendly interfaces. Built robust, modular REST APIs integrated with MongoDB to ensure efficient data handling and seamless performance. Collaborated closely in Agile sprints, contributing to feature planning, code reviews, and detailed technical documentation to maintain development standards and accelerate delivery timelines.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.section>
    </PageShell>
  );
};

export default About;
