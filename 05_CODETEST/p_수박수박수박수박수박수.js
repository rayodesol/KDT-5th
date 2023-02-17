// 강사님 코드
const tc1 = 3;
const tc2 = 4;

// // 방법 1 - 정석
// function solution(n) {
//   let ans = "";

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 1) {
//       ans += "수";
//     } else {
//       ans += "박";
//     }
//   }

//   return ans;
// }

// 방법 2
// Math.floor() 는 소수점 아래 버려주는.
function solution(n) {
  const str = "수박";
  return n % 2 === 1
    ? str.repeat(Math.floor(n / 2)) + "수"
    : str.repeat(Math.floor(n / 2));
}

console.log(solution(tc1));
console.log(solution(tc2));
