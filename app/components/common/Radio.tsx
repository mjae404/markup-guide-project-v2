"use client";

import { useId } from "react";
import styles from "@/app/styles/components/common/Radio.module.scss";

interface RadioProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  id?: string;
}

export default function Radio({
  label,
  name,
  value = "",
  checked = false,
  onChange,
  disabled = false,
  id: externalId,
}: RadioProps) {
  const autoId = useId();
  const id = externalId || autoId;
  const classNames = [
    styles["radio"],
    checked ? styles["radio--checked"] : "",
    disabled ? styles["radio--disabled"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <label className={classNames} htmlFor={id}>
      <input
        id={id}
        name={name || id}
        type="radio"
        className={styles["radio__input"]}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={styles["radio__indicator"]}>
        <span className={styles["radio__dot"]} />
      </span>
      {label && <span className={styles["radio__label"]}>{label}</span>}
    </label>
  );
}
