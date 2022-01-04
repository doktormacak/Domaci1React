import { useParams } from "react-router";

const Post = () => {
  const postParams = useParams();

  return <h1>Post: {postParams.postId}</h1>;
};

export default Post;
