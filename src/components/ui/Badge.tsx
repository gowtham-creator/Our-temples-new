import styles from './Badge.module.css';

type BadgeProps = {
  icon: React.ReactNode;
  label: string;
};

export default function Badge({ icon, label }: BadgeProps) {
  return (
    <div className={styles.badge}>
      {icon}
      <span>{label}</span>
    </div>
  );
}
