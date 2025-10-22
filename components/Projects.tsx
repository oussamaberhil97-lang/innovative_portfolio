'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Image from 'next/image';

const projects = [
  {
    title: 'Calcul Tarif IT Innovation - Air France',
    description: 'Site Streamlit pour le calcul automatique des tarifs IT innovation avec analyse de données détaillée. Réduction de 20% des coûts grâce à l\'optimisation des méthodes de calcul.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop', // Aviation/Air France related
    chartData: [
      { name: 'Avant', couts: 100 },
      { name: 'Après', couts: 80 },
    ],
    chartType: 'bar',
    technologies: ['Streamlit', 'Python', 'Power BI', 'Azure'],
    link: '#', // Placeholder for demo link
  },
  {
    title: 'Dashboard Ventes Power BI',
    description: 'Analyse des ventes avec visualisations interactives, KPIs et prévisions. Extraction, nettoyage et automatisation des données.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    chartData: [
      { name: 'Jan', ventes: 4000 },
      { name: 'Fév', ventes: 3000 },
      { name: 'Mar', ventes: 5000 },
      { name: 'Avr', ventes: 4500 },
    ],
    chartType: 'line',
    technologies: ['Power BI', 'SQL', 'Python', 'Excel'],
  },
  {
    title: 'Analyse Clientèle ML',
    description: 'Segmentation client et analyse comportementale avec Python et ML. Modèles de régression et forêt aléatoire.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    chartData: [
      { name: 'Segment A', value: 35, color: '#8884d8' },
      { name: 'Segment B', value: 25, color: '#82ca9d' },
      { name: 'Segment C', value: 40, color: '#ffc658' },
    ],
    chartType: 'pie',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau'],
  },
  {
    title: 'Projet CubeSat - CNES',
    description: 'Chaîne de gestion de données au sol avec tableau de bord interactif rendant les données complexes compréhensibles.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop', // Space/satellite related
    chartData: [
      { name: 'Données', processed: 85 },
      { name: 'Visualisation', processed: 95 },
    ],
    chartType: 'bar',
    technologies: ['Python', 'PostgreSQL', 'Grafana', 'Docker'],
  },
];

const renderChart = (project: any) => {
  switch (project.chartType) {
    case 'bar':
      return (
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={project.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={Object.keys(project.chartData[0])[1]} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    case 'line':
      return (
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={project.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={Object.keys(project.chartData[0])[1]} stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      );
    case 'pie':
      return (
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie
              data={project.chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }: { name: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={50}
              fill="#8884d8"
              dataKey="value"
            >
              {project.chartData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
    default:
      return null;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glassmorphism rounded-lg p-6 project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                {renderChart(project)}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="bg-primary text-white px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-block bg-accent text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
                >
                  Voir le projet
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
