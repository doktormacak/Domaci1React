const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="form-item">
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div className="form-item">
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div className="form-item">
          <label>First name:</label>
          <input type="text" name="firstname" />
        </div>
        <div className="form-item">
          <label>Last name:</label>
          <input type="text" name="lastname" />
        </div>
        <div className="form-item">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input type="text" name="password" />
        </div>
        <div className="form-item">
          <label>Confirm Password:</label>
          <input type="text" name="passwordC" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

// Potrebno je napraviti Registracionu formu sa poljima username, firstname, lastname, email,
// password i confirmPassword. Dizajn možete odraditi po svom izboru
