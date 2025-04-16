// components/Services.js (Updated)
import styles from '../styles/Services.module.css';
import Image from 'next/image';
// Remove useState and useEffect imports if they are no longer used elsewhere in the file

const Services = () => {
  // Remove the isMobile state and useEffect hook
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => { ... });

  return (
    <section className={styles.services}>
      {/* Remove the conditional class application */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/sofa.png"
            alt="Modern Sofa"
            width={600} // Keep explicit dimensions or use layout='responsive'/'fill' depending on needs
            height={400}
            // Consider layout='responsive' or layout='fill' with appropriate container styling
            // layout="responsive"
            // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw" // Example sizes attribute
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
              width: '100%', // Ensure image tries to fill container if using width/height
              height: 'auto', // Maintain aspect ratio if using width/height
            }}
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
                <h3>Development of Furniture Models</h3>
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