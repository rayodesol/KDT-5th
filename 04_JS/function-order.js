sayHello();

// 함수 선언문 방식. 에러 나지 않음.
// function sayHello() {
//   console.log("Hello");
// }

// 함수 표현식 방식. 에러 발생.
let sayHello = function () {
  console.log("Hello");
};
