import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
};

export default function Button({ children, variant = 'primary', size = 'md', href = '#' }: ButtonProps) {
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]} ${styles[size]}`}>
      {children}
      <span className={styles.caret}>&#8250;</span>
    </a>
  );
}
