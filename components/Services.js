import styles from '../styles/Services.module.css';
import Image from 'next/image';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/sofa.png"
            alt="Modern Sofa"
            width={600}
            height={400}
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            We Make Your Home<br />
            More Aestetic
          </h2>
          
          <p className={styles.description}>
            Furniture power is a software as a service for multipurpose
            business management system,
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3>Valuation Services</h3>
                <p>Sometimes features require a short description. This can be a detailed description</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.featureContent}>
                <h3>Development of Furniture Modelss</h3>
                <p>Sometimes features require a short description. This can be a short description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 