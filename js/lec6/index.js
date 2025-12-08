let array = [2123, 3242, 456456, 766, 123, 746];

//map
let data = array.map((num, index) => {
  let sum = 0;
  sum = sum + num;
  return sum;
});
console.log(data);

//filter
let data2 = array.filter((num, index) => {
  return num > 2200;
});
console.log(data2);

//reduce
let reduce = array.reduce((sum, num, index) => {
  sum = sum + num;
  return sum;
}, 0);

console.log(reduce);

// https://www.crocoder.dev/blog/map-filter-reduce-exercises
