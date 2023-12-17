"use strict";
const bodyColor = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChange.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
