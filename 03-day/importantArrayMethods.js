// forEach
// map
// filter
// reduce

// forEach

// const fruits = ["apple", "mango", "grapes"];

// fruits.forEach(function (fruit) {
//   console.log(fruit.toUpperCase());
// });

// fruits.forEach((fruit) => {
//   console.log(fruit.toUpperCase());
// });

// fruits.forEach(fruit => {
//     console.log(fruit.toUpperCase());
//   });

// map methods
// returns new Array
// const newFruits = fruits.map(function(fruit) {
//     return fruit.toUpperCase();
// })

// console.log(newFruits)

// const fruits = ["apple", "mango", "grapes"];

// const firstLetters = fruits.map((fruit) => {
//     return fruit[0]
// })

// implicit return

// const firstLetters = fruits.map((fruit) => fruit[0] )

// console.log(firstLetters)

// const personFistNameArray = persons.map(person => {
//     return person.firstName
// })

// implicit return

// const personFistNameArray = persons.map(person => person.firstName.toUpperCase())

// console.log(personFistNameArray)
// const persons = [
//   {
//     id: 1,
//     firstName: "john",
//     age: 12,
//   },
//   {
//     id: 2,
//     firstName: "jane",
//     age: 18,
//   },
//   {
//     id: 3,
//     firstName: "jimmy",
//     age: 28,
//   },
// ];

// function upperFirstNameIfIdMatch(persons, id) {
/*
      [  {
    id: 1,
    firstName: "john",
    age: 28,
  },
  {
    id: 2,
    firstName: "JANE"
    age: 28,
    
  },
  {
    id: 3,
    firstName: "jimmy",
    age: 28,
  },
]
    */
//   const newPerson = persons.map((person) => {
//     if (person.id === id) {
//       return { ...person, firstName: person.firstName.toUpperCase() };
//     } else {
//       return { ...person };
//     }
//   });
//   return newPerson;
// }
// console.log(persons);
// const newPerson = upperFirstNameIfIdMatch(persons, 2);
// newPerson[2].gender = "male";
// console.log(newPerson);
// console.log(persons);

// map ---> return array with same length

// filter ---> return array with same / less num of items;

// const persons = [
//   {
//     id: 1,
//     firstName: "john",
//     age: 12,
//   },
//   {
//     id: 2,
//     firstName: "jane",
//     age: 18,
//   },
//   {
//     id: 3,
//     firstName: "jimmy",
//     age: 28,
//   },
// ];

// map : return the modified or same item ;

// filter

// array method

// input --> callback function

// callback function return boolean

// const names = ["John", "Harshit", "Eddie"];

// length > 4

// const newNames = names.filter((name) => {
//   if (name.length > 4) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const newNames = names.filter((name) => {
//   return name.length > 4;
// });

// use implicit return

// const newNames = names.filter((name) => name.length > 4);
// const newNames = names.filter(name => name.length > 4);

// console.log(newNames);

// const persons = [
//   {
//     id: 1,
//     firstName: "john",
//     age: 12,
//   },
//   {
//     id: 2,
//     firstName: "jane",
//     age: 18,
//   },
//   {
//     id: 3,
//     firstName: "jimmy",
//     age: 28,
//   },
// ];

// const allowedUsers = persons.filter(person => person.age > 16);
// const allowedUsersNames = allowedUsers.map(person => person.firstName);
// console.log(allowedUsersNames)

// const allowedUserNames = persons
//   .filter((person) => person.age > 16)
//   .map((person) => person.firstName);

//   reduce

// map ---> array
// filter ---> array

// reduce ---> single value

// const nums = [1, 2, 3, 4];

// accumulator current value  next acc
// 0            1              1
// 1            2              3
// 3            3              6
// 6            4              10

// const sum = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 10);

// console.log(sum);

const cart = [
  {
    id: 1,
    productName: "TV",
    price: 1200,
  },
  {
    id: 2,
    productName: "Mobile",
    price: 800,
  },
  {
    id: 3,
    productName: "Laptop",
    price: 1000,
  },
];

const totalAmount = cart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(totalAmount);
