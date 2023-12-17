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

function destroyBoxes() {
  boxes.innerHTML = "";
}
function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    const divBoxEl = document.createElement("div");
    divBoxEl.style.backgroundColor = getRandomHexColor();
    divBoxEl.style.width = `${size}px`;
    divBoxEl.style.height = `${size}px`;
    boxes.insertAdjacentElement("beforeend", divBoxEl);
  }
  input.value = "";
}

btnCreate.addEventListener("click", () => {
  const amount = input.value;
  if (amount < 1 || amount < 100) {
    createBoxes(input.value);
  }
});

btnDestroy.addEventListener("click", destroyBoxes);
