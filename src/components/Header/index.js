import { useQuery } from "react-query";
import { useAuth } from "../../lib/hooks/use-auth";
import { fetchCurrentUser } from "../../lib/api";

const Header = () => {
  const { token, login, logout } = useAuth();

  const { data: user } = useQuery("user", fetchCurrentUser, {
    enabled: token,
  });

  return (
    <div style={{ background: "#111", color: "#fff" }}>
      {user && <span>{user.email}</span>}{" "}
      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Header;
