import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCart } from "../Contexts/CartProvider";
function Navbar() {
  const { cart } = useCart();
  const totalQty = cart.reduce((acc, cartItem) => {
    return acc + cartItem.qty;
  }, 0);
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h2>ARC Shop</h2>
      </Link>
      <Link to="cart" className={styles.cartLink}>
        Cart {totalQty > 0 ? `(${totalQty})` : ""}
      </Link>
    </nav>
  );
}
export default Navbar;
