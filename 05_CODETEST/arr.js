const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

// fruits 의 원소들에 각각 익명함수 실행하겠다
// map 은 원본 배열에 영향을 미치지 않음. 배열로 리턴
const fruitsObjArr = fruits.map(function (item, index, orgin) {
  // console.log("item", item);
  // console.log("index", index);
  // console.log("orgin", orgin);

  return {
    id: index,
    name: item,
  };
}); // 객체 형태의 배열을 리턴

// 화살표 함수
// return 값이 객체이면 중괄호 생략 불가능
const fruitsObjArr2 = fruits.map((item, index, orgin) => {
  return {
    id: index,
    name: item,
  };
});

console.log(fruits);
console.log(fruitsObjArr);

// // 위의 map은 이 for문과 같은 역할
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
//   console.log(i);
//   console.log(fruits);
// }

const nums = [3, 6, 9, 12, 15, 18, 21];

// 익명함수 매개변수 순서가 중요
// 익명함수 매개변수에 안 쓰는 거 안 적어도 됨 - origin, index
const divideArr = nums.map(function (item, index) {
  return item / 3;
}); // 3으로 나눈 배열 리턴

// 화살표 함수, {} 생략
const divideArr2 = nums.map((item, index) => item / 3);

console.log(divideArr);

const nums2 = [1, 2, 3, 4, 5, 6];

const multipleArr = nums2.map(function (item, index, og) {
  return item * 4;
}); // 4를 곱한 배열 리턴

// 화살표 함수
const multipleArr2 = nums2.map((item, index, og) => {
  return item * 4;
});

// return 밖에 없을 땐 {}, return, ; 생략 가능
const multipleArr3 = nums2.map((item, index, og) => item * 4);

console.log(multipleArr);
console.log(multipleArr2);
console.log(multipleArr3);

// 배열 - of, in 사용
const str = "apple";

// of ; 원소 값 리턴
for (letter of str) {
  console.log(letter);
}

// in ; 키 값을 리턴 -> 객체에서 많이 사용
for (letter in str) {
  console.log(letter);
}

// 객체 - in 사용 / of 는 불가
const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "TMT",
};

for (let item in obj) {
  console.log(item);
}

// filter ; 배열에서 특정 조건인 애들만 남기기
const numbers2 = [1, 2, 3, 4, 5, 6];

// const filterArr = numbers2.filter(function (item, index, og) {
//   return item > 3;
// });

// 화살표 함수, {} 생략
const filterArr = numbers2.filter((item, index, og) => item > 3);

console.log(filterArr);

// filter -> 6글자 이상인 단어만 뽑기
const words = ["spray", "limit", "elite", "exuberant", "destruction"];
// const resultArr = words.filter(function (item) {
//   return item.length > 6;
// });
// 화살표 함수
const resultArr = words.filter((item) => item.length > 6);
console.log(resultArr);

// includes
const numbers4 = [1, 2, 3, 4, 5, 6];

console.log(numbers4.includes(3));
console.log(numbers4.includes(7));

// find
const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  // return item === "Apple";
  return /^A/.test(item); // 대문자 A로 시작하는지에 대한 정규식
});
console.log(findResult);

// findIndex
// const findIndexResult = fruits3.findIndex((item) => item === "Banana");
const findIndexResult = fruits3.findIndex((item) => /^B/.test(item)); // 대문자 B로 시작하는지에 대한 정규식
console.log(findIndexResult);

// reduce
const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, og) {
  return (acc += item);
}, 1000);
console.log(sumResult);

// redece 의 acc 리턴 값을 배열로도 가능
const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce(
  (acc, item) => {
    if (item < 0) {
      acc[0] += 1;
    } else {
      acc[1] += 1;
    }
    return acc;
  },
  [0, 0]
);

console.log(resultReduce);
