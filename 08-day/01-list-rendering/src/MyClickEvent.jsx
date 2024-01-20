function MyClickEvent() {
  function handleClick(e) {
    console.log("click me");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default MyClickEvent;
