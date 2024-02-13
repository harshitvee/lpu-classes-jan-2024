import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useAuth } from "../contexts/AuthContextProvider";
function Nav() {
  const { auth, setAuth } = useAuth();
  function logout() {
    setAuth({});
    localStorage.removeItem("user");
  }
  return (
    <nav className={styles.nav}>
      <h2>
        <Link to="/">BlogApp</Link>
      </h2>
      <ul className={styles.navItems}>
        {!auth?.access_token && (
          <div className={styles.navItems}>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Signup</Link>
            </li>
          </div>
        )}
        {auth?.access_token && (
          <div className={styles.navItems}>
            <li>
              <Link to="create">Create</Link>
            </li>
            <li>
              <Link to="my-blogs">My Blogs</Link>
            </li>
            <li>
              <p className={styles.greet}>welcome {auth.email.split("@")[0]}</p>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
