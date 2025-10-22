'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import References from '../components/References';
import Contact from '../components/Contact';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <ParticlesBackground />
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <References />
      <Contact />
    </div>
  );
}
