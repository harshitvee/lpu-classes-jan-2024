// useState
// all hooks starts with "use"

// rules of hooks
// call hook inside component function diretly

// useState

// input
// 1. initial value of state

// output
// array --> 2 elements
// 1st element ---> state value
// 2nd element ---> function to update state value
import { useState } from "react";
function SimpleCounter() {
  // const arrayFromUseState = useState(1);
  // const stateValue = arrayFromUseState[0];
  // const functionToUpdateStateVal = arrayFromUseState[1];
  const [num, setNum] = useState(1);

  function handleIncrease() {
    setNum(num + 1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleIncrease}>Incremenet</button>
    </div>
  );
}
export default SimpleCounter;
