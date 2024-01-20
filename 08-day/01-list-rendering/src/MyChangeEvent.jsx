function MyChangeEvent() {
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h2>Change Event</h2>
      <input
        type="text"
        name="username"
        id="username"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  );
}

// inputs
// text, password, checkbox, select
export default MyChangeEvent;
