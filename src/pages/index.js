import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAuth } from "../hooks/use-auth";
import { fetchPosts } from "../lib/api";

const IndexPage = () => {
  const { token, user, login, logout } = useAuth();
  const { data: posts } = useQuery("posts", fetchPosts, {
    enabled: user,
  });

  return (
    <>
      <div>
        Hello {token && user && <span>{user.name}</span>}{" "}
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
      <div>Token is {token || "none"}</div>
      {posts && posts.length > 0 && (
        <>
          <div>Lists of posts:</div>
          <ul>
            {posts.map((post) => (
              <li key={post.title}>{post.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
