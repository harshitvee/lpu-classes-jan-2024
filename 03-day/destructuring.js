const person = {
  firstName: "John",
  lastName: "doe",
  age: 25,
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// array destructuring;

// let { firstName, age } = person;

// console.log(firstName, age);

// change variable name;

// const { firstName: fname, age } = person;

// console.log(fname, age);

// array destructuring

const fruits = ["Apple", "Mango", "grapes"];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// console.log(fruit1, fruit2, fruit3);

// const [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1, fruit2, fruit3);

// skip indexes

const [fruit1, , fruit3] = fruits;

console.log(fruit1, fruit3);
