import styles from "@/app/styles/components/layout/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-inner"]}>
        <p className={styles["footer-text"]}>
          &copy; {new Date().getFullYear()} 웹퍼블리싱 가이드
        </p>
        <p className={styles["footer-author"]}>담당자 : 김민지</p>
      </div>
    </footer>
  );
}
