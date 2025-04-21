import styles from '@/styles/mail.module.css';

const Mail = () => {
  return (
    <section className={styles.mail}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Get more discount
            <span className={styles.subtitle}>Off your order</span>
          </h2>
          <p className={styles.description}>Join our mailing list</p>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Your email address"
              className={styles.emailInput}
            />
            <button className={styles.submitButton}>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mail; 