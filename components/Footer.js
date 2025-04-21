import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <Link href="/" className={styles.brand}>
              Furnishop
            </Link>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/insta.svg" alt="Instagram" width={24} height={24} className={styles.socialIcon} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Image src="/fb.svg" alt="Facebook" width={24} height={24} className={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Image src="/twitter.svg" alt="Twitter" width={24} height={24} className={styles.socialIcon} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className={styles.socialIcon} />
              </a>
              <a href="https://furnishop.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
                <Image src="/globe.svg" alt="Website" width={24} height={24} className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Our Products</h3>
              <ul className={styles.linkList}>
                <li><Link href="/products/support-suite">The Support Suite</Link></li>
                <li><Link href="/products/sales-suite">The Sales Suite</Link></li>
                <li><Link href="/products/support">Support</Link></li>
                <li><Link href="/products/guide">Guide</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Top Features</h3>
              <ul className={styles.linkList}>
                <li><Link href="/features/ticketing">Ticketing System</Link></li>
                <li><Link href="/features/knowledge">Knowledge Base</Link></li>
                <li><Link href="/features/community">Community Forums</Link></li>
                <li><Link href="/features/help-desk">Help Desk Software</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Resources</h3>
              <ul className={styles.linkList}>
                <li><Link href="/resources/product-support">Product Support</Link></li>
                <li><Link href="/resources/request-demo">Request Demo</Link></li>
                <li><Link href="/resources/library">Library</Link></li>
                <li><Link href="/resources/blog">Peoplepower Blog</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Company</h3>
              <ul className={styles.linkList}>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/press">Press</Link></li>
                <li><Link href="/investors">Investors</Link></li>
                <li><Link href="/events">Events</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Favourite Things</h3>
              <ul className={styles.linkList}>
                <li><Link href="/enterprise">For Enterprise</Link></li>
                <li><Link href="/startups">For Startups</Link></li>
                <li><Link href="/benchmark">For Benchmark</Link></li>
                <li><Link href="/small-business">For Small Business</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>&copy; 2024 Furnishop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 