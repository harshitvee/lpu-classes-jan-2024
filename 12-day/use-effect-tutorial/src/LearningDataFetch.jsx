// Data Fetching ?
// after component mount/ render / load on screen

import { useEffect, useState } from "react";

// useEffect(() => {}, []) // callback runs after initial mount

// data fetching thing --> asked in all the interviews

const endpoint = "https://jsonplaceholder.typicode.com/users";

function LearningDataFetch() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const response = await fetch(endpoint);
    const data = await response.json();
    // store this inside state
    setUsers(data); //  component re-render again
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default LearningDataFetch;
