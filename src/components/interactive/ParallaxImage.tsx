'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import styles from './ParallaxImage.module.css';

type ParallaxImageProps = {
  src: string;
  alt: string;
};

export default function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ['28px', '24px', '28px']);

  return (
    <motion.div
      ref={ref}
      className={styles.wrapper}
      style={{ borderRadius }}
    >
      <motion.div style={{ y, scale }} className={styles.inner}>
        <Image src={src} alt={alt} fill sizes="600px" className={styles.image} priority />
      </motion.div>
    </motion.div>
  );
}
