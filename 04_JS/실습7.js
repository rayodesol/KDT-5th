let i = 2;

while (i < 10) {
  let j = 1;
  console.log(`----------- ${i}단`);

  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }

  i++;
}

// 강사님 코드
console.log("강사님");
let ii = 2;
let jj = 1;

while (ii < 10) {
  console.log(`----------- ${ii}단`);
  while (jj < 10) {
    console.log(`${ii} x ${jj} = ${ii * jj}`);
    jj++;
  }
  ii++;
  jj = 1;
}
