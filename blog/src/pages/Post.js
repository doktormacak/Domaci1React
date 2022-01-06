// Module imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Style imports
import "./Post.css";

const Post = () => {
  const [postData, setPostData] = useState({});
  const params = useParams();
  const postId = params.postId;

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
          let filteredPost = data.find((post) => post.id === postId);
          setPostData(filteredPost);
        }),
    [postId]
  );

  return (
    <div className="post-container">
      {postData && (
        <>
          <div className="post-header">
            <h1>{postData.title}</h1>
            <p>{postData.author}</p>
          </div>
          <div className="post-body">
            <p>{postData.body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
