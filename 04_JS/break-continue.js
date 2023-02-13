// 16까지 짝수만 출력
for (let i = 0; i < 20; i++) {
  if (i % 2 === 1) continue;
  console.log(`${i} 번 입니다.`);

  if (i === 16) break;
}
