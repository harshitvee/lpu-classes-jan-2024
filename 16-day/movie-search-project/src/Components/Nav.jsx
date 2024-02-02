import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav className={`container ${styles.nav}`}>
      <h2 className="logo">
        <Link to="/">Movie Search</Link>
      </h2>
    </nav>
  );
}
export default Nav;
