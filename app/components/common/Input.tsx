"use client";

import { useId } from "react";
import styles from "@/app/styles/components/common/Input.module.scss";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  disabled = false,
  error,
  id: externalId,
  name,
  autoComplete = "off",
}: InputProps) {
  const autoId = useId();
  const id = externalId || autoId;
  const fieldClassNames = [
    styles["input-field"],
    error ? styles["input-field--error"] : "",
    disabled ? styles["input-field--disabled"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["input-wrapper"]}>
      {label && (
        <label className={styles["input-label"]} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name || id}
        type={type}
        className={fieldClassNames}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        autoComplete={autoComplete}
      />
      {error && <span className={styles["input-error"]}>{error}</span>}
    </div>
  );
}
