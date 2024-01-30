import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav className={styles.nav}>
      <h2 className="logo">
        <Link to="/">Todo</Link>
      </h2>
      <ul className={styles.navItems}>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="completed">Completed</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
