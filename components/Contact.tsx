'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.h3
          className="text-4xl font-bold mb-8 border-b-4 border-indigo-500 inline-block"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h3>
        <motion.p
          className="text-indigo-200 mb-8 text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Vous souhaitez collaborer, échanger ou en savoir plus ? N'hésitez pas à me contacter !
        </motion.p>
        <div className="flex justify-center space-x-10 text-indigo-300 text-3xl mb-8">
          <a href="mailto:oussama_berhil@hotmail.fr" aria-label="Email" className="hover:text-indigo-400 transition">
            📧
          </a>
          <a href="tel:+33669330522" aria-label="Téléphone" className="hover:text-indigo-400 transition">
            📞
          </a>
          <a href="https://linkedin.com/in/oussama-berhil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-400 transition">
            💼
          </a>
        </div>
        <motion.a
          href="mailto:oussama_berhil@hotmail.fr"
          className="mt-12 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-12 py-4 rounded-lg shadow-lg transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Envoyer un email
        </motion.a>
      </div>
      {/* Footer */}
      <footer className="text-center p-6 mt-20 border-t border-indigo-700 text-indigo-400 select-none">
        &copy; 2024 Oussama Berhil - Data Analyst / Engineer
      </footer>
    </section>
  );
}
