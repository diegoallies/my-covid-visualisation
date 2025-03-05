'use client';v

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CovidChart from '@/components/CovidChart';
import styles from '@/styles/page.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>COVID-19 Data Visualization</h1>
          <CovidChart />
          <p className={styles.description}>
            This graph represents the daily and total confirmed COVID-19 cases over time.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
