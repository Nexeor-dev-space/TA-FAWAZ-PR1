import Image from 'next/image';
import styles from '@/styles/about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          {/* Text Content */}
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              The Best Furniture Manufacturer Of Your Choice
            </h2>
            <p className={styles.aboutText}>
              Furnire power is a software as services for multipurpose
              business management system, especially for them who are
              running two or more business explore the future Furnire
              power is a software as services.
            </p>
          </div>

          {/* Image */}
          <div className={styles.aboutImage}>
            <Image
              src="/furniture.png"
              alt="Modern kitchen interior with white cabinets and bar stools"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 