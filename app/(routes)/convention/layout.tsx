import SidebarLayout from "@/app/components/layout/SidebarLayout";
import { conventionMenu } from "@/app/data/menu";

export default function ConventionLayout({ children }: { children: React.ReactNode }) {
  return <SidebarLayout menuGroup={conventionMenu}>{children}</SidebarLayout>;
}
