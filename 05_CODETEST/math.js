// 수학 관련은 Math 로!

// 절댓값
const num1 = -999;
console.log(Math.abs(num1));

// 최대, 최솟값 구하기
// max(), min() 괄호 안에 모든 것들을 비교 후 최대, 최소 출력
console.log(Math.min(1, 2, 3, 4, -6, 10, -77, 1000));
console.log(Math.max(1, 2, 3, 4, -6, 10, -77, 1000));

const numArr = [1, 2, 3, 4, -6, 10, -77, 1000];
// console.log(Math.min(numArr)); // NaN이 출력됨

// ... ; 전개 연산자. 구조 해체 후 각각을 뿌려줌.
console.log(...numArr);
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));

// 소수점 관리
const num3 = 3.14;
console.log(Math.round(num3)); // 반올림
console.log(Math.floor(num3)); // 내림
console.log(Math.ceil(num3)); // 올림

// 랜덤
// 0~1 사이 수가 랜덤으로. 소수점 15번째 자리까지.
console.log(Math.random());
