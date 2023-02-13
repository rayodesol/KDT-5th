// 나머지 연산자
let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num % 2);

// 거듭 제곱
console.log(2 ** 4);
console.log(Math.sqrt(4));

// 연산자 줄여 쓰기
let num2 = 5;
num2 = num2 * 5;

let num3 = 5;
num3 *= 5;

console.log(num2, num3);

// 증가 감소 연산자
let num4 = 10;

// ++가 뒤에 있어, 다음 줄에서 반영됨
console.log("증가 감소 연산자", num4++);
console.log(num4);

// ++가 앞에 있어, 해당 줄에서 반영됨
console.log("증가 감소 연산자", ++num4);
console.log(num4);

// 비교 연산자
let a = 10;
let b = 5;

// !== 도 자료형까지 비교
console.log("비교 연산자", a !== b);

let aa = 5;
let bb = "5";

console.log("비교 연산자", aa == bb);
console.log("일치 연산자", aa === bb);
