import { useState } from "react";
import ValidateInputs from "../components/ValidateInputs";

const useForm = () => {
  // Vrijednosti unosa
  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordC: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let x = ValidateInputs(values);
    console.log(x);
  };

  return { values, handleChange, handleSubmit };
};

export default useForm;
