// DOM
// document object model
// structure

// selecting an element

// querySelector : single element (first element)
// const h1 = document.querySelector("#heading");
// const h1 = document.getElementById("heading");
// // console.log(h1);
// h1.textContent = "new content";
// h1.style.backgroundColor = "black";
// h1.style.color = "white";
// // console.log(h1.classList);
// if (h1.classList.contains("heading")) {
//   console.log("contains heading class");
// }

// read data- properties
// console.log(h1.dataset.url);

// querySelectorAll : all matching elements
// const h1List = document.querySelectorAll("h1");
// for (let h1 of h1List) {
//   console.log(h1);
// }
// h1List.forEach((h1) => console.log(h1));

// const button1 = document.querySelector(".button1");
// const button2 = document.querySelector(".button2");
// const button3 = document.querySelector(".button3");
// const button4 = document.querySelector(".button4");

// button1.addEventListener("click", () => {
//   console.log(button1.textContent);
// });
// button2.addEventListener("click", () => {
//   console.log(button2.textContent);
// });
// button3.addEventListener("click", () => {
//   console.log(button3.textContent);
// });
// button4.addEventListener("click", () => {
//   console.log(button4.textContent);
// });

// const buttons = document.querySelectorAll(".buttonContainer button");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.style.color = "blue";
//     console.log(button.textContent);
//   });
// });
const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    console.log(e.target.textContent);
    e.target.style.color = "blue";
  }
});
