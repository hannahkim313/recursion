const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  
  arr.sort((a, b) => a - b);
  const left = mergesort(arr.slice(0, arr.length / 2));
  const right = mergesort(arr.slice(arr.length / 2));

  return left.concat(right);
};
