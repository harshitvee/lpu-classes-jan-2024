import GrandChild from "./GrandChild";

function Child({ myAppstate }) {
  console.log("Child render");
  return (
    <div>
      <h1>{myAppstate}</h1>
      <GrandChild myAppstate={myAppstate} />
    </div>
  );
}
export default Child;
