import { toast } from "react-toastify";
import { useCart } from "../Contexts/CartProvider";
import styles from "./SingleProduct.module.css";
function SingleProduct({ id, title, category, description, image, price }) {
  const { dispatch, cart } = useCart();
  function addToCart() {
    const cartItem = { id, title, category, description, image, price, qty: 1 };

    // check if item already added to cart ?
    // if yes then return and show toast error
    const found = cart.find((cartItem) => cartItem.id === id);
    if (found) {
      toast.error("Item Already Added To Cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
      return;
    }

    dispatch({ type: "ADD_ITEM", payload: cartItem });
    toast.success("Item Added To Cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
    });
  }
  return (
    <div className={styles.singleProduct}>
      <div className={styles.imgAndDesc}>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.priceAndBuyBtn}>
        <h2 className={styles.price}>&#8377;{price}</h2>
        <button className={styles.addToCartBtn} onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default SingleProduct;
