'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <Hero />
      <Services />
    </div>
  );
}
