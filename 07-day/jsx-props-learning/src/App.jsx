import Header from "./Header";

function App() {
  // header , h1
  const firstName = "John";
  const x = 9;
  const stylesObject = {
    border: "2px solid green",
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
  };
  return (
    <div
      style={{
        border: "2px solid red",
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
      }}
    >
      <h1>Hello {firstName}</h1>
      {/* <h2>maths : {x > 10 ? "yes" : "No"}</h2>
      <p> hello {`abc ${x > 9}`}</p> */}
      <Header />
    </div>
  );
}

export default App;
