'use client';

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import PageShell from '@/components/PageShell';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from 'react-icons/fa';
import { useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const Contact = () => {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const sectionBg =
    theme === 'dark'
      ? 'relative z-10 bg-slate-900/75 py-16 backdrop-blur-sm'
      : 'relative z-10 bg-slate-50/85 py-16 backdrop-blur-sm';
  const formBg =
    theme === 'dark'
      ? 'premium-card border border-white/10 bg-slate-800/60 shadow-xl shadow-black/20'
      : 'premium-card border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-200/40';
  const cardBg =
    theme === 'dark'
      ? 'premium-card border border-white/10 bg-slate-800/50'
      : 'premium-card border border-slate-200/80 bg-white/90';
  const labelText = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const inputBg = theme === 'dark' ? 'bg-slate-700/80' : 'bg-white';
  const inputText = theme === 'dark' ? 'text-white' : 'text-gray-900';

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
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease },
    },
  };

  const cardStagger = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardItem = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.45, ease },
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data?.message || 'Message sent successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(
          data?.error || 'Failed to send message. Please try again later.'
        );
        console.error('API error response:', data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error: failed to reach the server');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <motion.section
        id="contact"
        className={sectionBg}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto mb-10 max-w-3xl px-4 text-center"
            variants={itemVariants}
          >
            <motion.span
              className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300"
              variants={itemVariants}
            >
              Contact
            </motion.span>
            <motion.h2
              className={`text-3xl font-extrabold sm:text-4xl md:text-5xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              variants={itemVariants}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="mx-auto mt-4 h-1 w-20 origin-left rounded bg-gradient-to-r from-blue-500 to-violet-500"
              initial={reduceMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
            />
            <motion.p
              className={`mx-auto mt-4 max-w-2xl text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              variants={itemVariants}
            >
              I&apos;m always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </motion.p>
          </motion.div>

          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <motion.div className="mb-6 text-left" variants={itemVariants}>
                  <h3
                    className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    Let&apos;s start a conversation
                  </h3>
                </motion.div>
                <motion.div
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20px' }}
                  variants={cardStagger}
                >
                  <motion.div
                    variants={cardItem}
                    whileHover={
                      reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 24 } }
                    }
                    className={`rounded-2xl p-4 shadow-md md:p-6 ${cardBg}`}
                  >
                    <a
                      href="mailto:swtmohit2002@gmail.com"
                      className="flex min-w-0 items-center gap-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 sm:h-12 sm:w-12">
                        <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                          Email
                        </h4>
                        <p
                          className={`text-sm whitespace-nowrap ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          swtmohit2002@gmail.com
                        </p>
                      </div>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={cardItem}
                    whileHover={
                      reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 24 } }
                    }
                    className={`rounded-2xl p-4 shadow-md md:p-6 ${cardBg}`}
                  >
                    <a href="tel:+918126488025" className="flex items-center gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 sm:h-12 sm:w-12">
                        <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                          Phone
                        </h4>
                        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                          +91 8126488025
                        </p>
                      </div>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={cardItem}
                    whileHover={
                      reduceMotion ? undefined : { y: -3, transition: { type: 'spring', stiffness: 400, damping: 24 } }
                    }
                    className={`rounded-2xl p-4 shadow-md md:p-6 ${cardBg}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300 sm:h-12 sm:w-12">
                        <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                      </div>
                      <div className="text-start">
                        <h4
                          className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                        >
                          Location
                        </h4>
                        <p
                          className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                          Uttar Pradesh, India
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div className="mt-6" variants={itemVariants}>
                  <h5
                    className={`mb-3 text-center font-semibold sm:text-left ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    Follow me on
                  </h5>
                  <div className="flex items-center justify-center gap-3 sm:justify-start">
                    <motion.a
                      href="https://github.com/swtmohit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-gray-900 p-2 text-white transition-colors hover:bg-gray-800 sm:p-3"
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.06, y: -2 }
                      }
                      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/mohit-singh-917609349"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700 sm:p-3"
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.06, y: -2 }
                      }
                      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/swtmohit31"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-2 text-white transition-all hover:from-pink-600 hover:to-purple-600 sm:p-3"
                      whileHover={
                        reduceMotion ? undefined : { scale: 1.06, y: -2 }
                      }
                      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                    >
                      <FaInstagram />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <motion.div className="md:col-span-7" variants={itemVariants}>
                <div className={`rounded-2xl p-6 md:p-8 ${formBg}`}>
                  <div className="premium-card-content">
                  <h3
                    className={`mb-6 text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  >
                    Send me a message
                  </h3>

                  <AnimatePresence mode="wait">
                    {submitStatus === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        className="mb-4 rounded-lg border border-green-400/50 bg-green-500/10 p-3 text-green-700 dark:text-green-300"
                      >
                        Message sent successfully! I&apos;ll get back to you soon.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        className="mb-4 rounded-lg border border-red-400/50 bg-red-500/10 p-3 text-red-700 dark:text-red-300"
                      >
                        {submitMessage ||
                          'Failed to send message. Please try again later.'}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <label className={`mb-2 block text-xs ${labelText}`}>
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full rounded-lg border px-4 py-3 ${theme === 'dark' ? 'border-slate-600' : 'border-gray-200'} ${inputBg} ${inputText} transition-shadow focus:ring-2 focus:ring-blue-500/40 focus:outline-none`}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className={`mb-2 block text-xs ${labelText}`}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className={`w-full rounded-lg border px-4 py-3 ${theme === 'dark' ? 'border-slate-600' : 'border-gray-200'} ${inputBg} ${inputText} transition-shadow focus:ring-2 focus:ring-blue-500/40 focus:outline-none`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className={`mb-2 block text-xs ${labelText}`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className={`w-full rounded-lg border px-4 py-3 ${theme === 'dark' ? 'border-slate-600' : 'border-gray-200'} ${inputBg} ${inputText} transition-shadow focus:ring-2 focus:ring-blue-500/40 focus:outline-none`}
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="mb-6">
                      <label className={`mb-2 block text-xs ${labelText}`}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`w-full rounded-lg border px-4 py-3 ${theme === 'dark' ? 'border-slate-600' : 'border-gray-200'} ${inputBg} ${inputText} transition-shadow focus:ring-2 focus:ring-blue-500/40 focus:outline-none`}
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex w-full items-center justify-center gap-3 rounded-xl py-3 px-4 font-medium text-white transition ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      } ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
                      whileHover={
                        reduceMotion || isSubmitting
                          ? undefined
                          : { scale: 1.01 }
                      }
                      whileTap={
                        reduceMotion || isSubmitting
                          ? undefined
                          : { scale: 0.98 }
                      }
                    >
                      <FaPaperPlane className="h-4 w-4" />
                      <span>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </motion.button>
                  </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={`relative z-10 mt-16 w-full pb-12 md:pb-20 ${theme === 'dark' ? 'bg-slate-950/50' : 'bg-slate-100/80'}`}
          >
            <div className="mx-auto max-w-6xl px-4">
              <motion.div className="p-6" variants={itemVariants}>
                <motion.h3
                  className={`mb-4 text-center text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                  Based in Uttar Pradesh, India
                </motion.h3>
                <p
                  className={`mb-4 text-center text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  Available for new opportunities
                </p>
              </motion.div>
            </div>

            <div className="mx-auto max-w-6xl px-4">
              <motion.div
                className={`premium-card group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${theme === 'dark' ? 'border-slate-700 from-sky-900/40 to-slate-900/40' : 'border-slate-200 from-sky-200 to-sky-400'}`}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease }}
                whileHover={
                  reduceMotion ? undefined : { scale: 1.005 }
                }
              >
                <div className="flex flex-col items-center justify-center py-12 md:py-20">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md md:h-16 md:w-16"
                    animate={
                      reduceMotion
                        ? undefined
                        : { y: [0, -4, 0] }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
                    }
                  >
                    <FaMapMarkerAlt
                      className={`h-6 w-6 text-sky-600 md:h-8 md:w-8`}
                    />
                  </motion.div>
                  <p
                    className={`mt-4 text-lg font-medium md:text-xl ${theme === 'dark' ? 'text-white' : 'text-sky-900'}`}
                  >
                    Uttar Pradesh, India
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/place/Uttar+Pradesh,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Open Uttar Pradesh in Google Maps"
                >
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
                  <motion.span
                    className="pointer-events-auto rounded-lg bg-white px-4 py-2 font-medium text-sky-700 opacity-0 shadow-lg scale-95 group-hover:opacity-100 group-hover:scale-100 dark:bg-slate-800 dark:text-sky-300"
                    whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  >
                    Open in Google Map
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </PageShell>
  );
};

export default Contact;
