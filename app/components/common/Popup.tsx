"use client";

import React, { useEffect } from "react";
import styles from "@/app/styles/components/common/Popup.module.scss";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Popup({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: PopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles["popup-overlay"]} onClick={onClose}>
      <div
        className={`${styles["popup-container"]} ${styles[`popup-${size}`]}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["popup-header"]}>
          {title && <h2 className={styles["popup-title"]}>{title}</h2>}
          <button
            className={styles["popup-close"]}
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>
        </div>
        <div className={styles["popup-body"]}>{children}</div>
      </div>
    </div>
  );
}
