"use client";

import { useId } from "react";
import styles from "@/app/styles/components/common/Checkbox.module.scss";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id: externalId,
  name,
}: CheckboxProps) {
  const autoId = useId();
  const id = externalId || autoId;
  const classNames = [
    styles["checkbox"],
    checked ? styles["checkbox--checked"] : "",
    disabled ? styles["checkbox--disabled"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={classNames} htmlFor={id}>
      <input
        id={id}
        name={name || id}
        type="checkbox"
        className={styles["checkbox__input"]}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={styles["checkbox__indicator"]}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 6L5 8.5L9.5 3.5"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label && <span className={styles["checkbox__label"]}>{label}</span>}
    </label>
  );
}
