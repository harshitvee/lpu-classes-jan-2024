import styles from "./CartItem.module.css";
import { useCart } from "../Contexts/CartProvider";
function CartItem({ image, title, id, qty, price }) {
  const { dispatch } = useCart();
  function increaseQty() {
    dispatch({ type: "INCREASE_QTY", payload: { id: id } });
  }
  function removeItem() {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  }
  function decreaseQty() {
    if (qty === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
    } else {
      dispatch({ type: "DECREASE_QTY", payload: { id: id } });
    }
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgAndTitle}>
        <img src={image} alt={title} className={styles.image} />
        <p>{title}</p>
      </div>
      <h3>
        {price}*{qty} = {price * qty}
      </h3>
      <div className={styles.qtyControl}>
        <button onClick={decreaseQty}>-</button>
        <p>{qty}</p>
        <button onClick={increaseQty}>+</button>
      </div>

      <button className={styles.removeBtn} onClick={removeItem}>
        x
      </button>
    </div>
  );
}
export default CartItem;
