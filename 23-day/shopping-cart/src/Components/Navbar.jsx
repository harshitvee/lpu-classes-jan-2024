import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h2>ARC Shop</h2>
      </Link>
      <Link to="cart" className={styles.cartLink}>
        Cart
      </Link>
    </nav>
  );
}
export default Navbar;
