import React from 'react';
import styles from '@/styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.companyName}>TopicWorx</h2>
    </header>
  );
};

export default Header;
