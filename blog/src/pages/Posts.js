// Module imports
import { useState, useEffect } from "react";

// Component imports
import PostDisplay from "../components/PostDisplay";

// Styling imports


/**
 * 'Posts' stranica renderuje kratki prikaz svih postova iz JsonBlob-a.
 */
const Posts = () => {
  // State varijabla koja cuva sve postove ucitane iz bloba
  const [posts, setPosts] = useState([]);

  // UseEffect hook poziva fetch GET request ka JsonBlob-u jednom pri prvom renderu 'Posts' stranice pomocu praznog dependency array-a.
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
          setPosts(data);
        }),
    []
  );

  // Pomocu .map() metode, 'Posts' poziva 'PostDisplay' komponentu za svaki element(post) unutar 'posts' varijable
  // i prosljedjuje link ka post-u kao i sam element pomocu props-a.
  // Ako je duzina 'posts' niza 0, nema postova u blobu.
  return (
    <>
      <div className="row">
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
