import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "../Components/SingleProduct";
import styles from "./Products.module.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  async function fetchProducts() {
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
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  if (isLoading) {
    return <h1>Loading ....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </div>
  );
}
export default Products;
