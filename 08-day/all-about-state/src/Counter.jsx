import { useState } from "react";
import styles from "./Counter.module.css";
function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    // setCounter(counter + 1)
    // setCounter(prevCounter => {
    //     return prevCounter + 1
    // })
    setCounter((counter) => counter + 1);
  }
  function handleReset() {
    setCounter(0);
  }
  function handleDecrease() {
    setCounter((counter) => counter - 1);
  }
  return (
    <div className={styles.counter}>
      <h1>Counter Application</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset </button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
export default Counter;
