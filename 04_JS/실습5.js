for (let i = 2; i < 10; i += 1) {
  for (let j = 1; j < 10; j += 1) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 강사님 코드
for (let i = 2; i < 10; i++) {
  // 이 부분에서는 j 에 접근 못 함
  console.log(`---------- ${i}단`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  // 이 부분에서는 j 에 접근 못 함
}
