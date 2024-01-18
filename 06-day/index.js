const root = document.getElementById("root");

// first Functional component

// function helloWorld() {
//   return React.createElement(
//     "h1",
//     {
//       className: "heading",
//       id: "heading",
//     },
//     "Hello React"
//   );
// }

// Babel  jsx ---> React.createElement

function HelloWorld() {
  return (
    <h1>
      hello <span className="highlight"> World</span>
    </h1>
  );
}
// html elements : h1, p , div (starts with small letter)

// ReactDOM.createRoot(root).render(helloWorld());
ReactDOM.createRoot(root).render(<HelloWorld />);
// ReactDOM.createRoot(root).render(<HelloWorld> </HelloWorld>);
