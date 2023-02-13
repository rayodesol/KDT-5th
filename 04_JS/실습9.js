function triangle(bottom, height) {
  let area = (bottom * height) / 2;
  return area;
}

function circle(radius) {
  let area = radius * radius * 3.14;
  return area;
}

function pythagoras(bottom, height) {
  let hypotenuse = Math.sqrt(bottom ** 2 + height ** 2);
  return hypotenuse;
}

let areaTriangle = triangle(3, 4);
console.log(`삼각형 넓이: ${areaTriangle}`);

console.log(`원 넒이: ${circle(5)}`);

console.log(`빗변 길이: ${pythagoras(3, 4)}`);

// 강사님 코드 ////////////////////////////////////////////////////////
// // 화살표 함수 호출 - 호이스팅 불가
console.log(triangleArea1(2, 5));
console.log(circleArea1());
console.log(pytha1(3, 4));

function triangleArea(num1, num2) {
  return (num1 * num2) / 2;
}
// // 화살표 함수로 선언
let triangleArea1 = (num1, num2) => {
  return (num1 * num2) / 2;
};

// 익명 함수로 선언, 매개변수 default 설정.
let circleArea = function (radius = 3) {
  return 3.14 * radius ** 2;
};
// // 화살표 함수로 선언
let circleArea1 = (radius = 3) => {
  return 3.14 * radius ** 2;
};

// 빗변 = root(밑변^2 + 높이^2)
function pytha(num1, num2) {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
}
// // 화살표 함수로 선언
let pytha1 = (num1, num2) => {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
};

console.log(triangleArea(2, 5));
console.log(circleArea());
console.log(pytha(3, 4));

// // 화살표 함수 호출
console.log(triangleArea1(2, 5));
console.log(circleArea1());
console.log(pytha1(3, 4));
