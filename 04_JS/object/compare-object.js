const min = {
  name: "송민선",
  email: "cielo576@naver.com",
};

const 민 = {
  name: "송민선",
  email: "cielo576@naver.com",
};

// console.log(min === 민);

const minCopy = min;

// 객체의 주소값이 변경되는 것이 아니기 때문에 재정의 가능.
minCopy.name = "민선";
// 객체의 주소값을 변경하려 하면 const 이기에 에러 발생.
// minCopy = 민;

console.log(min);
console.log(minCopy);
console.log(min === minCopy);

// 객체의 내용을 비교하고 싶으면,
// JSON.stringify() 를 이용해, 객체를 json 파일로 만든 후, 문자열로 비교함
console.log(JSON.stringify(min) === JSON.stringify(minCopy));
