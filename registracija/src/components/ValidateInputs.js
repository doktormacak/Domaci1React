const ValidateInputs = (props) => {
  let errors = [];

  // Validacija username-a
  if (props.username.length < 6 || props.username.length > 12) {
    errors.push("Username mora sadržati minimum 6, a maksimum 12 karaktera");
  }
  // Validacija imena
  if (!props.firstname) {
    errors.push("Firstname je obavezno polje!");
  }
  // Validacija prezimena
  if (!props.lastname) {
    errors.push("Lastname je obavezno polje!");
  }
  // Validacija email-a
  if (!props.email) {
    errors.push("Email je obavezno polje!");
  } else {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(props.email)) {
      errors.push("Unesite validan oblik email adrese.");
    }
  }
  // Validacija passsword-a
  if (props.password.length < 8) {
    errors.push(
      "Password mora sadržati minimum 8 karaktera od koji mora biti bar jedno veliko slovo, bar jedno malo slovo, bar jedan broj i bar jedan specijalni karakter ( !,#, $,%,&,*,@...)."
    );
  } else {
    let regex = new RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%&*@]).*$");
    if (!regex.test(props.password)) {
      errors.push(
        "Password mora sadržati minimum 8 karaktera od koji mora biti bar jedno veliko slovo, bar jedno malo slovo, bar jedan broj i bar jedan specijalni karakter ( !,#, $,%,&,*,@...)."
      );
    }
  }
  // Validacija passwordC-a
  if (props.password !== props.passwordC) {
    errors.push("Passwordi moraju biti isti!");
  }
  return errors;
};

export default ValidateInputs;
