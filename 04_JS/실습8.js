let sum = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 1) continue; // 홀수일 때, 실행 안 시키기
  sum += i;
}

console.log(sum);
