import { Outlet, Link } from "react-router-dom";
import PostDisplay from "../components/PostDisplay";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/">
              <img src="../../public/logo192.png" alt="logo" />
            </Link>
          </div>
          <div>
            <a href="">Test</a>
          </div>
        </div>
      </nav>

      <div className="posts-container">
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
        <PostDisplay />
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
