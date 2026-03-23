'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
  scale?: boolean;
  blur?: boolean;
  duration?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
  scale = false,
  blur = false,
  duration = 0.8,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directionOffset = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
        ...(scale ? { scale: 0.95 } : {}),
        ...(blur ? { filter: 'blur(10px)' } : {}),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: 'blur(0px)',
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
