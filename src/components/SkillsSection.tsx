import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const SkillsSection: React.FC = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.div 
          className="skills-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Tools</h2>
          
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Programming</h3>
              <ul className="skills-list">
                <li>[Language / Tech 1]</li>
                <li>[Language / Tech 2]</li>
                <li>[Language / Tech 3]</li>
                <li>[Language / Tech 4]</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Design</h3>
              <ul className="skills-list">
                <li>[Design Skill 1]</li>
                <li>[Design Skill 2]</li>
                <li>[Design Skill 3]</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Tools</h3>
              <ul className="skills-list">
                <li>[Tool 1]</li>
                <li>[Tool 2]</li>
                <li>[Tool 3]</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
