const tc1 = 12;
const tc2 = 5;

// // 내 코드
// function solution(n) {
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) answer += i;
//   }

//   return answer;
// }

// 강사님 코드
function solution(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) answer = answer + i;
  }

  return answer;
}

console.log(solution(tc1));
console.log(solution(tc2));
