const root = document.getElementById("root");

function NavBar() {
  return <h2>Navbar</h2>;
}

function Images() {
  return <h2>Images</h2>;
}

function App() {
  return (
    <div>
      <h1>App</h1>
      <NavBar />
      <Images />
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);
