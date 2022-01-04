// Component imports
import PostDisplay from "../components/PostDisplay";
import getPosts from "../getPosts";

// Styling imports
import "./Posts.css";

const Posts = () => {
  let postsArray = getPosts();
  console.log(postsArray);
  return (
    <>
      <div className="posts-container">
        {postsArray.map((post) => (
          <PostDisplay toPost={`/${post.number}`} postKey={post.number} />
        ))}
      </div>
    </>
  );
};

export default Posts;
