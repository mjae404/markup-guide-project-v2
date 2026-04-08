"use client";

import styles from "@/app/styles/components/common/Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];

  if (current <= 3) {
    pages.push(1, 2, 3, 4, "ellipsis", total);
  } else if (current >= total - 2) {
    pages.push(1, "ellipsis", total - 3, total - 2, total - 1, total);
  } else {
    pages.push(1, "ellipsis", current - 1, current, current + 1, "ellipsis", total);
  }

  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav className={styles["pagination-wrap"]} aria-label="Pagination">
      <button
        className={styles["pagination-button"]}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        &lsaquo;
      </button>

      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className={styles["pagination-ellipsis"]}>
            &hellip;
          </span>
        ) : (
          <button
            key={page}
            className={`${styles["pagination-button"]} ${
              page === currentPage ? styles["pagination-button-active"] : ""
            }`}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles["pagination-button"]}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        &rsaquo;
      </button>
    </nav>
  );
}
