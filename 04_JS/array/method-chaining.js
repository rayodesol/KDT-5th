let helloTest = "H-e-l-l-o";

// "-" 을 기준으로 잘라줌. 배열 형태로 리턴.
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

// 한글자씩 다 잘라줌.
let helloTestArr1 = helloTest.split("");
console.log(helloTestArr1);

// "l" 을 기준으로 잘라줌.
let helloTestArr2 = helloTest.split("l");
console.log(helloTestArr2);

// ""를 더해 요소들을 합쳐줌. 문자열로 리턴.
let helloStr = helloTestArr.join("");
console.log(helloStr);

// 배열 reverse
let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

// "Hello" 를 거꾸로 -> "olleH"
let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);

// 메소드 체이닝; 메소드마다 남을 것을 예측해 여러 메소드를 연결해 명령
// resultStr 과 같은 결과. resultStr 은 절차적으로 처리한 것.
let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

// 메소드 체이닝 다른 예시
const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.str?.reverse().join("");
console.log(testStr); // "cba" 출력됨
