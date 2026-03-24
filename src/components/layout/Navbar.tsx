'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import styles from './Navbar.module.css';

type CursorPos = { left: number; width: number; opacity: number };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState(-1); // -1 = no active tab
  const [cursor, setCursor] = useState<CursorPos>({ left: 0, width: 0, opacity: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move cursor to a specific tab index
  const moveCursorTo = useCallback((index: number) => {
    const el = tabRefs.current[index];
    if (!el) return;
    const { width } = el.getBoundingClientRect();
    setCursor({ left: el.offsetLeft, width, opacity: 1 });
  }, []);

  // Reset cursor to selected tab (or hide if none)
  const resetCursor = useCallback(() => {
    if (selected >= 0) {
      moveCursorTo(selected);
    } else {
      setCursor((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [selected, moveCursorTo]);

  // On select change, update cursor
  useEffect(() => {
    if (selected >= 0) moveCursorTo(selected);
  }, [selected, moveCursorTo]);

  const handleMobileLinkClick = (index: number) => {
    setSelected(index);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoText}>Our Temples</span>
          </a>

          {/* Slide Tabs Nav — desktop only */}
          <ul className={styles.tabsWrap} onMouseLeave={resetCursor}>
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                ref={(el) => { tabRefs.current[i] = el; }}
                className={styles.tab}
                onMouseEnter={() => moveCursorTo(i)}
                onClick={() => setSelected(i)}
              >
                <a
                  href={link.href}
                  className={`${styles.tabLink} ${selected === i ? styles.tabLinkActive : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Sliding cursor pill */}
            <motion.li
              className={styles.tabCursor}
              animate={{
                left: cursor.left,
                width: cursor.width,
                opacity: cursor.opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 32,
              }}
            />
          </ul>

          {/* CTA — desktop only */}
          <div className={styles.actions}>
            <a href="/#features" style={{ textDecoration: 'none' }}>
              <LiquidButton size="sm">
                Explore Now
                <ChevronRight className="!size-3.5" />
              </LiquidButton>
            </a>
          </div>

          {/* Hamburger — tablet/mobile only */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile/Tablet dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav>
              <ul className={styles.mobileLinks}>
                {navLinks.map((link, i) => (
                  <li key={link.href} className={styles.mobileLinkItem}>
                    <a
                      href={link.href}
                      className={`${styles.mobileLink} ${selected === i ? styles.mobileLinkActive : ''}`}
                      onClick={() => handleMobileLinkClick(i)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.mobileCta}>
                <a href="/#features" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                  <LiquidButton size="sm">
                    Explore Now
                    <ChevronRight className="!size-3.5" />
                  </LiquidButton>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
