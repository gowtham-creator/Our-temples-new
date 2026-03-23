'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import styles from './ImageCarousel.module.css';

const images = [
  'https://framerusercontent.com/images/cLXMCm17ntE7skBNfueokzH8q8.jpg',
  'https://framerusercontent.com/images/lelyO33appQMx848NrtNZZ6iEI.jpg',
  'https://framerusercontent.com/images/Qi9yR8aP0GD25HrRBpMLab0TB1Q.jpg',
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main image with crossfade + subtle zoom */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={styles.slide}
        >
          <Image
            src={images[current]}
            alt={`Speaker ${current + 1}`}
            fill
            sizes="1200px"
            className={styles.image}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Left overlay with thumbnail selectors (matching Framer design) */}
      <div className={styles.overlay}>
        <div className={styles.thumbList}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="62px"
                className={styles.thumbImg}
              />
              {i === current && (
                <motion.div
                  className={styles.thumbBorder}
                  layoutId="thumbBorder"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
