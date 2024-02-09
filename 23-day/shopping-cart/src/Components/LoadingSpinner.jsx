import loader from "../assets/loader.svg";
import styles from "./LoadingSpinner.module.css";
function LoadingSpinner() {
  return (
    <img src={loader} alt="Loading" className={styles.loadingSpinnerImg} />
  );
}
export default LoadingSpinner;
