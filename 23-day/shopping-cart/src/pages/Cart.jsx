import CartItem from "../Components/CartItem";
import { useCart } from "../Contexts/CartProvider";
import styles from "./Cart.module.css";
function Cart() {
  const { cart } = useCart();
  const totalAmount = cart.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.qty;
  }, 0);
  return (
    <div className={styles.cartItems}>
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          image={cartItem.image}
          title={cartItem.title}
          id={cartItem.id}
          qty={cartItem.qty}
          price={cartItem.price}
        />
      ))}
      {cart.length === 0 && <h1>No Cart Item Found !!!</h1>}
      {cart.length > 0 ? <h1>Total Amount : {totalAmount}</h1> : ""}
    </div>
  );
}
export default Cart;
