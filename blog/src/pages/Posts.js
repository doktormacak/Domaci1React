// Component imports
import PostDisplay from "../components/PostDisplay";

// Styling imports
import "./Posts.css";

const Layout = () => {
  return (
    <>
      <div className="posts-container">
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
      </div>
    </>
  );
};

export default Layout;
