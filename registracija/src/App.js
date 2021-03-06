/* IMPORTS */
// Modules
import { NotificationContainer } from "react-notifications";

// Component
import Form from "./components/Form";

// Styling
import "./css/App.css";
import image from "./images/image.png";
import "react-notifications/lib/notifications.css";

/**
 * App komponenta renderuje vanjske div elemente, Form komponentu unutar njih
 * i NotificationContainer komponentu na dnu, za react-notifications biblioteku.
 */
function App() {
  return (
    <div className="card">
      <div className="left-side">
        <Form />
      </div>
      <div className="right-side">
        <img src={image} alt="decoration" />
        <a href="https://storyset.com/user">User illustrations by Storyset</a>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
