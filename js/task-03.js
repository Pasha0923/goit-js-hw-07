"use strict";

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value.trim();
  if (textInput.value.trim() === "") {
    output.textContent = `Anonymous`;
  }
});
// if (textInput === "") {
//   output.textContent = `Anonymous`;