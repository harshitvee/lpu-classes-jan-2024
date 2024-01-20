import { useState } from "react";

function StateWithObjects() {
  const [user, setUser] = useState({
    firstName: "harshit",
    gender: "male",
  });

  function changeUsername() {
    // const newUser = { ...user, firstName: "John" };
    // setUser(newUser);
    // setUser((prevUser) => {
    //   return {
    //     ...prevUser,
    //     firstName: "John",
    //   };
    // });

    // implicit return when you have object
    setUser((prevUser) => ({
      ...prevUser,
      firstName: "John",
    }));
  }
  return (
    <div>
      <h1>StateWithObjects</h1>
      <h3>Username : {user.firstName}</h3>
      <button onClick={changeUsername}>Change Username</button>
    </div>
  );
}
export default StateWithObjects;
