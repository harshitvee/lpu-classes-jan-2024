import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/">Movie Search</Link>
      </h1>
    </nav>
  );
}
export default Nav;
