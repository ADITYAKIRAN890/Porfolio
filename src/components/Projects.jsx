import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Flutter Inventory Tracker App 2026',
    desc: 'A robust mobile application for managing and tracking inventory.',
    highlights: [
      'Engineered an inventory management app handling 50+ items with CRUD functionality.',
      'Implemented real-time updates and structured data handling.',
      'Designed intuitive UI for seamless user experience.',
      'Optimized application performance across devices.'
    ],
    link: '#',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Data/ML Project',
    desc: 'Built a machine learning model for prediction and data analysis.',
    highlights: [
      'Used data preprocessing and feature engineering',
      'Applied ML algorithms (e.g., Random Forest)',
      'Evaluated model performance'
    ],
    link: '#',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Product Placement Analysis Dashboard (Tableau)',
    desc: 'Interactive dashboards to visualize insights and support decision-making.',
    highlights: [
      'Analyzed datasets containing 500+ records to identify business trends.',
      'Created interactive dashboards to visualize insights and support decision-making.',
      'Generated actionable recommendations using data visualization techniques.'
    ],
    link: '#',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
  }
];

const Projects = () => {
  return (
    <section id="work" className="container animate-up" style={{ animationDelay: '0.4s' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '60px', textAlign: 'center' }}>Selected Works</h2>
      
      <div className="project-list">
        {projects.map((p) => (
          <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="project-card">
            <img src={p.img} alt={p.title} />
            <div className="project-overlay">
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.highlights && (
                  <ul style={{ marginTop: '12px', color: 'var(--text-muted)', listStyleType: 'disc', listStylePosition: 'inside' }}>
                    {p.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: '15px', marginBottom: '4px' }}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="project-link-btn">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
