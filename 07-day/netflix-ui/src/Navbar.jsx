import logo from "./assets/logo.png";
import { buttonStyles } from "./styles/button";
function Navbar() {
  const navStyles = {
    maxWidth: "1280px",
    width: "90%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    // border: "2px solid red",
  };

  return (
    <nav style={navStyles}>
      <img
        src={logo}
        alt="Netflix Logo"
        style={{
          width: "100px",
        }}
      />
      <button style={buttonStyles}>Sign In</button>
    </nav>
  );
}
export default Navbar;
