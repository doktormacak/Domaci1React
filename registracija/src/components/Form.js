import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordC: "",
  });
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted! ");
    console.log(event);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={value.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            value={value.firstname}
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            value={value.lastname}
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={value.email}
            placeholder="E-mail"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={value.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="passwordC"
            value={value.passwordC}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

// Potrebno je napraviti Registracionu formu sa poljima username, firstname, lastname, email,
// password i confirmPassword. Dizajn možete odraditi po svom izboru
