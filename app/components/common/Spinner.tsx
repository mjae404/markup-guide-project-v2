"use client";

import React from "react";
import styles from "@/app/styles/components/common/Spinner.module.scss";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function Spinner({ size = "md", color }: SpinnerProps) {
  const style = color ? ({ "--spinner-color": color } as React.CSSProperties) : undefined;

  return (
    <span
      className={`${styles["spinner"]} ${styles[`spinner-${size}`]}`}
      style={style}
      role="status"
      aria-label="Loading"
    />
  );
}
