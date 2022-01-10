// Module imports
import { Link } from "react-router-dom";

//Styling imports


/**
 * PostDisplay komponenta prima post objekat i link ka id-ju tog posta iz props-a
 * i renderuje taj post, sa 'Link' komponentom iz React Router-a.
 */
const PostDisplay = (props) => {
  return (
      <div className="col s12 m4 l4">
        <div className="card">
          <div className="card-image">
            <img src={require('./img.jpg')} alt="img"/>
            <span className="card-title">{ props.post.title }</span>
          </div>
          <div className="card-content">
            <p>{ props.post.author }</p>
          </div>
          <div className="card-action">
            <Link to={props.toPost}>Post page</Link>
          </div>
        </div>
      </div>
  );
};

export default PostDisplay;