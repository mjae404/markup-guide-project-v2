"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems, type MenuGroup } from "@/app/data/menu";
import styles from "@/app/styles/components/layout/Header.module.scss";

export default function Header() {
  const pathname = usePathname().replace(/\/$/, '');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "auto";
  }, [pathname]);

  const handleOpen = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setMobileOpen(false);
    document.body.style.overflow = "auto";
  };

  const isGroupActive = (group: MenuGroup) =>
    pathname.startsWith(group.titleHref);

  return (
    <>
      <header className={styles.header}>
        <div className={styles["header-inner"]}>
          <div>
            <h1 className="blind">기본 프로젝트 웹퍼블리싱 마크업 가이드 문서</h1>
            <Link href="/" className={styles["header-title-link"]}>
              <span className={styles["header-title-accent"]}>프로젝트</span> 웹퍼블리싱 가이드
            </Link>
          </div>

          <nav className={styles.nav}>
            {menuItems.map((group) => (
              <Link
                key={group.titleHref}
                href={group.children[0].href}
                className={`${styles["nav-link"]} ${isGroupActive(group) ? styles.active : ""}`}
              >
                {group.title}
              </Link>
            ))}
          </nav>

          <button
            className={styles["mobile-toggle"]}
            onClick={handleOpen}
            aria-label="메뉴 열기"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`${styles["mobile-overlay"]} ${mobileOpen ? styles.open : ""}`}
        onClick={handleClose}
      />

      <nav
        className={`${styles["mobile-nav"]} ${mobileOpen ? styles.open : ""}`}
      >
        <div className={styles["mobile-nav-header"]}>
          <span className={styles["mobile-nav-header-title"]}>메뉴</span>
          <button
            className={styles["mobile-nav-close"]}
            onClick={handleClose}
            aria-label="메뉴 닫기"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {menuItems.map((group) => (
          <div key={group.titleHref} className={styles["mobile-nav-group"]}>
            <span className={styles["mobile-nav-title"]}>{group.title}</span>
            <ul className={styles["mobile-nav-list"]}>
              {group.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className={`${styles["mobile-nav-link"]} ${pathname === child.href ? styles.active : ""}`}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );
}
