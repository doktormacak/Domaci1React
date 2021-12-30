// Imports
import useForm from "../hooks/useForm";

// Styling
import "../css/Form.css";

const Form = () => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { errors, handleChange, handleSubmit } = useForm(formSubmit);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Username:</label>
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
          <label>First name:</label>
          <input
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
          <label>Last name:</label>
          <input
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
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input
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
          <label>Confirm Password:</label>
          <input
            type="password"
            name="passwordC"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.passwordC && (
            <p className="error-message">{errors.passwordC}</p>
          )}
        </div>
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
