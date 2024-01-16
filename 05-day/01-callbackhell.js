// 1s ---> 1
// 1s ---> 2
// 1s ---> 3

// let num = 1;
// setInterval(() => {
//   console.log(num);
//   num++;
// }, 1000);

// callback hell, pyramid of doom

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 2500);
  }, 2000);
}, 1000);

function func(callback) {
  callback();
}

func(() => {
  console.log("hello");
  func(() => {
    console.log("world");
    func(() => {
      console.log("good");
    });
  });
});
