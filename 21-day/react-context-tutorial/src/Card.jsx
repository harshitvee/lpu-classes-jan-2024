import styles from "./Card.module.css";
function Card({ children }) {
  return <div className={styles.Card}>{children}</div>;
}
export default Card;
