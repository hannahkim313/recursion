const fibsRec = (x) => {
  if (x === 0) {
    return [0];
  }

  if (x === 1) {
    return [0, 1];
  }
  
  const nums = fibsRec(x - 1);
  nums.push(nums[x - 1] + nums[x - 2]);

  return nums;
};
