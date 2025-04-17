import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/products.module.css';

const products = [
  {
    id: 1,
    name: 'Ceiling Light',
    price: 75.00,
    originalPrice: 80.00,
    image: '/item1.png'
  },
  {
    id: 2,
    name: 'Wood Chair',
    price: 50.00,
    originalPrice: 70.00,
    image: '/item2.png'
  },
  {
    id: 3,
    name: 'Papper Cupboard',
    price: 105.00,
    originalPrice: 120.00,
    image: '/item3.png'
  },
  {
    id: 4,
    name: 'Ole Gundorse Spring',
    price: 82.00,
    originalPrice: 100.00,
    image: '/item4.png'
  },
  {
    id: 5,
    name: 'Treos Seroes 911',
    price: 200.00,
    originalPrice: 210.00,
    image: '/item5.png'
  },
  {
    id: 6,
    name: 'Multi Bilderman Slibber',
    price: 45.00,
    originalPrice: 50.00,
    image: '/item6.png'
  },
  {
    id: 7,
    name: 'XORA Corner Desk',
    price: 320.00,
    originalPrice: 325.00,
    image: '/item7.png'
  },
  {
    id: 8,
    name: 'Black Forest Series Wood',
    price: 225.00,
    originalPrice: 240.00,
    image: '/item8.png'
  }
];

// Repeat products array 5 times
const allProducts = [...Array(5)].flatMap(() => products);

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsPerPage = 8;
  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const currentProducts = allProducts.slice(
    currentSlide * productsPerPage,
    (currentSlide + 1) * productsPerPage
  );

  return (
    <section className={styles.products}>
      <div className={styles.header}>
        <h2 className={styles.title}>All Product</h2>
        <p className={styles.subtitle}>
          The products we provide only for you as our service are selected from the
          best products with number 1 quality in the world
        </p>
      </div>

      <div className={styles.productGrid}>
        <button 
          className={`${styles.sliderArrow} ${styles.prevArrow}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ←
        </button>

        {currentProducts.map((product) => (
          <div key={`${product.id}-${currentSlide}`} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority
                />
              </div>
              <button className={styles.addButton} aria-label="Add to cart">
                +
              </button>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productPrice}>
                <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
                <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}

        <button 
          className={`${styles.sliderArrow} ${styles.nextArrow}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className={styles.sliderDots}>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Products; 