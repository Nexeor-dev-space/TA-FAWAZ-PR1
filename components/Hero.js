import styles from '../styles/Hero.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
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

        <div className={styles.imageLayer}>
          <Image
            src="/modern.png"
            alt="Modern furniture"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className={`${styles.statsSection} ${isMobile ? styles.mobile : ''}`}>
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
  );
};

export default Hero; 