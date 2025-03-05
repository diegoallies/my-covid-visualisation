import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Developed by Diego Allies</p>
      <p>&copy; {currentYear} TopicWorx. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
