import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <footer className="section contact-section" id="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info">
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-desc">
              [Placeholder: Feel free to reach out for collaborations or just a friendly hello.]
            </p>
            <a href="mailto:hello@example.com" className="contact-email">hello@example.com</a>
          </div>
          
          <div className="contact-links">
            <div className="link-group">
              <span className="link-title">Socials</span>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
            
            <div className="link-group">
              <span className="link-title">Links</span>
              <a href="#">Resume</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
