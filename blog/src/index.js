// Modudle imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import App from "./App";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Posts />} />
          <Route element={<Post />} />
          <Route path="editpost" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
