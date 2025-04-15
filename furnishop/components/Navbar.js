import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          FurniShop
        </Link>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <Link href="/" onClick={toggleMenu}>Home</Link>
        <Link href="/about" onClick={toggleMenu}>About</Link>
        <Link href="/features" onClick={toggleMenu}>Features</Link>
        <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 