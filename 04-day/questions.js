console.log("script start");
Promise.resolve("promise1").then((val) => console.log(val));
setTimeout(() => console.log("setTimeout1"), 0);
setTimeout(() => console.log("setTimeout2"), 100);
Promise.resolve("promise2").then((val) => console.log(val));
console.log("script end");
