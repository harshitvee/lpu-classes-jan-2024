// let num = 12;
// num = 13;
// let num2 = num;
// num = 14;
// console.log(num);
// console.log(num2);

// array is refernce type

// let array1 = [1, 2, 3]; // x123
// let array2 = array1;

// array1.push(4);

// console.log("array1 is", array1);
// console.log("array2 is", array2);

// const array1 = [1, 2, 3];
// array1.push(4);
// array1.pop();
// console.log(array1);

// string templating
// const age = 25;
// const firstName = "John";

// const about =
//   "hello my firstName is " + firstName + " and I am " + age + " years old";
// console.log(about);

// const about = `Hello my
// name is ${firstName}
// and my age is ${age}`;
// console.log(about);

// ternary operator

// const age = 10;

// const drink = age >= 8 ? "you can have coffee" : "you can have milk";

// console.log(drink);

// let myvar;

// // falsy values : undefined, null, "",

// const myvar2 = myvar || "some val";

// console.log(myvar2);

// localstorage

// try to get something from local storage

// const users = localStorage.getItem("users") || [];

// console.log(users);

// objects

// primitives vs reference

// output based questions

// c++, c#, java, python
// object --> class instance

// javascript object ---> python dictionary, java/ c++ (unordered map)

// objects

// array --> ordered collection

// objects --> key : value pairs / unordered
// objects ---> ref types

const person = {
  firstName: "John",
  lastName:"Doe",
  age:25,
  "new property" : "unique val"
};
// console.log(person) 

// access properties 

// 1. dot notation
// 2. bracket notation

// console.log(person.firstName)
// console.log(person.new property) // error

// bracket notation

// console.log(person["lastName"])
// console.log(person["new property"])

// check if property exists 
// console.log("address" in person) 