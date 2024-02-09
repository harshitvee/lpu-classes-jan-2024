import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Products.module.css";
import SingleProduct from "../Components/SingleProduct";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className={styles.productsPage}>
      <h1>Best Of ARC Shop</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
export default Products;
