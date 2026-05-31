import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About</h2>
          
          <div className="about-text">
            <p>
              [Placeholder: Write a paragraph about who you are. Focus on your journey as a Computer Science student and how your interest in software engineering developed. Keep it personal but professional.]
            </p>
            <p>
              [Placeholder: Detail your education here. Mention your university, your major, and what you are focusing on (e.g., algorithms, full-stack web development).]
            </p>
            <p>
              [Placeholder: Write about your interests outside of strictly coding. Talk about your design and artistic side. How does your eye for design influence the software you build? What do you enjoy doing in your free time?]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
