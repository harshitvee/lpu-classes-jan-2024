// useState

// useReducer

// counter application ? useState

// function LearningUseReducer() {
//   const [counter, setCounter] = useState(0);
//   function handleIncrease() {
//     setCounter((count) => count + 1);
//   }
//   function handleDecrease() {
//     setCounter((count) => count - 1);
//   }
//   function handleReset() {
//     setCounter(0);
//   }
//   return (
//     <div>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase </button>
//       <button onClick={handleReset}>Reset</button>
//       <button onClick={handleDecrease}>Decrease</button>
//     </div>
//   );
// }

// useReducer
// input : reducer function , initalState

// output : array with 2 vals [state, function to  update state]

// when we want to change the count
// we call dispatch function
// dispatch function calls reducer and reducer updates the count

import { useReducer } from "react";
function reducer(count, action) {
  if (action.type === "INCREASE") {
    return count + 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  if (action.type === "DECREASE") {
    return count - 1;
  }
  return count;
}
function LearningUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
    </div>
  );
}
export default LearningUseReducer;
