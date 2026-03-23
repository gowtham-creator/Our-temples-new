import Image from 'next/image';
import { footerLinks, socialLinks } from '@/data/footer';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Image
                src="https://framerusercontent.com/images/ZL2liOPYLvg5tD7SnBC1IFUgbQ.svg"
                alt="Sonic"
                width={110}
                height={32}
              />
              <div className={styles.divider} />
              <span className={styles.tagline}>The Perfect Sound, Anywhere</span>
            </div>
          </div>
          <div className={styles.linksGroup}>
            <h6 className={styles.heading}>Company</h6>
            <ul className={styles.linksList}>
              {footerLinks.company.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h6 className={styles.heading}>Legal</h6>
            <ul className={styles.linksList}>
              {footerLinks.legal.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.watermark}>
          <Image
            src="https://framerusercontent.com/images/ZL2liOPYLvg5tD7SnBC1IFUgbQ.svg"
            alt=""
            width={1200}
            height={60}
            className={styles.watermarkImg}
          />
        </div>
        <div className={styles.bottom}>
          <span>&copy; 2025. All rights reserved. SONIC</span>
          <div className={styles.social}>
            <span>@sonic</span>
            {socialLinks.map((s) => (
              <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                {s.platform === 'x' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.29l62.6,98.38L41.08,210.62a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,69.14,48h22.47L186.86,208Z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
