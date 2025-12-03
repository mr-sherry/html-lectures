let data = ['ahmed', 'raza', 'ali'];
console.log(data);

let array = [
  'Array toString()',
  'Array at()',
  'Array join()',
  'Array pop()',
  'Array push()',
];

// console.log(data.slice(1, 3));

for (let a = 0; a < data.length; a++) {
  console.log(data[a].slice(0, 1));
}

for (let index = 0; index < array.length; index++) {
  console.log(`<a href=${array[index].link1}>${array[index].value}</a>`);
}

let array1 = [];

let obj = { rollno: 6271, name: 'ahmed', age: 22 };

let students = [
  { rollno: 6271, name: 'ahmed', age: 22 },
  { rollno: 6271, name: 'ahmed', age: 22 },
  { rollno: 6271, name: 'ahmed', age: 22 },
];

let table = 2;
for (let index = 0; index < array.length; index++) {
  for (let index = 0; index < array.length; index++) {}
}

// create table generator loop and calculate diffrent data in loop from array of numbers
for (let index = 0; index < students.length; index++) {
  console.log('name:', students[index].name);
  console.log('rollno:', students[index].rollno);
  console.log('age:', students[index].age);
}

data.forEach(() => {});

function printData(name) {
  console.log('wlecome to website', name);
}
