import GrandChild from "./GrandChild";

function Child() {
  return (
    <div
      style={{
        backgroundColor: "darkgoldenrod",
        padding: "3rem",
      }}
    >
      <h2>Child</h2>
      <GrandChild />
    </div>
  );
}
export default Child;
