import { useState } from "react";
function SetStateWithCallBack() {
  const [num, setNum] = useState(0);
  const handleClick = () => {
    // setNum(num + 1);
    // setNum((prevNum) => {
    //   console.log("previous state val", prevState);
    //   return prevNum + 1;
    // });

    // implicit return
    setNum((prevNum) => prevNum + 1);
  };
  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setNum((prevNum) => prevNum + 1);
        }}
      >
        increase
      </button>
    </>
  );
}
export default SetStateWithCallBack;
