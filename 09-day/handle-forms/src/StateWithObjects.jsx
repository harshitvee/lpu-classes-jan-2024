import { useState } from "react";

function StateWithObjects() {
  const [user, setUser] = useState({
    firstName: "Harshit",
    gender: "Male",
  });
  function changeFirstname() {
    setUser((user) => ({ ...user, firstName: "John" }));
  }
  return (
    <div>
      <h3>firstName : {user.firstName}</h3>
      <h3>gender : {user.gender}</h3>
      <button onClick={changeFirstname}>Change FirstName</button>
    </div>
  );
}
export default StateWithObjects;
