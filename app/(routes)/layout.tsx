import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import styles from "@/app/styles/components/routes/layout.module.scss";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
