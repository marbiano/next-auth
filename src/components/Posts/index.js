import { useQuery } from "react-query";
import { fetchPosts } from "../../lib/api";

const Posts = () => {
  const { isLoading, data: posts } = useQuery("posts", fetchPosts, {
    enabled: true,
  });

  console.log("loading posts?", isLoading);
  console.log("rendering posts", posts);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
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

Posts.whyDidYouRender = true;

export default Posts;
