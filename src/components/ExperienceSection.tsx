import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceSection.css';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      year: '2023 — Present',
      role: '[Role / Position Placeholder]',
      company: '[Company / Project Name]',
      description: '[Brief description of your responsibilities, achievements, and the technologies used.]'
    },
    {
      year: '2022 — 2023',
      role: '[Previous Role Placeholder]',
      company: '[Company / Organization Name]',
      description: '[Brief description of what you accomplished during this time period.]'
    },
    {
      year: '2020 — 2022',
      role: '[Early Role / Education Placeholder]',
      company: '[University or Early Job]',
      description: '[Brief description of your foundational experiences.]'
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-year">{exp.year}</div>
                <div className="experience-details">
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">{exp.company}</div>
                  <p className="experience-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
