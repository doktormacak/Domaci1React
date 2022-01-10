// Module imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

// Styling imports

import "react-notifications/lib/notifications.css";

/**
 * 'EditPost' stranica renderuje formu za kreiranje novog posta i
 * azurira JsonBlob.
 */
const EditPost = () => {
  // Stateful varijable za svaki podatak u postu
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  // navigate varijabla cuva useNavigate() hook iz React Routera
  // za preusmjeravanje nakon uspjesne pohrane novog posta.
  const navigate = useNavigate();

  // sendData poziva fetch PUT i azurira novo stanje bloba.
  function sendData(data) {
    fetch("https://jsonblob.com/api/930081618446794752", {
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
            "Post uspjesno kreiran! Preusmjeravam...",
            "Uspjesno!"
          );
      })
      .then(
        setTimeout(() => {
          navigate("/");
        }, 5000)
      )
      .catch((err) => console.log("Error: ", err));
  }

  // handleSubmit funkcija preuzima staro stanje bloba, dodaje novonastali post i
  // poziva sendData() funkciju da azurira blob 'novim' stanjem.
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonblob.com/api/jsonBlob/930081618446794752", {
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
    <div className="container">
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
          id="textarea1"
          className="materialize-textarea"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        
        <button className="btn-floating pulse" type="submit" name="action">Post Blog</button>
      </form>
      <NotificationContainer />
    </div>
  );
};

export default EditPost;
