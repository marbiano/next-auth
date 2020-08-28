import { useState, useEffect, useContext, createContext } from "react";
import { queryCache } from "react-query";
import { fetchCurrentUser } from "../api";

const DEMO_TOKEN = "testing123";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [token, setToken] = useState();

  const login = () => {
    localStorage.setItem("token", DEMO_TOKEN);
    setToken(DEMO_TOKEN);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    queryCache.removeQueries(({ queryKey }) => {
      return true;
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token") || false);
  }, []);

  return {
    token,
    login,
    logout,
  };
};
