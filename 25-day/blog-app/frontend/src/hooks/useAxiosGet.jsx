import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContextProvider";
function useAxiosGet({ endpoint, sendToken }) {
  const {
    auth: { access_token },
  } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const config = {};
  if (sendToken) {
    config.headers = { Authorization: `Bearer ${access_token}` };
  }
  async function fetchData() {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(endpoint, config);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, error, data };
}
export default useAxiosGet;
