"use strict";
const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categLeng = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categLeng}`);
});
