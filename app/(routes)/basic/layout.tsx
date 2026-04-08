import SidebarLayout from "@/app/components/layout/SidebarLayout";
import { basicMenu } from "@/app/data/menu";

export default function BasicLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout menuGroup={basicMenu}>{children}</SidebarLayout>;
}
