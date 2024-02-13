import { useState } from "react";
import styles from "./CreateBlog.module.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const {
    auth: { access_token },
  } = useAuth();
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // create dropdown also
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await axios.post(
        BASE_URL,
        { heading, body, category },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setBody("");
      setCategory("");
      setHeading("");
      navigate("/my-blogs");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.createBlogForm}>
      <div className={styles.formGroup}>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          name="heading"
          id="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="blog-body">Body</label>
        <textarea
          name="blog-body"
          id="blog-body"
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating ..." : "create"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
export default CreateBlog;
