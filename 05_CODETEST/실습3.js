let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

const sameArr = fruits1.filter(function (item) {
  return fruits2.includes(item);
});
// 화살표 함수, return 생략
const sameArr1 = fruits1.filter((item) => fruits2.includes(item));

const diffArr = fruits1.filter(function (item) {
  return !fruits2.includes(item);
});
// 화살표 함수, return 생략
const diffArr1 = fruits1.filter((item) => !fruits2.includes(item));

console.log(sameArr);
console.log(diffArr);

// 시간복잡도 반으로 줄이기
const sameArr2 = [];
const diffArr2 = [];

fruits1.map((item) => {
  if (fruits2.includes(item)) {
    sameArr2.push(item);
  } else {
    diffArr2.push(item);
  }
});

console.log(sameArr2);
console.log(diffArr2);
