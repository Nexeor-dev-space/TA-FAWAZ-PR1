import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/review.module.css';

const reviews = [
  {
    id: 1,
    text: "They are have a perfect touch for make something so professional, interest and useful for a lot of people.",
    name: "Josh Smith",
    role: "Manager of The New York Times",
    authorImage: "/john.png",
    showcaseImage: "/hall.png"
  },
  {
    id: 2,
    text: "They are have a perfect touch for make something so professional, interest and useful for a lot of people.",
    name: "Josh Smith",
    role: "Manager of The New York Times",
    authorImage: "/john.png",
    showcaseImage: "/hall.png"
  }
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentSlide];

  return (
    <section className={styles.review}>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>What People Are Saying About Us</h2>
            <div className={styles.reviewer}>
              <div className={styles.reviewerImage}>
                <Image
                  src={currentReview.authorImage}
                  alt={currentReview.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 3.5rem, 3.5rem"
                />
              </div>
              <div className={styles.reviewerInfo}>
                <span className={styles.reviewerName}>{currentReview.name}</span>
                <span className={styles.reviewerRole}>{currentReview.role}</span>
              </div>
            </div>
            <p className={styles.reviewText}>
              {currentReview.text}
            </p>
            <div className={styles.navigationButtons}>
              <button 
                className={styles.navButton}
                onClick={prevSlide}
                aria-label="Previous review"
              >
                ←
              </button>
              <button 
                className={styles.navButton}
                onClick={nextSlide}
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={currentReview.showcaseImage}
              alt="Interior showcase"
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

export default Review; 