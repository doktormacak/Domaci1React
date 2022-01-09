/* IMPORTS */
// Components
import useForm from "../hooks/useForm";
import CreateNotification from "../components/CreateNotification";

// Styling
import "../css/Form.css";

/**
 * Form komponenta renderuje glavni form element.
 */
const Form = () => {
  // krajnja submit funkcija za formu
  const formSubmit = (values) => {
    console.log("Submitting!");
    fetch("https://jsonblob.com/api/jsonBlob", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        redirect: "follow",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        let blobUrl = response.headers.get("Location");
        // "ovdje se nalazi url gdje je sacuvan json", Yoink!
        console.log(blobUrl, "BLOB URL");
        CreateNotification("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // errors varijabla za greske pri upisivanju informacij i handleri ucitani iz useForm
  // hooka, kojem je proslijedjena submit funkcija kao callback.
  const { errors, handleChange, handleSubmit } = useForm(formSubmit);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            className={errors.username ? "error" : ""}
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
        </div>
        <div className="form-item">
          <input
            className={errors.firstname ? "error" : ""}
            type="text"
            name="firstname"
            placeholder="First name"
            onChange={handleChange}
          />
          {errors.firstname && (
            <p className="error-message">{errors.firstname}</p>
          )}
        </div>
        <div className="form-item">
          <input
            className={errors.lastname ? "error" : ""}
            type="text"
            name="lastname"
            placeholder="Last name"
            onChange={handleChange}
          />
          {errors.lastname && (
            <p className="error-message">{errors.lastname}</p>
          )}
        </div>
        <div className="form-item">
          <input
            className={errors.email ? "error" : ""}
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-item">
          <input
            className={errors.password ? "error" : ""}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <div className="form-item">
          <input
            className={errors.passwordC ? "error" : ""}
            type="password"
            name="passwordC"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.passwordC && (
            <p className="error-message">{errors.passwordC}</p>
          )}
        </div>
        <input
          type="submit"
          value="Submit"
          onSubmit={handleSubmit}
          className="button-submit"
        />
      </form>
    </div>
  );
};

export default Form;
