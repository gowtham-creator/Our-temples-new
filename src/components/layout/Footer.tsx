import { footerLinks, socialLinks } from '@/data/footer';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.logoText}>OUR TEMPLES</span>
              <div className={styles.divider} />
              <span className={styles.tagline}>Discover Sacred Temples</span>
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
        <div />
        <div className={styles.bottom}>
          <span>&copy; 2026. All rights reserved. Our Temples</span>
          <div className={styles.social}>
            <span>@ourtemples</span>
            {socialLinks.map((s) => (
              <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={s.platform}>
                {s.platform === 'x' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.29l62.6,98.38L41.08,210.62a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,69.14,48h22.47L186.86,208Z"/></svg>
                )}
                {s.platform === 'instagram' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>
                )}
                {s.platform === 'linkedin' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/></svg>
                )}
                {s.platform === 'reddit' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l13.72-42.82,36.22,7.24a24,24,0,1,0,2.87-15.74l-44.07-8.81a8,8,0,0,0-9.34,5.56L120.32,64.1C97.84,65,76.26,70.47,58.94,79.81A32,32,0,0,0,8,104a31.8,31.8,0,0,0,5.81,18.41A64.13,64.13,0,0,0,8,144c0,53.57,53.83,96,120,96s120-42.43,120-96a64.13,64.13,0,0,0-5.81-21.59A31.8,31.8,0,0,0,248,104ZM192,40a8,8,0,1,1-8,8A8,8,0,0,1,192,40Zm40,64a16,16,0,0,1-13.5,15.81A93.39,93.39,0,0,0,196.49,95.5,16,16,0,0,1,232,104ZM40,104A16,16,0,0,1,59.51,95.5a93.39,93.39,0,0,0-22,24.31A16,16,0,0,1,40,104Zm88,120c-57.35,0-104-36.87-104-80,0-40.78,40.43-75.49,93.34-79.41A8,8,0,0,0,120,152a8,8,0,0,0,8-8,48.05,48.05,0,0,1,0-96c57.35,0,104,36.87,104,80S185.35,224,128,224ZM96,144a12,12,0,1,1,12-12A12,12,0,0,1,96,144Zm72-12a12,12,0,1,1-12-12A12,12,0,0,1,168,132Zm-1.22,38.11a8,8,0,0,1-2.89,10.94,80.27,80.27,0,0,1-71.78,0,8,8,0,0,1,8.05-13.83,64.2,64.2,0,0,0,55.73,0A8,8,0,0,1,166.78,170.11Z"/></svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
