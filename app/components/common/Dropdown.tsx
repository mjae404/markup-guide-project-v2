"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import styles from "@/app/styles/components/common/Dropdown.module.scss";

interface DropdownItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
}

export default function Dropdown({
  trigger,
  items,
  align = "left",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  const alignClass =
    align === "right"
      ? styles["dropdown-menu-right"]
      : styles["dropdown-menu-left"];

  return (
    <div className={styles["dropdown-wrap"]} ref={wrapRef}>
      <div
        className={styles["dropdown-trigger"]}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {trigger}
      </div>
      <div
        className={`${styles["dropdown-menu"]} ${alignClass} ${
          isOpen ? styles["dropdown-menu-open"] : ""
        }`}
      >
        {items.map((item, index) => (
          <button
            key={index}
            className={styles["dropdown-menu-item"]}
            onClick={() => {
              item.onClick();
              setIsOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
