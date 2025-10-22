'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Air France',
    location: 'Paris (CDG)',
    period: '04/2024 - 10/2024',
    description: [
      'Gestion et structuration des données : extraction, nettoyage, automatisation et qualité des données.',
      'Exploitation BI : création, maintenance et amélioration de tableaux de bord Power BI, avec veille technologique.',
      'Collaboration : compréhension des besoins, traduction analytique, communication des résultats et expertise technique (SQL, DAX, M).',
    ],
    technologies: ['Excel', 'SQL', 'NoSQL', 'DAX', 'Power BI', 'Python', 'API', 'Automatisation', 'Modélisation de données'],
  },
  {
    title: 'Data Analyst Finance',
    company: 'CNES',
    location: 'Paris',
    period: '11/2023 - 02/2024',
    description: [
      'Chef de projet : Transformation numérique majeur, définissant le budget alloué (350 millions).',
      'Pilotage d\'une équipe interdisciplinaire (5 personnes) dans le pôle contrôle de gestion Finance.',
      'Création d\'un outil automatique innovant pour le calcul du tarif IT innovation.',
      'Intégration d\'un tableau de bord interactif détaillant toutes les données relatives aux tarifs.',
      'Revue détaillée et challenge de la méthode de calcul du tarif pour optimiser les coûts IT (réduction -20%).',
    ],
    technologies: ['Excel', 'PowerPoint', 'PowerAutomate', 'Teams', 'Python', 'Streamlit', 'Azure', 'Power BI', 'Méthode Agile'],
  },
  {
    title: 'Data Engineer-Analyst',
    company: 'UITS',
    location: 'Casablanca',
    period: '06/2023 - 09/2023',
    description: [
      'Participation au développement, à l\'intégration, aux phases de tests et à la maintenance du projet CubeSat.',
      'Ecrire et rédiger les spécifications d\'automatisation des règles de gestion à la direction des systèmes d\'information.',
      'Comprendre précisément les problématiques et les besoins fonctionnels puis les traduire de manière analytique.',
      'Conception d\'une chaîne de gestion de données au sol avec un tableau de bord interactif, rendant les données complexes compréhensibles et exploitables.',
    ],
    technologies: ['Python', 'R', 'PostgreSQL', 'NoSQL', 'Hadoop', 'Docker', 'Kubernetes', 'Git', 'Linux', 'Grafana'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expérience Professionnelle
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item mb-8 glassmorphism rounded-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
              <h4 className="text-lg font-medium mb-1 text-primary">{exp.company} - {exp.location}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-200">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
