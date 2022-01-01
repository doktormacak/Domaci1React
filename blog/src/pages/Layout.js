import { Outlet, Link } from "react-router-dom";

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

      <Outlet />
    </>
  );
};

export default Layout;
