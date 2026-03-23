import Image from 'next/image';
import styles from './page.module.css';

const colors = [
  { name: '--dark-1', value: 'rgb(38, 38, 40)', textColor: 'white' },
  { name: '--dark-2', value: 'rgb(87, 87, 87)', textColor: 'white' },
  { name: '--dark-3', value: 'rgb(195, 196, 197)', textColor: 'black' },
  { name: '--dark-4', value: 'rgb(236, 237, 239)', textColor: 'black' },
  { name: '--dark-5', value: 'rgb(250, 250, 250)', textColor: 'black' },
  { name: '--white', value: 'rgb(255, 255, 255)', textColor: 'black' },
  { name: '--black', value: 'rgb(5, 6, 11)', textColor: 'white' },
  { name: '--light-blue', value: 'rgb(197, 224, 242)', textColor: 'black' },
  { name: '--neutral-50', value: 'rgb(112, 112, 112)', textColor: 'white' },
  { name: '--neutral-20', value: 'rgb(235, 235, 235)', textColor: 'black' },
  { name: '--neutral-10', value: 'rgb(248, 248, 248)', textColor: 'black' },
];

const typographyStyles = [
  { className: 'h1', label: 'H1 — 60px / 700 / 1.2' },
  { className: 'h2', label: 'H2 — 52px / 600 / 1.2' },
  { className: 'h3', label: 'H3 — 44px / 400 / 1.2' },
  { className: 'h4', label: 'H4 — 36px / 400 / 1.2' },
  { className: 'h5', label: 'H5 — 28px / 400 / 1.4' },
  { className: 'h6', label: 'H6 — 20px / 400 / 1.2' },
  { className: 'body-xl', label: 'Body XL — 24px / 400 / 1.6' },
  { className: 'body-l', label: 'Body L — 20px / 400 / 1.6' },
  { className: 'body-m', label: 'Body M — 16px / 400 / 1.5' },
];

export default function Home() {
  return (
    <div className={styles.testPage}>
      <h1 style={{ marginBottom: 32 }}>Sonic — Foundation Test Page</h1>

      {/* Color Tokens */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Color Tokens (11 custom properties)</div>
        <div className={styles.swatchGrid}>
          {colors.map((c) => (
            <div
              key={c.name}
              className={styles.swatch}
              style={{ backgroundColor: c.value, color: c.textColor }}
            >
              {c.name}
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Typography Styles (9 classes)</div>
        {typographyStyles.map((t) => (
          <div key={t.className} className={styles.typographySample}>
            <div className={styles.label}>{t.label}</div>
            <div className={t.className}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>

      {/* Image Test */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>next/image — Framer CDN Test</div>
        <div className={styles.imageTest}>
          <div className={styles.imageWrapper}>
            <Image
              src="https://framerusercontent.com/images/jnFnKGCBFpXXVPMeyFCoODPpo.png"
              alt="Sonic speaker product image test"
              width={400}
              height={400}
              priority
            />
          </div>
          <div>
            <p className="body-l">Image loaded successfully from framerusercontent.com</p>
            <p className="body-m" style={{ color: 'var(--neutral-50)', marginTop: 8 }}>
              If you see the speaker image, next/image remote patterns are configured correctly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
