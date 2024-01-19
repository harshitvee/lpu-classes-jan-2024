console.log("Hello from doubt file");

// reduce
const nums = [20, 10, 5, 10];

const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// acc       curr          return(next acc)
// 0          20              20
// 20         10              30
// 30         5               35
// 35         10              45

console.log(total);
