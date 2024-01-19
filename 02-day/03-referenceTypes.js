// reference types

// arrays
// objects
// functions

function hello() {
  return "hello world";
}

// let myArray = ["1", 2, hello, [1, 2, 3]];
// create using []
// you can pass anyting to array

// access values ?
// console.log(myArray[2]());
// console.log(myArray[3][2]);

// console.log(myArray[5]); // undefined

// calculate length

// console.log(myArray.length);
// const lastIndex = myArray.length - 1;
// console.log(lastIndex);

let fruits = ["apple", "mango", "grapes"];
// const poppedItem = fruits.pop(); // remove from end
// const poppedItem = fruits.shift(); // remove from beginning

// fruits.push("blueberry"); // add to end

// console.log("popped item", poppedItem);

fruits.unshift("blueberry"); // add to beginning

// push and pop // stack
// O(1)

// last in first out

// shift and unshift // queue --> push(O(1)) , shift (O(n))
// O(n)

// linked list --> queue ds (shift (o(1)))

// first in first out // queue

console.log(fruits);
