import styles from "./SingleProduct.module.css";
function SingleProduct({ id, title, category, description, image, price }) {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.imgAndDesc}>
        <img src={image} alt={title} className={styles.image} />
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.priceAndBuyBtn}>
        <h2 className={styles.price}>&#8377;{price}</h2>
        <button className={styles.addToCartBtn}>Add To Cart</button>
      </div>
    </div>
  );
}
export default SingleProduct;
