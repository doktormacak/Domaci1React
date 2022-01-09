// Modudle imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import App from "./App";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

/*
  Unutar ReactDOM.render() metode prosljedjujemo routing strukturu iz React Router biblioteke.
  Na adresi "/" se renderuju 'App' komponenta (kao root) i 'Posts' (kao index element).
  'Post' stranica na adresi "/{postId}" cita postId iz adrese i izbacuje odgovarajuci post.
  'EditPost' stranica na adresi "/editpost" se poziva pri kreaciji novog post-a i prima informacije, a zatim ih pohranjuje u JsonBlob.
*/
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<Post />} />
          <Route path="editpost" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
