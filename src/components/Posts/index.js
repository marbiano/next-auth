import { useQuery } from "react-query";
import { useAuth } from "../../lib/hooks/use-auth";
import { fetchCurrentUser, fetchPosts } from "../../lib/api";

const Posts = () => {
  const { token } = useAuth();

  const { data: user } = useQuery("user", fetchCurrentUser, {
    enabled: token,
  });

  const { data: posts } = useQuery("posts", fetchPosts, {
    enabled: user,
  });

  return (
    <div>
      {user && <h1>{user.firstName}'s Posts</h1>}
      {posts && posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.title}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
