import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.access_token) {
      setAuth(user);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
export default AuthContextProvider;
