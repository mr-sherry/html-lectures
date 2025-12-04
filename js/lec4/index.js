let array = [
  [94390, 4554, ['sds', 'dfgdf', [9329, 554, 234, 54], 'qweqwe'], 56, 232, 544],
  82809231,
  345,
  456,
  435,
  34234,
  4,
  12,
];

// console.log(array.flat(Infinity));

for (let index = 0; index < 20; index++) {
  if (index === 10) {
    continue;
  }
  console.log(index);
}

let i = true;
while (i) {
  console.log('while loop working');
  i = false;
}

let a = true;
do {
  console.log('while loop working');
  a = false;
} while (a);

let array2 = array.flat(Infinity);
array2.forEach((num, index, array4) => {
  console.log('hello', num);
  console.log('index', index);
  console.log('arr', array4);
});

let obj = { name: 'ali', rollno: 123 };
let keysArray = Object.keys(obj);

console.log(keysArray);

// https://www.w3schools.com/js/js_object_properties.asp
// learn object properties and research on this keyword in functions for object
