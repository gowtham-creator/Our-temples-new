'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.4]);

  return (
    <div ref={ref} style={{ width: '100%', maxWidth: 800, aspectRatio: '1.333', overflow: 'hidden', position: 'relative' }}>
      <motion.div style={{ y, scale, opacity, width: '100%', height: '100%', position: 'relative' }}>
        <Image
          src="https://framerusercontent.com/images/ubG0q5oU24cynTwk8AE2YihwtQ4.jpg"
          alt="Sonic Speaker"
          width={800}
          height={600}
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </motion.div>
    </div>
  );
}
