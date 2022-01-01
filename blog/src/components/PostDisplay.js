import "./PostDisplay.css";

const PostDisplay = () => {
  return (
    <div className="card">
      <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>John Doe</h4>
        <p>Architect and Engineer</p>
      </div>
    </div>
  );
};

export default PostDisplay;
