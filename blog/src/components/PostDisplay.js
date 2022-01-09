// Module imports
import { Link } from "react-router-dom";

//Styling imports
import "./PostDisplay.css";

/**
 * PostDisplay komponenta prima post objekat i link ka id-ju tog posta iz props-a
 * i renderuje taj post, sa 'Link' komponentom iz React Router-a.
 */
const PostDisplay = (props) => {
  return (
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>Post Title: {props.post.title}</h4>
      </div>
      <Link to={props.toPost}>Post page.</Link>
    </div>
  );
};

export default PostDisplay;
