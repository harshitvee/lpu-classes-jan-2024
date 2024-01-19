function debounce(func, time) {
  let id;
  return function (...args) {
    if (id) {
      clearInterval(id);
    }
    id = setTimeout(() => {
      func.call(...args, this);
    }, time);
  };
}
export default debounce;

// d a t a

function getAmountOfWater(array) {
  let left = 0;
  let right = array.length - 1;
  let amountOfWater = -Infinity;
  while (left <= right) {
    const leftVal = array[left];
    const rightVal = array[right];
    console.log("left", leftVal);
    console.log("right", rightVal);
    const height = Math.min(leftVal, rightVal);
    const width = right - left;
    const area = height * width;
    if (area > amountOfWater) {
      amountOfWater = area;
    }
    left++;
    right--;
  }
  return amountOfWater;
}

// left = 1
// right = 8
const ans = getAmountOfWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(ans);
