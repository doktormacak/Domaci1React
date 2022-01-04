import "./PostDisplay.css";

import { Link } from "react-router-dom";

const PostDisplay = (props) => {
  return (
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>Post Title: {props.postKey}</h4>
      </div>
      <Link to={props.toPost}>Link!</Link>
    </div>
  );
};

export default PostDisplay;
