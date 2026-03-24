"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "motion/react";
import styles from "./DeityCarousel.module.css";

const DEITIES_ROW1 = [
  { name: "Lord Shiva", image: "https://ourtemples.info/wp-content/uploads/2025/06/eecebc2ce3a589c387eb3aedb6f4632e-removebg-preview-e1748584137956.webp", count: 126, href: "https://ourtemples.info/temple-categories/lord-shiva/" },
  { name: "Lord Hanuman", image: "https://ourtemples.info/wp-content/uploads/2025/05/download-removebg-preview.png", count: 76, href: "https://ourtemples.info/temple-categories/lord-hanuman/" },
  { name: "Sai Baba", image: "https://ourtemples.info/wp-content/uploads/2025/05/71xEh-MWRWL._AC_UF1000_1000_QL80_DpWeblab_-removebg-preview.png", count: 52, href: "https://ourtemples.info/temple-categories/sai-baba/" },
  { name: "Lord Vinayaka", image: "https://ourtemples.info/wp-content/uploads/2025/05/istockphoto-1307831372-612x612-removebg-preview.png", count: 43, href: "https://ourtemples.info/temple-categories/lord-vinayaka/" },
  { name: "Lord Vishnu", image: "https://ourtemples.info/wp-content/uploads/2025/05/e5c3b7330cf756bd7cbb42755a4e81c9-Photoroom.png", count: 19, href: "https://ourtemples.info/temple-categories/lord-vishnu/" },
  { name: "Narasimha Swamy", image: "https://ourtemples.info/wp-content/uploads/2026/01/NaraSimhaSwamy_F1.jpg", count: 18, href: "https://ourtemples.info/temple-categories/lord-narasimha/" },
  { name: "Raghavendra", image: "https://ourtemples.info/wp-content/uploads/2025/05/ragavendra-12-cutout-giriram-photos-original-imag7ye3uhxbqxsa-Photoroom.png", count: 2, href: "https://ourtemples.info/temple-categories/guru-raghavendra/" },
];

const DEITIES_ROW2 = [
  { name: "Saraswathy Mata", image: "https://ourtemples.info/wp-content/uploads/2025/06/hindu-goddess-saraswati-mata-with-her-sitar_849906-13638-removebg-preview.png", count: 10, href: "https://ourtemples.info/temple-categories/saraswathy/" },
  { name: "Shani Bhagwan", image: "https://ourtemples.info/wp-content/uploads/2025/06/hindu-lord-shani-260nw-2460120995-removebg-preview.png", count: 8, href: "https://ourtemples.info/temple-categories/shani/" },
  { name: "Subramanya Swamy", image: "https://ourtemples.info/wp-content/uploads/2025/06/81J3ExDi2GL-removebg-preview.png", count: 6, href: "https://ourtemples.info/temple-categories/lord-subramanyam/" },
  { name: "Surya Bhagavan", image: "https://ourtemples.info/wp-content/uploads/2026/01/Surya-Bhagavan_F1.jpg", count: 5, href: "https://ourtemples.info/temple-categories/surya-bhagavan/" },
  { name: "Lord Shiva", image: "https://ourtemples.info/wp-content/uploads/2025/06/eecebc2ce3a589c387eb3aedb6f4632e-removebg-preview-e1748584137956.webp", count: 126, href: "https://ourtemples.info/temple-categories/lord-shiva/" },
  { name: "Lord Vinayaka", image: "https://ourtemples.info/wp-content/uploads/2025/05/istockphoto-1307831372-612x612-removebg-preview.png", count: 43, href: "https://ourtemples.info/temple-categories/lord-vinayaka/" },
  { name: "Lord Hanuman", image: "https://ourtemples.info/wp-content/uploads/2025/05/download-removebg-preview.png", count: 76, href: "https://ourtemples.info/temple-categories/lord-hanuman/" },
];

function repeat<T>(arr: T[], times: number): T[] {
  return Array.from({ length: times }).flatMap(() => arr);
}

type Deity = { name: string; image: string; count: number; href: string };

/**
 * A single scrollable row that:
 *  - Auto-scrolls via CSS animation by default
 *  - Pauses auto-scroll and lets user manually swipe/drag on touch/mouse
 *  - Resumes auto-scroll 2s after user stops interacting
 */
function ScrollableTrack({ items, direction }: { items: Deity[]; direction: "left" | "right" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isManual, setIsManual] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleResume = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsManual(false), 2500);
  }, []);

  // Touch/pointer drag support
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current?.parentElement;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    setIsManual(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = trackRef.current?.parentElement;
    if (!el) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = scrollStart.current - dx;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    scheduleResume();
  };

  // Cleanup
  useEffect(() => () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); }, []);

  return (
    <div
      className={styles.trackScroller}
      onWheel={(e) => {
        // Allow horizontal wheel/trackpad scroll
        if (Math.abs(e.deltaX) > 2) {
          setIsManual(true);
          scheduleResume();
        }
      }}
    >
      <div
        ref={trackRef}
        className={styles.track}
        data-direction={isManual ? undefined : direction}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        {items.map((d, i) => (
          <a
            key={i}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            onClick={(e) => { if (isDragging.current) e.preventDefault(); }}
            draggable={false}
          >
            <div className={styles.imageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.image} alt={d.name} className={styles.deityImg} draggable={false} />
            </div>
            <span className={styles.deityName}>{d.name}</span>
            <span className={styles.deityCount}>{d.count} temples</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function DeityCarousel() {
  const row1 = repeat(DEITIES_ROW1, 4);
  const row2 = repeat(DEITIES_ROW2, 4);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ fontSize: 20, lineHeight: 1 }}>&#x0950;</span>
          <span>Deities</span>
        </motion.div>

        <motion.h3
          className="h3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Explore Temples by Deity
        </motion.h3>

        <motion.p
          className="body-l"
          style={{ color: 'var(--dark-2)', maxWidth: 600, textAlign: 'center' }}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Discover temples dedicated to your beloved deity — from Lord Shiva and Hanuman to Vinayaka and Saraswathy Mata.
        </motion.p>
      </div>

      <motion.div
        className={styles.carouselWrap}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ScrollableTrack items={row1} direction="left" />
        <ScrollableTrack items={row2} direction="right" />

        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
      </motion.div>
    </section>
  );
}
