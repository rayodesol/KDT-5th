const num = []; // 배열은 비원시타입이어서 const 로 선언 가능
for (let i = 1; i <= 100; i++) {
  num.push(i);
}
console.log(num);

let sum = 0;

// // 내 코드
// num.map((item) => (sum += item));

// 강사님 코드
// const mapArr = num.map(function (item) {
//   // 처리한 결과를 배열에 넣으려면 꼭 return 을 적어야
//   return (sum += item);
// });

// 화살표 함수
const mapArr = num.map((item) => (sum += item));

// console.log(mapArr);
console.log(sum);
