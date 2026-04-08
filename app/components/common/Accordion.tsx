"use client";

import { useState, useCallback } from "react";
import styles from "@/app/styles/components/common/Accordion.module.scss";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggleItem = useCallback(
    (index: number) => {
      setOpenIndexes((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(index);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  return (
    <div className={styles["accordion-wrap"]}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <div key={index} className={styles["accordion-item"]}>
            <button
              className={styles["accordion-trigger"]}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span
                className={`${styles["accordion-chevron"]} ${
                  isOpen ? styles["accordion-chevron-open"] : ""
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </span>
            </button>
            <div
              className={`${styles["accordion-content-wrap"]} ${
                isOpen ? styles["accordion-content-wrap-open"] : ""
              }`}
            >
              <div className={styles["accordion-content"]}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
