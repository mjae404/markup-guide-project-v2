"use client";

import React from "react";
import styles from "@/app/styles/components/common/Toast.module.scss";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  isVisible: boolean;
  onClose: () => void;
}

const icons: Record<string, string> = {
  success: "\u2713",
  error: "\u2715",
  warning: "\u26A0",
  info: "\u2139",
};

export default function Toast({
  message,
  type = "info",
  isVisible,
  onClose,
}: ToastProps) {
  if (!isVisible) return null;

  return (
    <div
      className={`${styles["toast-container"]} ${styles[`toast-${type}`]} ${isVisible ? styles["toast-visible"] : ""}`}
      role="alert"
    >
      <span className={styles["toast-icon"]}>{icons[type]}</span>
      <p className={styles["toast-message"]}>{message}</p>
      <button
        className={styles["toast-close"]}
        onClick={onClose}
        aria-label="Close"
        type="button"
      >
        &times;
      </button>
    </div>
  );
}
