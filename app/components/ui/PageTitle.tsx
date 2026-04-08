import styles from "@/app/styles/components/ui/PageTitle.module.scss";

interface PageTitleProps {
  children: React.ReactNode;
  badge?: string;
}

export default function PageTitle({ children, badge }: PageTitleProps) {
  return (
    <div className={styles["page-title"]}>
      {badge && <span className={styles["page-title-badge"]}>{badge}</span>}
      <h2 className={styles["page-title-heading"]}>{children}</h2>
    </div>
  );
}
