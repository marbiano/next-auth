import { useState, useEffect, useContext, createContext } from "react";
import { useQuery } from "react-query";
import { fetchCurrentUser } from "../lib/api";

const initialAuth = {
  token: undefined,
  user: undefined,
};

const AuthContext = createContext(initialAuth);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [token, setToken] = useState();
  const { data: user } = useQuery("user", fetchCurrentUser, {
    enabled: token,
  });

  const login = () => {
    const token = "testing123";
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
  };

  useEffect(() => {
    console.log("- - - effect: set initial token - - -");
    setToken(localStorage.getItem("token") || false);
  }, []);

  return {
    token,
    user,
    login,
    logout,
  };
};
