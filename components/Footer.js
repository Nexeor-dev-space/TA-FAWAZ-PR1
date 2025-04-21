import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Brand and Social Links */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.brand}>
              FurniShop
            </Link>
            <div className={styles.socialLinks}>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/insta.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Image
                  src="/fb.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="#" aria-label="Globe">
                <Image
                  src="/globe.svg"
                  alt="Globe"
                  width={24}
                  height={24}
                  className={styles.socialIcon}
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.linksGrid}>
            {/* Our Products */}
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Our Products</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">The Support Suite</Link></li>
                <li><Link href="#">The Sales Suite</Link></li>
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Guide</Link></li>
              </ul>
            </div>

            {/* Top Features */}
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Top Features</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Ticketing System</Link></li>
                <li><Link href="#">Knowledge Base</Link></li>
                <li><Link href="#">Community Forums</Link></li>
                <li><Link href="#">Help Desk Software</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Resources</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">Product Support</Link></li>
                <li><Link href="#">Request Demo</Link></li>
                <li><Link href="#">Library</Link></li>
                <li><Link href="#">Peoplepower Blog</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Company</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">Investors</Link></li>
                <li><Link href="#">Events</Link></li>
              </ul>
            </div>

            {/* Favourite Things */}
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Favourite Things</h3>
              <ul className={styles.linkList}>
                <li><Link href="#">For Enterprise</Link></li>
                <li><Link href="#">For Startups</Link></li>
                <li><Link href="#">For Benchmark</Link></li>
                <li><Link href="#">For Small Business</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>© furnishop 2022 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 