function fn(nums) {
  let value;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        for (let k = 0; k < nums.length; k++) {
          if (nums[k] !== nums[j]) {
            if (nums[i] !== nums[k]) {
              let sum = nums[j] * nums[k] * nums[i];
              arr.push(sum);
            }
          }
        }
      }
    }
  }
  let result = arr.sort((a, b) => a - b);
  let len = result.length;
  return result[len - 1];
}
console.log(fn([-1, -2, -3]));
