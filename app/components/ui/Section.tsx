import styles from "@/app/styles/components/ui/Section.module.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section className={styles.section} id={id}>
      <h3 className={styles["section-title"]}>{title}</h3>
      {children}
    </section>
  );
}

export function SubTitle({ children }: { children: React.ReactNode }) {
  return <h4 className={styles["section-sub-title"]}>{children}</h4>;
}

export function SectionDesc({ children }: { children: React.ReactNode }) {
  return <p className={styles["section-desc"]}>{children}</p>;
}
