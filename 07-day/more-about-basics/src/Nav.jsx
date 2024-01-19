import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li>item 1</li>
        <li className={styles.bgBlue}>item 2</li>
        <li>item 3</li>
      </ul>
    </nav>
  );
}
export default Nav;
