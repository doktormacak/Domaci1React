// Module imports
import { Link, Outlet } from "react-router-dom";

/* 
  App komponenta renderuje navbar na vrhu svake stranice.
  Navbar sadrzi logo na lijevoj strani koji je ujedno i link ka root-u
  i link za kreiranje novog post-a na desnoj strani.

  'Outlet' komponenta iz react-router bibilioteke renderuje odgovarajucu stranicu ispod navbara.
*/
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
