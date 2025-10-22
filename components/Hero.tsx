'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/portfolio.pdf'; // Placeholder PDF in public/
    link.download = 'Portfolio_Data_Analyst.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white relative overflow-hidden">
      <div className="text-center px-8 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Oussama Berhil
        </motion.h1>
        <motion.div
          className="text-xl md:text-2xl mb-8 h-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'Data Analyst Passionné',
              2000,
              'Spécialiste Power BI',
              2000,
              'Expert en Python & SQL',
              2000,
              'Innovateur IT',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Diplômé Bac+5 en Informatique option Data & IA. Expert en analyse de données avec Power BI, Python et SQL pour transformer les données en insights stratégiques.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            onClick={handleDownloadPDF}
          >
            Télécharger le Portfolio (PDF)
          </button>
          <a
            href="#projects"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Voir les Projets
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#skills" className="text-white text-2xl">↓</a>
      </div>
    </section>
  );
}
