"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenuGroup } from "@/app/data/menu";
import styles from "@/app/styles/components/layout/Aside.module.scss";

interface AsideProps {
  menuGroup: MenuGroup;
}

export default function Aside({ menuGroup }: AsideProps) {
  const pathname = usePathname().replace(/\/$/, '');

  return (
    <aside className={styles.aside}>
      <nav>
        <ul className={styles["aside-nav-list"]}>
          {menuGroup.children.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles["aside-nav-link"]} ${pathname === item.href ? styles.active : ""}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
