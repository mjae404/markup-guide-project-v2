import SidebarLayout from "@/app/components/layout/SidebarLayout";
import { accessibilityMenu } from "@/app/data/menu";

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout menuGroup={accessibilityMenu}>{children}</SidebarLayout>;
}
