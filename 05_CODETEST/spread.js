const fruits = ["사과", "바나나", "딸기", "망고", "바나나"];

console.log(fruits);
console.log(...fruits); // 배열을 찢고 나와 하나씩 나옴

// ...c ; 나머지 연산자. 나머지를 한꺼번에 처리. 배열로 처리됨.
function conLog1(a, b, ...c) {
  console.log(a, b, c);
}

// 나머지 연산자 이렇게 쓰기도
function conLog2(...rest) {
  rest.map((item) => console.log(item));
}

conLog1(...fruits);
conLog2(...fruits);

const str = "apple";
// 문자열에 바로 map 함수 못 씀

// 배열 선언한 것처럼 쓸 수 있음.
const strToArr = [...str];
console.log(strToArr);

// 위와 같은 역할
const strToArr2 = str.split("");
console.log(strToArr2);
