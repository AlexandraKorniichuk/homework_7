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
for (const el of images) {
  const img = `<img src="${el.url}" class="img">`;
  list3.insertAdjacentHTML("beforebegin", img);
}

//task 4
const div = document.querySelector("#counter");
const val = document.querySelector("#value");
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const decrement = function () {
  console.log(counterValue);
  return (counterValue -= 1);
};
const increment = function () {
  console.log(counterValue);
  return (counterValue += 1);
};
buttonDec.addEventListener("click", () => {
  if (val.textContent >= 1) {
    decrement();
    val.textContent = counterValue;
  }
});
buttonInc.addEventListener("click", () => {
  increment();
  val.textContent = counterValue;
});

//task 5
const input = document.querySelector("#name-input");
let title = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
  console.log(input.value);
  if (input.value !== "") {
    title.textContent = input.value;
  } else {
    title.textContent = "незнакомец";
  }
});

//task 6
const input6 = document.getElementById("validation-input");
const dataLength = +input6.getAttribute("data-length");
input6.classList.add("invalid");
input6.addEventListener("blur", () => {
  if (input6.value.length !== dataLength && input6.value.length !== 0) {
    input6.classList.add("invalid");
  }
  if (input6.value.length === dataLength) {
    input6.classList.add("valid");
    input6.classList.remove("invalid");
  }
});

//task 7
const input7 = document.getElementById("font-size-control");
const span = document.getElementById("text");
input7.addEventListener("input", () => {
  console.log(span.style.fontSize);
  span.style.fontSize = input.value + "px";
});
