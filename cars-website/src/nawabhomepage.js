import React from 'react';
import styles from './nawabhome.css';
import baby6 from './ASSETS/baby6.jpg'

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <h2>Welcome to Nawab Outfits</h2>
        <p>Premium Kidswear for Every Occasion</p><br/>


        {/* Hero image */}
        <img
          src={baby6}
          alt="Kidswear banner"
          className={styles.heroImage}
        /><br/>
        <button className={styles.button}>Shop Now</button>
      </header>

      <section className={styles.intro}>
        <p>
          Discover beautifully crafted traditional and modern outfits for kids
          that combine comfort and style. From playful prints to elegant ethnic
          wear, our collection brings joy to every occasion.
        </p>
      </section>
    </div>
  );
};

export default Home;
