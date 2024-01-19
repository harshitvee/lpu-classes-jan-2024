import HeaderForm from "./HeaderForm";
import Navbar from "./Navbar";
import headerImg from "./assets/header-img.jpg";
import { headingStyles, subHeadingStyles } from "./styles/heading";
function Header() {
  const headerStyles = {
    border: "2px solid black",
    height: "70vh",
    background: `linear-gradient(
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0.4)
    ),url(${headerImg})`,
    boxShadow: "0 0 200px rgba(0,0,0,1) inset",
  };
  const headerContentStyles = {
    maxWidth: "1280px",
    width: "90%",
    margin: "auto",
    height: "100%",
    textAlign: "center",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <header style={headerStyles}>
      <Navbar />
      <div style={headerContentStyles}>
        <h2 style={headingStyles}>
          The biggest Indian hits. The best Indian stories. All streaming here.
        </h2>
        <h3 style={subHeadingStyles}>Watch anywhere. Cancel anytime.</h3>
        <h3 style={subHeadingStyles}>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <HeaderForm />
      </div>
    </header>
  );
}
export default Header;
