// Imports
import useForm from "../hooks/useForm";

// Styling
import "../css/Form.css";

const Form = () => {
  const { errors, handleChange, handleSubmit } = useForm();

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
