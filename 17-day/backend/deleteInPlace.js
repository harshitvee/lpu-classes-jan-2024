const array = ["apple", "mango", "grapes", "pineapple"];

let index = -1;
for (let i = 0; i < array.length; i++) {
  if (array[i] === "grapes") {
    index = i;
  }
}

array.splice(index, 1);
console.log(array);
