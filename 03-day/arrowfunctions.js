// 1. function declaration
// 2. function expression
// 3. Arrow functions

// function hello() {
//   console.log("hello from function declaration");
// }

// const hello2 = function () {
//   console.log("hello from function expression");
// };

// const hello3 = (name) => {
//   console.log(`hello ${name} from arrow function`);
// };

// const hello4 = (name, age) => {
//   return `${name},${age}`;
// };

// arrow function implicit return
// const hello5 = (name, age) => `${name},${age}`;

// arrow function with one parameter

// const is18 = (age) => {
//   return age >= 18;
// };

// implicit return

// const is18 = (age) => age >= 18;

// if your function takes 1 arg only then you can omit ();

// const is18 = age => age >= 18;



// you cannot omit () with more than 1 args

// const hello5 = (name, age) => `${name},${age}`;


// you cannot omit () if function take no args
// const hello = () => `hello world`