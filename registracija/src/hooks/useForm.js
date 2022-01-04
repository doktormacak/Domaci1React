// Module imports
import { useState } from "react";

// Component imports
import CreateNotification from "../components/CreateNotification";

const useForm = (formSubmit) => {
  // Vrijednosti unosa
  const [values, setValues] = useState({});

  // Errori
  const [errors, setErrors] = useState({});

  // Funkcija za validaciju
  const ValidateInputs = (values, setErrors) => {
    let temp = {};

    if (
      !values.username ||
      values.username.length < 6 ||
      values.username.length > 12
    ) {
      temp = {
        ...temp,
        username: "Username mora sadržati minimum 6, a maksimum 12 karaktera",
      };
    }

    // Validacija imena
    if (!values.firstname) {
      temp = {
        ...temp,
        firstname: "Firstname je obavezno polje!",
      };
    }

    // Validacija prezimena
    if (!values.lastname) {
      temp = {
        ...temp,
        lastname: "Lastname je obavezno polje!",
      };
    }

    // Validacija email-a
    if (!values.email) {
      temp = {
        ...temp,
        email: "Email je obavezno polje!",
      };
    } else {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (!regex.test(values.email)) {
        temp = {
          ...temp,
          email: "Unesite validan oblik email adrese.",
        };
      }
    }

    // Validacija passsword-a
    if (!values.password || values.password.length < 8) {
      temp = {
        ...temp,
        password:
          "Password mora sadržati minimum 8 karaktera od koji mora biti bar jedno veliko slovo, bar jedno malo slovo, bar jedan broj i bar jedan specijalni karakter ( !,#, $,%,&,*,@...).",
      };
    } else {
      let regex = new RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&*@]).*$");
      if (!regex.test(values.password)) {
        temp = {
          ...temp,
          password:
            "Password mora sadržati minimum 8 karaktera od koji mora biti bar jedno veliko slovo, bar jedno malo slovo, bar jedan broj i bar jedan specijalni karakter ( !,#, $,%,&,*,@...).",
        };
      }
    }
    // Validacija passwordC-a
    if (values.password !== values.passwordC) {
      temp = {
        ...temp,
        passwordC: "Passwordi moraju biti isti!",
      };
    }
    setErrors(temp);

    if (Object.keys(temp).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ValidateInputs(values, setErrors) && Object.keys(values).length !== 0) {
      formSubmit(values);
    } else {
      CreateNotification("error");
    }
  };

  return { values, errors, setErrors, handleChange, handleSubmit };
};

export default useForm;
