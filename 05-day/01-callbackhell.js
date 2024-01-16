// 1s ---> 1
// 1s ---> 2
// 1s ---> 3

// let num = 1;
// setInterval(() => {
//   console.log(num);
//   num++;
// }, 1000);

// callback hell, pyramid of doom

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     setTimeout(() => {
//       console.log(3);
//     }, 2500);
//   }, 2000);
// }, 1000);

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 2000);
// }, 1000);

function func(callback) {
  callback();
}

func(() => {
  // base url / users
  // read
  // 78784
  func(() => {
    // base url / users/ 78784
  });
});

// es2015

// XHR
// endpoint ---> baseurl/users
// endpoint ----> baseurl/users/1

function getDataFromServer(endpoint) {}
