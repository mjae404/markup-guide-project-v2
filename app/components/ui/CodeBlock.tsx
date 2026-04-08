import styles from "@/app/styles/components/ui/CodeBlock.module.scss";

interface CodeBlockProps {
  children: string;
  language?: string;
}

export default function CodeBlock({ children, language }: CodeBlockProps) {
  return (
    <div className={styles["code-block"]}>
      {language && (
        <div className={styles["code-block-header"]}>
          <span className={styles["code-block-lang"]}>{language}</span>
        </div>
      )}
      <pre className={styles["code-block-pre"]}>
        <code className={styles["code-block-code"]}>{children}</code>
      </pre>
    </div>
  );
}

export function CodeInline({ children }: { children: React.ReactNode }) {
  return <code className={styles["code-inline"]}>{children}</code>;
}

interface ExampleBlockProps {
  type: "good" | "bad";
  children: string;
}

export function ExampleBlock({ type, children }: ExampleBlockProps) {
  return (
    <div
      className={`${styles["example-block"]} ${styles[`example-block-${type}`]}`}
    >
      <div className={styles["example-block-header"]}>
        {type === "good" ? (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 110 14A7 7 0 018 1zm3.2 4.3a.75.75 0 00-1.06-.04L7 8.17 5.84 7.05a.75.75 0 10-1.08 1.04l1.7 1.75a.75.75 0 001.07.02l3.65-3.5a.75.75 0 00.02-1.06z" />
            </svg>
            올바른 예시
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 110 14A7 7 0 018 1zm2.5 4.5a.75.75 0 00-1.06 0L8 6.94 6.56 5.5A.75.75 0 005.5 6.56L6.94 8 5.5 9.44a.75.75 0 101.06 1.06L8 9.06l1.44 1.44a.75.75 0 101.06-1.06L9.06 8l1.44-1.44a.75.75 0 000-1.06z" />
            </svg>
            잘못된 예시
          </>
        )}
      </div>
      <pre className={styles["example-block-pre"]}>
        <code className={styles["example-block-code"]}>{children}</code>
      </pre>
    </div>
  );
}
