import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="section hero-section" id="home">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-container">
            <img 
              src="/profile.jpg" 
              alt="Portrait" 
              className="hero-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
              }}
            />
          </div>
          
          <h1 className="hero-title">[Your Name]</h1>
          
          <div className="hero-roles">
            <span>Computer Science Student</span>
            <span className="separator">•</span>
            <span>Future Software Engineer</span>
            <span className="separator">•</span>
            <span>Designer & Artist</span>
          </div>
          
          <p className="hero-description">
            [Placeholder: A short, elegant introduction about your passion for building clean software and your eye for minimal design. Keep it to one or two sentences.]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
