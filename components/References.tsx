'use client';

import { motion } from 'framer-motion';

const references = [
  {
    name: 'Jean Dupont',
    position: 'Directeur IT',
    company: 'Air France',
    testimonial: 'Oussama a démontré une expertise remarquable dans l\'analyse de données et la création de dashboards Power BI. Son travail sur le calcul des tarifs IT a permis d\'optimiser nos coûts de manière significative.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Marie Martin',
    position: 'Chef de Projet Finance',
    company: 'CNES',
    testimonial: 'Excellent collaborateur, très professionnel. Oussama a su mener à bien un projet complexe de transformation numérique avec une équipe interdisciplinaire, livrant des résultats au-delà de nos attentes.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Ahmed Bennani',
    position: 'Directeur Technique',
    company: 'UITS',
    testimonial: 'Ses compétences en data engineering et analyse ont été cruciales pour le succès du projet CubeSat. Oussama fait preuve d\'une rigueur et d\'une créativité exceptionnelles.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function References() {
  return (
    <section id="references" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Références
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-lg p-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={ref.image}
                alt={ref.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{ref.name}</h3>
              <p className="text-primary font-medium mb-2">{ref.position}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{ref.company}</p>
              <blockquote className="text-gray-700 dark:text-gray-200 italic">
                "{ref.testimonial}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
