"use client";

import styles from "@/app/styles/components/common/Progress.module.scss";

interface ProgressProps {
  value: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  color?: string;
}

export default function Progress({
  value,
  size = "md",
  showLabel = false,
  color,
}: ProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const sizeClass = {
    sm: styles["progress-track-sm"],
    md: styles["progress-track-md"],
    lg: styles["progress-track-lg"],
  }[size];

  return (
    <div className={styles["progress-wrap"]}>
      <div
        className={`${styles["progress-track"]} ${sizeClass}`}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={styles["progress-fill"]}
          style={{
            width: `${clampedValue}%`,
            ...(color ? { backgroundColor: color } : {}),
          }}
        />
      </div>
      {showLabel && (
        <span className={styles["progress-label"]}>{clampedValue}%</span>
      )}
    </div>
  );
}
