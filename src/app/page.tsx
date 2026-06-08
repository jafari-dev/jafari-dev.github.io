import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 aurora-bg-light pointer-events-none dark:opacity-0" />
      <div className="fixed inset-0 aurora-bg pointer-events-none opacity-0 dark:opacity-100" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
