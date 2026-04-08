"use client";

import React, { useState, useRef } from "react";
import styles from "@/app/styles/components/common/Tooltip.module.scss";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
  children,
  content,
  position = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles["tooltip-wrapper"]}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={triggerRef}
    >
      {children}
      <div
        className={`${styles["tooltip-content"]} ${styles[`tooltip-${position}`]} ${isVisible ? styles["tooltip-visible"] : ""}`}
        role="tooltip"
      >
        {content}
        <span className={styles["tooltip-arrow"]} />
      </div>
    </div>
  );
}
