
import React from 'react';
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>Nawab Outfits</h2>
      <p className={styles.paragraph}>
        Nawab Outfits is a passion-driven kidswear brand focused on delivering elegant, colorful, and comfortable clothing for children.
      </p>
      <p className={styles.paragraph}>
        Our designs blend traditional craftsmanship with playful modern styles, perfect for festive occasions and everyday joy.
      </p>
    </div>
  );
};

export default About;

