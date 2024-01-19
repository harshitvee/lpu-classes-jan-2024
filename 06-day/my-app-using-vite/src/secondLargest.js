const nums = [5, 10, 10];

// find the second largest

// find the largest first 35

// find the largest again // it should not be 35

function secondLargest(array) {
  let largestNumber = -Infinity;
  for (let num of array) {
    if (num > largestNumber) {
      largestNumber = num;
    }
  }
  let secondLargest = -Infinity;
  for (let num of array) {
    if (num > secondLargest && num !== largestNumber) {
      secondLargest = num;
    }
  }
  return secondLargest;

  //   O(2n)
}

//
const ans = secondLargest(nums);
console.log(ans);
