import { useState} from "react";


import "./EditPost.css";

const EditPost = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [url, setUrl] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body , url, author};

    fetch(' https://jsonblob.com/api/jsonBlob/928319228822700032', {
      method: 'PUT',
      headers: { "Content-Type" : "application/json", Accept: "application/json"},
      body: JSON.stringify(blog)
    })
  }



  return (
    <div className="newPost">
      <h2>Add a New Blog</h2>
      <form className="form" onSubmit= {handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required
          maxLength={20}
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>

        <label>Blog author:</label>
          <input 
          type="text"
          maxLength={20}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}/>

        <label>Image url:</label>
          <input 
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)} />
        <label>Blog body:</label>
          <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}>
          </textarea>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default EditPost;
