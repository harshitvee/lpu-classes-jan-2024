import { Link } from "react-router-dom";
function Blog({ _id: id, heading, category, body }) {
  return (
    <Link
      to={`/${id}`}
      style={{
        border: "2px solid black",
        marginBottom: "1rem",
        padding: "1rem",
        display: "block",
      }}
    >
      <h3>{heading}</h3>
      <small>{category}</small>
    </Link>
  );
}
export default Blog;
