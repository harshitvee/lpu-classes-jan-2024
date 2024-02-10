import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Products.module.css";
import SingleProduct from "../Components/SingleProduct";
import LoadingSpinner from "../Components/LoadingSpinner";
function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError("");
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (error) {
    return <h1>{error}</h1>;
  }
  if (isLoading) {
    return <LoadingSpinner />;
  }
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
