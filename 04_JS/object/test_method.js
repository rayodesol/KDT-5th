const pororo = {
  name: "뽀로로",
  age: 7,
};

// . 로 접근
pororo.isCute1 = function () {
  console.log("뽀로로는 귀엽습니다 - 함수 표현식");
}; // 함수 표현식

pororo.isCute2 = () => {
  console.log("뽀로로는 귀엽습니다 - 화살표 함수");
}; // 화살표 함수

// [] 로 접근
pororo["isFamous1"] = function () {
  console.log("뽀로로는 유명합니다 - 함수 표현식");
}; // 함수 표현식

pororo["isFamous2"] = () => {
  console.log("뽀로로는 유명합니다 - 화살표 함수");
}; // 화살표 함수

pororo.isCute1();
pororo.isCute2();
pororo.isFamous1();
pororo.isFamous2();
console.log(pororo);
