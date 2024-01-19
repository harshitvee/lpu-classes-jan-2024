// function myFunc(properties) {
//   const { firstName, lastName, age } = properties;
//   console.log(firstName, lastName, age);
// }

// function myFunc({ firstName, lastName, age }) {
//   console.log(firstName, lastName, age);
// }

// myFunc({
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// });

const bigObject = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  gender: "male",
  city: "Ambala",
  state: "Haryana",
  country: "India",
  pincode: "111111",
  phone: "7878787878",
};

const { firstName, lastName, age } = bigObject;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// shortcut
const person = {
  firstName,
  lastName,
  age,
  myOwnProp: "myOwnProp",
  myOwnNestedObj: {
    prop1: "prop1",
  },
};

console.log(person);
