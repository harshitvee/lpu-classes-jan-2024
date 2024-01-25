import { useEffect, useState } from "react";
import axios from "axios";
const endpoint = "https://jsonplaceholder.typicode.com/users";

// component initial mount --> then fetch data
function LearnDataFetchingWithAxios() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  async function getUsers() {
    try {
      const response = await axios.get(endpoint);
      const data = response.data;
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (error.trim()) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default LearnDataFetchingWithAxios;
