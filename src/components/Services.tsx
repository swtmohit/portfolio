'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const cardTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

const Services = () => {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  const bgClass =
    theme === 'dark'
      ? 'relative bg-slate-900/80 text-white backdrop-blur-sm'
      : 'relative bg-slate-50/90 text-gray-900 backdrop-blur-sm';
  const cardBgClass =
    theme === 'dark'
      ? 'premium-card border-white/10 bg-slate-800/60 shadow-lg shadow-black/20'
      : 'premium-card border-slate-200/80 bg-white/90 shadow-lg shadow-slate-200/50';
  const cardTextClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const sectionDescriptionClass =
    theme === 'dark' ? 'text-slate-300' : 'text-slate-700';
  const cardDescriptionClass =
    theme === 'dark' ? 'text-slate-300' : 'text-slate-700';

  const services = [
    {
      title: 'Frontend Development',
      description:
        'Building responsive web applications with React, TypeScript, and modern frameworks',
      iconColor: 'text-blue-500',
      accent: 'from-blue-500/20 to-cyan-500/10',
      icon: (
        <svg
          className="mx-auto mb-4 h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description:
        'Creating clean, intuitive user interfaces with focus on user experience',
      iconColor: 'text-purple-500',
      accent: 'from-purple-500/20 to-pink-500/10',
      icon: (
        <svg
          className="mx-auto mb-4 h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
    },
    {
      title: 'Full-Stack Development',
      description:
        'Developing end-to-end solutions with React, Node.js, and cloud technologies',
      iconColor: 'text-emerald-500',
      accent: 'from-emerald-500/20 to-teal-500/10',
      icon: (
        <svg
          className="mx-auto mb-4 h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const headerTransition = reduceMotion
    ? { duration: 0 }
    : { ...cardTransition, delay: 0.05 };

  const gridTransition = reduceMotion
    ? { staggerChildren: 0, delayChildren: 0 }
    : { staggerChildren: 0.12, delayChildren: 0.15 };

  const cardHidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 36 };
  const cardVisible = {
    opacity: 1,
    y: 0,
    transition: reduceMotion ? { duration: 0 } : cardTransition,
  };

  return (
    <section className={`${bgClass} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: {
              transition: gridTransition,
            },
          }}
        >
          <motion.span
            variants={{
              hidden: cardHidden,
              visible: {
                opacity: 1,
                y: 0,
                transition: headerTransition,
              },
            }}
            className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-300"
          >
            Services
          </motion.span>
          <motion.h2
            variants={{
              hidden: cardHidden,
              visible: {
                opacity: 1,
                y: 0,
                transition: headerTransition,
              },
            }}
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
          >
            What I Do
          </motion.h2>
          <motion.p
            variants={{
              hidden: cardHidden,
              visible: {
                opacity: 1,
                y: 0,
                transition: headerTransition,
              },
            }}
            className={`text-lg leading-relaxed ${sectionDescriptionClass}`}
          >
            I combine technical expertise with creative problem-solving to deliver
            exceptional digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: gridTransition },
          }}
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: cardHidden,
                visible: cardVisible,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }
              }
              className={`group rounded-2xl p-8 ${cardBgClass} ${cardTextClass}`}
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                aria-hidden
              />
              <div className="premium-card-content">
                <motion.div
                  className={`${service.iconColor}`}
                  whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className={`text-base leading-relaxed ${cardDescriptionClass}`}>
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto mt-20 px-4 text-center md:mt-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: reduceMotion
                ? { staggerChildren: 0 }
                : { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          className="premium-card mx-auto max-w-2xl rounded-3xl p-8 md:p-10"
        >
          <div className="premium-card-content">
            <motion.h2
              variants={{
                hidden: cardHidden,
                visible: cardVisible,
              }}
              className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              variants={{
                hidden: cardHidden,
                visible: cardVisible,
              }}
              className={`mb-10 text-lg ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s discuss how we can bring your ideas to life.
            </motion.p>
            <motion.div
              variants={{
                hidden: cardHidden,
                visible: cardVisible,
              }}
            >
              <Link href="/contact">
                <motion.span
                  className="inline-flex"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <span className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-500/30">
                    <span className="relative z-10">Get in touch</span>
                    <motion.svg
                      className="relative z-10 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                      animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                      transition={
                        reduceMotion
                          ? undefined
                          : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                    {!reduceMotion && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-transparent to-fuchsia-400/30"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      />
                    )}
                  </span>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
