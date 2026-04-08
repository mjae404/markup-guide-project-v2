"use client";

import { useId } from "react";
import styles from "@/app/styles/components/common/Select.module.scss";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
}

export default function Select({
  label,
  options,
  value,
  onChange,
  disabled = false,
  placeholder,
  id: externalId,
  name,
  autoComplete = "off",
}: SelectProps) {
  const autoId = useId();
  const id = externalId || autoId;
  const fieldClassNames = [
    styles["select-field"],
    disabled ? styles["select-field--disabled"] : "",
    !value && placeholder ? styles["select-field--placeholder"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["select-wrapper"]}>
      {label && (
        <label className={styles["select-label"]} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles["select-container"]}>
        <select
          id={id}
          name={name || id}
          className={fieldClassNames}
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          autoComplete={autoComplete}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles["select-chevron"]} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3.5 5.25L7 8.75L10.5 5.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
