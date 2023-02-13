const min = {
  name: "송민선",
  age: 29,
  height: 158,
  weight: 50,
  running: function () {
    console.log("송민선이 실습 중입니다.");
  },
};

// // 접근
// console.log(min.name);
// console.log(min["age"]);

// // 추가
// min.gender = "F";
// console.log(min);

// min["head"] = "small";
// console.log(min);

// // 삭제
// delete min.head;
// console.log(min);

// delete min["gender"];
// console.log(min);

// // 프로퍼티 존재 여부
// console.log("name" in min);
// console.log("height" in min);
// console.log(min.hairColor);

// // for ... in 반복문
// for (let key in min) {
//   console.log(key);
//   console.log("min.key 의 결과:", min.key);
//   console.log("min[key] 의 결과:", min[key]);
// }

// for (let key in min) {
//   console.log(`key는 ${key}, 값은 ${min[key]}`);
// }

min.running();
