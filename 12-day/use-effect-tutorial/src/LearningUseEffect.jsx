// useEffect

import { useEffect, useState } from "react";

// hook

// rule of hook

// useEffect
// 2 inputs
// 1st --> callback function
// 2nd ---> dependecy array (optional)

// useEffect --> when after compoenent get rendered

// when state changes ---> component re-render ---> useEffect callback run

// useEffect w/o dependecy array
// run after every re-render

// useEffect : 3 ways to use

// 1. w/o any array
// 2. array with some state values
// 3. useEffect with empty dependency array

// useEffect(()=>{} , []) callback runs only after initial mount

// useEffect with empty dependency array : [] --> for data fetching

function LearningUseEffect() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    console.log("inside useEffect");
  }, []);
  return (
    <div>
      <h2>Counter app 1 </h2>
      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count 1
      </button>
      <hr />
      <h2>Counter app 2 </h2>
      <h2>{count2}</h2>
      <button onClick={() => setCount2((count) => count + 1)}>
        Increase Count 2
      </button>
    </div>
  );
}
export default LearningUseEffect;
