'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiDocker, SiGithubcopilot, SiTailwindcss } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Hero = () => {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 22, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 22, mass: 0.4 });
  const parallaxX = useTransform(smoothX, [0, 1], [18, -18]);
  const parallaxY = useTransform(smoothY, [0, 1], [14, -14]);
  const parallaxXInvert = useTransform(parallaxX, (v) => -v * 0.85);
  const parallaxYInvert = useTransform(parallaxY, (v) => -v * 0.85);

  const [text, setText] = useState('');
  const fullText = "Full-Stack Developer from India";

  const easeOut = [0.22, 1, 0.36, 1] as const;
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.11, delayChildren: 0.08 },
    },
  };
  const itemVariants = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 22, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: easeOut },
    },
  };

  const handleHeroPointer = (e: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  };

  const resetParallax = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Developer-themed background for dark mode
  const sectionClass = theme === 'dark'
    ? 'relative bg-slate-950 text-white py-12 md:py-20 overflow-hidden'
    : 'bg-white text-gray-900 py-12 md:py-20 relative overflow-hidden';

  // Grid pattern for background
  const GridBackground = () => (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>
    </div>
  );

  const viewWorkButtonClass = theme === 'dark'
    ? 'bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 backdrop-blur-sm'
    : 'bg-blue-600 text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300';

  const downloadResumeButtonClass = theme === 'dark'
    ? 'bg-purple-500/10 border border-purple-500/50 text-purple-400 px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 backdrop-blur-sm'
    : 'bg-green-600 text-white px-3 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300';

  const imageBorder = theme === 'dark' ? 'border-4 border-slate-800' : 'border-4 border-gray-200';

  const nameClass = theme === 'dark' ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500' : 'text-blue-600';

  // Floating code elements
  const FloatingElement = ({ children, delay, x, y }: { children: React.ReactNode, delay: number, x: number, y: number }) => (
    <motion.div
      className="absolute z-0 hidden select-none font-mono text-4xl font-bold text-slate-700/20 md:block"
      initial={{ opacity: 0, x, y }}
      animate={
        reduceMotion
          ? { opacity: 0.12, x, y }
          : {
              opacity: [0.1, 0.28, 0.1],
              y: [y, y - 20, y],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 4,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
    >
      {children}
    </motion.div>
  );

  // Wandering Icon Component
  const WanderingIcon = ({
    children,
    className,
    color,
    moveX = [0, 20, -20, 0],
    moveY = [0, -20, 20, 0],
    duration = 5,
    delay = 0,
    onClick
  }: {
    children: React.ReactNode,
    className: string,
    color: string,
    moveX?: number[],
    moveY?: number[],
    duration?: number,
    delay?: number,
    onClick?: () => void
  }) => (
    <motion.div
      className={`absolute ${className} w-10 h-10 md:w-14 md:h-14 ${theme === 'dark'
          ? 'bg-slate-800/40 border-slate-700/50'
          : 'bg-white/80 border-slate-200/60 shadow-sm'
        } backdrop-blur-sm rounded-full flex items-center justify-center border shadow-lg z-0 ${onClick ? 'cursor-pointer hover:opacity-75' : ''}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={
        reduceMotion
          ? { opacity: 0.45, scale: 1, x: 0, y: 0, rotate: 0 }
          : {
              opacity: 0.5,
              scale: 1,
              x: moveX,
              y: moveY,
              rotate: [0, 10, -10, 0],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.35 }
          : {
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              x: { duration, repeat: Infinity, ease: 'easeInOut', delay },
              y: { duration, repeat: Infinity, ease: 'easeInOut', delay },
              rotate: {
                duration: duration * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
              },
            }
      }
      onClick={onClick}
    >
      <div className={`${color} text-xl md:text-3xl`}>{children}</div>
    </motion.div>
  );

  const ringInnerClass =
    theme === 'dark' ? 'bg-slate-950' : 'bg-white';

  return (
    <section
      ref={sectionRef}
      className={sectionClass}
      onPointerMove={handleHeroPointer}
      onPointerLeave={resetParallax}
    >
      {theme === 'dark' ? (
        <GridBackground />
      ) : (
        <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-1/2 top-0 -z-10 m-auto h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-blue-400/15 blur-[90px]" />
        </div>
      )}

      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute left-[12%] top-[22%] z-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/10"
          style={{ x: parallaxX, y: parallaxY }}
          aria-hidden
        />
      )}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute bottom-[18%] right-[10%] z-0 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/10"
          style={{ x: parallaxXInvert, y: parallaxYInvert }}
          aria-hidden
        />
      )}

      {/* Full Width Wandering Icons Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Side Cluster */}
        <WanderingIcon
          className="top-[10%] left-[5%]"
          color={theme === 'dark' ? "text-yellow-400" : "text-yellow-600"}
          moveX={[0, 120, -80, 150, 0]}
          moveY={[0, 80, -120, 50, 0]}
          duration={18}
          delay={0}
        >
          <span className="font-bold text-xs md:text-sm">JS</span>
        </WanderingIcon>

        <WanderingIcon
          className="top-[25%] left-[15%]"
          color={theme === 'dark' ? "text-blue-500" : "text-blue-600"}
          moveX={[0, -100, 140, -50, 0]}
          moveY={[0, 150, -80, 120, 0]}
          duration={22}
          delay={2}
        >
          <FaReact />
        </WanderingIcon>

        <WanderingIcon
          className="top-[45%] left-[8%]"
          color={theme === 'dark' ? "text-orange-500" : "text-orange-600"}
          moveX={[0, 180, -60, 100, 0]}
          moveY={[0, -100, 150, -40, 0]}
          duration={25}
          delay={1}
        >
          <FaHtml5 />
        </WanderingIcon>

        <WanderingIcon
          className="bottom-[20%] left-[12%]"
          color={theme === 'dark' ? "text-blue-600" : "text-blue-700"}
          moveX={[0, -150, 80, -120, 0]}
          moveY={[0, 100, -180, 60, 0]}
          duration={20}
          delay={3}
        >
          <FaCss3Alt />
        </WanderingIcon>

        <WanderingIcon
          className="bottom-[10%] left-[5%]"
          color={theme === 'dark' ? "text-blue-600" : "text-blue-700"}
          moveX={[0, 100, -140, 60, 0]}
          moveY={[0, -120, 80, -100, 0]}
          duration={19}
          delay={0.5}
        >
          <span className="font-bold text-xs md:text-sm">TS</span>
        </WanderingIcon>

        {/* Center/Top/Bottom Scattered */}
        <WanderingIcon
          className="top-[5%] left-[35%]"
          color={theme === 'dark' ? "text-green-600" : "text-green-700"}
          moveX={[0, 200, -150, 100, 0]}
          moveY={[0, 50, -80, 120, 0]}
          duration={28}
          delay={4}
        >
          <FaNodeJs />
        </WanderingIcon>

        <WanderingIcon
          className="bottom-[5%] left-[40%]"
          color={theme === 'dark' ? "text-purple-600" : "text-purple-700"}
          moveX={[0, -180, 120, -60, 0]}
          moveY={[0, -100, 150, -80, 0]}
          duration={30}
          delay={2.5}
        >
          <FaBootstrap />
        </WanderingIcon>

        <WanderingIcon
          className="top-[8%] right-[40%]"
          color={theme === 'dark' ? "text-white" : "text-slate-900"}
          moveX={[0, 150, -120, 80, 0]}
          moveY={[0, 100, -150, 60, 0]}
          duration={26}
          delay={1.5}
          onClick={() => window.open('https://github.com/swtmohit', '_blank')}
        >
          <FaGithub />
        </WanderingIcon>

        <WanderingIcon
          className="bottom-[8%] right-[35%]"
          color={theme === 'dark' ? "text-blue-400" : "text-blue-600"}
          moveX={[0, -120, 180, -100, 0]}
          moveY={[0, -150, 100, -80, 0]}
          duration={24}
          delay={3.5}
        >
          <SiDocker />
        </WanderingIcon>

        {/* Far Right Strip */}
        <WanderingIcon
          className="top-[15%] right-[5%]"
          color={theme === 'dark' ? "text-cyan-400" : "text-cyan-600"}
          moveX={[0, -100, 80, -150, 0]}
          moveY={[0, 180, -60, 120, 0]}
          duration={27}
          delay={0.8}
        >
          <SiTailwindcss />
        </WanderingIcon>

        <WanderingIcon
          className="top-[40%] right-[2%]"
          color={theme === 'dark' ? "text-green-500" : "text-green-600"}
          moveX={[0, -150, 100, -80, 0]}
          moveY={[0, 120, -180, 50, 0]}
          duration={29}
          delay={2.2}
        >
          <SiMongodb />
        </WanderingIcon>

        <WanderingIcon
          className="bottom-[30%] right-[5%]"
          color={theme === 'dark' ? "text-blue-300" : "text-blue-600"}
          moveX={[0, -80, 150, -120, 0]}
          moveY={[0, -100, 80, -150, 0]}
          duration={25}
          delay={1.2}
        >
          <SiMysql />
        </WanderingIcon>

        <WanderingIcon
          className="bottom-[10%] right-[2%]"
          color={theme === 'dark' ? "text-blue-500" : "text-blue-600"}
          moveX={[0, -120, 60, -180, 0]}
          moveY={[0, -80, 150, -100, 0]}
          duration={23}
          delay={4.5}
        >
          <VscVscode />
        </WanderingIcon>

        <WanderingIcon
          className="top-[50%] left-[45%]"
          color={theme === 'dark' ? "text-white" : "text-slate-900"}
          moveX={[0, 150, -150, 100, 0]}
          moveY={[0, -150, 150, -100, 0]}
          duration={32}
          delay={3.8}
        >
          <SiGithubcopilot />
        </WanderingIcon>
      </div>

      {/* Floating Code Elements for Developer Theme */}
      {theme === 'dark' && (
        <>
          <FloatingElement delay={0} x={50} y={100}>&lt;/&gt;</FloatingElement>
          <FloatingElement delay={1} x={800} y={50}>{`{ }`}</FloatingElement>
          <FloatingElement delay={2} x={100} y={400}>const</FloatingElement>
          <FloatingElement delay={1.5} x={900} y={500}>npm</FloatingElement>
        </>
      )}

      <div className="container mx-auto flex flex-col items-center px-4 relative z-10 pointer-events-auto md:flex-row">
        <motion.div
          className="mb-8 ml-0 max-w-2xl text-left md:mb-0 md:ml-16"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest md:text-sm ${
              theme === 'dark'
                ? 'border-cyan-500/35 bg-cyan-500/10 text-cyan-300'
                : 'border-blue-200 bg-blue-50 text-blue-700'
            }`}
          >
            <span className="relative flex h-2 w-2">
              {!reduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </motion.span>
          <motion.h1 variants={itemVariants} className="mb-8 font-bold">
            <span className="text-3xl md:text-5xl">
              Hi, I&apos;m <span className={nameClass}>Mohit Singh</span>
            </span>
            <br />
            <span className="mt-4 inline-block h-8 font-mono text-xl text-slate-500 dark:text-slate-400 md:text-3xl">
              {text}
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [1, 0.2, 1] }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
                }
                className="inline-block"
              >
                |
              </motion.span>
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg"
          >
            Aspiring Full Stack Developer passionate about creating responsive, user-friendly, and interactive web applications.
            <br />
            Proficient in HTML, CSS, JavaScript, React.js, and Node.js, with a solid understanding of modern web development tools, frameworks, and best practices.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 justify-items-center gap-4 md:flex md:flex-row md:justify-start"
          >
            <Link href="/projects">
              <motion.button
                className={`${viewWorkButtonClass} flex w-full items-center justify-center gap-2 md:w-auto`}
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
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
            </Link>
            <motion.button
              className={`${downloadResumeButtonClass} flex w-full items-center justify-center gap-2 md:w-auto`}
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Mohit_Singh.pdf';
                link.download = 'Mohit Singh.pdf';
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
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center gap-6 pointer-events-auto md:justify-start"
          >
            <motion.a
              href="https://github.com/swtmohit"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg border transition-all duration-300 pointer-events-auto ${theme === 'dark'
                ? 'bg-slate-800 text-white border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]'
                : 'bg-white text-slate-900 border-gray-200 hover:border-gray-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]'
                }`}
              whileHover={reduceMotion ? undefined : { scale: 1.08, y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              <svg
                className="w-6 h-6"
                fill={theme === 'dark' ? "currentColor" : "#333"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohit-singh-917609349"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg border transition-all duration-300 ${theme === 'dark'
                ? 'bg-slate-800 text-white border-slate-700 hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]'
                : 'bg-white text-slate-900 border-gray-200 hover:border-gray-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]'
                }`}
              whileHover={reduceMotion ? undefined : { scale: 1.08, y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              <svg
                className="w-6 h-6"
                fill={theme === 'dark' ? "currentColor" : "#0A66C2"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/swtmohit31"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg border transition-all duration-300 ${theme === 'dark'
                ? 'bg-slate-800 text-white border-slate-700 hover:border-pink-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]'
                : 'bg-white text-slate-900 border-gray-200 hover:border-gray-400 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)]'
                }`}
              whileHover={reduceMotion ? undefined : { scale: 1.08, y: -4 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke={theme === 'dark' ? "currentColor" : "#E4405F"}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="m12 8.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
                <circle cx="18.5" cy="5.5" r="1.5" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 flex justify-center md:mt-0 md:flex-1"
          initial={
            reduceMotion ? { opacity: 0 } : { opacity: 0, x: 40, scale: 0.96 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.65, delay: 0.2, ease: easeOut }
          }
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Tech ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 dark:border-cyan-500/40"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 22, repeat: Infinity, ease: 'linear' }
              }
            />
            <motion.div
              className="absolute -inset-4 rounded-full border border-dotted border-purple-500/30 dark:border-purple-500/35"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 28, repeat: Infinity, ease: 'linear' }
              }
            />

            <motion.div
              className="pointer-events-none absolute inset-0 z-10 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-0.5 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 10, repeat: Infinity, ease: 'linear' }
              }
            >
              <div className={`h-full w-full rounded-full ${ringInnerClass}`} />
            </motion.div>

            {/* Image */}
            <motion.div
              className="absolute inset-1 z-50 overflow-hidden rounded-full"
              style={{ willChange: 'transform' }}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            >
              <Image
                src="/1.jpg"
                alt="Mohit Singh"
                width={320}
                height={320}
                className={`rounded-full w-full h-full z-50 object-cover ${imageBorder}`}
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;