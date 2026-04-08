import Link from "next/link";
import { menuItems } from "@/app/data/menu";
import styles from "@/app/styles/components/routes/page.module.scss";

export default function HomePage() {
  return (
    <>
      <div className={styles.hero}>
        <span className={styles["hero-badge"]}>Guide Document</span>
        <h2 className={styles["hero-title"]}>
          <span className={styles["hero-title-accent"]}>프로젝트</span> 웹퍼블리싱 가이드
        </h2>
        <p className={styles["hero-desc"]}>
          효율적이고 일관된 마크업 개발을 위한 가이드 문서입니다
        </p>
      </div>

      <div className={styles["index-grid"]}>
        {menuItems.map((group, index) => (
          <div key={group.titleHref} className={styles["index-card"]}>
            <span className={styles["index-card-number"]}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles["index-card-title"]}>{group.title}</h3>
            <ul className={styles["index-card-list"]}>
              {group.children.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className={styles["index-card-link"]}>
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
