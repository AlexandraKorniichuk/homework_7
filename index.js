"use strict";
//task 1
const list1 = document.querySelector("#categories");
console.dir(`В списке ${list1.children.length} категории`);
const array = list1.children;
for (let elem of array) {
  console.log(`Категория: ${elem.children[0].textContent}`);
  console.log(`Количество элементов: ${elem.children[1].children.length}`);
}

//task 2
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const list2 = document.querySelector("#ingredients");
for (let prod of ingredients) {
  const newLi = document.createElement("li");
  newLi.textContent = prod;
  list2.appendChild(newLi);
}

//task 3
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list3 = document.querySelector("#gallery");
// list3.insertAdjacentElement("afterend", );

//task 4
const div = document.querySelector("#counter");
const val = document.querySelector("#value");
let counterValue = 0;
const decrement = function (cv) {
  cv--;
};
const increment = function (cv) {
  cv++;
};
console.log(div.firstChild);
div.firstChild.addEventListener("click", (event) => {
  decrement(counterValue);
  console.log(counterValue);
});
div.lastChild.addEventListener("click", (event) => {
  increment(counterValue);
  console.log(counterValue);
});

//task 5
const input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");
// console.log(output);
input.addEventListener("input", (event) => {
  output.textContent = input;
});
