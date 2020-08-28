import useSWR from "swr";
import { fetchPosts } from "../../lib/api";

const Posts = () => {
  const { data: posts, error } = useSWR("posts", fetchPosts);

  console.log("loading posts?", !posts && !error);
  console.log("SWR rendering posts", posts);

  return (
    <div>
      {!posts && !error && <div>Loading...</div>}
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
