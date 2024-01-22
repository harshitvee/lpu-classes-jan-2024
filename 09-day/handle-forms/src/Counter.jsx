import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  function handleIncrease() {
    // 1.
    // setCounter(counter + 1);
    // 2.
    // setCounter((counter) => {
    //   return counter + 1;
    // });

    // 3.
    setCounter((counter) => counter + 1);
  }
  function handleReset() {
    setCounter(0);
  }
  function handleDecrease() {
    // setCounter(counter - 1);
    // setCounter((counter) => {
    //   return counter - 1;
    // });
    setCounter((counter) => counter - 1);
  }
  return (
    <div>
      <h2>counter application</h2>
      <h2>{counter} </h2>
      <button onClick={handleIncrease}>Increase </button>
      <button onClick={handleReset}>Reset </button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
export default Counter;
