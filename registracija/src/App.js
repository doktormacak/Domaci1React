/* Imports */
import Form from "./components/Form";

// Styling
import "./css/App.css";
import image from "./images/image.png";

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
    </div>
  );
}

export default App;
