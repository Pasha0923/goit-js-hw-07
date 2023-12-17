"use strict";
const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const elems = e.target.elements;
  const data = {
    email: elems.email.value,
    password: elems.password.value,
  };
  if (elems.email.value === "" || elems.password.value === "") {
    return alert(`All form fields must be filled in`);
  }
  console.log(data);

  document.querySelector(".login-form").reset();
});
