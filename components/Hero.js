import styles from '../styles/Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.imageLayer}>
          <Image
            src="/modern.png"
            alt="Modern furniture"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Creative Home Simplify Your <br />
            Furniture
          </h1>
          <p className={styles.subtext}>
            Do i have consent to record this meeting gain location, root-and-branch, review, nor game plan who's the goto
          </p>
          <Link href="/shop" className={styles.shopButton}>
            Shop Now
          </Link>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>7</span>
              <span className={styles.statLabel}>Year Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Opened in the country</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10k+</span>
              <span className={styles.statLabel}>Furniture sold</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>260+</span>
              <span className={styles.statLabel}>Variant Furniture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 