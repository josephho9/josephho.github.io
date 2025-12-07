import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AIChatWidget } from './components/AIChatWidget';
import { Navbar } from './components/Navbar';
import { MouseFollower } from './components/MouseFollower';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black font-sans relative overflow-x-hidden">
      <MouseFollower />
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-20 flex flex-col gap-24 md:gap-32">
        <section id="about" className="pt-10 md:pt-20">
          <Hero />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact" className="pb-20">
          <Contact />
        </section>
      </main>

      <AIChatWidget />
    </div>
  );
};

export default App;