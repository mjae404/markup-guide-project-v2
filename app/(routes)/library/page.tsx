import styles from "@/app/styles/components/routes/library.module.scss";

export default function LibraryPage() {
  return (
    <div className={styles["library-wrap"]}>
      <iframe
        className={styles["library-iframe"]}
        src="/storybook/index.html"
        title="컴포넌트 라이브러리 (Storybook)"
      />
    </div>
  );
}
