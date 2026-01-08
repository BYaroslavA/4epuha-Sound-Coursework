import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { newsData } from '@/entities/news/model/news';
import { Button } from '@/shared/ui/Button';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './NewsCarousel.module.css';

export function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = newsData[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal width="100%">
          <div className={styles.header}>
            <h2 className={styles.title}>Latest News</h2>
            <div className={styles.controls}>
              <button onClick={prevSlide} className={styles.arrow}>←</button>
              <button onClick={nextSlide} className={styles.arrow}>→</button>
            </div>
          </div>
        </Reveal>

        <Reveal width="100%">
          <div className={styles.card}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={styles.slide}
              >
                <div className={styles.imageSection}>
                  <img src={currentItem.image} alt={currentItem.title} className={styles.image} />
                </div>
                <div className={styles.contentSection}>
                  <span className={styles.date}>{currentItem.date}</span>
                  <h3 className={styles.newsTitle}>{currentItem.title}</h3>
                  <p className={styles.excerpt}>{currentItem.excerpt}</p>
                  <div className={styles.footer}>
                    <Button variant="outline">Read Full Story</Button>
                    <div className={styles.dots}>
                      {newsData.map((_, i) => (
                        <div
                          key={i}
                          className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
