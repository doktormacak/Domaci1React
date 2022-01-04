// Module import
import { Link, Outlet } from "react-router-dom";

// Styling imports
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/">
              <img src="../../public/logo192.png" alt="logo" />
            </Link>
          </div>
          <div>
            <Link to="/EditPost">New Post</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
