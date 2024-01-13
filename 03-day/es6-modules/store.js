// const store = {
//   users: ["harshit", "john", "jane"],
//   cart: ["product1"],
// };

// function hello() {
//   console.log("hello world");
// }
// // normal export

// export { store, hello };

// normal export alternate syntax

// export const store = {
//   users: ["harshit", "john", "jane"],
//   cart: ["product1"],
// };

// export function hello() {
//   console.log("hello world");
// }
// normal export

// default export

// you can only default export 1 thing

const store = {
  users: ["harshit", "john", "jane"],
  cart: ["product1"],
};
function hello() {
  console.log("hello world");
}

function hello1() {
  console.log("hello world");
}

export default () => {
  console.log("hello world");
};

export { hello, hello1 };
