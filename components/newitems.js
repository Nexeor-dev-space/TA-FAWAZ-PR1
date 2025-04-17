import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from '../styles/newitems.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
  { id: 1, name: 'Chair', image: '/chair.png' },
  { id: 2, name: 'Bed', image: '/bed.png' },
  { id: 3, name: 'Cupboard', image: '/cup.png' },
  { id: 4, name: 'Lighting', image: '/light.jpg' },
];

const NewItems = () => {
  return (
    <section className={styles.newItemsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <h2>New In Store Now</h2>
            <p>Get the latest items immediately with promo prices</p>
          </div>
          <button className={styles.checkAll}>
            Check All
            <span className={styles.arrow}>→</span>
          </button>
        </div>

        {/* Desktop View */}
        <div className={styles.desktopGrid}>
          {items.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  priority={item.id === 1}
                />
                <div className={styles.overlay}>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View with Slider */}
        <div className={`${styles.mobileSlider} ${styles.swiperContainer}`}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            className={styles.swiper}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.itemCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="50vw"
                      style={{ objectFit: 'cover' }}
                      priority={item.id === 1}
                    />
                    <div className={styles.overlay}>
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewItems; 