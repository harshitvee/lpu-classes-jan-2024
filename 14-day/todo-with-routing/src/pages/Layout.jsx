import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import styles from "./Layout.module.css";
function Layout() {
  return (
    <div className={styles.layout}>
      <Nav />
      <Outlet />
    </div>
  );
}
export default Layout;
