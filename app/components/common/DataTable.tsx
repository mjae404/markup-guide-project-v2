"use client";

import styles from "@/app/styles/components/common/DataTable.module.scss";

interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, string>[];
  striped?: boolean;
  hoverable?: boolean;
}

export default function DataTable({
  columns,
  data,
  striped = false,
  hoverable = false,
}: DataTableProps) {
  const rowClasses = [
    styles["data-table-body-row"],
    striped ? styles["data-table-body-row-striped"] : "",
    hoverable ? styles["data-table-body-row-hoverable"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["data-table-wrap"]}>
      <table className={styles["data-table"]}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={styles["data-table-head-cell"]}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowClasses}>
              {columns.map((col) => (
                <td key={col.key} className={styles["data-table-body-cell"]}>
                  {row[col.key] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
