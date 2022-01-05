// Module imports
import { useParams } from "react-router";

// Component imports
import useFetch from "../hooks/useFetch";

//Style imports
import "./Post.css";

const Post = () => {
  const params = useParams();
  const postId = params.postId;
  const { data, isPending, error } = useFetch(
    "http://jsonblob.com/928319228822700032"
  );
  console.log("data: ", data);

  const postData = data.filter((post) => post.id !== postId);

  console.log("postData: ", postData);

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>Post Title</h1>
        <p>Post Author</p>
      </div>
      <div className="post-body">
        <p>Post text..</p>
      </div>
    </div>
  );
};

export default Post;
