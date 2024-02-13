import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../constants";
import { useAuth } from "../contexts/AuthContextProvider";
function Signup() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      if (password !== confirmPassword) {
        throw Error("Password Must Match");
      }

      const response = await axios.post(
        SIGNUP_URL,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAuth(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.error || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">ConfirmPassword</label>

        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Signup ..." : "Signup"}
      </button>
      {isLoading && <p>Loading ....</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
export default Signup;
