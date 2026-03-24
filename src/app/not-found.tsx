import Link from 'next/link';
import styles from './not-found.module.css';
import FadeIn from '@/components/interactive/FadeIn';

function CaretRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M96 48L176 128L96 208" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <FadeIn delay={0.1} blur>
          <h1 className="h1">Page Not Found</h1>
        </FadeIn>
        <FadeIn delay={0.2} blur>
          <p className="body-l">
            It looks like the page you&apos;re looking for doesn&apos;t exist. Maybe it was moved, deleted, or never existed in the first place.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} blur>
          <Link href="/" className={styles.btn}>
            Home page
            <CaretRightIcon />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
