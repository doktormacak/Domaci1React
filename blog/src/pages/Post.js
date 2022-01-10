// Module imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Style imports


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
      fetch("https://jsonblob.com/api/jsonBlob/930081618446794752", {
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

    
      <div className="container">
        <div className="card">
          {postData && (
          <>
          <div className="card-image">
            <img src={require('../components/img.jpg')} alt="img"/>
            <span className="card-title">{postData.title}</span>
          </div>
          <div className="card-content">
            <span>{postData.author}</span>
            <p>{ postData.body}</p>
          </div>
          </>
          )}
        </div>
      </div>
    
  );
};

export default Post;
