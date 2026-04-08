"use client";

import Aside from "@/app/components/layout/Aside";
import type { MenuGroup } from "@/app/data/menu";
import styles from "@/app/styles/components/routes/layout.module.scss";

interface SidebarLayoutProps {
  menuGroup: MenuGroup;
  children: React.ReactNode;
}

export default function SidebarLayout({ menuGroup, children }: SidebarLayoutProps) {
  return (
    <div className={styles["content-with-sidebar"]}>
      <Aside menuGroup={menuGroup} />
      <div className={styles["content-area"]}>{children}</div>
    </div>
  );
}
