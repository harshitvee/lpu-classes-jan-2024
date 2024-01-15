import friedRicePromise from "./myPromises.js";

console.log("Script Start");

friedRicePromise
  .then((value) => {
    console.log(value);
  })
  .catch((errorValue) => {
    console.log(errorValue);
  });

console.log("script end");
