function HeaderForm() {
  const formStyles = {
    width: "100%",
    display: "flex",
    height: "56px",
    gap: "1rem",
  };
  const inputStyles = {
    fontSize: "1.2rem",
    width: "65%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    color: "white",
    border: "0.5px solid #cdcdcd",
    padding: "1rem",
    outline: "none",
  };
  const buttonStyles = {
    width: "35%",
    backgroundColor: "rgb(229 , 20, 9)",
    color: "white",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <form style={formStyles}>
      <input type="email" name="email" id="emal" style={inputStyles} />
      <button style={buttonStyles}>Get Started ﹥</button>
    </form>
  );
}
export default HeaderForm;
