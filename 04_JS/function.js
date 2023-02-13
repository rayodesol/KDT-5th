// void 함수(타입); 리턴값이 없는 함수
function helloFunc() {
  console.log("Hello");
}

// helloFunc();
// helloFunc();
// helloFunc();
// helloFunc();

// 리턴값이 있는 함수
function returnFunc() {
  console.log("Return");
  return "return";
}

let str = returnFunc();
console.log(str);

// 리턴값이 없는 함수를 변수에 저장해 출력하면, undefined 이 출력됨.
let strUndef = helloFunc();
console.log(strUndef);

///////////////////////////////////////////////////////////////////
// 위에 함수들은 기명(이름이 있는) 함수
// 익명(이름이 없는) 함수 - 함수 선언과 비슷
let noNameFunc = function () {
  console.log("No Name");
  return "no name";
};

let str2 = noNameFunc();
console.log(str2);

///////////////////////////////////////////////////////////////////
// 매개변수와 인자
function sayHello(name) {
  console.log(`Hello! ${name}`);
}

sayHello("Mike");
sayHello("Minseon");

// 매개변수가 있는 함수
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

// // 제곱 함수
function square(num) {
  return num ** 2;
}
console.log(square(37));

// default ------------------------------깃허브 확인 해보기!!!
function sayHelloDefault(name = "friend") {
  console.log(`Hello~ ${name}`);
}
sayHelloDefault("Minseon");
sayHelloDefault();
