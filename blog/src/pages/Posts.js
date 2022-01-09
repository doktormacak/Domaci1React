// Module imports
import { useState, useEffect } from "react";

// Component imports
import PostDisplay from "../components/PostDisplay";

// Styling imports
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      fetch("https://jsonblob.com/api/jsonBlob/928319228822700032", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        }),
    []
  );

  return (
    <>
      <div className="posts-container">
        {posts.length !== 0 ? (
          posts.map((post) => (
            <PostDisplay toPost={`/${post.id}`} post={post} />
          ))
        ) : (
          <p>No posts!</p>
        )}
      </div>
    </>
  );
};

export default Posts;
