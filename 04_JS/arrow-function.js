function sayHello1() {
  console.log("Hello - 함수 선언문");
}

let sayHello2 = function () {
  console.log("Hello - 함수 표현식");
};

let sayHello3 = () => {
  console.log("Hello - 화살표 함수");
};

sayHello1();
sayHello2();
sayHello3();

// 함수 선언문 방식
function sum1(num1, num2) {
  return num1 + num2;
}

// 함수 표현식 방식
let sum2 = function (num1, num2) {
  return num1 + num2;
};

// 화살표 함수
let sum3 = (num1, num2) => {
  return num1 + num2;
};
