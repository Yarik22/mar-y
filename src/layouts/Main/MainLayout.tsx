import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./mainLayout.module.scss";
import { auth } from "../../config/firebase";

export default function MainLayout() {
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
