"use client";

import React, { useEffect } from "react";
import styles from "@/app/styles/components/common/Offcanvas.module.scss";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: "left" | "right";
}

export default function Offcanvas({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
}: OffcanvasProps) {
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
    <div className={styles["offcanvas-overlay"]} onClick={onClose}>
      <aside
        className={`${styles["offcanvas-panel"]} ${styles[`offcanvas-${position}`]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["offcanvas-header"]}>
          {title && <h2 className={styles["offcanvas-title"]}>{title}</h2>}
          <button
            className={styles["offcanvas-close"]}
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>
        </div>
        <div className={styles["offcanvas-body"]}>{children}</div>
      </aside>
    </div>
  );
}
