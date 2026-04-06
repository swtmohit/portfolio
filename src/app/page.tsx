'use client';

import PageShell from '@/components/PageShell';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Services />
    </PageShell>
  );
}
