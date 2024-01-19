import friedRicePromise from "./myPromises.js";

console.log("Script Start");

setTimeout(() => {
  console.log("Hello from settimeout");
}, 0);

friedRicePromise()
  .then((value) => {
    console.log(value);
  })
  .catch((errorValue) => {
    console.log(errorValue);
  });

console.log("script end");
