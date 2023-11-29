import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./mainLayout.module.scss";
import { useEffect } from "react";

export default function MainLayout() {
  const location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer
        className={location.pathname === "/" ? styles.footer : styles.none}
      >
        <Footer />
      </footer>
    </div>
  );
}
