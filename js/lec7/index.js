function print() {
  console.log('hello');
}

function second(func) {
  console.log('from two');

  func();
}

function addition(a, b, func2) {
  let sum = a + b;
  console.log(sum);
  func2();
}

addition(2, 4, () => second(print));

function getdata() {
  let data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resposnse) => {
      return resposnse.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log('done');
    });
}

// getdata();

// async await or try catch finally
let postsData = null;
async function getdata2() {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let datanew = await res.json();
    // console.log(datanew);
    postsData = datanew;
    for (let index = 0; index < datanew.length; index++) {
      console.log(`post title ${datanew[index].title}`);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('process completed');
  }
}

getdata2();

// timeaout;
// interval;

// setTimeout(() => {
//   console.log('helli from timeout');
// }, 3000);

// setInterval(() => {
//   console.log('helli from interval');
// }, 1000);

// function random() {
//   setTimeout(() => {
//     let num = Math.random();
//     return num;
//   }, 2000);
// }

// // console.log(random());

// let new1 = fetch(random()).then((res) => console.log(res));
