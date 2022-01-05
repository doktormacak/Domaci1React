// Component imports
import PostDisplay from "../components/PostDisplay";
import useFetch from "../hooks/useFetch";

// Styling imports
import "./Posts.css";

const Posts = () => {
  const { data, isPending, error } = useFetch(
    "http://jsonblob.com/928319228822700032"
  );
  console.log(data);
  return (
    <>
      <div className="posts-container">
        {data ? (
          data.map((post) => (
            <PostDisplay toPost={`/${post.number}`} postKey={post.number} />
          ))
        ) : (
          <p>No posts!</p>
        )}
      </div>
    </>
  );
};

export default Posts;
