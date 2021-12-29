import useForm from "../hooks/useForm";

const Form = () => {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={values.username}
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            value={values.firstname}
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            value={values.lastname}
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={values.email}
            placeholder="E-mail"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="passwordC"
            value={values.passwordC}
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
