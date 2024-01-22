// input fields have own state by default (HTML)

import { useState } from "react";

// we want to controll our input fields using react state
// (controlled components )
function MyForm() {
  const [username, setUsername] = useState("");
  function handleChange(e) {
    setUsername(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
    </div>
  );
}
export default MyForm;
