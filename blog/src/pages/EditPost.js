import "./EditPosts.css";

const EditPost = () => {
  return (
    <div className="newPost">
      <h2>Add a New Blog</h2>
      <form className="form">
        <label>Blog title:</label>
        <input 
          type="text" 
          required
          maxLength={20}/>

        <label>Blog author:</label>
          <input type="text" maxLength={20}/>

        <label>Image url:</label>
          <input type="text" />
        <label>Blog body:</label>
          <textarea required>
          </textarea>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default EditPost;
