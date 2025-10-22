'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'Python', icon: '🐍', level: 90 },
  { name: 'SQL', icon: '🗄️', level: 85 },
  { name: 'Power BI', icon: '📊', level: 95 },
  { name: 'Excel', icon: '📈', level: 80 },
  { name: 'Tableau', icon: '📋', level: 75 },
  { name: 'Pandas', icon: '🐼', level: 85 },
  { name: 'Machine Learning', icon: '🤖', level: 70 },
  { name: 'Data Visualization', icon: '📉', level: 90 },
  { name: 'ETL', icon: '🔄', level: 80 },
  { name: 'DAX', icon: '📐', level: 85 },
  { name: 'R', icon: '📊', level: 65 },
  { name: 'Streamlit', icon: '🌊', level: 75 },
];

export default function Skills() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Compétences
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glassmorphism rounded-lg p-6 text-center project-card skill-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  className="bg-primary h-2 rounded-full progress-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
