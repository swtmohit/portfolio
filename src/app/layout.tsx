import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default:"Mohit Singh - Full Stack Developer",
    template:"%s - Mohit Singh"
  },
  description: "Crafting seamless web experiences from pixel to protocol. Mohit Singh is a passionate full-stack developer specializing in modern, scalable, and performant solutions.",
  keywords:[
    "Mohit Singh",
    "Full Stack Developer",
    "Web Developer",
    "Frontend",
    "Backend",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Portfolio",
    "Modern Web",
    "UI/UX",
    "Responsive Design",
    "Scalable Solutions",
    "Performance",
    "APIs",
    "REST",
    "Tailwind CSS",
    "Vite",
    "Framer Motion",
    "Projects",
    "Software Engineer",
    "Coding",
    "Programming",
    "Tech",
    "AI Integration",
    "Open Source",
    "Personal Website",
    "Web Animation",
    "SEO",
    "Dark Mode",
    "Creative Developer",
    "User Experience",
    "Developer Portfolio",
    "Digital Solutions",
    "Engineer",
    "Web Apps",
    "Frontend Engineer",
    "Backend Engineer",
    "Full-Stack",
    "Innovative Solutions"
  ],
  twitter:{
    card:"summary_large_image",
    title:{
      default:"Mohit Singh - Full Stack Developer",
      template:"%s - Mohit Singh"
    },
  }
};

// Inline script that runs before React hydrates to set the initial theme class
const setInitialThemeScript = `try { const t = localStorage.getItem('theme'); if (t === 'dark') document.documentElement.classList.add('dark'); } catch(e) {}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialThemeScript }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
