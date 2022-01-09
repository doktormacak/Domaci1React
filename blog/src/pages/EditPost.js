// Module imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

// Styling imports
import "./EditPost.css";
import "react-notifications/lib/notifications.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  function sendData(data) {
    fetch("https://jsonblob.com/api/928319228822700032", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.status === 200 &&
          NotificationManager.success(
            "Post uspjesno kreairan! Preusmjeravam...",
            "Uspjesno!"
          );
      })
      .then(
        setTimeout(() => {
          navigate("/");
        }, 8000)
      )
      .catch((err) => console.log("Error: ", err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonblob.com/api/jsonBlob/928319228822700032", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((blobOld) => {
        let newPostId = "0";
        let blobNew = [];
        if (blobOld.length !== 0) {
          newPostId = blobOld.length.toString();
        }
        blobNew = blobOld;
        blobNew.push({ title, body, url, author, id: newPostId });
        sendData(blobNew);
      });
  };

  return (
    <div className="newPost">
      <h2>Add a New Blog</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          maxLength={20}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog author:</label>
        <input
          type="text"
          maxLength={20}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Image url:</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button>Add Blog</button>
      </form>
      <NotificationContainer />
    </div>
  );
};

export default EditPost;
