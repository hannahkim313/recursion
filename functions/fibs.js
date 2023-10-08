const fibs = (num) => {
  let x = 0;
  const nums = [];

  while (x < num) {
    if (x === 0 || x === 1) {
      nums.push(x);
    } else {
      nums.push(nums[x - 2] + nums[x - 1]);
    }

    x += 1;
  }

  return nums;
};
