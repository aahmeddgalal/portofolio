import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    { id: 1, title: '[Project Name 1]', desc: '[Placeholder: A brief description of what this project does and the technologies used.]', link: '#' },
    { id: 2, title: '[Project Name 2]', desc: '[Placeholder: A brief description of what this project does and the technologies used.]', link: '#' },
    { id: 3, title: '[Project Name 3]', desc: '[Placeholder: A brief description of what this project does and the technologies used.]', link: '#' },
    { id: 4, title: '[Project Name 4]', desc: '[Placeholder: A brief description of what this project does and the technologies used.]', link: '#' },
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <a href={project.link} className="project-link">
                  <div className="project-image-placeholder">
                    <span>Image</span>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">
                      {project.title}
                      <ArrowUpRight size={18} className="project-icon" />
                    </h3>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
