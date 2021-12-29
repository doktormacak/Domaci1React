import { useState } from "react";

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

  // Errori
  const [errors, setErrors] = useState({});

  // Funkcija za validaciju
  const ValidateInputs = (values, errors, setErrors) => {
    let temp = {};

    if (values.username.length < 6 || values.username.length > 12) {
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
    if (values.password.length < 8) {
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
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ValidateInputs(values, errors, setErrors);
  };

  return { values, errors, setErrors, handleChange, handleSubmit };
};

export default useForm;
