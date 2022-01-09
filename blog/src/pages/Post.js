// Module imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Style imports
import "./Post.css";

/**
 * 'Post' stranica renderuje individualni post tako sto procita ID iz parametara adrese
 * i napravi fetch GET request da ucita njegove podatke.
 */
const Post = () => {
  // Varijabla koja ce cuvati post objekat trazenog posta.
  const [postData, setPostData] = useState({});
  // Varijabla koja ucitava parametre iz adrese.
  const params = useParams();
  // Varijabla koja cuva postId iz parametara.
  const postId = params.postId;

  // useEffect() hook poziva fetch GET request pri renderovanju stranice
  // i malazi odgovarjuci post objekat pomocu .find() metode;
  //'postId' varijabla sluzi kao dependency.
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
