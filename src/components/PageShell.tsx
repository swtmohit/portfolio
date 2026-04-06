'use client';

import { motion, useReducedMotion } from 'framer-motion';

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared page wrapper: route transition fade-in + ambient mesh (matches home).
 */
export default function PageShell({ children, className = '' }: PageShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      className={`relative min-h-screen text-gray-900 dark:text-white ${className}`}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <motion.div
          className="absolute -left-1/4 top-0 h-[min(70vh,520px)] w-[min(70vw,520px)] rounded-full bg-gradient-to-br from-cyan-400/25 via-blue-500/15 to-transparent blur-3xl dark:from-cyan-500/20 dark:via-blue-600/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.75, 0.5],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 14, repeat: Infinity, ease: 'easeInOut' }
          }
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[min(60vh,480px)] w-[min(65vw,480px)] rounded-full bg-gradient-to-tl from-violet-500/20 via-fuchsia-500/10 to-transparent blur-3xl dark:from-violet-500/15 dark:via-fuchsia-600/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1.05, 1, 1.05],
                  opacity: [0.45, 0.7, 0.45],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }
          }
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)]" />
      </div>
      {children}
    </motion.main>
  );
}
