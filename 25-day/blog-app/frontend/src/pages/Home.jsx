// when the component mounts we need to fetch all the todos

import { BASE_URL } from "../constants.js";
import Blog from "../components/Blog.jsx";
import styles from "./Home.module.css";
import useAxiosGet from "../hooks/useAxiosGet.jsx";
function Home() {
  const {
    isLoading,
    error,
    data: blogs,
  } = useAxiosGet({ endpoint: BASE_URL, sendToken: false });
  if (isLoading) {
    return <h1>Loading ....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={styles.blogs}>
      {blogs.map((blog) => (
        <Blog key={blog._id} {...blog} />
      ))}
    </div>
  );
}
export default Home;
