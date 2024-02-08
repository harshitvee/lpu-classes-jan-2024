import { useCart } from "../Contexts/CartProvider";
import styles from "./SingleProduct.module.css";
function SingleProduct({ id, title, price, description, category, image }) {
  const { addToCart } = useCart();
  return (
    <div className={styles.product}>
      <img src={image} alt={title} className={styles.productImg} />
      <button
        onClick={() => {
          addToCart({ id, title, price, description, category, image, qty: 1 });
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
export default SingleProduct;
