let num = 1;
let str = "실습1";
let bool = true;
let nul = null;
let obj = {
  num: 123,
};

console.log(typeof num, "isn't", typeof str, "data type.");
console.log(
  `typeof를 ${typeof bool}이나 null에 사용하면, ${typeof obj} 결과를 얻을 수 있습니다.`
);

// 변수 선언 안하고 바로
console.log(`${typeof 100} isn't ${typeof "강사님 코드"} data type.`);
