const arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

const sumResult = arr.reduce((acc, item) => (acc += item), 0);

console.log(sumResult);
