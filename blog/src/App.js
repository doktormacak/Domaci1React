// Module imports
import { Link, Outlet } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'

/* 
  App komponenta renderuje navbar na vrhu svake stranice.
  Navbar sadrzi logo na lijevoj strani koji je ujedno i link ka root-u
  i link za kreiranje novog post-a na desnoj strani.

  'Outlet' komponenta iz react-router bibilioteke renderuje odgovarajucu stranicu ispod navbara.
*/
function App() {
  return (
    <div className="container">
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/EditPost">New Post</Link></li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </div>
  );
}

export default App;
