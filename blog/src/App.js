import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/editpost" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
