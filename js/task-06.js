"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnDestroy.addEventListener("click", destroyBoxes);
btnCreate.addEventListener("click", createBoxes);

btnCreate.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = "";
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    const divBoxEl = document.createElement("div");
    divBoxEl.style.backgroundColor = getRandomHexColor();
    divBoxEl.style.width = `${size}px`;
    divBoxEl.style.height = `${size}px`;
    boxes.insertAdjacentElement("beforeend", divBoxEl);
  }
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
